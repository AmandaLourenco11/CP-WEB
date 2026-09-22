import { useEffect, useState } from 'react'

const enderecoApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

const Menu = () => {
  const [pratos, setPratos] = useState([])
  const [erro, setErro] = useState(false)

  useEffect(() => {
    fetch(enderecoApi)
      .then((resposta) => {
        if (!resposta.ok) throw new Error()        
          return resposta.json()
      })
      .then((dados) => setPratos((dados.meals || []).slice(0, 6)))
      .catch(() => setErro(true))
  }, [])

  return (
    <section id="pratos" className="py-24 px-6 bg-rose-50">      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl mb-12 max-w-lg">Pratos em destaque hoje</h2>

      {erro ? (
        <p className="text-rose-800">Não foi possível carregar os pratos.</p>) : pratos.length === 0 ? (
          <p className="text-stone-950/60">Carregando pratos...</p>
        ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pratos.map((prato) => (
            <div key={prato.idMeal} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img src={prato.strMealThumb} alt={prato.strMeal} className="w-full aspect-square object-cover" />
              <h3 className="font-semibold p-4">{prato.strMeal}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
    </section>
  )
}

export default Menu