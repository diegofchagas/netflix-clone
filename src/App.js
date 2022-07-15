import Row from './components/Row';
import Banner from './components/Banner';
import categorias from './api';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Nav/>
      <Banner/>
       {categorias.map((category)=>{
          return(<Row 
            key={category.name}
            title={category.title}
            path={category.path}
            isLager={category.isLager} />) 
        })}
      
      
      <div>
        <footer>Desenvolvido por Diego Chagas</footer>
      </div>
    </div>
  );
}

export default App;
