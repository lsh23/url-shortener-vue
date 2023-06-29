const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: false, // 화면에 ESLint error message 출력 끄기
    },
  },
});
