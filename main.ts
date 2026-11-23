// Writes the one-line pitch to /output/entry.txt so the grader can read it.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "Don't learn to code first — just tell an AI agent your app idea on make.fun and let it build the first version while you watch, no risk and nothing to install.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
