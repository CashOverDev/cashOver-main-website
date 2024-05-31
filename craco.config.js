const CracoEnvPlugin = require("craco-plugin-env");

module.exports = {
  reactScriptsVersion: "react-scripts",
  plugins: [
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {},
      },
    },
  ],
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
};
