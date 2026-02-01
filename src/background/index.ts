/**
 * X Algorithm Score - Background Service Worker
 *
 * Handles:
 * - Extension installation/update
 * - Storage management
 * - Analytics (optional)
 * - Cross-tab communication
 */

import { DEFAULT_SETTINGS } from '../types';

// Install/update handler
chrome.runtime.onInstalled.addListener(async (details) => {
  console.log('[X Algorithm Score] Extension installed/updated:', details.reason);

  if (details.reason === 'install') {
    // Set default settings on first install
    await chrome.storage.local.set({ settings: DEFAULT_SETTINGS });
    console.log('[X Algorithm Score] Default settings initialized');
  }

  if (details.reason === 'update') {
    // Handle migration if needed
    const { settings } = await chrome.storage.local.get('settings');
    if (!settings) {
      await chrome.storage.local.set({ settings: DEFAULT_SETTINGS });
    }
  }
});

// Message handler for communication between content script and popup
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  console.log('[X Algorithm Score] Message received:', message);

  switch (message.type) {
    case 'GET_SETTINGS':
      chrome.storage.local.get('settings').then(({ settings }) => {
        sendResponse(settings || DEFAULT_SETTINGS);
      });
      return true; // Keep channel open for async response

    case 'SAVE_SETTINGS':
      chrome.storage.local.set({ settings: message.payload }).then(() => {
        sendResponse({ success: true });
      });
      return true;

    case 'LOG_SCORE':
      // Optional: Store score history for analytics
      if (message.payload) {
        logScoreHistory(message.payload);
      }
      sendResponse({ success: true });
      return true;

    default:
      sendResponse({ error: 'Unknown message type' });
  }
});

// Store score history for tracking prediction accuracy
async function logScoreHistory(scoreData: {
  tweetId?: string;
  score: number;
  predictedReach: { low: number; median: number; high: number };
  timestamp: number;
}) {
  try {
    const { scoreHistory = [] } = await chrome.storage.local.get('scoreHistory');

    // Keep last 100 scores
    const updatedHistory = [...scoreHistory, scoreData].slice(-100);

    await chrome.storage.local.set({ scoreHistory: updatedHistory });
    console.log('[X Algorithm Score] Score logged to history');
  } catch (error) {
    console.error('[X Algorithm Score] Failed to log score:', error);
  }
}

// Badge update (show score on extension icon)
export async function updateBadge(score: number | null): Promise<void> {
  if (score === null) {
    await chrome.action.setBadgeText({ text: '' });
    return;
  }

  const text = score.toString();
  let color: string;

  if (score >= 80) color = '#22C55E';
  else if (score >= 60) color = '#EAB308';
  else if (score >= 40) color = '#F97316';
  else color = '#EF4444';

  await chrome.action.setBadgeText({ text });
  await chrome.action.setBadgeBackgroundColor({ color });
}

console.log('[X Algorithm Score] Background service worker started');
