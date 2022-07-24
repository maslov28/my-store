<template>
  <span>Количество: {{ basketCount }}</span>
  <span>Сумма: {{ total }}</span>
</template>

<script>
import useStore from '../composables/useStore.js'
export default {
  setup() {
    const { basketCount, total } = new useStore()

    return {
      basketCount,
      total
    }
  }
}
</script>

<style scoped>
  span {
    margin-left: 10px;
  }
</style>