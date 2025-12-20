import "../styles/App.css";
import { Galeria } from "./sections/Galeria";
import Inicio from "./sections/Inicio";
import SobreNosotros from "./sections/sobreNosotros";
import Contacto from "./sections/contacto";
import Ubicacion from "./sections/ubicacion";
import Servicios from "./sections/Servicios";
import { Faq } from "./sections/faq";
import MainNavBar from "./mainNavBar";
import { ApartmentGallery } from "./sections/apartment";

function App() {
  return (
    <>
      <MainNavBar />

      <main className="main-content">
        <Inicio />
        <Galeria />
        <Servicios />
        <ApartmentGallery />
        <SobreNosotros />
        <Contacto />
        <Ubicacion />
        <Faq />
      </main>
    </>
  );
}

export default App;
