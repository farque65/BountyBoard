const withTM = require("next-transpile-modules")(["eth-hooks", "next-optimized-images"]); // pass the modules you would like to see transpiled

module.exports = withTM({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/issues": { page: "/issues" },
    };
  },
});
