import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCarStore = defineStore('racingCar', () => {
  const racingCars = reactive([
    {
      id: 1,
      name: 'Relâmpago McQueen - Edição Corrida',
      price: 129.9,
      imageURL: '/cars/mcqueen.png',
      description:
        'Miniatura detalhada do lendário Relâmpago McQueen com pintura de corrida e rodas com suspensão.',
      category: 'racing-cars',
      stock: 12,
    },
    {
      id: 2,
      name: 'Sally Carrera - Modelo Luxo',
      price: 119.9,
      imageURL: '/cars/sally.png',
      description:
        'A elegante Porsche azul de Radiator Springs, perfeita para fãs e colecionadores.',
      category: 'racing-cars',
      stock: 15,
    },
    {
      id: 3,
      name: 'Doc Hudson - Hudson Hornet',
      price: 139.9,
      imageURL: '/cars/hudson.png',
      description:
        'O lendário Doc Hudson em versão clássica com pintura metálica e rodas de borracha.',
      category: 'racing-cars',
      stock: 6,
    },
    {
      id: 4,
      name: 'Frosty - Edição Australiana',
      price: 119.9,
      imageURL: '/cars/frosty.png',
      description:
        'Frosty, o campeão australiano da World Grand Prix, em miniatura colecionável com design exclusivo.',
      category: 'racing-cars',
      stock: 9,
    },
    {
      id: 5,
      name: 'Vara de Ranho',
      price: 114.9,
      imageURL: '/cars/vara-de-ranho.png',
      description:
        'O excêntrico dodge americano, direto do Radiator Springs, agora em versão de brinquedo.',
      category: 'racing-cars',
      stock: 11,
    },
    {
      id: 6,
      name: 'Ramone - Oficina Estilo Baixo',
      price: 124.9,
      imageURL: '/cars/ramone.png',
      description:
        'O estiloso Ramone com pintura roxa metálica e suspensão rebaixada. Arte automotiva pura!',
      category: 'racing-cars',
      stock: 13,
    },
    {
      id: 7,
      name: 'Phil McMissile',
      price: 139.9,
      imageURL: '/cars/phil.png',
      description:
        'Agente secreto britânico com lançadores, radar e estilo à la 007. Um must-have para fãs!',
      category: 'racing-cars',
      stock: 7,
    },
    {
      id: 8,
      name: 'Francesco Bernoulli - GP Mundial',
      price: 129.9,
      imageURL: '/cars/francesco.png',
      description: 'O rival italiano de McQueen com design de Fórmula 1 e muito estilo europeu.',
      category: 'racing-cars',
      stock: 10,
    },
    {
      id: 9,
      name: 'Max Schnell - Corrida Alemã',
      price: 119.9,
      imageURL: '/cars/max.png',
      description:
        'Representando a Alemanha na World Grand Prix, Max Schnell vem com pintura racing detalhada.',
      category: 'racing-cars',
      stock: 14,
    },
  ])

  return { cars }
})
