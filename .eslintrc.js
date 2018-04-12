module.exports = {
  "root": true,
  "env": {
    "jest": true,
    "node": true
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier"
  ],
  "rules": {
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      }
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    // "vue/html-content-newline": ["error", {
    //   "singleline": "always",
    //   "multiline": "always"
    // }],
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "bracketSpacing": false,
        "trailingComma": "es5"
      }
    ]
  }
}
