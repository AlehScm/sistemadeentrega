import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Indicador de rota em dev — canto inferior direito evita sobrepor header/conteúdo no topo. */
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
