import Intro from "./components/intro/intro/intro";
import About from "./components/about/About";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
  <div 
    style={{
      backgroundColor:darkMode ? "black" : "white", 
      color: darkMode && "white"}}>
    <Toggle />
    <Intro />
    <About />
    <ProductList/>
    <Contact/>
    </div>
  )
  
};

export default App;