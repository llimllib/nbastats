import esbuild from 'esbuild';

// this is a customized version of esbuild-plugin-resolve due to
// https://github.com/markwylde/esbuild-plugin-resolve/issues/2
function intercept(build, moduleName, moduleTarget) {
  const filter = new RegExp('^' + moduleName + '(?:\\/.*)?$');

  build.onResolve({ filter }, async (args) => {
    if (args.resolveDir === '') {
      return;
    }

    return {
      path: args.path,
      namespace: 'esbuild-resolve',
      pluginData: {
        resolveDir: args.resolveDir,
        moduleName
      }
    };
  });

  build.onLoad({ filter, namespace: 'esbuild-resolve' }, async (args) => {
    const importerCode = `
      export * from '${args.path.replace(args.pluginData.moduleName, moduleTarget)}';
    `;
    return { contents: importerCode, resolveDir: args.pluginData.resolveDir };
  });
}

const resolve = (options) => ({
  name: 'esbuild-resolve',
  setup: (build) => {
    for (const moduleName of Object.keys(options)) {
      intercept(build, moduleName, options[moduleName]);
    }
  }
});

esbuild.build({
  entryPoints: ['viewer.js'],
  bundle: true,
  outfile: 'dist/viewer_duckdb.js',
  sourcemap: true,
  platform: 'browser',
  format: 'esm',
  resolveExtensions: ['.ts', '.tsx', '.js', '.mjs', '.jsx', '.css', '.wasm'],
  plugins: [
    resolve({
      'apache-arrow': '@apache-arrow/esnext-esm',
    }),
  ],
}).catch(() => process.exit(1))
