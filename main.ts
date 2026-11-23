import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart speaker says 'I didn't quite get that' like someone who understood every word.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
