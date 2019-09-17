//local Storage vs Session Storage

//Local storage: It keeps store the user information data without expiration date this data will not be deleted when user closed the browser windows it will be available for day, week, month and year.

//Session Storage: It is same like local storage date except it will delete all data when browser windows closed by a web user.

//set the value in local storage object
//localStorage.setItem("dci","Web Developer");

//console.log(localStorage.getItem("dci"));

//localStorage.removeItem("dci");
//localStorage.clear();

// sessionStorage.setItem("classroom","FbW15");
// console.log(sessionStorage.getItem("classroom"));

//add gift button click
let addGiftObj=document.getElementById('addGift');
addGiftObj.onclick = () =>{
console.log("addGift button clicked...");

let giftObj=document.getElementById("gift");
console.log(giftObj.value);

let shoppingObj=document.getElementById('shoppingList');
let newGiftObj=document.createElement('li');
newGiftObj.innerHTML=giftObj.value;
shoppingObj.appendChild(newGiftObj);

//after adding clear the textbox
giftObj.value='';

}

//remove last gift button click 
let removeLastGiftObj=document.getElementById('removeLastGift');
removeLastGiftObj.onclick = () => {
    console.log("removeLastGiftObj...");
    let allGiftObj=document.querySelectorAll('#shoppingList > li');
    console.log(allGiftObj);
    console.log(allGiftObj[allGiftObj.length-1]);
    allGiftObj[allGiftObj.length-1].remove();
}


