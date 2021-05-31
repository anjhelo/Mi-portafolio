function funcionenviar(){
    var txtnombre=document.getElementById("txtnombre").value;
    var txtemail=document.getElementById("txtemail").value;
    var txtmensaje=document.getElementById("txtmensaje").value;
    if(txtnombre=="" | txtemail=="" | txtmensaje==""){
        Swal.fire({
            title: '<strong style="color: white;">No deje los campos vacios</strong>',
            background: '#111',
        });
    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '<strong style="color: white;">El mensaje se envio correctamente</strong>',
            showConfirmButton: false,
            timer: 2800,
            background: '#111',
          })
        document.getElementById("txtnombre").value="";
        document.getElementById("txtemail").value="";
        document.getElementById("txtmensaje").value="";
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