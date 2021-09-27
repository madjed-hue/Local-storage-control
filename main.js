let allSpans = document.querySelectorAll(".buttons span"),
    results = document.querySelector(".results > span"),
    theInput = document.getElementById("the-input");
    

allSpans.forEach(span => {
    span.addEventListener("click",(e)=>{
        
        if (e.target.classList.contains("check-item")) {
            checkItem();
        }
        if (e.target.classList.contains("add-item")) {
            addItem();
        }
        if (e.target.classList.contains("delete-item")) {
            deleteItem();
        }
        if (e.target.classList.contains("show-items")) {
            showItems();
        }
    })
});

checkEmptyInput = () =>{
    
    results.innerHTML = "Sorry, The inputs can't be empty";
    
}

checkItem = () =>{
    if (theInput.value !== "") {
        if (localStorage.getItem(theInput.value)) {
            results.innerHTML = `Found Localstorage item called <span>${theInput.value}</span>`;
        }else{
            results.innerHTML = `there's no such item called <span>${theInput.value}</span>`;
        }
    }else{
        checkEmptyInput();
    }
}
addItem = () =>{
    if (theInput.value !== "") {
        localStorage.setItem(theInput.value, "test");
        results.innerHTML = `local storage item <span>${theInput.value}</span> added`;
        theInput.value = "";
    }else{
        checkEmptyInput();
    }
}
deleteItem = () =>{
    if (theInput.value !== "") {
        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value);
            results.innerHTML = `Localstorage item called <span>${theInput.value}</span> deleted`;
        }else{
            results.innerHTML = `there's no such item called <span>${theInput.value}</span>`;
        }
    }else{
        checkEmptyInput();
    }
}
showItems = () =>{
    if (localStorage.length) {
        results.innerHTML ='';
        for (let [key,value] of Object.entries(localStorage)) {
            results.innerHTML += ` <span class="keys">${key}</span>`
        }
        // console.log(`found ${localStorage.length}`);
    }else{
        results.innerHTML = `local storage is empty`;
    }
}
// clearStorage =()=>{
//     localStorage.clear();
// }
// clearStorage();