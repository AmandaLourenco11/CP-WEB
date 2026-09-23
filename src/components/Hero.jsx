import img2 from '../assets/img2.jpeg'
import img1 from '../assets/img1.jpeg'

const Hero = () => {
  return (
    <section id="topo" className="relative pt-40 pb-24 px-6 bg-stone-950 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Sua próxima refeição favorita está a um toque de distância
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-md">
            Centenas de restaurantes, entrega rápida e pagamento fácil.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#pratos" className="border border-orange-50/40 px-7 py-3 rounded-full font-semibold hover:border-rose-800 hover:text-rose-800 transition-colors">
              Ver pratos em destaque
            </a>
          </div>
        </div>

        <img
          src={img2}
          alt="Prato de comida pronto para entrega"
          className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
        />
      </div>
    </section>
  )
}

export default Hero
