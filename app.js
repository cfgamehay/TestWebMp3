const playBtn = document.querySelector('.play')
const playAudio = document.querySelector('audio')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.back-btn')
const timeDuration = document.querySelector('.duration')
const timeCurrent = document.querySelector('.current-time')
const rangeBar = document.querySelector('.range')
const title = document.querySelector('h3')
const img = document.querySelector('.mp3-header img')
const header = document.querySelector('.mp3-header')
let isPlay = true;
// let musics =['chandelier','7thElement','christmas','hello']
let musics = [
    {
        id: 1,
        name: 'All I Want for Christmas is .... (Cardi B)',
        src: 'christmascardiB.mp3',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYEzdicIurS07k_fJM0plE_DbtGvJxs6uu6w&usqp=CAU'
    },
    {
        id: 2,
        name: '7th Element',
        src: '7thElement.mp3',
        image: 'https://i1.sndcdn.com/artworks-000366149580-l7mw69-t500x500.jpg'
    },
    {
        id: 3,
        name: 'Chandelier',
        src: 'chandelier.mp3',
        image: 'https://pbs.twimg.com/profile_images/756533989943443458/O0lktbuc_400x400.jpg'
    },
    {
        id:4,
        name: 'All I Want for Christmas is you',
        src: 'christmas.mp3',
        image: 'https://do.stemup.app//upload/54265-All-I-Want-For-Christmas-Is-You.jpg'
    },
    {
        id:5,
        name: 'Hello',
        src: 'hello.mp3',
        image: 'https://kenh14cdn.com/203336854389633024/2021/10/25/photo-1-1635164509999875832467.png'
    }
]

let musicIndex = 0 
let timer;

playBtn.addEventListener('click',play)
prevBtn.addEventListener('click',prevMusic)
nextBtn.addEventListener('click',nextMusic)
rangeBar.addEventListener('change',changeRange)
playAudio.addEventListener('ended',autoChange)

function start(){
    title.textContent = musics[musicIndex].name
    img.setAttribute('src' ,musics[musicIndex].image)
    playAudio.setAttribute('src',`./music/${musics[musicIndex].src}`)
}

start()
// function

//play
function play(){
if (isPlay == true){
    playAudio.play()
    isPlay = false;
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    timer = setInterval(time , 500)
    header.classList.add('rotate')
}else{
    playAudio.pause()
    isPlay = true;
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    clearInterval(timer)
    header.classList.remove('rotate')
}} 

//next music
function nextMusic(){
    if(musicIndex == musics.length -1){
        musicIndex = 0;
    }else{
        musicIndex++
    }
        playAudio.setAttribute('src',`./music/${musics[musicIndex].src}`)
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
        img.setAttribute('src' ,musics[musicIndex].image)
        title.textContent = musics[musicIndex].name
        isPlay = true;
}
//prev music
function prevMusic(){
    if(musicIndex == 0){
        musicIndex = musics.length -1;
    }else{
        musicIndex--
    }
        playAudio.setAttribute('src',`./music/${musics[musicIndex].src}`)
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
        img.setAttribute('src' ,musics[musicIndex].image)
        title.textContent = musics[musicIndex].name
        isPlay = true;
}

//time
function time(){
    timeDuration.innerText = formatTime(playAudio.duration)
    timeCurrent.innerText = formatTime(playAudio.currentTime)
    rangeBar.value = playAudio.currentTime;
    rangeBar.max = playAudio.duration ;
    
}
//formatTime
function formatTime(number){
    minutes = Math.floor(number/60)
    seconds = Math.floor(number - minutes * 60)
    if (seconds<10){
        seconds = `0${seconds}`
    }
    if (minutes<10){
        minutes = `0${minutes}`
    }
    return `${minutes}:${seconds}`
}
// range
function changeRange(){
    playAudio.currentTime = rangeBar.value
}
//next bài khi hết nhạc
function autoChange(){
    musicIndex++
    playAudio.setAttribute('src',`./music/${musics[musicIndex].src}`)
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
            img.setAttribute('src' ,musics[musicIndex].image)
            title.textContent = musics[musicIndex].name
            isPlay = true;
}
