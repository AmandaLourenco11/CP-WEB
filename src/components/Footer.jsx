import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white py-12 px-6">      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

      <div>
        <h2 className="text-2xl font-bold mb-3">
          Gourmet<span className="text-rose-800">On</span>
        </h2>
        <p className="text-white/70">
          Comida boa, rápida e do seu jeito.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Contato</h3>

        <p className="text-white/70 flex items-center gap-2 mb-2">
          <Mail size={18} />
          contato@gourmeton.com
        </p>

        <p className="text-white/70 flex items-center gap-2">
          <Phone size={18} />
          (11) 99999-9999
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Siga o GourmetOn</h3>

        <div className="flex gap-4">
          <a href="#" aria-label="Instagram">
            Instagram
          </a>

          <a href="#" aria-label="Facebook">
            Facebook
          </a>
        </div>
      </div>

    </div>

      <div className="max-w-6xl mx-auto border-t border-white/20 mt-8 pt-6 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-2">
        <p>© 2026 GourmetOn. Todos os direitos reservados.</p>
        <a href="#" className="hover:text-white">
          Termos de uso
        </a>
      </div>
    </footer>
  )
}

export default Footer