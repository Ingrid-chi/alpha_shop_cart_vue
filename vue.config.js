module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_reset.scss";
          @import "@/styles/_variables.scss";
          @import "@/styles/_font.scss";
          @import "@/styles/_style.scss";
        `,
      },
    },
  },
};
