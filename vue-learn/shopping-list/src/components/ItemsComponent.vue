<template>
   <ul>
    <item-component v-for=" (item,index) in items" :item="item" :key="index" ></item-component>
  </ul>
</template>

<script>
  import ItemComponent from './ItemComponent'
  export default {
    components: {
      ItemComponent
    },
    props: ['items']
  }
</script>

<style scoped>
</style>
