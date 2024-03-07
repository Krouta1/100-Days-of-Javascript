const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

const showBtn = () => {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if(rootEl.scrollTop / scrollTotal > 0.3){
    scrollBtn.classList.add("show-btn")
  }else{
    scrollBtn.classList.remove("show-btn")
  }
}

const scrollToTop = () =>{
  rootEl.scrollTo({
    top:0,
    behaviour:"smooth"
  })
}


document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop)