function funcionenviar() {
    var txtnombre = document.getElementById("txtnombre").value;
    var txtemail = document.getElementById("txtemail").value;
    var txtmensaje = document.getElementById("txtmensaje").value;
    if (txtnombre == "" | txtemail == "" | txtmensaje == "") {
        Swal.fire({
            title: '<strong style="color: white;">No deje los campos vacios</strong>',
            background: '#111',
        });
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '<strong style="color: white;">El mensaje se envio correctamente</strong>',
            showConfirmButton: false,
            timer: 2800,
            background: '#111',
        })
        document.getElementById("txtnombre").value = "";
        document.getElementById("txtemail").value = "";
        document.getElementById("txtmensaje").value = "";
    }
}
//   if(txtnombre=="" && txtemail=="" && txtmensaje==""){
//       alert("No dejes los campos vacios");
//   }else{
//       alert("Se envio correctamente su mensaje");
//este de abajo es para darle estilo a los elementos
//       document.getElementById("mensajealerta").style.color="green";
//este de abajo es para limpiar el campo detexto
//       document.getElementById("txtnombre").value="";
//       document.getElementById("txtemail").value="";
//       document.getElementById("txtmensaje").value="";
//    }
//}
function mostrar() {
    document.getElementById("numero").innerHTML = '<p style="cursor: text;color: white;" class="number">990974699 - 968628429</p>';
}
function mostrardireccion() {
    document.getElementById("direccion").innerHTML = '<p style="cursor: text;color: white;" class="direction">Huancayo - Junin - Perú</p>';
}
function mostrarcorreo() {
    document.getElementById("correo").innerHTML = '<p style="cursor: text;color: white;" class="email">anjhelovo@siempreelmejor.tk</p>';
}

//boton arriba//
function irarriba() {
    var desplazamientoscroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (desplazamientoscroll > 0) {
        //Para dar efecto suave al scroll
        //window.requestAnimationFrame(irarriba);
        window.scrollTo(0, desplazamientoscroll - (desplazamientoscroll / 1));
        document.getElementById("button-up").style.transform="scale(1.1)";
        document.getElementById("arriba").style.transform="scale(0)";
    }
}
window.onscroll = function () {
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 500){
        document.getElementById("button-up").style.transform="scale(1)";
    }else if(scroll<500){
        document.getElementById("button-up").style.transform="scale(0)";
    }
}