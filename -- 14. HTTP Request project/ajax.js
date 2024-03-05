//Variables
const btn = document.getElementById("btn")


//functions
const getUser = (e) => {
  e.preventDefault()

  const http = new XMLHttpRequest()

  http.open("GET","users.json",true)
  http.onload = function (){
    if(!this.status === 200) return
    // console.log(this.responseText)

    const users = JSON.parse(this.responseText)
    users.map((user)=>{
      document.getElementById("users").innerHTML += `
      <hr>
      <ul>
        <li>ID: ${user.id}</li>
        <li>Name: ${user.name}</li>
        <li>Age: ${user.age}</li>
        <li>Email: ${user.email}</li>
      </ul>
      `
    })
  }
  http.send()
}


//event listeners
btn.addEventListener("click", getUser)
