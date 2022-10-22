import './App.css';
import Titulo from './componentes/Header/header';
import ListaTareas from './componentes/ListaTareas/listaTareas';
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <div className="App">
      <Titulo />
      <ListaTareas/>
      <Footer/>
    </div>
  );
}

export default App;
