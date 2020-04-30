module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: { node: "current" },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
  ],
  env: {
    production: {
      plugins: ["emotion"],
    },
    development: {
      plugins: [["emotion", { sourceMap: true }]],
    },
  },
};
