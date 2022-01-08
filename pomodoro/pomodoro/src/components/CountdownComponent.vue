<template>
  <div class="well">
    <div class="pomodoro-timer">
      <!-- <span>{{ min }}</span>:<span>{{ sec }}{{Math.pow(5,3)}}</span> -->
      <span>{{ min | leftpad }} : {{ sec | leftpad}}</span>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  data () {
    return {
      min: 3,
      sec: 2
    }
  }
}
</script>