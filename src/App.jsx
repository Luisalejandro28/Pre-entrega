import { NavBar } from "./components/layout/navBar/NavBar";
import { Footer } from "./components/layout/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const mensajeInicio = "Bienvenidos a Sell Here";
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer mensaje={mensajeInicio} />
        <Footer />
      </div>
    </>
  );
}

export default App;
