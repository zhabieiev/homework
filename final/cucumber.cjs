module.exports = {
  default: {
    formatOptions: {
      resultsDir: "allure-results"
    },
    format: [
      "summary",
      "progress-bar",
      "allure-cucumberjs/reporter"
    ],
    paths: ["features/**/*.feature"],
    import: ["src/**/*.ts"],
    loader: ["ts-node/esm"]
  }
};