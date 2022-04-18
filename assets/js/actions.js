$(document).ready(function(err){

    

    $("#contact-details-2").css("display", "none !important");
    $("#contact-details-2").css("visibility", "hidden");
    $("#contact-details-3").toggle("slow");
    // $("#contact-details-4").hide();
    // $("#contact-details-5").hide();
$(".contact-logo").click(function(e){
    // alert("CLICKED");
//     if($( '#contact-details-1' ).is(":visible")){
//         $( '#contact-details-1' ).hide();
//    } else{
//         $( '#contact-details-1' ).show();
//    }
    var id = $(this).attr("id").slice(-1);
    // alert(id);
    // $("#arrow1").toggle("fast");
    // $("#arrow1").css("visibility", "hidden");
    var active = $( ".bi-triangle-fill.active").attr("id");

    $("#" + active).toggle(500, function(){
        $("#" + active).removeClass("active");
    });
    
    // $( ".bi-triangle-fill.active").toggle("show", function(){
    //     $( this).css("display", "none");
    //     $(this).removeClass("active");

    // });
    
    
    $("#arrow" + id).toggle(500, function(){
        $(this).addClass("active");
    });

    
    $(".contact-link").toggle(100, function(){
        $(this).html("linkedin.com/in/jose-iii-aquino");
        $(this).attr("href", "");
        if(id == 1){//Github
            $(this).html("https://github.com/y2saur");
            $(this).attr("href", "https://github.com/y2saur");
        }
        else if(id == 2){//GMail
            $(this).html("joseiiiaquino@gmail.com");
            $(this).attr("href", "");
        }
        else if(id == 3){//Linked in
            $(this).html("linkedin.com/in/jose-iii-aquino");
            $(this).attr("href", "https://linkedin.com/in/jose-iii-aquino");
        }
        // else if(id == 4){//IG
        //     $(this).html("joseiiiaquino@gmail.com");
        //     $(this).attr("href", "");
        // }
        // else if(id == 5){//Twitter
        //     $(this).html("joseiiiaquino@gmail.com");
        //     $(this).attr("href", "");
        // }
        // $(this).html("github.com.ph.jsdk");
        $(".contact-link").toggle(300);
    })
    
});

});