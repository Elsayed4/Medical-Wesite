 $(function(){
    //starting manage sticky appear and background after specific  
    $(window).scroll(function(){
    var flag = $(window).scrollTop();
     console.log(flag);
         if(flag > 500){
             $('nav').addClass("sticky-top");
             $('nav').css({
               backgroundColor:'#fff',
               opacity:1,
             });
             
         } else{
             $('nav').removeClass("sticky-top");
             $('nav').css({
                  backgroundColor: '#edf0f2',
                  opacity: .8,
             });

         }
        
    });
     
      
     
     
 $(".nav-item .nav-link").click(function(e){
    e.preventDefault();
    $("html,body").animate({
        scrollTop:$('#'+$(this).data('scroll')).offset().top
    },1000);
});  
    
     
     
 $(".navbar .nav-item .nav-link").mouseenter(function(){
    $(this).children("span").animate({
       width:"50px",  
    },800);
     
 });  

    
 $(".navbar .nav-item .nav-link").mouseleave(function(){
    
     $(this).children("span").animate({
       width:"0", 
    },10);
     
 });  
    
//     $('.counter').counterUp({
//                delay: 10,
//                time: 1000
//               });

    
});