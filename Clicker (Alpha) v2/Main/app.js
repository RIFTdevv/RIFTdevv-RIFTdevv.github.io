//variables
var Clicks = 0
var UpgCost = 10
var CPC = 1
var WorkerCost = 100
var WorkerSpeed = 1
var Workers = 0

const div = document.createElement("div")
const divContent = document.createTextNode(CPC)
div.appendChild(divContent)
var W = screen.width
var H = screen.height

var work

//required functions
const formatter = Intl.NumberFormat('en', {notation: 'compact'})

function playSound(AudioName, AudioVolume) {
   let audio = new Audio(AudioName)
   audio.volume = AudioVolume
   audio.play(AudioName)
}

function ParticleFX(){
   const particles = document.querySelector(".fx")
   const newDiv = document.createElement("h1")
   newDiv.innerText = "+"+CPC
   newDiv.style.color = "white"
   newDiv.style.position = "absolute"
   newDiv.style.top = Math.random()*screen.height
   newDiv.style.left = Math.random()*screen.width

   particles.appendChild(newDiv)

   setTimeout(() => {
      particles.removeChild(newDiv)
   }, 3000)
}

function random(min, max) {
   return Math.floor(Math.random() * (max - min) ) + min;
 }

//main functions

function Click(){  

   playSound("../Assets/Press.wav",0.05)
   Clicks += CPC;
   document.getElementById("H1").innerHTML = formatter.format(Clicks)
}

work = setInterval(function(){
	if (Workers >= 1) {
		playSound("../Assets/Press.wav",0.05)
		for (let i = 0; i < Workers; i++) {
			Clicks += CPC;
			document.getElementById("H1").innerHTML = formatter.format(Clicks)
		}
	}
}, WorkerSpeed*1000)

function Upgrade(){
   playSound("../Assets/Press.wav",0.05)
   if (Clicks >= UpgCost) {
      Clicks -= UpgCost
      UpgCost += 10 + (Math.trunc(UpgCost / 4))
      CPC ++;
       
      document.getElementById("H1").innerHTML = formatter.format(Clicks)
      document.getElementById("UPGbtn").innerHTML = "Upgrade:" + formatter.format(UpgCost)
      document.getElementById("CLKbtn").innerHTML = "+" + formatter.format(CPC)
      document.getElementById("CPCdsp").innerHTML = "CPC: " + formatter.format(CPC)
   }
}

function BuyWorker(){
   playSound("../Assets/Press.wav",0.05)
   if (Clicks >= WorkerCost) {
      Clicks -= WorkerCost
      WorkerCost += 10 + (Math.trunc(WorkerCost / 3))

      Workers += 1
       
      document.getElementById("H1").innerHTML = formatter.format(Clicks)
      document.getElementById("WRKdsp").innerHTML = "Workers: " + formatter.format(Workers)
      document.getElementById("WRKbtn").innerHTML = "Worker:" + formatter.format(WorkerCost)
   }
}

//admin commands
const Admin = {
   SetClicks(Amount) {
       Clicks = Amount
       document.getElementById("H1").innerHTML = formatter.format(Clicks)
   },
   SetCPC(Amount) {
      CPC = Amount
      document.getElementById("CLKbtn").innerHTML = "+" + formatter.format(CPC)
  },
  SetWorkers(Amount) {
   Workers = Amount
   document.getElementById("WRKdsp").innerHTML = "Workers: " + formatter.format(Workers)
},
};