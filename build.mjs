import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['viewer.js'],
  bundle: true,
  outfile: 'dist/viewer_duckdb.js',
  sourcemap: true,
  platform: 'browser',
  format: 'esm',
  resolveExtensions: ['.ts', '.tsx', '.js', '.mjs', '.jsx', '.css', '.wasm'],
  plugins: [ ],
}).catch(() => process.exit(1))
