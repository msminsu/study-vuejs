(function($){
    $.fn.removeAni = function(){
        this.each(function(index){
           var $target = $(this);
            $target.delay(index*1000).animate({height:0},500,function(){
                $target.remove();
            })
        });
        return this;
    }
})(jQuery);

$(document).ready(function(){
    $(".menu li").removeAni();
});


[utility.js]
function sum(a, b) {
    return a + b;
}

function product(a, b) {
    return a * b;
}
export { product, sum }


[app.js]
import { product, sum } from 'utility';

console.log(product(1, 2)); // 2
console.log(sum(1, 2));// 3

 