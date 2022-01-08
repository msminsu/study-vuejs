new Vue({
  el: '#vue-app',
  data: {
    name: '송태섭',
    position: '가드',
    website: 'https://namu.wiki/w/%EC%86%A1%ED%83%9C%EC%84%AD'
  },
  methods: {
    greet: function ( val ){
      return 'Good ' + val + '' + this.name;
    }
  }
});