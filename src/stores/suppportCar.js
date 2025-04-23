import { defineStore } from 'pinia'

const useSupportCarStore =
  ('supportCar',
  () => {
    const supportCars = reactive([
      {
        id: 1,
        name: 'Ivan - Caminhão de Transporte',
        price: 109.9,
        imageURL: '/support-cars/ivan.png',
        description:
          'O caminhão russo leal que aparece em Missão Secreta. Grande, resistente e detalhado.',
        category: 'support-cars',
        stock: 5,
      },
      {
        id: 2,
        name: 'Mate - Caminhão Guincho',
        price: 109.9,
        imageURL: '/support-cars/mate.png',
        description:
          'O divertido e desajeitado guincho do Radiator Springs agora na sua prateleira!',
        category: 'support-cars',
        stock: 8,
      },
      {
        id: 3,
        name: 'Luigi - Italiano',
        price: 159.9,
        imageURL: '/support-cars/luigi.png',
        description: 'O Fiat italiano com o pior humor de Carros agora em sua seleção"',
        category: 'support-cars',
        stock: 8,
      },
      {
        id: 4,
        name: 'Police car',
        price: 99.9,
        imageURL: '/support-cars/police-car.png',
        description:
          'Para tomar conta da cidade e proteger os amigos de espiões, a polícia está nas ruas, não se preocupe!',
        category: 'support-cars',
        stock: 8,
      },
      {
        id: 5,
        name: 'Xerif',
        price: 139.9,
        imageURL: '/support-cars/xerif.png',
        description:
          'O guardião das estradas de Radiator Springs, sempre atento para manter a ordem na cidade.',
        category: 'support-cars',
        stock: 8,
      },
      {
        id: 6,
        name: 'Ruka',
        price: 129.9,
        imageURL: '/support-cars/ruka.png',
        description:
          'A simpática carretinha azul do Japão, sempre prestativa e eficiente no apoio às equipes de corrida.',
        category: 'support-cars',
        stock: 8,
      },
    ])

    return { supportCars }
  })
