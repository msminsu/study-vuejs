<template>
<!-- isACtive && 'active' -->
    <div :class="['detail']" :style="{ 'background': this.listData.color}">
      <button class="btn-close" ref="kkk" @click="close">x</button>
      <button :class="['btn-prev', isPrev && 'active']" @click="prev">prev</button>
      <button :class="['btn-next', isNext && 'active']" @click="next">next</button>
      <h3 ref="aaa">{{listData.title}}</h3>
      <!-- <img :src="require(`listData.src`)" alt=""> -->
      <img :src="require('@/assets/' + listData.src + '.png')" alt="">
      <div class="page">{{ listData.id }}<span> / {{maxList}}</span></div>
      <div class="wrap">
        <template  v-if="listData.href != null">
        <a class='launch' :href="listData.href" target="_blank">LAUNCH PROJECT</a>
        </template>
        <template v-else  >
          <a class="closed" href="#;">PROJECT RENEWED</a>
        </template>
        <dl>
        <dt>DESCRIPTION</dt>
        <dd>{{listData.content}}</dd>
        </dl>
        <dl>
        <dt>SKILL</dt>
        <dd>{{listData.skills}}</dd>
        </dl>
        <dl>
        <dt>WORK RATE</dt>
        <dd>{{listData.works}}</dd>
        </dl>

      </div>



    </div>

</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      isActive: false,
      randomColor: '#fff',
      src:this.listData.src,
      isPrev : false,
      isNext : false,
    }
  },

  props : ['mode','listData','maxList'],

  mounted() {
   // this.isActive = true;
    // console.log(this.$refs);
    this.randomColor = this.listData.color//this.getRandomColor();//'#3a3c68'//

    if(this.listData.id  > 1) {this.isPrev = true;}
    if(this.listData.id < this.maxList){ this.isNext= true;}

   },

   watch:{

   },

   methods: {
    close: function(){
      this.isActive = false;
      this.$emit('modeChange', 'list')
    },
    prev: function(){
      var current = this.listData.id-1;
this.isNext = true;
      if( current <= 1){
        this.isPrev = false;
        } else{
        this.isPrev = true;
      }
        this.$emit('dataChange', current)

    },
    next: function(){
      var current = this.listData.id+1;
      this.isPrev = true;
      if( current >= this.maxList){
        this.isNext = false;
        } else{
        this.isNext = true;
      }
      this.$emit('dataChange', current)
    },
    getRandomColor: function () {
        var letters = '0123456789ABCDEF';
        var color = '#00';
        for (var i = 0; i < 4; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
/*               let r = Math.floor(Math.random() * 255)
              let g = Math.floor(Math.random() * 255)
              let b = Math.floor(Math.random() * 255)
              let a = .3
              return `rgba(${r},${g},${b},${a})` */
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin closeAni($width:false, $height:false,$bg:false,$round:false){
	transition: 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 50%;
	&:before,&:after{display: block; position: absolute; content:'';
		margin:auto;left: 0;top: 0;right: 0;bottom: 0;
		width: $width;height: $height; background: $bg;border-radius: $round;
	}
	&:before{transform: rotate(45deg)}
	&:after{transform: rotate(-45deg)}
	&:hover{transform: rotate(-90deg);}
}
.detail{
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height:100%;
  min-width: 1080px;
  box-sizing: border-box;
  padding: 85px;
  text-align: center;
  background: gray;
  transition: all 1000ms cubic-bezier(0.165, 0.840, 0.440, 1.000);
  color: #fff;
  h3{display: block;font-size: 30px;margin: 50px;
  text-shadow: 3px 3px 5px rgba(3,12,17,0.35);
  }
}

.detail.active{
  height: 100%;
  top:0;
  transition: all .7s cubic-bezier(0.165, 0.840, 0.440, 1.000);
}

// img{width: 600px;box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5); }
.btn-close{
  border:none;
  outline:none;
  font-size: 24px;
  color:#fff;
  background: none;
  cursor: pointer;
  display: block;
  position: absolute;
  text-indent: -9999em;
  width: 50px;
  height: 50px;
  right: 30px;
  top: 30px;
  @include closeAni($width:50px,$height:2px,$bg:#fff);
}
.btn-prev{
  display: block;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  margin-top: -50px;
  left: 50px;
  outline:none;
  border:none;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-color: gray;
  background: none;
  text-indent: -999em;
  transform: rotate(-45deg);
  opacity: .5;

  &.active{
    opacity: 1;
    border-color: #fff;
    cursor: pointer;
  }

}
.btn-next{
  display: block;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  margin-top: -50px;
  right: 50px;
  outline:none;
  border:none;

  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  border-color: gray;
  background: none;
  text-indent: -999em;
  transform: rotate(45deg);
  opacity: .5;

  &.active{
    opacity:1;
    border-color: #fff;
    cursor: pointer;
  }

}
.wrap{position: relative;     width: 890px; margin: 0 auto;}
dl{
  font-size: 14px;
  margin-right: 30px;
  text-align-last: left;
  dt{font-weight: bold;}
  dd{margin-bottom: 10px;}
}
.page{font-size: 14px;
 span{ color: #000}
}
a{
  position: absolute;
  right:0;
  top: 0;
  display: inline-block;padding:3px 10px;
  text-decoration: none; color: #fff; font-size: 11px;
  border:1px solid #fff; border-radius: 5px;
  &:hover{color:#404040; background: #fff;}
  &.closed{
    color:#998;
     border-color: #404040;cursor:default; background: #404040;
    opacity: .5
    }
}



@media (max-width: 1080px) and (max-height: 850px) {
  .detail{width: 100%;min-width: auto;padding: 30px;
  h3{font-size: 24px;margin: 20px;}
  }

  .wrap{width: 100%; font-size: 12px;
  dl{font-size: 12px;text-align: left;}
  }
  .page{margin-bottom: 30px;}
  img{width: 100%;}
  .btn-close{top: 10px;right: 10px;}
  .btn-prev,.btn-next{width: 20px;height: 20px;margin-top: -10px;}
  .btn-prev{left: 10px;}
  .btn-next{right: 10px;}
 a{position: relative;margin-bottom: 30px;}
}
</style>
