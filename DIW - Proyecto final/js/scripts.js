$(document).ready(function(){
    function compra(){
        var cantidad = $("body > .container > #main > .product").length;
        $("header .user-utils #shopping-cart > span").text(cantidad);
        if(cantidad==0){
            $("#main").text("No hay ningún producto en el carrito");
            $("#main").css({"margin-left": "31%", "font-size": "30px"});

        }
    }
    function sumar(){
        var suma = 0;
        $(".precio_T").each(function(){
            suma+=parseFloat($(this).text());
            $(".precio_Total").text(suma);
            
        })
    }
    compra();
    sumar();
    $("#borrar1").on("click", function() {
        $("#producto1").remove();
        compra();
        sumar();
    });
    $("#borrar2").on("click", function() {
        $("#producto2").remove();
        compra();
        sumar();
    });
    $("#borrar3").on("click", function() {
        $("#producto3").remove();
        compra();
        sumar();
    });
    $(document).scroll(function() {

        if($(this).scrollTop() > 30){          
          $('#totop').fadeIn(500);
    
        }else{          
          $('#totop').fadeOut(500);
        }
      });
    
      $('#totop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
      });
    
    
});