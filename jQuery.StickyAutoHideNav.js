/*
*Plugin name: test JQuery plugin
*Author: Nguyen Minh Thong
*license: Free
*/

(function($){
    $.hideOnScroll = function(options){
        var setting = $.extend({
            hide:'#mynav'
        }, options);
        var dau = window.pageYOffset;
        $(window).scroll(function(){
            var sau = window.pageYOffset;
            if(dau >= sau){
            		$(setting.hide).css("display", "block");
            }else{
            		$(setting.hide).css("display", "none");
            }
            dau = sau;
        });
        
    }
}(jQuery));
