const basket = ref([])
const total = ref(0)
const basketCount = ref(0)

import {ref} from 'vue'

export default function useStore() {
  const cards = ref([
    {
      id: 111,
      name: 'Solar Guitars A2.7TBR',
      price: 72990,
      description: '7-струнная электрогитара, цвет красный',
      img: 'https://mirm.ru/info/img_400/CNT75960.jpg.webp'
    },
    {
      id: 222,
      name: 'Burny RLC60 SW',
      price: 49990,
      description: 'Электрогитара, форма корпуса Les Paul®, корпус махагони, гриф - махагони, крепление грифа - вклеенный, накладка - лавровое дерево, звукосниматели - 2 хамбакера, бридж -Tune-o-matic, цвет белый.',
      img: 'https://mirm.ru/info/img_400/CNT82458.jpg.webp'
    },
    {
      id: 333,
      name: 'FGN J-Standard Iliad JIL2ASHM OWB',
      price: 113990,
      description: 'Электрогитара, форма корпуса Telecaster, корпус - ясень, гриф - клен, звукосниматели - 2 сингла Seymour Duncan, чехол в комплекте, цвет натуральный.',
      img: 'https://mirm.ru/info/img_400/CNT80553.jpg.webp'
    },
    {
      id: 444,
      name: 'Paoletti Stratospheric Loft HSS Heavy Black',
      price: 480000,
      description: 'электрогитара, Stratocaster HSS, цвет черный, кейс',
      img: 'https://mirm.ru/info/img_400/CNT91173.jpg.webp'
    },
    {
      id: 555,
      name: 'Fernandes RXX06 DAG',
      price: 30990,
      description: 'Электрогитара Revolver XX, HH, tune-o-matic, цвет - темно зеленый',
      img: 'https://mirm.ru/info/img_400/CNT73253.jpg.webp'
    }
  ])

  const addItem = (properties) => {
    const card = cards.value[properties.idx]
      if (basket.value.indexOf(card) === -1) {
        basketCount.value++
      }
      basket.value.push(card)
      total.value += card.price
  }

  const removeItem = (properties) => {
    const card = cards.value[properties.idx]
      if (basket.value.indexOf(card) >= 0) {
        total.value -= card.price
        basket.value.splice(basket.value.findIndex(el => el.id === properties.id), 1)
        if (basket.value.indexOf(card) === -1) {
          basketCount.value--
        }
      }
  }
  
  return {
    basket,
    addItem,
    removeItem,
    cards,
    total,
    basketCount
  }
}