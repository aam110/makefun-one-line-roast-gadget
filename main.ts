import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My microwave beeps five times when it's done, like it's filing a formal complaint for eating too slowly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
