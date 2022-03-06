import "primereact/resources/themes/arya-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import HomePage from "./Components/Home/Homepage";
import MenuBar from "./Components/Home/Menu.js/MenuBar";
import "./App.css";

function App() {
  return (
    <>
      <HomePage />
      <MenuBar />
    </>
  );
}

export default App;
