<template>
  <div class="listBox" :mode="mode">
    <ul class="listComponent">
      <li ref="list" v-for="item in lists" :key="item.id">
        <a href="#;" v-on:click="open(item.id)">
            <span class="wrap">
              <em class="entry_date">{{item.date}}</em>
              <strong>{{item.title}}</strong>
              <span class="con">{{item.content}}</span>
            </span>
        </a>
      </li>
    </ul>
    <i ref="ruler" class="ruler" :style="{ 'height': this.rHeight}"></i>
    <i ref="tape" class="tape" :style="{ 'top': this.tapePos}"></i>
  </div>
</template>

<script>
export default {
  name: 'listComponent',
  data () {
    return {
        rHeight: null,
        tapePos:null
    }
  },
  listData:{},
  props : ['mode','lists'],

   mounted() {
      this.rHeight = window.innerHeight +'px';
      this.tapePos = window.innerHeight - 170 +'px';

   },
     created () {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.onResize);
      // this.rHeight = window.innerHeight +'px';
      // this.tapePos = window.innerHeight - 170 +'px';
  },
  methods: {
     onResize: function () {
     this.rHeight = window.innerHeight +'px';
      this.tapePos = window.innerHeight - 170 +'px';
    },
    open: function(id){
       this.$emit('modeChange', 'detail',this.lists[id-1]);
        this.rHeight = window.innerHeight +'px';
      this.tapePos = window.innerHeight - 170 +'px';
    },
    handleScroll (e) {

         this.rHeight = window.innerHeight + window.scrollY -100 +'px';
        this.tapePos = window.innerHeight+ window.scrollY - 170 +'px'; //170
        // this.$refs.ruler
        // console.log(window.pageYOffset, window.innerHeight);
            // if ( nowPos  >= startPoint){
            //     $direct.stop().animate({top:nowPos+50},700)
            // }else{
            //     $direct.stop().animate({top:800},700)
            // }
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >


.listBox{
  overflow: hidden;
  padding-top: 60px;
  position: relative;
  min-width: 960px;
}
i{
  position: absolute;
  display: block;
  &.ruler{top: 0px;left: 50%;  margin-left: -395px; width: 54px; height: 100vh;background:url(../assets/ruler.png) repeat-y 0 0;opacity:1;background-size: 100%;
  &:after{ display: block;content:'';position: absolute;top: 0;left: 9px;width: 42px;height: 45px;background:url(../assets/top.png) no-repeat 0 0;background-size: 100%;}
  }
  &.tape{left: 50%; top:85vh; margin-left: -475px; width: 194px; height: 413px;background:url(../assets/tape.png) no-repeat 0 0;background-size: 100%;}
}
a{
  display: block;
  text-decoration: none;
  color: #8d8d8d;
  padding: 20px 0;
   transition: all 1s;
  }
a:hover{background: #fff;transition: all 1s;
  strong,em{color: #000;font-weight: normal;}
}
strong{
  display: block;
  padding-left: 167px;width: 630px;
  padding-bottom: 26px;
  text-align: left;
  font-weight: normal;
}
ul{padding-bottom: 140px;}
li{
  overflow: hidden;
  list-style: none;
  position: relative;
  border-bottom: 1px solid #ddd;
  .wrap{
    display: block;
    position: relative;
    width: 960px;
    margin:0 auto;
  }
  .con{
    padding-left: 170px;
    width: 480px;
    display: block;
    text-align-last: left;
    font-size: 12px;
  }
  em{
    font-style: normal;
    position: absolute;
    top: 11px;
    left: 0;
    font-size: 14px;
  }

}

@media (max-width: 1080px) and (max-height: 850px) {
  .listBox{width: 100%;min-width: auto;}
  li{
    strong{width: 100%;    font-size: 20px; padding: 0; padding-left: 100px;}
    em{top: 7px;}
    .con{
      display: none;
    }
  }
  i{

    &.ruler{left: 64px;width: 27px; margin-left: 0; padding-bottom: 80px;
        &:after{left: 4px;width: 21px;}
      }
    &.tape{ left: 24px; width: 97px;margin-left: 0; margin-top: 100px;}
    }
}

</style>
