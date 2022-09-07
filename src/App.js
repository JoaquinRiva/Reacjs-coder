import NavBar from "./components/NavBar";
import Contador from "./components/Contador";
import Teclado from "./assets/Img/Teclado.png"
const App = () => {
return(
  <div>
   <NavBar />
   <img src={Teclado} />
   <Contador />
   
  </div>

)
 }


export default App;
