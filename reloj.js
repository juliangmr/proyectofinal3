// funcion flecha 
const getHora = () =>{
    // sentencias o instrucciones 
    const fecha = new Date();  // Creacion de objeto date "Fecha"
    // console.log(fecha.getHours())
    const tiempo = {hora: fecha.getHours(), 
                    minuto:fecha.getMinutes(), 
                    segundo: fecha.getSeconds()
                }

    document.querySelector(".reloj").innerHTML = `${tiempo.hora}:${tiempo.minuto}:${tiempo.segundo}`
}
setInterval(getHora,1000)

function modificarDesc(){
    let desc = document.querySelector("#span");
    setTimeout(() =>{
        desc.textContent = "Hecho con las mejores herramientas"
    }, 0);
    setTimeout(() =>{
        desc.textContent = "El mejor reloj digital por haber"
    }, 3000);

}
modificarDesc()
setInterval(modificarDesc, 6000)