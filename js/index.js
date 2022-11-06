const formulario = document.getElementById("formulario");
const btnBorrar = document.getElementById("btn-borrar");
const monto = document.getElementById("monto");
const valorTicket = 200;

//Al hacer click sobre el boton borrar
btnBorrar.addEventListener("click", (e) => {
    e.preventDefault();
    //reiniciamos el formulario
    formulario.reset();
    monto.textContent = "";
});

//Al hacer click sobre el boton resumen
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let tipoDescuento = formulario[4];
    let cantidad = formulario[3];
    let descuento = 0;
    let precio = 0;

    //asignamos el tipo de descuento de acuerdo a lo seleccionado
    switch(tipoDescuento.value){
        case "estudiante":
            descuento = 0.8;
            break;
        case "trainee":
            descuento = 0.5;
            break;
        case "junior":
            descuento = 0.15;
            break;
    }

    //si la cantidad seleccionada es 0 el monto se queda en 0 y retorna
    if(cantidad.value < 1){
        monto.textContent = 0;
        return;
    }else{
        //si la cantidad es mayor a 0 se aplica el descuento
        precio = valorTicket - (valorTicket * descuento);
    }

    //Modificamos el monto con el total de tickets
    monto.textContent = precio * cantidad.value;
});