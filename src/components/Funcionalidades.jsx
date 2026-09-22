import { Search, SlidersHorizontal, MapPin, CreditCard } from 'lucide-react';

const funcionalidades = [
  [Search, 'Busca por tipo de comida', 'Encontre pratos por categoria, ingrediente ou restaurante.'],
  [SlidersHorizontal, 'Filtros inteligentes', 'Filtre por preço, tempo de entrega e avaliação.'],
  [MapPin, 'Rastreio ao vivo', 'Acompanhe seu pedido do preparo até a porta de casa.'],
  [CreditCard, 'Pagamento integrado', 'Pague direto no app, sem precisar de dinheiro na entrega.'],
]

const Funcionalidades = () => {
  return (
    <section id="funcionalidades" className="py-24 px-6 bg-rose-700 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-12 max-w-lg">Funcionalidades pensadas para o seu dia a dia</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {funcionalidades.map(([Icone, titulo, descricao]) => (
            <div key={titulo} className="flex gap-4 bg-white/10 rounded-2xl p-6">
              <Icone size={32} />
              <div>
                <h3 className="text-lg font-semibold mb-1">{titulo}</h3>
                <p className="text-white/75 text-sm">{descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Funcionalidades
