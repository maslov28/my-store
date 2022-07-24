<template>
  <div class="card">
    <div class="card__info">
      <img class="card__img" :src="card.img" alt="">
      <h3 class="card__title">{{ card.name }}</h3>
      <p class="card__desc">{{ card.description }}</p>
      <p class="card__price">{{ card.price.toLocaleString() }} р</p>
    </div>
    <div class="card__buttons">
      <button @click="remove">-</button>
      <button @click="add">+</button>
    </div>
  </div>
</template>

<script>
import useStore from '../composables/useStore.js'
export default {
  props: {
    card: Object,
    idx: Number
  },
  setup(props) {
    const { addItem, removeItem } = new useStore()
    const add = () => {
      addItem({
        idx: props.idx
      })
    }
    const remove = () => {
      removeItem({
        idx: props.idx,
        id: props.card.id
      })
    }

    return {
      add,
      remove
    }
  }
}
</script>

<style scoped>
  .card {
    max-width: 200px;
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card__img {
    max-width: 200px;
  }
  .card__price {
    text-align: right;
  }
  .card__buttons{
    display: flex;
    justify-content: space-between;
  }
</style>