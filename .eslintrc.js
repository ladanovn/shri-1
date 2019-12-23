module.exports = {
    extends: "eslint:recommended",
    env: {
        es6: true,
        browser: true,
        node: true
    },
    parserOptions: {
        sourceType: "module"
    },
    rules: {
        quotes: ["error", "double"]
    }
}