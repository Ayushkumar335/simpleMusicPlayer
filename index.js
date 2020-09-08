const songs = [{
  songName: "Teriyaan Deedaan",
  songSinger: "Prabh Gill",
  songPic: "song1"
}, {
  songName: "Yaari ",
  songSinger: " Rox A - Nikk ",
  songPic: "song2"
}, {
  songName: "Dont Look ",
  songSinger: "Karan Aujla",
  songPic: "song3"
},  {
  songName: "Bhaga wala sardar ",
  songSinger: " Jugraj Sandhu ",
  songPic: "song4"
}];
// getting all ids
const img = document.getElementById("songImage");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("prev");
const music = document.querySelector("audio");

// controls on play /pause
var isPlayed = false;

play.addEventListener("click", () => {
  if (isPlayed) {
    MUSICPLAY();
  } else {
    MUSICPAUSE();
  }
});

// controls opn next button
var songNum=0;
next.addEventListener("click", () => {
songNum=(songNum+1)%songs.length;
isPlayed=false;
 nextSong(songNum);
 if (isPlayed) {
   MUSICPLAY();
 } else {
   MUSICPAUSE();
 }
});

// controls on  previous button
 previous.addEventListener("click", () => {
songNum=(songNum-1+songs.length)%songs.length;
isPlayed=false;
 nextSong(songNum);
 if (isPlayed) {
   MUSICPLAY();
 } else {
   MUSICPAUSE();
 }
});





// all function doing operations
function MUSICPLAY() {
  isPlayed = false;
  music.pause();
  play.classList.replace("fa-pause-circle","fa-play-circle");
  img.classList.remove("rotateimage");

}

function MUSICPAUSE() {
  isPlayed = true;
  music.play();
  play.classList.replace("fa-play-circle", "fa-pause-circle");
  img.classList.add("rotateimage");

}

function  nextSong(playlist){
  var name=songs[playlist].songName.toLocaleUpperCase();
  var singer=songs[playlist].songSinger.toLocaleUpperCase();
  var  pic=songs[playlist].songPic;
  // console.log(name+" "+singer+" "+pic);
  document.querySelector("h2").textContent=name;
  document.querySelector("h4").textContent=singer;
  img.src="images/"+pic+".jpg";
  music.src="songs/"+pic+".mp3";
}

// var isPlayed=false;
// if(isPlayed){
//   play.addEventListener("click",()=>{
//     isPlayed=true;
//     music.play();
//     play.classList.replace("fa-play","fa-pause");
//     img.classList.add("rotateimage");
//
//   });
// }else{
//
//   play.addEventListener("click",()=>{
//         isPlayed=false;
//     music.pause();
//     play.classList.replace("fa-pause","fa-play");
//     img.classList.remove("rotateimage");
//
//   });
//
// }
