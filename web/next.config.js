module.exports = {
  env: {
    SANITY_TOKEN: "secret",
    MAILCHIMP_API_KEY: "secret",
    MAILCHIMP_LIST_ID: "secret",
    MAILCHIMP_DATACENTER_KEY: "secret",
  },
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
        destination: "/skingarden",
        permanent: false,
      },
      {
        source: "/rsvp",
        destination: "/skingarden",
        permanent: false,
      },
    ];
  },
};
