module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:vue/base',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-recommended',
		'plugin:vue/vue3-strongly-recommended',
	],
	"env" : {
		"es2021" : true
	},
	"rules" : {
		"semi": ["error", "never"],
		"no-unused-vars" : 2,
		"no-undef" : 2,
		"vue/max-attributes-per-line" : 0
	},
	"parserOptions": {
		"sourceType": "module"
	}
}
