# X Algorithm Score - Chrome Extension

A Chrome extension that scores your tweets before and after publishing based on X's (Twitter's) recommendation algorithm. Get real-time feedback to optimize your content for maximum reach.

## Features

- **Real-time Scoring**: See your tweet's algorithm score as you type
- **Score Breakdown**: Understand how different factors affect your reach
- **Actionable Suggestions**: Get specific tips to improve your tweet
- **Predicted Reach**: Estimate how many impressions your tweet will get
- **Algorithm Insights**: Learn what X's algorithm actually values

## How It Works

This extension is based on analysis of [Twitter's open-sourced recommendation algorithm](https://github.com/twitter/the-algorithm), including:

- **Home Mixer**: The main service that constructs your For You timeline
- **Heavy Ranker**: The neural network that scores candidate tweets
- **SimClusters**: Community detection for interest matching
- **Retrieval Signals**: User engagement signals used for ML training

### Key Algorithm Insights

| Signal | Weight | Description |
|--------|--------|-------------|
| Replies | Highest | Conversation signals are valued most |
| Retweets | High | Amplification shows quality |
| Likes | Medium | Base engagement metric |
| Bookmarks | High | Shows high-intent interest |
| External Links | Negative | X wants users on platform |
| Video Watch | High | 50%+ completion is key |

## Installation

### From Source (Development)

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run build
   ```
4. Load in Chrome:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` folder

### From Chrome Web Store

Coming soon!

## Usage

1. Navigate to [x.com](https://x.com) or [twitter.com](https://twitter.com)
2. Start composing a tweet
3. The score overlay appears in the bottom-right corner
4. Click the score badge to expand and see detailed breakdown
5. Follow suggestions to improve your score

## Score Grades

| Grade | Score | Description |
|-------|-------|-------------|
| S | 90-100 | Excellent - optimized for maximum reach |
| A | 80-89 | Great - strong algorithm signals |
| B | 65-79 | Good - room for improvement |
| C | 50-64 | Fair - missing key optimizations |
| D | 35-49 | Poor - significant issues |
| F | 0-34 | Needs work - major problems detected |

## Scoring Factors

### Positive Factors
- **Media** (+15-20): Images, videos, polls significantly boost reach
- **Questions** (+8): Encourage replies, the highest-weighted signal
- **Thread Format** (+10): Increases dwell time
- **Optimal Length** (+8): 120-240 characters is the sweet spot
- **Call-to-Action** (+4): Encourages engagement

### Negative Factors
- **External Links** (-20): X penalizes off-platform links
- **Excessive Hashtags** (-3 per): More than 2 triggers spam detection
- **Excessive Mentions** (-3 per): More than 3 looks spammy
- **Too Short** (-3): Under 71 characters loses impact

## Privacy

- **No data collection**: Tweet content is analyzed locally
- **No external servers**: All scoring happens in your browser
- **No authentication required**: Works without X API access
- **Open source**: Audit the code yourself

## Development

```bash
# Install dependencies
npm install

# Development mode (hot reload)
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## Tech Stack

- TypeScript
- React 18
- Vite with CRXJS
- Tailwind CSS
- Manifest V3

## Contributing

Contributions are welcome! Please read the algorithm analysis in the source code comments to understand the scoring logic.

## Disclaimer

This extension is based on publicly available information from Twitter's open-source algorithm release. Scoring predictions are estimates and actual tweet performance depends on many factors including your audience, timing, and content quality.

## License

MIT License - see LICENSE file for details.

---

Built with insights from [twitter/the-algorithm](https://github.com/twitter/the-algorithm) and community research.
