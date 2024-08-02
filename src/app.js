function getResult(){
    return new Date().toDateString();
}

document.getElementById("result").innerHTML = getResult();