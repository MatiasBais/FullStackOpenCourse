let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hola, ${storedName}`;
}

function setUserName(){
    const myName = prompt("Please enter your name");
    if(!myName)
        setUserName();
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hola,  ${myName}`;
}

myButton.onclick = () =>{
    setUserName();
}