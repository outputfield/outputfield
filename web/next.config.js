module.exports = {
  env: {},
  async redirects() {
    return [
      {
        source: '/leymusoom',
        destination: 'https://newart.city/show/leymusoom-digital-shrine',
        permanent: false,
      },
      {
        source: "/pressrelease",
        destination:
          "https://www.notion.so/Output-Field-presents-Skin-Garden-A-virtual-exhibition-about-bodies-3b0423fcb4034d6399b1baa907ebce4f",
        permanent: false,
      },
      {
        source: "/sgarchive",
        destination:
          "https://youtube.com/playlist?list=PLKQkL1w2Lx2uPjLpn_t5no-fxDaL48u20",
        permanent: false,
      },
      {
        source: "/live",
        destination:"/powersofcringe",
        permanent: false,
      },
      {
        source: "/pofc-transcript",
        destination:
          "https://outputfield.notion.site/Full-Transcript-976a9230657d422aad5c687fa3d0e062",
        permanent: false,
      },
      {
        source: "/pofc-citations",
        destination:
          "https://outputfield.notion.site/Citations-time-stamped-d4c642ead1e44e6694a9bf276e974195",
        permanent: false,
      },
    ];
  },
};
