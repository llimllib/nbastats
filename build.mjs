import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/viewer.js"],
    bundle: true,
    outfile: "dist/viewer_duckdb.js",
    sourcemap: true,
    platform: "browser",
    format: "esm",
    resolveExtensions: [".ts", ".tsx", ".js", ".mjs", ".jsx", ".css", ".wasm"],
    plugins: [],
    define: {
      "process.env.DATA_URL":
        JSON.stringify(process.env.DATA_URL) ||
        '"https://cdn.billmill.org/nbastats"',
    },
  })
  .catch(() => process.exit(1));
