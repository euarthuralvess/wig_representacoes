import { StickerIcon } from "lucide-react";
import React from "react";

const brands = [
  {
    name: "OU",
    logo: "/empresas/ou.jpg",
    site: "https://www.ou.com.br/",
  },
  
  {
    name: "Panelux",
    logo: "/empresas/panelux.jpg",
    site: "https://panelux.com.br/",
  },

  {
    name: "Passerini",
    logo: "/empresas/passerini.jpg",
    site: "https://mmpasserini.com.br/",
  },
  {
    name: "Plastleo",
    logo: "/empresas/plastleo.jpg",
    site: "https://www.plast-leo.com.br/",
  },
  {
    name: "Plasvale",
    logo: "/empresas/plasvale.jpg",
    site: "https://www.plasvale.com.br/",
  },

  {
    name: "Aeroflex",
    logo: "/empresas/aeroflex.png",
    site: "https://www.aeroflex.ind.br/",
  },

  {
    name: "Invicta",
    logo: "/empresas/invicta.svg",
    site: "https://www.invictaonline.com.br/",
  },

  {
    name: "Oxford",
    logo: "/empresas/oxford.png",
    site: "https://www.oxfordporcelanas.com.br/",
  },
  
  {
    name: "Tropical Aromas",
    logo: "/empresas/tropical_aromas.jpg",
    site: "https://tropicalaromas.com.br/",
  },
];

export const RepresentedBrands = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-brand-green mb-8">
        Empresas que Representamos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
        {brands.map((brand) => (
          <a
            key={brand.name}
            href={brand.site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-20 w-auto mb-2 grayscale group-hover:grayscale-0 transition duration-300"
              loading="lazy"
            />
            <span className="text-sm text-gray-700">{brand.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
