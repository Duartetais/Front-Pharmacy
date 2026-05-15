import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo, Envelope } from '@phosphor-icons/react'

function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-black tracking-tighter">
            Bio<span className="text-cyan-500">Core</span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Sua saúde em primeiro lugar. Oferecemos os melhores medicamentos e produtos com a agilidade que você precisa.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-slate-100">Contato</h3>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer group">
               <WhatsappLogo size={20} className="group-hover:animate-bounce" /> 
               <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">(11) 99999-9999</a>
            </li>
            <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer group">
               <Envelope size={20} className="group-hover:scale-110 transition-transform" /> 
               <a href="mailto:suporte@biocore.com">suporte@biocore.com</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-slate-100">Redes Sociais</h3>
          <div className="flex gap-6">
            <LinkedinLogo size={32} weight='light' className='cursor-pointer hover:text-blue-400 transition-colors' />
            <InstagramLogo size={32} weight='light' className='cursor-pointer hover:text-pink-400 transition-colors' />
            <FacebookLogo size={32} weight='light' className='cursor-pointer hover:text-blue-600 transition-colors' />
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer;