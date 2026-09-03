import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "cv-attachment-header",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (
            req.url &&
            (req.url.includes("Mahmoud_Doma_CV.pdf") ||
              req.url.includes("download=true"))
          ) {
            res.setHeader(
              "Content-Disposition",
              'attachment; filename="Mahmoud_Doma_FrontEnd_CV.pdf"',
            );
          }
          next();
        });
      },
    },
  ],
  base: "/md-portfolioo/",
});
