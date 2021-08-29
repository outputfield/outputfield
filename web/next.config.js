module.exports = {
  env: {},
  async redirects() {
    return [
      {
        source: "/pressrelease",
        destination:
          "https://www.notion.so/Output-Field-presents-Skin-Garden-A-virtual-exhibition-about-bodies-3b0423fcb4034d6399b1baa907ebce4f",
        permanent: false,
      },
      {
        source: "/sgarchive",
        destination:
          "https://www.youtube.com/playlist?list=PLKQkL1w2Lx2uPjLpn_t5no-fxDaL48u20",
        permanent: false,
      },
    ];
  },
};
