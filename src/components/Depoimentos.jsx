const avaliacoes = [
  ['Marina Silva', 'Peço quase todo dia. A entrega é sempre rápida e o app é muito fácil de usar.'],
  ['Rafael Costa', 'Adoro a variedade de restaurantes. Sempre encontro algo novo para experimentar.'],
  ['Juliana Prado', 'O rastreamento em tempo real me deixa tranquila sobre o horário de chegada.'],
]

const Avaliacoes = () => {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-stone-900 text-white">      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl mb-12 max-w-lg">O que dizem nossos clientes</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {avaliacoes.map(([nome, texto]) => (
          <blockquote key={nome} className="bg-rose-50/10 rounded-2xl p-6">
            <p className="text-white mb-4">"{texto}"</p>
            <footer className="text-rose-800 font-semibold text-sm">{nome}</footer>
          </blockquote>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Avaliacoes