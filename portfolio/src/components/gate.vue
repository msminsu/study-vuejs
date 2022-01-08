<template>
<!-- isACtive && 'active' -->
    <div class="gate">
      <i class="obj"></i>
      <p class="message">
        THANKS FOR VISITING!
      </p>
    </div>

</template>

<script>
export default {
  name: 'Gate',
  data () {
    return {
      isActive: false,
    }
  },

  mounted() {
   // this.isActive = true;
    // console.log(this.$refs);


   },

   watch:{

   },

   methods: {
    close: function(){

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.gate{
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  text-align: center;
  color: #000;
}
.obj{
  position: absolute;
  width: 313px;
  height: 316px;
  top: 50%;
  left: 50%;
  margin-top: -116px;
  margin-left: -153px;
  background: url('../assets/gate.png') no-repeat 50% 50%;
  // background: url('../assets/gate.png') no-repeat 50% 50%;
}
p{
  position: absolute;
  text-indent: -9999em;
  top: 50%;
  left: 50%;
  margin-top: 200px;
  margin-left: -130px;
  width: 254px;
  height: 16px;
  background: url('../assets/message.png') no-repeat 0 0 ;
}


@media (max-width: 1080px) and (max-height: 850px) {
 .obj{width: 156px;height: 158px;background-size:100%; margin-top: -78px; margin-left:-76px;}
 p{width: 127px; height: 8px; margin-top: 80px; margin-left: -65px; background-size: 100%;}
}
</style>
