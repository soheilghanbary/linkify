import localFont from "next/font/local"

export const font = localFont({
  src: [
    {
      path: "./inter/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./inter/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./inter/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./inter/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./inter/Inter-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./inter/Inter-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
})
