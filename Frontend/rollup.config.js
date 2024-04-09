
import typescript from '@rollup/plugin-typescript';
import { minify } from 'rollup-plugin-esbuild-minify';
import sass from 'rollup-plugin-sass';
/**
 * @type {import('rollup').RollupOptions[]}
 */
export default [
	{
		input: 'src/main.ts',
		output: {
			file: 'build/bundle.js',
			format: 'cjs',
			compact: true,
		},
		plugins: [
			sass({ output: 'build/bundle.css', options: { outputStyle: "compressed" } }),
			typescript(),
			minify(),
		],
	}
]