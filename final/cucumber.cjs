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
      ? [
          "src/ui/step-definitions/**/*.ts", 
          "src/support/worlds/world.ts",
          "src/support/hooks/ui.hooks.ts"
        ] 
      : ["src/**/*.ts"],
    loader: ["ts-node/esm"]
  }
};