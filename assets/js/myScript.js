// Go To UP
 // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }


    // When the user clicks on the button, scroll to the top of the document
        // $(document).ready(function(){
        //     $("#myBtn").click(function(){
        //         $('html,body').animate({
        //             scrollTop  :'0'
        //         }, 800);
        //     });
        // });


        // document.body.scrollTop = 0;
        
    
// End Go To UP



// Activ clas With Scroll
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target  = this.hash,
            menu    = target;
           $target  = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar container collapse navbar-nav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}




    var n=0;
    var move='';
$(document).ready(function(){
    $('#judulAbout').fadeOut();
    $('#tulisanSatu').fadeOut();
    $('#tulisanDua').fadeOut();

    $('#judulSkill').fadeOut();

    // $('#judulPortfolio').fadeOut();
    // $('#p1').fadeOut();
    // $('#p2').fadeOut();
    // $('#p3').fadeOut();
    // $('#p4').fadeOut();
    // $('#p5').fadeOut();
    // $('#p6').fadeOut();


    $(window).scroll(function(){
        var scroll = $(this).scrollTop();

        
        $('#gambar').css({
            'transform': 'translate(0px, '+scroll/1.5+'px)'
        });

        $('#nama').css({
            'transform' : 'translate(0px,'+scroll/2.5+'px)'
        });


        
        // cek up atau down
        if(n<scroll){
            n=scroll;
            move = 'down';
        }else if(n>scroll){
            n=scroll;
            move ='up';
        }





        if(scroll>$('#about').offset().top-55 && move=='down'){
            $('#navbar .navbar').addClass('bg-light');
            $('#navbar .nav-item').addClass('text-dark');
            $('#navbar .navbar .container .navbar-brand').css('color', '#5e8bf2');
        }
        if(scroll<$('#about').offset().top-55 && move=='up'){
            $('#navbar .navbar').removeClass('bg-light');
            $('#navbar .nav-item').removeClass('text-dark');
            $('#navbar .navbar .container .navbar-brand').css('color', '#f1f9f5');
        }

        if(scroll > 150 && move=="down"){
            $('#judulAbout').fadeIn(500, function(){
                $('#tulisanSatu').fadeIn(500, function(){
                    $('#tulisanDua').fadeIn(500);        
                })    
            })
        } 

        if (scroll>570 && move=='down') {
            $('#judulSkill').fadeIn(500)
        }


        if(scroll>$('#about').offset().top-55){
            // console.log('ok')
        }

        // if(scroll < 150 && move=="up"){
        //     $('#judulAbout').fadeOut(2000)
        //     $('#tulisanSatu').fadeOut(2000)
        //     $('#tulisanDua').fadeOut(2000) 
        // }

        // if(scroll>1300 && move=="down"){
        //     $('#judulPortfolio').fadeIn(500)
                // function(){
        //         $('#p1').fadeIn(800, function(){
        //             $('#p2').fadeIn(800, function(){
        //                 $('#p3').fadeIn(800, function(){
        //                     $('#p4').fadeIn(800, function(){
        //                         $('#p5').fadeIn(800, function(){
        //                             $('#p6').fadeIn(800);
        //                         })
        //                     })
        //                 })
        //             })
        //         })
        //     })
        // }

        // if(scroll < 1381 && move=="up"){
        //     $('#p1').fadeOut(300);
        //     $('#p2').fadeOut(300);
        //     $('#p3').fadeOut(300);
        //     $('#p4').fadeOut();
        //     $('#p5').fadeOut();
        //     $('#p6').fadeOut();
        // }


        if (scroll>2557) {
            $('#5').addClass('active')
        }    


        if(scroll>$('#contact').offset().top-75 && move=='down'){
            $('#5').addClass('active');
            console.log('ok');
        }
        if(scroll<$('#contact').offset().top-75 && move=='up'){
            $('#5').removeClass('active');
        }



        // active scroll

        // if(scroll>$('#about').offset().top-55 && move=='down'){
        //     $('#1').removeClass('active');
        //     $('#2').addClass('active');
        // }

        // if(scroll<$('#about').offset().top-55 && move=='up'){
        //     console.log('ok');
        //     $('#2').removeClass('active');
        //     $('#1').addClass('active');
        // }
        
        // if(scroll>$('#skill').offset().top-55 && move=='down'){
        //     $('#2').removeClass('active');
        //     $('#3').addClass('active');
        // }

        // if(scroll<$('#skill').offset().top-55 && move=='up'){

        //     $('#2').addClass('active');
        //     $('#3').removeClass('active');
        // }

    });
});