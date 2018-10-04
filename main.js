$(document).ready(function(){
     $('#left').click(function(){
         
           $(this).parents('.slide-content').css('left','361px');
            $(this).parents('.wrapper').css('display','none');
             $(this).parents('.wrapper').siblings('.wrapper-2').css('display','block');
             $('#one').css('visibility','visible');
             $('#one').css('opacity','1');
              $('#two').css('visibility','hidden');
             $('#two').css('opacity','0');

     });

      $('#right').click(function(){
         
           $(this).parents('.slide-content').css('left','0px');
            $(this).parents('.wrapper-2').css('display','none');
             $(this).parents('.wrapper-2').siblings('.wrapper').css('display','block');
           $('#two').css('visibility','visible');
             $('#two').css('opacity','1');
             $('#one').css('visibility','hidden');
             $('#one').css('opacity','0');
     });
});