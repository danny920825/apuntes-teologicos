// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Apuntes Teológicos",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: " https://github.com/danny920825/apuntes-teologicos",
        },
      ],
      sidebar: [
        {
          label: "Catolicismo y Sus Herejías",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Cronología de la Iglesia",
              slug: "guides/catolicismo/cronologia",
            },
            {
              label: "Marianismo (Idolatría a María)",
              slug: "guides/catolicismo/marianismo",
            },
          ],
        },
        {
          label: "Doctrinas Básicas del Cristianismo",
          items: [
            {
              label: "La Trinidad",
              slug: "guides/doctrinas/trinidad",
            },
            {
              label: "Las 5 Solas de la Reforma",
              slug: "guides/doctrinas/solas",
            },
            {
              label: "Sola Scriptura",
              slug: "guides/doctrinas/sola-scriptura",
            },
            {
              label: "Sola Fide",
              slug: "guides/doctrinas/sola-fide",
            },
            {
              label: "Sola Gratia",
              slug: "guides/doctrinas/sola-gratia",
            },
            {
              label: "Solus Christus",
              slug: "guides/doctrinas/solus-christus",
            },
            {
              label: "Soli Deo Gloria",
              slug: "guides/doctrinas/soli-deo-gloria",
            },
          ],
        },
        {
          label: "Refutaciones Generales",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label:
                "Supuestas restricciones que atentan contra el adelanto humano",
              slug: "guides/refutaciones/supuestas-restricciones",
            },
          ],
        },
      ],
    }),
  ],
});
