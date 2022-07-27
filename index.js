//Cargar las preguntas//

let INDEX_PREGUNTA = 0 
let puntaje = 0
cargarPregunta(INDEX_PREGUNTA);


function cargarPregunta(index){
    objetoPregunta = baseDePreguntas[index];
    opciones= [... objetoPregunta.distractores];
//Cargar las preguntas y las distracciones aleatoriamente//
    opciones.push(objetoPregunta.respuesta)
    
    for (let i= 0;i < 4; i++){
        opciones.sort(()=>Math.random() - 0.5);
    }

    document.getElementById('pregunta').innerHTML= objetoPregunta.pregunta;
    if(objetoPregunta.imagen){
        document.getElementById("placeholder").src = objetoPregunta.imagen;
        document.getElementById("placeholder").style.display = "";

    }else{
        document.getElementById("placeholder").style.display = "none";
    }

    if (objetoPregunta.ayuda) {
        document.getElementById("ayuda").style.display = "";
      } else {
        document.getElementById("ayuda").style.display = "none";
      }

    document.getElementById('opcion-1').innerHTML= opciones[0]
    document.getElementById('opcion-2').innerHTML= opciones[1]
    document.getElementById('opcion-3').innerHTML= opciones[2]
    document.getElementById('opcion-4').innerHTML= opciones[3]

    document.getElementById('preguntaNro').innerHTML= objetoPregunta.preguntaNro;


}


//Para seleccionar la opcion//
 
async  function seleccionarOpcion(index){
    let validezRespuesta = opciones[index]== objetoPregunta.respuesta
    if(validezRespuesta){
        await Swal.fire({
            title:"Respuesta Correcta",
            text:"La respuesta ha sido correcta",
            icon:"success"
        })
        puntaje++
    }else{
       await Swal.fire({
            title:"Respuesta Incorrecta",
            html:`La respuesta correcta es ${objetoPregunta.respuesta}`,
            icon:"error"
        }) 
    }
    //esto sirve para que una vez que no haya mas preguntas
    //en la base el juego se termine y de el puntaje 

    //Para el puntaje se seteo una variable al principio y por cada respuesta correcta se la suma un0
    INDEX_PREGUNTA++;
    if(INDEX_PREGUNTA>= baseDePreguntas.length){
       
        await Swal.fire({
            title:"Juego Terminado",
            text:`Tu puntuaje fue de "${puntaje}/${baseDePreguntas.length}"`,
        });
         //esto se pone para que el resultado muestre cuanto es el total de preguntas que habia en relacion a cuantos puntos tiene 
         INDEX_PREGUNTA = 0;
         puntaje=0;
    }
        cargarPregunta(INDEX_PREGUNTA);

}

function ayuda(){
    Swal.fire({
        title: "Ayuda",
        text: objetoPregunta.ayuda,
        imageUrl: objetoPregunta.ayudaImg,
        imageHeight: 300,
    });
}