// Loads a dependency-free TypeScript module in plain Node (CI runs Node 20, no type stripping)
// by transpiling it with the project's own `typescript` devDependency.
import { readFileSync } from 'node:fs';
import ts from 'typescript';

// `deps` maps a relative import specifier used inside the module (e.g. './bokun') to its .ts path
// relative to this file; data: URL modules cannot resolve relative imports on their own.
export async function loadTs(path, deps = {}) {
  let src = readFileSync(new URL(path, import.meta.url), 'utf8');
  for (const [spec, depPath] of Object.entries(deps)) {
    src = src.replaceAll(`from '${spec}'`, `from '${toDataUrl(readFileSync(new URL(depPath, import.meta.url), 'utf8'))}'`);
  }
  return import(toDataUrl(src));
}

function toDataUrl(src) {
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  });
  return `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`;
}
