<template>
  <div id="app">
    <ListComponent v-on:modeChange='onModeChange' v-show="mode ==='list'" :mode="mode"  :lists = 'lists'></ListComponent>
    <transition name="slide-up" >
      <Detail v-if="isSlide" @dataChange="onDataChange" @modeChange='onModeChange' :mode="mode" :listData = 'listData' :maxList = 'maxList'></Detail>
    </transition>
    <Gate v-if="mode ==='gate'"></Gate>
  </div>
</template>

<script>
import ListComponent from './components/listComponent'
import Detail from './components/detail'
import Gate from './components/gate'

export default {
  name: 'App',
  data: function(){
    return {
      mode: 'gate',
      listData:null,
      isSlide : false,
      maxList : null,
      lists:[
        {
          id: 1,
          title: "SAMSUNG Life Style TV",
          content: "SAMSUNG 라이프스타일TV 쇼퍼 프로모션 제작",
          skills: "Html5, Css3, JavaScript, Jquery, Sass, Gulp",
          works: "100%",
          href: "https://www.samsung.com/sec/eventList/lifestyletv_shoffer/",
          src: "shoffer",
          color: "#1f80f5",
          date: "Jun 2019"
        },
        {
          id: 2,
          title: "SAMSUNG JBL·AKG·Harman/Kardon",
          content: "SAMSUNG JBL·AKG·Harman/Kardon 프로모션 제작",
          skills: "Html5, Css3, JavaScript, Jquery, Sass, Gulp",
          works: "100%",
          href: "https://www.samsung.com/sec/templateEvent/2019_sound_launch/",
          src: "jbl",
          color: "#013236",
          date: "Jun 2019"
        },
        {
          id: 3,
          title: "SAMSUNG Galaxy S10 CASE",
          content: "SAMSUNG Galaxy S10 CASE 프로모션 제작",
          skills: "Html5, Css3, JavaScript, Jquery, Sass, Gulp",
          works: "100%",
          href: "https://www.samsung.com/sec/templateEvent/mobile_acc_special_offer/",
          src: "case",
          color: "#f1c412",
          date: "May 2019"
        },
          {
          id: 4,
          title: "SAMSUNG Galaxy Tabs5e",
          content: "SAMSUNG Galaxy Tabs5e 런칭 프로모션 제작",
          skills: "Html5, Css3, JavaScript, Jquery, Sass, Gulp",
          works: "100%",
          href: "https://www.samsung.com/sec/eventList/galaxytabs5e_launching",
          src: "tab",
          color: "#e475af",
          date: "May 2019"
        },
         {
          id: 5,
          title: "Galaxy S10 5G 런칭",
          content: "SAMSUNG Galaxy S10 5G 런칭 프로모션 제작",
          skills: "Html5, Css3, JavaScript, Jquery, Sass, Gulp",
          works: "100%",
          href: "https://www.samsung.com/sec/galaxys10/launching/",
          src: "5G",
          color: "#000000",
          date: "Apr 2019"
        },
        {
          id: 6,
          title: "Lineage2",
          content: "lineage2 전란의 서막 : Pc web & Mobile web 제작",
          skills: "Html, Css, JavaScript, Jquery, Sass, Gulp, Webpack, TweenMax",
          works: "100%",
          href: "http://lineage2.plaync.com/update/history/2018/181212_prologue/intro",
          src: "lineage2",
          color: "#102137",
          date: "July 2018"
        },
        {
          id: 7,
          title: "Blade & Soul",
          content: "Blade & Soul : 태천왕릉 Pc web & Mobile web",
          skills: "Html, Css, JavaScript, Jquery, Sass, Gulp, Webpack, TweenMax",
          works: "100%",
          href: "http://bns.plaync.com/update/history/2017/170913_taecheon",
          src: "bns",
          color: "#9a8468",
          date: "July 2017"
        },
        {
          id: 8,
          title: "Lineage",
          content: "리니지 프로모션 제작 반응형 작업",
          skills: "Vue JS, Html, Css, JavaScript, Jquery, Sass, Gulp, Webpack",
          works: "100%",
          href: "https://lineage.plaync.com/regular/magicdoll",
          src: "lineage",
          color: "#846a4a",
          date: "July 2017"
        },
        {
          id: 9,
          title: "KT",
          content: "웹표준 , 접근성 적응형 사이트 메인 화면 가이드 작업",
          skills: "Html, Css, JavaScript, Jquery",
          works: "100%",
          href: "https://www.kt.com/",
          src: "kt",
          color: "#d4232e",
          date: "Mar 2017"
        },
        {
          id: 10,
          title: "KT BIZ",
          content: "웹표준 , 접근성 적응형 사이트 메인 화면 가이드 작업",
          skills: "Html, Css, JavaScript, Jquery",
          works: "100%",
          href: "https://biz.kt.com/",
          src: "biz",
          color: "#4a4a4a",
          date: "Mar 2017"
        },
        {
          id: 11,
          title: "KT COMPANY",
          content: "웹표준 , 접근성 적응형 사이트 메인 화면 가이드 작업",
          skills: " Html, Css, JavaScript, Jquery",
          works: "100%",
          href: "https://corp.kt.com/",
          src: "corp",
          color: "#27aba3",
          date: "Mar 2017"
        },
        {
          id: 12,
          title: "Hanwha Compound",
          content: "웹표준 , 접근성 작업, 스크립트 작업",
          skills: "Html, Css, JavaScript, Jquery, TweenMax",
          works: "100%",
          href: "http://www.hanwhacompound.co.kr/webapp/main/index.jsp",
          src: "compound",
          color: "#ed7127",
          date: "Mar 2016"
        },
        {
          id: 13,
          title: "Hanwha Fund",
          content: "국문/영문 디자인 리뉴얼 및 모바일 사이트 구축, 접근성 마크 획득",
          skills: "Html, Css, JavaScript, Jquery, TweenMax",
          works: "100%",
          href: "http://www.hanwhafund.co.kr/webapp/hw_kor/hw_intro/hw_intro.jsp",
          src: "hanwhafund",
          color: "#fb9147",
          date: "Nov 2015"
        },
        {
          id: 14,
          title: "Hanwha Life",
          content: "한화생명 모바일 창구, 퇴직연금 통합 및 웹사이트 개편 웹표준 , 접근성 작업, 스크립트 작업",
          skills: "Html, Css, JavaScript, Jquery",
          works: "100%",
          href: null,
          src: "hanwhalife",
          color: "#ea5332",
          date: "Sep 2015"
        },
        {
          id: 15,
          title: "Samsung",
          content: "삼성전자 글로벌, 한국총괄 리뉴얼  반응형 웹, 163개국 확산 작업",
          skills: "Html5, Css3",
          works: "회사소개 (100%),  상품페이지( 70% )",
          href: null,
          src: "samsung",
          color: "#14279f",
          date: "Feb 2015"
        },
        {
          id: 16,
          title: "BOBBI BROWN",
          content: "DRUPAL CMS를 이용한 이커머스 사이트 작업",
          skills: "Html, Css, JavaScript",
          works: "100%",
          href: "https://www.bobbibrown.co.kr/?cm_mmc=Keywordsearch-_-Google-_-Brand-_-100046&&gclid=Cj0KCQjw_vfcBRDJARIsAJafEnElTHNr9_FvXqfkNholxkoajuPMi2i89FoPDikNian-9Y4JJLjGUeEaAoJIEALw_wcB",
          src: "bobbi",
          color: "#ea958f",
          date: "Oct 2014"
        },
        {
          id: 17,
          title: "Tempur Korea",
          content: "템퍼코리아 사이트 리뉴얼",
          skills: "Html, Css, JavaScript, Jquery, TweenMax",
          works: "100%",
          href: null,
          src: "tempur",
          color: "#01438a",
          date: "Dec 2013"
        },
        {
          id: 18,
          title: "Heinz Korea",
          content: "하인즈 브랜드 사이트 리뉴얼 웹표준 , 접근성 작업, 스크립트 작업",
          skills: "Html, Css, JavaScript, Jquery, TweenMax",
          works: "100%",
          href: null,
          src: "heinz",
          color: "#d53539",
          date: "July 2017"
        },
        {
          id: 19,
          title: "YUNGJIN Pharmaceutical",
          content: "영진약품 영문 사이트 구축",
          skills: "Html, Css, JavaScript, Jquery",
          works: "100%",
          href: "http://eng.yungjin.co.kr/",
          src: "yungjin",
          color: "#f5961c",
          date: "Jan 2013"
        },
         {
          id: 20,
          title: "Book Writing",
          content: "따라 하면서 배우는 HTML5 + CSS3 + jQuery + JavaScript 실무 활용 14가지",
          skills: "Html5, Css3",
          works: "03장, 06장",
          href: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=26933908",
          src: "book",
          color: "#d63d00",
          date: "Jan 2013"
        },
        /* {
          id: 15,
          title: "Blasde & Soul",
          content: "블레이드 & 소울 프로모션 제작 Pc web & Mobile web",
          skills: "Html, Css, JavaScript, Jquery, Sass, Gulp, Webpack, TweenMax",
          works: "100%",
          href: "http://bns.plaync.com/update/history/2017/170913_taecheon",
          src: "",
          color: "",
          date: "July 2017"
        },
        {
          id: 16,
          title: "Blasde & Soul",
          content: "블레이드 & 소울 프로모션 제작 Pc web & Mobile web",
          skills: "Html, Css, JavaScript, Jquery, Sass, Gulp, Webpack, TweenMax",
          works: "100%",
          href: "http://bns.plaync.com/update/history/2017/170913_taecheon",
          src: "",
          color: "",
          date: "July 2017"
        },
        {
          id: 17,
          title: "Blasde & Soul",
          content: "블레이드 & 소울 프로모션 제작 Pc web & Mobile web",
          skills: "Html, Css, JavaScript, Jquery, Sass, Gulp, Webpack, TweenMax",
          works: "100%",
          href: "http://bns.plaync.com/update/history/2017/170913_taecheon",
          src: "",
          color: "",
          date: "July 2017"
        } */
      ]
    }
  },

  watch:{
    mode: function(){
      // console.log(this.$el);
    }

  },
  components: {
    Detail,
    ListComponent,
    Gate,
  },
    mounted() {
      this.maxList = this.lists.length;
      var that = this;
       var mainIntro = new TimelineMax();
            mainIntro
                .from($(".obj"), 1, {y:100,opacity:0, ease:Power2.easeOut})
                .from($(".message"), 1, {y:5,opacity:0, ease:Power2.easeOut}, "-=0.1")
               .to($(".gate"), 2, {opacity:0, ease:Power2.easeOut, onComplete:function(){
                 that.completeGate()
                }})

    },
beforeUpdate(){

},
  methods: {

    onModeChange: function(data,list){
      this.mode = data
      this.listData = list
      this.isSlide= !this.isSlide;
    },
    onDataChange: function(id){
      var max  = this.lists.length;

      if( 0<id && id <= max  ){
       this.listData = this.lists[id-1]
      }
    },
    completeGate : function(){
      this.mode = 'list';
      var mainIntro2 = new TimelineMax();
            mainIntro2
                .from($(".tape"), 1, {top:0,  ease:Power2.easeOut})
                .from($(".ruler"), 1, {height:0, display:'none', ease:Power2.easeOut}, "-=1")
                .staggerFromTo($('li') , 0.7, {y:500, alpha:0}, {y:0, alpha:1, ease:Power2.easeOut, onComplete:function(){
                  $('i').css({transition : 'all 1s'});
                }}, 0.2, "-=0.7");

    }

  }

}
</script>

<style lang="scss"  >
// @import url('http://fonts.googleapis.com/earlyaccess/notosanskr.css');
body{font-family: 'Noto Sans KR' !important;word-break:keep-all;}
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{background: #f4f4f4;
font: 42px/1.4 'Noto Sans KR',  "Times New Roman", Times, serif;
}


.slide-up-enter,.slide-up-leave-to{
  transition: all 8s ease;
transform: translateY(100%);
}

.slide-up-enter-to,.slide-up-leave{
  transform: translateY(0%);
}

</style>
