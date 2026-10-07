import { defineConfig } from "astro/config";

const onVercel = !!process.env.VERCEL; // Vercel sets this during its builds

export default defineConfig({
  site: onVercel ? "https://genecinto.vercel.app" : "https://jinniharold.github.io",
  base: onVercel ? "/" : "/GenePortfolio/",
  trailingSlash: "always",
});