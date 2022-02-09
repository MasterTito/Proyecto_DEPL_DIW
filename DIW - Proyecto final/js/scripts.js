$(document).ready(function(){
    function compra(){
        var cantidad = $("body > .container > #main > .product").length;
        $("header .user-utils #shopping-cart > span").text(cantidad);
        if(cantidad==0){
            $("#main").text("No hay ningún producto en el carrito");
        }
    }
    compra();
    $("#borrar1").on("click", function() {
        $("#producto1").remove();
        compra();
    });
    $("#borrar2").on("click", function() {
        $("#producto2").remove();
        compra();
    });
    $("#borrar3").on("click", function() {
        $("#producto3").remove();
        compra();
    });
});