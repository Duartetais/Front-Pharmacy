import { type ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../services/Service';

function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert('Categoria atualizada com sucesso');
      } catch (error: any) {
        alert('Erro ao atualizar a Categoria');
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert('Categoria cadastrada com sucesso');
      } catch (error: any) {
        alert('Erro ao cadastrar a Categoria');
      }
    }
    retornar();
  }

  function retornar() {
    navigate('/categorias');
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-12">
      
      <h1 className="text-4xl font-extrabold text-slate-800 text-center mb-8 tracking-tight">
        {id === undefined ? 'Cadastrar ' : 'Editar '} 
        <span className='text-slate-800'>Categoria</span>
      </h1>

      <form className="w-full md:w-1/2 flex flex-col gap-6 bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100" onSubmit={gerarNovaCategoria}>
        
        <div className="flex flex-col gap-3">
          <label htmlFor="descricao" className="font-bold text-slate-700 ml-1">
            Descrição do Departamento
          </label>
          <input
            type="text"
            placeholder="Ex: Analgésicos, Vitaminas..."
            name="descricao"
            className="border-2 border-slate-100 bg-slate-50 rounded-2xl p-4 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-slate-800"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required
          />
        </div>

        <button 
          className="rounded-full text-white bg-cyan-600 hover:bg-cyan-700 w-full md:w-2/3 py-4 mx-auto block font-bold text-lg shadow-lg shadow-cyan-100 transition-all uppercase tracking-widest active:scale-95" 
          type="submit"
        >
          {id === undefined ? 'Confirmar Cadastro' : 'Salvar Alterações'}
        </button>

        <button 
          type="button"
          onClick={retornar}
          className="text-slate-400 font-semibold hover:text-slate-600 transition-colors mx-auto"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;