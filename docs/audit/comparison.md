# Lighthouse: before vs after

- **Before:** live site `https://thang-truong.blog`, run before the upgrade (`docs/audit/before/`).
- **After:** production build served by `vite preview` (`docs/audit/after/`).

Rerun with `npm run audit:lighthouse -- <baseUrl> <outDir>`.

Scores are Performance / Accessibility / Best Practices / SEO.

| Page | Before (mobile) | After (mobile) | Before (desktop) | After (desktop) |
|---|---|---|---|---|
| Home | 59 / 93 / 96 / 83 | 98 / 100 / 100 / 100 | 93 / 100 / 96 / 83 | 100 / 100 / 100 / 100 |
| About | 86 / 93 / 100 / 83 | 98 / 100 / 100 / 100 | 94 / 100 / 100 / 83 | 100 / 100 / 100 / 100 |
| Projects | 81 / 91 / 100 / 83 | 98 / 100 / 100 / 100 | 79 / 98 / 100 / 83 | 100 / 100 / 100 / 100 |
| Skills | 80 / 90 / 100 / 82 | 98 / 100 / 100 / 100 | 91 / 98 / 100 / 82 | 100 / 100 / 100 / 100 |
| Experience | 85 / 90 / 100 / 82 | 98 / 100 / 100 / 100 | 99 / 98 / 100 / 82 | 100 / 100 / 100 / 100 |
| Contact | 89 / 92 / 100 / 82 | 98 / 100 / 100 / 100 | 100 / 100 / 100 / 82 | 100 / 100 / 100 / 100 |

Notable changes:

- **Home, mobile:** LCP dropped from 10.3 s to 2.3 s, and page weight from about 1,224 KiB to 200 KiB, because the YouTube embed now loads only after a click.
- **Projects, desktop:** CLS dropped from 0.465 to 0. Images now have fixed aspect ratios and the route skeleton is a full screen tall.
- **Caveat:** the "after" numbers come from localhost, so they miss Vercel's network latency. Rerun against the live URL after deploying to compare like for like.
