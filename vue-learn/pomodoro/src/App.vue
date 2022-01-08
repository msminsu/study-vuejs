<template>
  <div id="app" class="container">
    <h2>
      <span>Pomodoro</span>
      <controls-component></controls-component>
    </h2>
    <state-title-component></state-title-component>
    <countdown-component></countdown-component>
    <transition name="fade">
      <kittens-component v-if="kittens"></kittens-component>
    </transition>
  </div>
</template>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

<script>
import ControlsComponent from './components/ControlsComponent'
import CountdownComponent from './components/CountdownComponent'
import KittensComponent from './components/KittensComponent'
import StateTitleComponent from './components/StateTitleComponent'
window.data = {kittens: false }
export default {
  components: {
    ControlsComponent,
    CountdownComponent,
    KittensComponent,
    StateTitleComponent
  },
  data () {
    return window.data
  }
}




    $("#rolling li:first").slideUp(  //#rolling 안의 첫번째 li 를 slideUp (높이값이 줄어듬)
      function(){  // slideUp 이 완료 됐을때! 함수 실행!
        $(this).appendTo($("#rolling")).slideDown();// this( 슬리이드 UP된 요소) 를 #rolling 뒤에 append하고  slideDown( 높아값을 원래 크기로 : 즉 다시보이게 )
      })


</script>
