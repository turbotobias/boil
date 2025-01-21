// (ai) Tests for generate-ai-rules script
import { test,expect,beforeEach,afterEach } from "bun:test";

const rootDir = `${import.meta.dir}/..`;

test("generate-ai-rules copies content to all target files",async () => {
    // (ai) Run the script
    await import("./generate-ai-rules");

    // (ai) Get source content
    const sourceContent = await Bun.file(`${rootDir}/.list-rules-ai`).text();

    // (ai) Verify each target file matches source exactly
    const targetFiles = [".cursorrules",".windsurfrules","readme.md"];
    for (const fileName of targetFiles) {
        const filePath = `${rootDir}/${fileName}`;
        const fileContent = await Bun.file(filePath).text();
        expect(fileContent).toBe(sourceContent);
    }
});
