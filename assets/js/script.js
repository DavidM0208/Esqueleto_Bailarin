let Esqueleto = "off";
let Esqueleto_Stop = document.getElementById("Esqueleto_Stop");
let Boton_Sonido = new  Audio ("C:/Users/david/OneDrive/Documentos/ADSO/ADSO - VI/LENGUAJE BACKEND JAVASCRIPT/Proyecto_Baila/assets/sound/Boton_Bailar.mp3");
let Boton_Audio = new Audio ("C:/Users/david/OneDrive/Documentos/ADSO/ADSO - VI/LENGUAJE BACKEND JAVASCRIPT/Proyecto_Baila/assets/sound/Audio.mp3");
function dance(){
    // Los 2 == es una sentencia de comparación en el IF, solo 1 = es una sentencia de asignación
    if (Esqueleto == "off"){
        Esqueleto = "on";
        // classList junto a la sentencia add, agrega una clase a la clase a la clase principal
        Esqueleto_Stop.classList.add("Dance");
        Esqueleto_Stop.addEventListener('click', ()=>{
            Boton_Sonido.play();
            Boton_Audio.play();
        })
        console.log("On");
    } else {
        Esqueleto = "off";
        // classList junto a la sentencia remove, quita una clase a la clase a la clase principal
        Esqueleto_Stop.classList.remove("Dance");
        Esqueleto_Stop.addEventListener('click', ()=>{
            Boton_Audio.pause();
        })
        console.log("Off");
    }
}