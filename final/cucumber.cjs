const isCI = process.env.TS_NODE_PROJECT === 'tsconfig.ui.json';

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
    import: isCI 
      ? ["src/ui/**/*.ts", "src/support/**/*.ts"] 
      : ["src/**/*.ts"],
    loader: ["ts-node/esm"]
  }
};