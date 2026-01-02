import "../styles/App.css";
import { Galeria } from "./sections/Galeria";
import Inicio from "./sections/Inicio";
import Contacto from "./sections/contacto";
import Ubicacion from "./sections/ubicacion";
import Servicios from "./sections/Servicios";
import { Faq } from "./sections/faq";
import MainNavBar from "./mainNavBar";
import { ApartmentGallery } from "./sections/apartment";
import { Footer } from "./sections/footer";

function App() {
  return (
    <>
      <MainNavBar />

      <main className="main-content">
        <Inicio />
        <Galeria />
        <Servicios />
        <ApartmentGallery />
        <Contacto />
        <Ubicacion />
        <Faq />
      </main>

      <Footer/>
    </>
  );
}

export default App;
