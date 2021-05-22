const path = require("path");

module.exports = function override(config, env) {
  config["resolve"] = {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      pages: path.resolve(__dirname, "src/pages/"),
      services: path.resolve(__dirname, "src/services/"),
      redux: path.resolve(__dirname, "src/services/redux/"),
      navigation: path.resolve(__dirname, "src/navigation/"),
      assets: path.resolve(__dirname, "src/assets/"),
    },
    extensions: [".js"],
  };

  return config;
};
