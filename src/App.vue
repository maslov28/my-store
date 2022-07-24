<template>
  <div>
    <header class="header">
      <app-basket></app-basket>
    </header>
    <div class="container">
      <h1 class="title">Товары</h1>
      <div class="cards">
        <app-card 
          v-for="(card, idx) in cards" 
          :key="card.id" 
          :idx="idx"
          :card="card"
        ></app-card>
      </div>
    </div>
  </div>
</template>

<script>
import AppCard from './components/AppCard.vue'
import AppBasket from './components/AppBasket.vue'
import useStore from './composables/useStore.js'

export default {
  components: {
    AppCard,
    AppBasket
  },
  setup() {
    const { cards } = new useStore()

    return {
      cards
    }
  }
}
</script>

<style>
  .header {
    background-color: rgb(223, 223, 223);
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    box-sizing: border-box;
    position: fixed;
    top: 0;
  }
  .container{
    width: 1000px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    margin-top: 70px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

