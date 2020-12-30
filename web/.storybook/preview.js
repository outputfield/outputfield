import "../styles/styles.global.scss";
const customViewports = {
  Desktop: {
    name: "Desktop",
    styles: {
      width: "1440px",
      height: "1024px",
    },
  },
  Tablet: {
    name: "Tablet",
    styles: {
      width: "1153",
      height: "700px",
    },
  },
  iPhoneX: {
    name: "iPhone X",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports },
};
