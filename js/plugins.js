$(document).ready( function(){
    
    $("html").niceScroll();
    $(".carousel").carousel({
        
        
        
        interval:500
    });
    $(".gear-check").click(function(){
        $(".color-option").toggle();
        
    });
    var color=  $(".color-option ul li");
    color.
    eq(0).css("background","#911515").end()
    .eq(1).css("background","#C17676").end()
    .eq(2).css("background","#7D76BF").end()
    .eq(3).css("background","#5B8E52");
        color.click(function(){
            
            $("link[href*='them']").attr('href',$(this).attr('data-value'));
            });
        
      
      var scrollButton=$('#scroll-top');
      $(window).scroll(function(){
        console.log($(this).scrollTop());
        if($(this).scrollTop()>=700){
            scrollButton.show();
            
        }
        else{
            scrollButton.hide();
        }
       
        
      });
       scrollButton.click(function(){
            $("html,body").animate({scrollTop:0},600);
            
            });
      
    
    
});

  $(window).load(function(){
          
            $(".loading-overlay .loader").fadeOut(2000,function(){
               $('body').css("overflow","auto");
                $(this).parent().fadeOut(2000,function(){
                    
                    $(this).remove();
                    
                    });
               
                });
           
            
        });
    