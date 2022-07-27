function LaTex(code){
    return`https://latex.codecogs.com/svg.image?\\large&space;${code}`
}
function opnLaTex(code){
   return `<img src="${LaTex(code)}" style="height:40px">` 
}

let baseDePreguntas=[
   
    {
        pregunta:" Quien pinto la mona Lisa?",
        ayuda:"Tambien pinto la ultima cena",
        ayudaImg:"https://i.ibb.co/wNgDLLp/ultima-cena-milan.jpg",
        imagen:"https://i.ibb.co/RcqGTK9/leonardo-7.jpg",
        respuesta:"Leonardo Da Vinci",
        distractores: [
            "Picasso",
            "Beethoven",
            "Miguel Angel"
        ],
        preguntaNro:"1/4",
    },
    {
        pregunta:"Cuanto es 100 + 50 * 4?",
        ayuda:"Recuerda Separar bien los terminos",
        respuesta:"300",
        distractores: [
            "200",
            "500",
            "450"
        ],
        preguntaNro:"2/4",
    },
    {
        pregunta:" Cual de estos NO es un color Secundario?",        ayudaImg:"https://i.ibb.co/wNgDLLp/ultima-cena-milan.jpg",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Gradient_color_wheel.png/377px-Gradient_color_wheel.png",
        respuesta:"Amarillo",
        distractores: [
            "Violeta",
            "Naranja",
            "Verde"
        ],
        preguntaNro:"3/4",
    },
    {
        pregunta: "Cual es el resultado de la siguiente operacion?",
        imagen:LaTex(`\\int x dx`),
        respuesta:opnLaTex ("\\frac{1}{2}x^2"),
        distractores:[opnLaTex ("\\frac{1}{3}x^2"), opnLaTex ("x^2"), "2X"],
        preguntaNro:"4/4",
    },
]