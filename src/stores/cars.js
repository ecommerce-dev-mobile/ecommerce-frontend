import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useCarStore = defineStore('car', () => {
  const selectedCategory = ref(null)
  const cars = reactive([
    {
      id: 1,
      name: 'Relâmpago McQueen - Edição Corrida',
      price: 129.9,
      imageURL: '/racing-cars/mcqueen.png',
      description:
        'Miniatura detalhada do lendário Relâmpago McQueen com pintura de corrida e rodas com suspensão.',
      category: 'racing',
      stock: 12,
    },
    {
      id: 2,
      name: 'Sally Carrera - Modelo Luxo',
      price: 119.9,
      imageURL: '/racing-cars/sally.png',
      description:
        'A elegante Porsche azul de Radiator Springs, perfeita para fãs e colecionadores.',
      category: 'racing',
      stock: 15,
    },
    {
      id: 3,
      name: 'Frosty - Edição Australiana',
      price: 119.9,
      imageURL: '/racing-cars/frosty.png',
      description:
        'Frosty, o campeão australiano da World Grand Prix, em miniatura colecionável com design exclusivo.',
      category: 'racing',
      stock: 9,
    },
    {
      id: 4,
      name: 'Vara de Ranho',
      price: 114.9,
      imageURL: '/racing-cars/vara-de-ranho.png',
      description:
        'O excêntrico dodge americano, direto do Radiator Springs, agora em versão de brinquedo.',
      category: 'racing',
      stock: 11,
    },
    {
      id: 5,
      name: 'Ramone - Oficina Estilo Baixo',
      price: 124.9,
      imageURL: '/racing-cars/ramone.png',
      description:
        'O estiloso Ramone com pintura roxa metálica e suspensão rebaixada. Arte automotiva pura!',
      category: 'racing',
      stock: 13,
    },
    {
      id: 6,
      name: 'Francesco Bernoulli - GP Mundial',
      price: 129.9,
      imageURL: '/racing-cars/francesco.png',
      description: 'O rival italiano de McQueen com design de Fórmula 1 e muito estilo europeu.',
      category: 'racing',
      stock: 10,
    },
    {
      id: 7,
      name: 'Max Schnell - Corrida Alemã',
      price: 119.9,
      imageURL: '/racing-cars/max.png',
      description:
        'Representando a Alemanha na World Grand Prix, Max Schnell vem com pintura racing detalhada.',
      category: 'racing',
      stock: 14,
    },
    {
      id: 8,
      name: 'Doc Hudson',
      category: 'classic',
      imageURL: '/classic-cars/hudson.png',
      price: 119.9,
      description:
        'Uma lenda das pistas e juiz em Radiator Springs. Hudson é respeitado por seu passado vitorioso e sua sabedoria silenciosa.',
      category: 'classics',
      stock: 12
    },
    {
      id: 9,
      name: 'Finn McMissile',
      category: 'classic',
      imageURL: '/classic-cars/finn.png',
      price: 119.9,
      description:
        'O lendário agente secreto britânico com estilo clássico e gadgets incríveis. Finn está sempre pronto para uma missão.',
      category: 'classics',
      stock: 4
    },
    {
      id: 10,
      name: 'The King',
      category: 'classic',
      imageURL: '/classic-cars/the-king.png',
      price: 114.9,
      description:
        'O veterano da Copa Pistão, lendário número 43. O King é símbolo de esportividade e respeito nas pistas.',
      category: 'classics',
      stock: 5
    },

    {
      id: 11,
      name: 'Ivan - Caminhão de Transporte',
      price: 109.9,
      imageURL: '/support-cars/ivan.png',
      description:
        'O caminhão russo leal que aparece em Missão Secreta. Grande, resistente e detalhado.',
      category: 'support',
      stock: 5,
    },
    {
      id: 12,
      name: 'Mate - Caminhão Guincho',
      price: 109.9,
      imageURL: '/support-cars/mate.png',
      description: 'O divertido e desajeitado guincho do Radiator Springs agora na sua prateleira!',
      category: 'support',
      stock: 8,
    },
    {
      id: 13,
      name: 'Luigi - Italiano',
      price: 159.9,
      imageURL: '/support-cars/luigi.png',
      description: 'O Fiat italiano com o pior humor de Carros agora em sua seleção"',
      category: 'support',
      stock: 8,
    },
    {
      id: 14,
      name: 'Police car',
      price: 99.9,
      imageURL: '/support-cars/police-car.png',
      description:
        'Para tomar conta da cidade e proteger os amigos de espiões, a polícia está nas ruas, não se preocupe!',
      category: 'support',
      stock: 8,
    },
    {
      id: 15,
      name: 'Xerif',
      price: 139.9,
      imageURL: '/support-cars/xerif.png',
      description:
        'O guardião das estradas de Radiator Springs, sempre atento para manter a ordem na cidade.',
      category: 'support',
      stock: 8,
    },
    {
      id: 16,
      name: 'Ruka',
      price: 129.9,
      imageURL: '/support-cars/ruka.png',
      description:
        'A simpática carretinha azul do Japão, sempre prestativa e eficiente no apoio às equipes de corrida.',
      category: 'support',
      stock: 8,
    },
  ])

  return { selectedCategory, cars }
})
