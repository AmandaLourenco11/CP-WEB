import { useEffect, useState } from 'react'

const links = [
  ['#sobre', 'Sobre'],
  ['#funcionalidades', 'Funcionalidades'],
  ['#pratos', 'Pratos'],
  ['#depoimentos', 'Depoimentos'],
  ['#contato', 'Contato'],
]

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  const [rolar, setRolar] = useState(false)

  useEffect(() => {
    function verificarRolagem() {
      setRolar(window.scrollY > 20)
    }

    window.addEventListener('scroll', verificarRolagem)

    return () => window.removeEventListener('scroll', verificarRolagem)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur transition-all duration-300 ${rolar ? 'bg-stone-950/95 shadow-lg' : 'bg-stone-950/75'}`}>      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <a href="#topo" className="text-2xl font-serif font-semibold text-white">
        Gourmet<span className="text-rose-800">On</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8 text-white text-sm font-medium">
          {links.map(([endereco, rotulo]) => (
            <li key={endereco}>
              <a href={endereco} className="hover:text-rose-800 transition-colors">{rotulo}</a>              </li>
          ))}
        </ul>

        <a href="#contato" className="bg-rose-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-rose-900 transition-colors">            Saiba mais sobre o APP
        </a>
      </div>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        {menuAberto ? '✕' : '☰'}
      </button>
    </nav>

      {menuAberto && (
        <div className="md:hidden bg-stone-900 px-6 pb-6">          {links.map(([endereco, rotulo]) => (
          <a key={endereco} href={endereco} onClick={() => setMenuAberto(false)} className="block py-2 text-white">
            {rotulo}
          </a>
        ))}
          <a href="#contato" onClick={() => setMenuAberto(false)} className="block mt-3 bg-rose-800 text-white text-center px-5 py-2 rounded-full font-semibold">            Baixe o app
          </a>
        </div>
      )}
    </header>
  )
}

export default Header