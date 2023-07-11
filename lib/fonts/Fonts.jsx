import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    {
      path: "./Montserrat/Montserrat-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./Montserrat/Montserrat-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./Montserrat/Montserrat-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Montserrat/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Montserrat/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./Montserrat/Montserrat-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./Montserrat/Montserrat-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--montserrat",
});

export const kaushanScript = localFont({
  src: "./KaushanScript/KaushanScript-Regular.ttf",
  display: "swap",
  variable: "--kaushan-script",
});
