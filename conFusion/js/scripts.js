$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });
});
$(document).ready(function(){
    $('#logmod').click(function(){
        $('#loginModal').modal('show');
        $('.close').click(function(){
            $('#loginModal').modal('hide');
        });
        $('.cancel-modal').click(function(){
            $('#loginModal').modal('hide');
        });
    });
    $('#resmod').click(function(){
        $('#reserveform').modal('show');
        $('.close').click(function(){
            $('#reserveform').modal('hide');
        });
        $('.cancel-modal').click(function(){
            $('#reserveform').modal('hide');
        });
    });
});