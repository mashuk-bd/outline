import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
        assetFileNames: "assets/[name][extname]",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
        assetFileNames: "assets/[name][extname]",
      },
      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "outline", // Change this to your library's global variable name
        sourcemap: true,
        assetFileNames: "assets/[name][extname]",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime", // Add this line
        },
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      vanillaExtractPlugin({
        identifiers: ({ hash, filePath }) => {
          const fileName = filePath
            .split("/")
            .pop()
            ?.replace(/\..*$/, "")
            .toLowerCase();
          return `outline-${fileName}-${hash}`;
        }, // Use your desired prefix
        extract: {
          name: "outline.min.css",
          sourcemap: true,
        },
      }),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
