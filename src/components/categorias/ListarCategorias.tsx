import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { PencilLine as PencilIcon, Trash as TrashIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import type Categoria from '../../models/Categoria';
import { buscar } from '../../services/Service';

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarCategorias() {
    setIsLoading(true);
    try {
      await buscar('/categorias', setCategorias); 
    } catch (error) {
      alert('Erro ao buscar categorias');
    } finally {
      setIsLoading(false); 
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []); 

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" />
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-slate-900 mb-10 uppercase tracking-tighter">
              Departamentos <span className='text-cyan-600'>BioCore</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categorias.map((categoria) => (
              <div key={categoria.id} className="group flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl
               hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
                
                <div className="p-4 bg-slate-100/50 group-hover:bg-cyan-50 transition-colors flex justify-between items-center border-b border-slate-100">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                     Ref: #00{categoria.id}
                  </span>
                  <div className='w-2 h-2 rounded-full bg-cyan-500 group-hover:animate-ping'></div>
                </div>
                <div className="p-10 flex flex-col items-center justify-center min-h-40">
                  <p className="text-xl font-black text-slate-800 text-center uppercase group-hover:text-cyan-600 transition-colors">
                    {categoria.descricao}
                  </p>
                </div>

                <div className="flex border-t border-slate-100 mt-auto">
                  <Link 
                    to={`/editarCategoria/${categoria.id}`}
                    className="w-full py-5 text-[10px] font-black text-slate-500 hover:text-white hover:bg-amber-500 transition-all flex justify-center items-center gap-2 border-r border-slate-100 uppercase tracking-widest"
                  >
                    <PencilIcon size={18} weight="bold" /> EDITAR
                  </Link>
                  <Link 
                    to={`/deletarCategoria/${categoria.id}`}
                    className="w-full py-5 text-[10px] font-black text-slate-500 hover:text-white hover:bg-rose-600 transition-all flex justify-center items-center gap-2 uppercase tracking-widest"
                  >
                    <TrashIcon size={18} weight="bold" /> DELETAR
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListarCategorias;