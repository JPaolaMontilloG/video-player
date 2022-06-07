const $video = document.querySelector('#video') //const: define variables. Signo $: referencia a un elemento HTML.
        //document: Método/Función implementada, referencia al elemento HTML, recibe como parámetro al elemento '#': Referencia al id del HTML.
const $play = document.querySelector('#play')  //#: Mismo nombre del atributo "id" del botón
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play() //Método play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Le diste clic al botón Play')
}

function handlePause() {
    $video.pause() //Método pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('Le diste clic al botón Pause')
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    $video.currentTime = $video.currentTime - 10  //Propiedad del video
    console.log('Para retroceder 10 segundos', $video.currentTime)
}

$forward.addEventListener('click', handleForward)

function handleForward() {
    //$video.currentTime = $video.currentTime - 10
    $video.currentTime += 10
    console.log('Para avanzar 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

//Función para saber la duración total del video
function handleLoaded() {
    $progress.max = $video.duration
    console.log('Ha cargado el video:', $video.duration)
}

//Función para conocer el tiempo actual del video
function handleTimeUpdate() {
    $progress.value = $video.currentTime
    //console.log('Tiempo actual:', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}