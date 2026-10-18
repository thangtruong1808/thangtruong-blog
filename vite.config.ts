import { existsSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // The "Download CV" button only renders once the PDF has been added to public/cv/.
    __HAS_CV__: JSON.stringify(existsSync("public/cv/Thang-Truong-CV.pdf")),
  },
});
