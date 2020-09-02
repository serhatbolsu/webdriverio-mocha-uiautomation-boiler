module.exports = {
    "env": {
        "es6": true,
        "mocha": true
    },
    "extends": "google",
    "globals": {
        "$": true,
        "$$": true,
        "browser": true,
        "expect": true,
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "mocha",
        "@babel"
    ],
    "rules": {
        "quotes": "off",
        "arrow-parents": [0, "as-needed"],
        "require-jsdoc": "off",
        "brace-style": [0, "allman", { "allowSingleLine": true }],
        "max-len": ["error", { "code": 120 }],
        "object-curly-spacing": ["error", "always"],
        "linebreak-style": ["error", "unix"],
        "semi": ["error", "always", { "omitLastInOneLineBlock": true}],
        "block-spacing": ["warn", "always"],
    },
};
