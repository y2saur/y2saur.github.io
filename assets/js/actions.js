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
        $(this).html("github.com.ph.jsdk");
        $(".contact-link").toggle(500);
    })
    
});

});