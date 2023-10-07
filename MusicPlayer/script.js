const songs = [
    {title: 'STAY', 
    artist: 'Justin Bieber',
    imgSrc: 'stay.png',
    songSrc: 'music_stay.mp3',
},
{   title: 'Faded', 
    artist: 'Alan Walker',
    imgSrc: 'faded.png',
    songSrc: 'music_Faded.mp3',
},
{   title: 'Falling Down', 
    artist: 'Lil Peep',
    imgSrc: 'fallingdown.jpg',
    songSrc: 'music_fallingdown.mp3',
},
{   title: 'Rather Be', 
    artist: 'Clean Bandit',
    imgSrc: 'ratherbe.jpg',
    songSrc: 'music_Rather Be.mp3',
},

]
let currIndex =0;
let title = document.getElementById("name");
let artist = document.getElementById("singer");
let img = document.getElementById("songImg");
let song = document.getElementById("song");
let playBtn = document.getElementById("ctlIcon");
let progress = document.getElementById("progress");
let btnDiv = document.getElementById("btnContainer");
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function controls(){
    if(playBtn.classList.contains("fa-pause")){
        song.pause();
        playBtn.classList.replace("fa-pause", "fa-play");

    }
    else{
        playBtn.classList.replace("fa-play", "fa-pause");
        song.play();

        
    }
}

const prevBtn= ()=>{
    currIndex = (currIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currIndex]);

}
const nextBtn=()=>{
    currIndex = (currIndex +1) % songs.length;
    loadSong(songs[currIndex]);

}

const loadSong = (songs) =>{

    title.textContent = songs.title;
    artist.textContent = songs.artist;
    img.src=songs.imgSrc;
    song.src = songs.songSrc;

}