import { Link } from 'react-router-dom';
import { 
    MagnifyingGlass as MagnifyingGlassIcon, 
    User as UserIcon, 
    ShoppingCart as ShoppingCartIcon, 
    List as ListIcon, 
    PlusCircle as PlusCircleIcon 
} from '@phosphor-icons/react';
import logoBioCore from '../../assets/logo.png';

function Navbar() {
    return (
        <nav className="w-full bg-slate-900 text-white flex justify-center py-4 px-4 shadow-md sticky top-0 z-50 border-b border-slate-800">
            <div className="container flex justify-between text-lg items-center">

                <Link to="/home" className="flex items-center gap-4 hover:opacity-80 transition-all">
                    <img
                        src={logoBioCore}
                        alt="BioCore Logo"
                        className="w-28 h-auto object-contain py-1"
                    />
                    <span className="text-3xl font-extrabold tracking-tight">
                        Bio<span className="text-cyan-500">Core</span>
                    </span>
                </Link>

                <div className="hidden md:flex flex-1 mx-12">
                    <div className="relative w-full group">
                        <input
                            type="search"
                            className="w-full py-2 text-sm bg-slate-800 text-slate-200 rounded-full pl-10 pr-4 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-slate-700 transition-all placeholder:text-slate-500"
                            placeholder="Busca rápida de medicamentos ou fórmulas..."
                        />
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 group-focus-within:text-cyan-500">
                            <MagnifyingGlassIcon size={18} />
                        </span>
                    </div>
                </div>

                <div className="flex gap-8 items-center font-semibold text-sm uppercase tracking-wider">
                    <Link to="/categorias" className="hover:text-cyan-400 flex items-center gap-2 transition-all text-slate-200">
                        <ListIcon size={20} weight="bold" /> Categorias
                    </Link>
                    <Link to="/cadastrarCategoria" className="hover:text-cyan-400 flex items-center gap-2 transition-all text-slate-200">
                        <PlusCircleIcon size={20} weight="bold" /> Cadastrar
                    </Link>

                    <div className="flex gap-5 ml-2 border-l pl-6 border-slate-700 text-slate-300">
                        <UserIcon size={26} weight="light" className="cursor-pointer hover:text-cyan-400 transition-colors" />
                        <div className="relative cursor-pointer group">
                            <ShoppingCartIcon size={26} weight="light" className="group-hover:text-cyan-400 transition-colors" />
                            <span className="absolute -top-2 -right-2 bg-cyan-500 text-slate-900 text-[10px] font-extrabold px-1.5 rounded-full border-2 border-slate-900">
                                0
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;