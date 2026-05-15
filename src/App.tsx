import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ListarCategorias from './components/categorias/ListarCategorias';
import FormCategoria from './components/categorias/FormCategoria';
import DeletarCategoria from './components/categorias/DeletarCategoria';

function App() {
  return (
    <BrowserRouter>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;