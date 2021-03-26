// for caps
$(".wcap").click(function(){

    $(".blackcap").hide();
    $(".whitecap").show();
    $(".pinkcap").hide();
});
$(".bcap").click(function(){

    $(".blackcap").show();
    $(".whitecap").hide();
    $(".pinkcap").hide();
});
$(".pcap").click(function(){

    $(".blackcap").hide();
    $(".whitecap").hide();
    $(".pinkcap").show();
});
// for shirts
$(".bshirt").click(function(){

    $(".blackshirt").show();
    $(".purpleshirt").hide();
});
$(".purshirt").click(function(){

    $(".blackshirt").hide();
    $(".purpleshirt").show();
});
// for shorts
$(".bshorts").click(function(){

    $(".blackshorts").show();
    $(".redshorts").hide();
});
$(".rshorts").click(function(){

    $(".blackshorts").hide();
    $(".redshorts").show();
});

// for women
// for topi
$(".btopi").click(function(){

    $(".browntopi").show();
    $(".orangetopi").hide();
    $(".peachtopi").hide();
    $(".greytopi").hide();
});
$(".otopi").click(function(){

    $(".browntopi").hide();
    $(".orangetopi").show();
    $(".peachtopi").hide();
    $(".greytopi").hide();
});
$(".ptopi").click(function(){

    $(".browntopi").hide();
    $(".orangetopi").hide();
    $(".peachtopi").show();
    $(".greytopi").hide();
});
$(".gtopi").click(function(){

    $(".browntopi").hide();
    $(".orangetopi").hide();
    $(".peachtopi").hide();
    $(".greytopi").show();
});
// for tshirts
$(".bltshirt").click(function(){

    $(".blackltshirt").show();
    $(".blueltshirt").hide();
});
$(".blltshirt").click(function(){

    $(".blackltshirt").hide();
    $(".blueltshirt").show();
});
// for pants
$(".blpant").click(function(){

    $(".blacklpant").show();
    $(".whitelpant").hide();
});
$(".wlpant").click(function(){

    $(".blacklpant").hide();
    $(".whitelpant").show();
});

// navigation toggle
$(".toggle-btn").click(function(){
    $(".just-a-div").slideToggle();
});