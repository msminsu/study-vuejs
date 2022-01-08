<!-- jade 사용시 설정  npm install jade --save-dev  설치 -->
<template lang ="jade">
  h1 {{ msg }}
</template>

<!-- coffee script 사용시 npm install coffee-loader coffee-script --save-dev -->
<script lang="coffee">
  export default {
    data () {
      return {
        msg: 'Hello!'
      }
    }
  }
</script>

<!-- sass 사용시 설정 npm install sass-loader node-sass --save-dev -->
<style lang="sass" scoped>
 $red : red;
 h1{
   color: $red;
 }
</style>




