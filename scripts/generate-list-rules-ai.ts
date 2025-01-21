// (ai) Get the root directory (one level up from scripts)
const rootDir = `${import.meta.dir}/..`;

// (ai) Read the source file
const rulesFile = Bun.file(`${rootDir}/.list-rules-ai`);
const rulesContent = await rulesFile.text();

// (ai) Write to target files
const targetFiles = [".cursorrules",".windsurfrules","readme.md"];

for (const fileName of targetFiles) {
    const filePath = `${rootDir}/${fileName}`;
    await Bun.write(filePath,rulesContent);
    console.log(`(ai) Copied rules to ${fileName} - rules: ${rulesContent}`);
}

console.log("(ai) Rules copying completed successfully");
