import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCarStore = defineStore('car', () => {
  const cars = reactive([
    {
      id: 1,
      name: 'Relâmpago McQueen - Edição Corrida',
      price: 129.9,
      imageURL: 'mcqueen-race.png',
      description:
        'Miniatura detalhada do lendário Relâmpago McQueen com pintura de corrida e rodas com suspensão.',
      category: 'Miniaturas',
      stock: 12,
      featured: true,
    },
    {
      id: 2,
      name: 'Mate - Caminhão Guincho',
      price: 109.9,
      imageURL: 'mater-truck.png',
      description: 'O divertido e desajeitado guincho do Radiator Springs agora na sua prateleira!',
      category: 'Miniaturas',
      stock: 8,
      featured: true,
    },
    {
      id: 3,
      name: 'Sally Carrera - Modelo Luxo',
      price: 119.9,
      imageURL: 'sally-carrera.png',
      description:
        'A elegante Porsche azul de Radiator Springs, perfeita para fãs e colecionadores.',
      category: 'Miniaturas',
      stock: 15,
      featured: false,
    },
    {
      id: 4,
      name: 'Doc Hudson - Hudson Hornet',
      price: 139.9,
      imageURL: 'doc-hudson.png',
      description:
        'O lendário Doc Hudson em versão clássica com pintura metálica e rodas de borracha.',
      category: 'Miniaturas',
      stock: 6,
      featured: false,
    },
    {
      id: 5,
      name: 'Frosty - Edição Australiana',
      price: 119.9,
      image: 'frosty.png',
      description:
        'Frosty, o campeão australiano da World Grand Prix, em miniatura colecionável com design exclusivo.',
      category: 'Miniaturas',
      stock: 9,
      featured: false,
    },
    {
      id: 6,
      name: 'Varinha de Ranho',
      price: 114.9,
      image: 'vara-de-ranho.png',
      description:
        'O hilário e excêntrico carro verde, direto do Radiator Springs, agora em versão de brinquedo.',
      category: 'Miniaturas',
      stock: 11,
      featured: false,
    },
    {
      id: 7,
      name: 'Ramone - Oficina Estilo Baixo',
      price: 124.9,
      image: 'ramone.png',
      description:
        'O estiloso Ramone com pintura roxa metálica e suspensão rebaixada. Arte automotiva pura!',
      category: 'Miniaturas',
      stock: 13,
      featured: true,
    },
    {
      id: 8,
      name: 'Finn McMissile - Edição Espiã',
      price: 139.9,
      image: 'finn-mcmissile.png',
      description:
        'Agente secreto britânico com lançadores, radar e estilo à la 007. Um must-have para fãs!',
      category: 'Miniaturas',
      stock: 7,
      featured: true,
    },
    {
      id: 9,
      name: 'Francesco Bernoulli - GP Mundial',
      price: 129.9,
      image: 'francesco.png',
      description: 'O rival italiano de McQueen com design de Fórmula 1 e muito estilo europeu.',
      category: 'Miniaturas',
      stock: 10,
      featured: false,
    },
    {
      id: 10,
      name: 'Max Schnell - Corrida Alemã',
      price: 119.9,
      image: 'max-schnell.png',
      description:
        'Representando a Alemanha na World Grand Prix, Max Schnell vem com pintura racing detalhada.',
      category: 'Miniaturas',
      stock: 14,
      featured: false,
    },
    {
      id: 11,
      name: 'Ivan - Caminhão de Transporte',
      price: 109.9,
      image: 'ivan.png',
      description:
        'O caminhão russo leal que aparece em Missão Secreta. Grande, resistente e detalhado.',
      category: 'Miniaturas',
      stock: 5,
      featured: false,
    },
    {
      id: 12,
      name: 'Ramone (Versão Verde)',
      price: 124.9,
      image: 'ramone-verde.png',
      description: 'Versão alternativa de Ramone com pintura verde brilhante e detalhes premium.',
      category: 'Miniaturas',
      stock: 4,
      featured: false,
    },
  ])

  return { cars }
})
