module.exports = {
    "env": {
        "es6": true,
        "mocha": true
    },
    "extends": "google",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "mocha"
    ],
    "rules": {
        "arrow-parents": [0, "as-needed"],
        "require-jsdoc": "off",
        "brace-style": [0, "allman", { "allowSingleLine": true }],
        "max-len": ["error", { "code": 100 }],
        "object-curly-spacing": ["error", "always"],
    },
    "globals": {
        $: false,
        $$: false,
        browser: false,
        expect: false
    }
};