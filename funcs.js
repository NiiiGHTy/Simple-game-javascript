const theMusic = document.getElementById('musicPlayer')
const theAudio = document.getElementById('myaudio')

let isPlaying = false

// Sounds and music

function playSong(){
    theAudio.play();
    isPlaying = true
}

function pauseSong(){
    theAudio.pause()
    isPlaying = false
}


theMusic.addEventListener('click' , function(){

    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }

})

function sound(){
    var snd = new Audio('hit.mp3')
    var nxtSnd = new Audio('zombie-hit.mp3')
    nxtSnd.play()
    snd.play()

}

function healSound(){

    var snd2 = new Audio('heal.mp3')
    snd2.play()
}

// Variables 

const Container = document.getElementById('myContainer')
const diamondSword = document.getElementById('diamond-sword')
const ironSword = document.getElementById('iron-sword')
const healing = document.getElementById('heal')
const resetGame = document.getElementById('reset')
const modal = document.getElementById('my-modal')
const lModal = document.getElementById('my-modal-l')
const tModal = document.getElementById('my-modal-t')
const overlay = document.getElementById('overlay')
const okayBtn = document.getElementById('okayBtn')
const lokayBtn = document.getElementById('okayBtn-l')
const tokayBtn = document.getElementById('okayBtn-t')

let monsterBar = document.getElementById('monster-health')
let playerBar = document.getElementById('player-health')

let maxHealth = 100
let playerHealth = 100;
let monsterHealth = 100;
let healCount = 2;


// Random number function

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


// In-game functions

  function hit() {
    // Calculate player's hit damage to the monster
    const playerDamage = getRandomNumber(6, 10);
    
    // Calculate monster's hit damage to the player
    const monsterDamage = getRandomNumber(8, 12);
    
    // Update health bars
    playerHealth -= monsterDamage;
    monsterHealth -= playerDamage;

    playerBar.value = playerHealth;
    monsterBar.value = monsterHealth;
    
    // Check if either the player or the monster has lost all their health
    if (playerHealth <= 0 && monsterHealth <= 0) {
      tshowModal(tModal);
      return;
    } else if (playerHealth <= 0) {
      console.log("You lost!");
      lshowModal(lModal)
      return;
    } else if (monsterHealth <=0) {
      console.log("You won!");
      showModal(modal)

      return;
    } 
    
    
     // Print current health status
     console.log(`Player Health: ${playerHealth}`);
     console.log(`Monster Health: ${monsterHealth}`);
  }

  function hit2() {
    // Calculate player's hit damage to the monster
    const playerDamage = getRandomNumber(9, 15);
    
    // Calculate monster's hit damage to the player
    const monsterDamage = getRandomNumber(8, 12);
    
    // Update health bars
    playerHealth -= monsterDamage;
    monsterHealth -= playerDamage;

    playerBar.value = playerHealth;
    monsterBar.value = monsterHealth;
    
    // Check if either the player or the monster has lost all their health
    if (playerHealth <= 0 && monsterHealth <= 0) {
      tshowModal(tModal);
      return;
    } else if (playerHealth <= 0) {
      console.log("You lost!");
      return;
    } else if (monsterHealth <=0) {
      console.log("You won!");
      showModal(modal)

      return;
    }
    
    
     // Print current health status
     console.log(`Player Health: ${playerHealth}`);
     console.log(`Monster Health: ${monsterHealth}`);
  }


  function healPlayer() {
    if (healCount > 0) {
      playerHealth += 15;
      playerBar.value = playerHealth
      healCount--;
  
      console.log(`Player heals for ${15} health. Remaining heals: ${healCount}`);
      
      if (healCount === 0) {
        document.getElementById("healButton").disabled = true; // Disable the heal button
        console.log("No more heals left.");
      }
      
      console.log(`Player health: ${playerHealth}`);
      
      // Check if the game is over after healing
       if (monsterHealth <=0 && playerHealth <=0){
          console.log("It's a tie!");
          resetGame();
          return;
       }
       
       if(monsterHealth<=0){
           console.log("Player wins!");
           showModal(modal)
           adjustHealthBar();
           return;
       }
       
       if(playerHealth<=0){
           console.log("Monster wins!");
           adjustHealthBar();
           return;
       }
    }
  }

  function adjustHealthBar(maxLife){
    
    monsterBar.value = maxLife
    monsterBar.max = maxLife
    playerBar.value = maxLife
    playerBar.max = maxLife
    playerHealth = 100;
    monsterHealth = 100;
    healCount = 2;
}

ironSword.addEventListener('click' , hit)  
diamondSword.addEventListener('click' , hit2)  
healing.addEventListener('click' , healPlayer)


// modal appears

function showModal(modal){
    
  modal.classList.add('active')
  overlay.classList.add('active')

}

function lshowModal(lModal){
    
  lModal.classList.add('active')
  overlay.classList.add('active')

}

function tshowModal(tModal){
    
  tModal.classList.add('active')
  overlay.classList.add('active')

}


overlay.addEventListener('click' , function(){

  modal.classList.remove('active')
  lModal.classList.remove('active')
  tModal.classList.remove('active')
  overlay.classList.remove('active')
  adjustHealthBar(100)


})

okayBtn.addEventListener('click' , function(){

  cancelModal(modal)
})

function cancelModal(modal){
    
  modal.classList.remove('active')
  lModal.classList.remove('active')
  tModal.classList.remove('active')
  overlay.classList.remove('active')
  adjustHealthBar(100)

}

lokayBtn.addEventListener('click' , function(){

  cancelModal(lModal)
})

tokayBtn.addEventListener('click' , function(){

  cancelModal(tModal)
})


function cancelModal(lModal){
    
  lModal.classList.remove('active')
  overlay.classList.remove('active')
  adjustHealthBar(100)

}


function cancelModal(tModal){
    
  tModal.classList.remove('active')
  overlay.classList.remove('active')
  adjustHealthBar(100)

}