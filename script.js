
let video;
let audioOvers=null;
let audioOverOut=null;

function init(){
    audioOvers = new Sonidos('33');
    audioOverOut = new Sonidos('32');

  
    document.querySelector('.btn1').addEventListener('mouseover',btnOverMenu,false)
    document.querySelector('.btn1').addEventListener('mouseout',btnOutMenu,false)
    document.querySelector('.btn2').addEventListener('mouseover',btnOverMenu,false)
    document.querySelector('.btn2').addEventListener('mouseout',btnOutMenu,false)

}

function btnOverMenu() {
    audioOvers.playAudio()
    audioOverOut.stopAudio()
}


function btnOutMenu() {
    audioOvers.stopAudio()
    audioOverOut.playAudio()
}



 
// Get the modal
let modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

/* span.addEventListener('click', ocultarModal); */
window.addEventListener('click', ocultarModalVentana)

function ocultarModal() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function ocultarModalVentana(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function MostrarVideo(){
    modal.style.display = "flex";
}

function OcultarVideo(){
   
    modal.style.display = "none";
}

