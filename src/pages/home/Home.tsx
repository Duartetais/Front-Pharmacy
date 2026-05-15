import { useEffect, useState } from 'react';
import { 
    Pill as PillIcon, 
    Truck as TruckIcon, 
    CreditCard as CreditCardIcon, 
    ShieldCheck as ShieldCheckIcon, 
    CaretRight as CaretRightIcon 
} from '@phosphor-icons/react';
import { buscar } from '../../services/Service';
import type Categoria from '../../models/Categoria';
import { Link } from 'react-router-dom';
import imagemHero from '../../assets/logobio.png';

function Home() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function getCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error) {
      console.log("Erro ao carregar categorias na Home");
    }
  }

  useEffect(() => {
    getCategorias();
  }, []);

return (
    <>
      <div className="bg-slate-50 flex justify-center py-20 border-b border-slate-100">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-slate-800 px-4 items-center">
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Bem-vindo à <span className="text-cyan-600">BioCore</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-md">
              Inovação digital para a sua saúde. Encontre o que você precisa com rapidez e segurança.
            </p>
            <Link to="/produtos" className="w-fit rounded-full bg-cyan-600 text-white py-3 px-8 font-bold hover:bg-cyan-700 transition-all shadow-md shadow-cyan-200">
              Conheça Nossos Produtos
            </Link>
          </div>

          <div className="hidden md:flex justify-center">
            <img 
                src={imagemHero} 
                alt="BioCore Destaque" 
                className="w-full max-w-100 h-auto object-contain drop-shadow-2xl animate-pulse-slow" 
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="group flex items-center gap-4 p-6 rounded-2xl border border-slate-100 bg-white
             hover:border-cyan-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <TruckIcon size={40} className="text-cyan-600 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-800">Entrega </h3>
                <p className="text-sm text-slate-500">Logística ágil e sustentável.</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 p-6 rounded-2xl border border-slate-100 bg-white
             hover:border-cyan-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CreditCardIcon size={40} className="text-cyan-600 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-800">Higiene Pessoal</h3>
                <p className="text-sm text-slate-500">Cuidado completo para você.</p>
              </div>
            </div>
            <div className="group flex items-center gap-4 p-6 rounded-2xl border border-slate-100 bg-white
             hover:border-cyan-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <ShieldCheckIcon size={40} className="text-cyan-600 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-800">Compra Segura</h3>
                <p className="text-sm text-slate-500">Produtos 100% certificados.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Categorias</h2>
              <p className="text-slate-500">Navegue por departamento</p>
            </div>
            <Link to="/categorias" className="text-cyan-600 font-semibold flex items-center hover:underline">
              Ver todas <CaretRightIcon size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categorias.slice(0, 5).map((categoria) => (
              <div key={categoria.id} className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center hover:shadow-xl
               hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-all duration-300">
                  <PillIcon size={28} className="text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-slate-700 uppercase text-xs tracking-widest group-hover:text-cyan-600 transition-colors">
                  {categoria.descricao}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;