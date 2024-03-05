//VARIABLES
const statusDisplay = document.getElementById("status");
const image = document.getElementById("image");
const bgColor = document.getElementById("main");


//FUNCTIONS
const setColor = () => {
    bgColor.classList.add("online")
}


const connectionStatus = async () => {
    try {

        //try to load random iamge from internet
        const fetchResult = await fetch('https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?time='+(new Date().getTime()));
        image.src = '/images/online.png'
        setColor()
        //status 200 - 300
        return fetchResult.status >= 200 && fetchResult.status < 300

    } catch (error) {
        statusDisplay.textContent = 'OOPS! Your internet connection is down.'
        image.src = '/images/offline.png'
        bgColor.classList.remove("online")
    }
}

//Monitor connection
setInterval(async()=>{
    const result = await connectionStatus()
    if(result){
        statusDisplay.textContent = 'You are Online! Your connection looks good.'
    }
    setColor()
},5000)

//Check connection when the page loads
window.addEventListener("load",async(e)=>{
    if(connectionStatus()){
        statusDisplay.textContent = 'You are ONLINE.' 
    }else{
        statusDisplay.textContent = 'You are OFFLINE'
    }
})