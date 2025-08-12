import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "TokenizerJS", // available as window.TokenizerJS
      sourcemap: true
    }
  ],
  plugins: [typescript({ tsconfig: "./tsconfig.json" })]
};
