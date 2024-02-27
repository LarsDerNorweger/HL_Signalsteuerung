export default {
	input: 'src/main.js',
	output: {
		file: 'build/bundle.js',
		format: 'cjs',
		compact:true,
	},
	treeshake:{
		preset:"smallest"
	},

}