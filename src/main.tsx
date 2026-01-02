import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Styles
import "./index.css";
import "./styles/mainNavbar.css";
import "./styles/gallerySection.css";
import "./styles/locationSection.css";
import "./styles/contactSection.css";
import "./styles/servicesSection.css";
import "./styles/FAQSection.css";
import "./styles/footer.css";

//Packages styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "flag-icons/css/flag-icons.min.css";

//Components
import App from "./components/App.tsx";

//Contexts
import { LanguageProvider } from "./contexts/LanguageContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
