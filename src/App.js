import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";
import { Navbar } from "./component/Navbar/Navbar";
import { Section1 } from "./component/Section1/Section1";
import { Section2 } from "./component/Section2/Section2";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
  );
}

export default App;
