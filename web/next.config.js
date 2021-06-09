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
        source: "/RSVP",
        destination: "/rsvp",
        permanent: false,
      },
    ];
  },
};
