import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mint Detail — Mobile Car Detailing North Essex",
    short_name: "Mint Detail",
    description:
      "Fully insured mobile car detailing and ceramic coating in Earls Colne, North Essex.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#38d9a9",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
