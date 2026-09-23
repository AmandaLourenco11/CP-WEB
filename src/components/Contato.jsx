import { useState } from 'react'

const Contato = () => {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState(false)

  const validarEmail = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)

  const aoEnviar = (evento) => {
    evento.preventDefault()

    if (!validarEmail(email)) {
      setErro(true)
      setEnviado(false)
      return
    }

    setErro(false)
    setEnviado(true)
    setEmail('')
  }

  return (
    <section id="contato" className="py-24 px-6 bg-orange-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Fique por dentro das novidades</h2>
        <p className="text-stone-950/70 text-lg mb-8">
          Cadastre seu e-mail e receba promoções e novidades do GourmetOn em primeira mão.
        </p>

        <form onSubmit={aoEnviar} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            placeholder="seuemail@exemplo.com"
            className="flex-1 px-5 py-3 rounded-full border border-stone-950/20 focus:outline-none focus:border-rose-800"
            required
          />
          <button
            type="submit"
            className="bg-rose-800 text-white px-7 py-3 rounded-full font-semibold hover:bg-rose-900 transition-colors"
          >
            Cadastrar
          </button>
        </form>

        {erro && <p className="text-rose-800 mt-4">Digite um e-mail válido.</p>}
        {enviado && <p className="text-green-700 mt-4">E-mail cadastrado com sucesso!</p>}
      </div>
    </section>
  )
}

export default Contato