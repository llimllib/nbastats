import * as duckdb from "@duckdb/duckdb-wasm";

declare global {
  interface Window {
    conn: duckdb.AsyncDuckDBConnection;
  }
}

export {};
