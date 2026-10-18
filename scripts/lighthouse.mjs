// Purpose: Run Lighthouse on every route (mobile + desktop) and write a score summary.
// Usage: node scripts/lighthouse.mjs <baseUrl> <outDir>
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [baseUrl = "https://thang-truong.blog", outDir = "docs/audit/before"] = process.argv.slice(2);
const routes = ["/", "/about", "/projects", "/skills", "/experience", "/contact"];
const modes = ["mobile", "desktop"];
const categories = ["performance", "accessibility", "best-practices", "seo"];

mkdirSync(outDir, { recursive: true });
const rows = [];

for (const route of routes) {
  for (const mode of modes) {
    const name = `${route === "/" ? "home" : route.slice(1)}-${mode}`;
    const outPath = join(outDir, `${name}.json`);
    const args = [
      "-y",
      "lighthouse@12",
      `${baseUrl}${route}`,
      "--quiet",
      "--chrome-flags=--headless=new",
      "--output=json",
      `--output-path=${outPath}`,
    ];
    if (mode === "desktop") args.push("--preset=desktop");
    execFileSync("npx", args, { stdio: "inherit", shell: true });

    const report = JSON.parse(readFileSync(outPath, "utf8"));
    const scores = Object.fromEntries(
      categories.map((c) => [c, Math.round((report.categories[c]?.score ?? 0) * 100)])
    );
    const audits = report.audits;
    rows.push({
      name,
      ...scores,
      lcp: audits["largest-contentful-paint"]?.displayValue ?? "",
      cls: audits["cumulative-layout-shift"]?.displayValue ?? "",
      tbt: audits["total-blocking-time"]?.displayValue ?? "",
      weight: audits["total-byte-weight"]?.displayValue ?? "",
    });
    console.log(name, scores);
  }
}

const header = "| Page | Perf | A11y | Best Practices | SEO | LCP | CLS | TBT | Weight |\n|---|---|---|---|---|---|---|---|---|\n";
const body = rows
  .map(
    (r) =>
      `| ${r.name} | ${r.performance} | ${r.accessibility} | ${r["best-practices"]} | ${r.seo} | ${r.lcp} | ${r.cls} | ${r.tbt} | ${r.weight} |`
  )
  .join("\n");
writeFileSync(join(outDir, "summary.md"), `# Lighthouse: ${baseUrl}\n\n${header}${body}\n`);
writeFileSync(join(outDir, "summary.json"), JSON.stringify(rows, null, 2));
