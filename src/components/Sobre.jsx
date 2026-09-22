const beneficios = [
  ['Entrega rápida', 'Rastreamento em tempo real e pedidos chegando em até 30 minutos.'],
  ['Variedade de restaurantes', 'De comida caseira a alta gastronomia, tudo numa mesma busca.'],
  ['Pagamento fácil', 'Cartão, Pix ou carteira digital — você escolhe como pagar.'],
]

const Sobre = () => {
  return (
    <section id="sobre" className="py-24 px-6 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Por que pedir pelo GourmetOn</h2>
          <p className="text-stone-950/70 text-lg">Um app rápido, simples e feito para quem quer boa comida sem complicação.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {beneficios.map(([titulo, descricao]) => (
            <div key={titulo} className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl mb-3">{titulo}</h3>
              <p className="text-stone-950/70">{descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sobre