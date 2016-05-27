$(document).on("ready",function() {
    $(".menu a").smoothscrolling();

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $('.scrollup').fadeIn();
        }
        else {
            $('.scrollup').fadeOut();
        }
    });
});

$('#demo').jQMeter({
    goal:'$8,900',
    raised:'$6,600',
    width:'300px',
    height:'25px',
    bgColor:'#212121',
    barColor:"#ec2079",
});

$('#demo').jQMeter({
    width:"100%",
    height:"50px",
    bgColor:"#212121",
    barColor:"#ec2079",
    orientation:"horizontal",
    counterSpeed: 3000,
    animationSpeed: 3000,
    displayTotal:true
});

