<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your Hexo blog with PostHog analytics. A new script was added to the
Cactus theme (`themes/cactus/scripts/posthog-tracking.js`) that hooks into three Hexo lifecycle events to capture build
and publish activity. The PostHog Node.js SDK (`posthog-node`) and `dotenv` were installed as dependencies, and
environment variables (`POSTHOG_API_KEY`, `POSTHOG_HOST`) were written to `.env` and covered by `.gitignore`.

| Event            | Description                                                                                             | File                                        |
|------------------|---------------------------------------------------------------------------------------------------------|---------------------------------------------|
| `post published` | Fired for each blog post during `hexo generate`; captures title, slug, date, tags, categories, and path | `themes/cactus/scripts/posthog-tracking.js` |
| `site generated` | Fired once after `hexo generate` completes; captures total post count, page count, site title, and URL  | `themes/cactus/scripts/posthog-tracking.js` |
| `site deployed`  | Fired after `hexo deploy` completes; captures site title, URL, and deploy timestamp                     | `themes/cactus/scripts/posthog-tracking.js` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on publishing activity:

- [Analytics basics dashboard](/dashboard/1616620)
- [Posts Published Over Time](/insights/Al6AANOz)
- [Site Builds Over Time](/insights/sc9SdGNd)
- [Deployments Over Time](/insights/TYX8PVi2)
- [Average Posts per Build](/insights/xa66W28e)
- [Build & Deploy Activity](/insights/5WBgCcFM)

Events will start appearing after your next `hexo generate` or `hexo deploy` run.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using
Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
