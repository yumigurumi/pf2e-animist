import esbuild from "esbuild";

esbuild.build({
    entryPoints: ["scripts/main.js"],
    outfile: "dist/main.mjs",
    bundle: true,
    format: "esm", // Output as ES module
    platform: "node",
    target: "es2022",
    sourcemap: false,
    minify: true
}).catch(() => process.exit(1));