const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require("customize-cra");
const { resolve } = require("path");

function resolvePath(path) {
  return resolve(__dirname, "src", path);
}
const rewirePostcss = require("react-app-rewire-postcss");
const px2rem = require("postcss-px2rem");

module.exports = override(
  (config, env) => {
    // 重写postcss
    rewirePostcss(config, {
      plugins: () => [
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
          autoprefixer: {
            flexbox: "no-2009",
          },
          stage: 3,
        }),
        //关键:设置px2rem
        px2rem({
          remUnit: 75,
          exclude: /node-modules/,
        }),
      ],
    });
    return config;
  },
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  // 添加装饰器语法
  // yarn add @babel/plugin-proposal-decorators --dev
  addDecoratorsLegacy(),
  // 路径简写 / 路径别名
  addWebpackAlias({
    "@": resolvePath("src"),
    "@utils": resolvePath("utils"),
    "@api": resolvePath("api"),
    "@comps": resolvePath("components"),
    "@assets": resolvePath("assets"),
    "@pages": resolvePath("pages"),
    "@redux": resolvePath("redux"),
    "@conf": resolvePath("config"),
  })
);
