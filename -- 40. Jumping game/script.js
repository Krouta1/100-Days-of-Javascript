const hero = document.querySelector(".hero")
const heroBoy = document.querySelector(".hero-boy")
const vilan = document.querySelector(".vilan")

const jump = () => {
  if (!hero.classList.contains("animate")){
    hero.classList.add("animate");
    vilan.style.animation = "move 1s infinite linear";
  }
  //remove after 300ms se jumping
  setTimeout(() => {
    hero.classList.remove("animate");
  }, 300);
}

document.addEventListener("keydown", (e)=>{
  if (e.code !== "Space") return
  jump()
})

let isAlive = setInterval(() => {
  //position of boy
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
  let vilanLeft = parseInt(window.getComputedStyle(vilan).getPropertyValue("left"));

  if(vilanLeft < 40 && vilanLeft > 20 && heroTop >=130){
    vilan.style.animation = "none";
    alert("Game over!")
  }

}, 10);
