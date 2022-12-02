const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@config": "src/config",
    "@hooks": "src/hooks",
    "@layouts": "src/layouts",
    "@pages": "src/pages",
    "@context": "src/context",
  })(config);

  return config;
};
