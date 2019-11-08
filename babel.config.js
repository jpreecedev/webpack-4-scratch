const config = api => {
  api.cache(() => process.env.NODE_ENV !== "production")
  return {
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    plugins: [
      [
        "@babel/plugin-proposal-class-properties",
        {
          loose: true
        }
      ],
      [
        "@babel/plugin-transform-runtime",
        {
          regenerator: true
        }
      ],
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-transform-async-to-generator",
      "@babel/plugin-syntax-class-properties",
      "@babel/plugin-syntax-object-rest-spread",
      "@babel/plugin-transform-react-inline-elements",
      "@babel/plugin-transform-react-constant-elements",
      "@babel/plugin-transform-modules-commonjs",
      "@babel/plugin-syntax-dynamic-import"
    ]
  }
}

module.exports = config
