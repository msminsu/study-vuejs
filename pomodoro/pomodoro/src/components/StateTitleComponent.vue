<template>
  <h3>{{ isworking ? workingtitle : restingtitle }}</h3>
</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {
      title : 'Learning Vue.js!',
      workingtitle : 'Work',
      restingtitle : 'Rest'
    }
  },
  props: ['isworking']
}
</script>