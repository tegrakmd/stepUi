import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      // "https://raw.githubusercontent.com/lucasromerodb/liquid-glass-effect-macos/refs/heads/main/assets/finder.png" is missing required "width" property.
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      // Autorisation explicite du domaine lummi.co pour permettre l'affichage des images depuis Lolo32.tsx (lignes 4-11)
      {
        protocol: "https",
        hostname: "lummi.co",
      },
      // Correction : pensez à vérifier que vous utilisez <img> ou next/image correctement, et que les valeurs de src correspondent bien aux patterns autorisés. Si le problème persiste, vérifiez les logs pour d'autres erreurs de configuration.
      // src: "/images/x.com/19.jpeg",
      {
        protocol: "https",
        hostname: "x.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
