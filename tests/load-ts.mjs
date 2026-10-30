// Loads a dependency-free TypeScript module in plain Node (CI runs Node 20, no type stripping)
// by transpiling it with the project's own `typescript` devDependency.
import { readFileSync } from 'node:fs';
import ts from 'typescript';

export async function loadTs(path) {
  const src = readFileSync(new URL(path, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}
