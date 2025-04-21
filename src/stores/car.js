import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCarStore = defineStore('car', () => {
  const cars = reactive([
    {
      id: 1,
      name: 'Relâmpago McQueen - Edição Corrida',
      price: 129.9,
      imageURL: '/cars/mcqueen.png',
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
      imageURL: '/cars/mate.png',
      description: 'O divertido e desajeitado guincho do Radiator Springs agora na sua prateleira!',
      category: 'Miniaturas',
      stock: 8,
      featured: true,
    },
    {
      id: 3,
      name: 'Sally Carrera - Modelo Luxo',
      price: 119.9,
      imageURL: '/cars/sally.png',
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
      imageURL: '/cars/hudson.png',
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
      imageURL: '/cars/frosty.png',
      description:
        'Frosty, o campeão australiano da World Grand Prix, em miniatura colecionável com design exclusivo.',
      category: 'Miniaturas',
      stock: 9,
      featured: false,
    },
    {
      id: 6,
      name: 'Vara de Ranho',
      price: 114.9,
      imageURL: '/cars/vara-de-ranho.png',
      description:
        'O excêntrico dodge americano, direto do Radiator Springs, agora em versão de brinquedo.',
      category: 'Miniaturas',
      stock: 11,
      featured: false,
    },
    {
      id: 7,
      name: 'Ramone - Oficina Estilo Baixo',
      price: 124.9,
      imageURL: '/cars/ramone.png',
      description:
        'O estiloso Ramone com pintura roxa metálica e suspensão rebaixada. Arte automotiva pura!',
      category: 'Miniaturas',
      stock: 13,
      featured: true,
    },
    {
      id: 8,
      name: 'Phil McMissile',
      price: 139.9,
      imageURL: '/cars/phil.png',
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
      imageURL: '/cars/francesco.png',
      description: 'O rival italiano de McQueen com design de Fórmula 1 e muito estilo europeu.',
      category: 'Miniaturas',
      stock: 10,
      featured: false,
    },
    {
      id: 10,
      name: 'Max Schnell - Corrida Alemã',
      price: 119.9,
      imageURL: '/cars/max.png',
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
      imageURL: '/cars/ivan.png',
      description:
        'O caminhão russo leal que aparece em Missão Secreta. Grande, resistente e detalhado.',
      category: 'Miniaturas',
      stock: 5,
      featured: false,
    },
  ])

  return { cars }
})
