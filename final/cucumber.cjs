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
    publishQuiet: true, 
    paths: ["features/**/*.feature"],
    import: [
      "src/ui/steps/**/*.ts",
      "src/api/steps/**/*.ts",
      "src/support/worlds/world.ts",
      "src/support/hooks/ui.hooks.ts"
    ],
    loader: ["ts-node/esm"]
  }
};