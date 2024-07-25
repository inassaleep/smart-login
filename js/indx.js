//html value 

let yournam= document.getElementById("yournam")
let youremil = document.getElementById("youremil")
let password = document.getElementById("password")
let signButton = document.getElementById("signButton")
let passicon = document.getElementById("passicon")
let Login = document.getElementById("Login")
let warning = document.getElementById("warning")
let emilInput = document.getElementById("emilInput")
let warningmessage = document.getElementById("warningmessage")
let warningemail = document.getElementById("warningemail")
let successMessage=document.getElementById("successMessage")



let lists;
if (localStorage.getItem("listname") !== null) {
	lists = JSON.parse(localStorage.getItem("listname"));
} else {
	lists = [];
}
    
 function checkemils(){
    for (let i = 0;  i< lists.length; i++){
        if (lists[i].youremil.toLowerCase() === youremil.value.toLowerCase()){
          // return false;
           warningemail.classList.replace("d-none", "d-flex")
        }
    } 
 }
     

signButton.addEventListener("click", function () {
    if (validtionYournam() === true && validtionYourEmil() === true && validtionPasswordl() === true) {
    
      if (checkemils() == false) {
        warningemail.classList.replace("d-none", "d-flex")
       }
   

     }else{
       // warningmessage.classList.replace("d-none", "d-flex")
        
       var infromation = {
           yournam: yournam.value,
           youremil: youremil.value,
           password: password.value,
           
       }
        console.log(infromation);
       lists.push(infromation)
       addLocalStroge()
       successMessage.classList.replace("d-none", "d-flex")
       clearInputs() 
    
     } 
      
   

}
)

//funcation clear
 function clearInputs(){
    yournam.value =""
    youremil.value=""
    password.value=""
 }
 
Login.addEventListener("click", function () {
    for (let i = 0;  i< lists.length; i++) {
        if (validtionemilInput() === true && validtionpassworInput() === true) {
            if(lists[i].emilInpu=== emilInput.value && lists[i].passwordInput=== passwordInput.value){
                homePage()
            }else {
               warning.classList.replace("d-none", "d-flex")
            }
        } 
   }
})       
       



 
 

//funcation addinformationindex
function addInformationListIndex() {
    var infromationIndex = {
        emilInput: emilInput.value,
        passwordInput: passwordInput.value,
    }
}
//funcation localstroge
function addLocalStroge() {
    localStorage.setItem("listname", JSON.stringify(lists));

}

//passicon
passicon.addEventListener("click", function (e) {
    if (passicon.classList.contains("fa-eye-slash")) {
        passicon.classList.replace("fa-eye-slash", "fa-eye")
        passicon.setAttribute('type', 'text')
    } else {
        passicon.classList.replace("fa-eye", "fa-eye-slash")
        passicon.setAttribute('type', 'password')
    }
})
//
//validtion for yournam
function validtionYournam() {
    var regex = /^[A-Z][a-z]{3,}$/i;
    if (regex.test(yournam.value)) {
        return true;
    } else {

        return false;
    }
}

//validtion for youremil
function validtionYourEmil() {
   // let regex = /^(A-Z)(a-z)\.(gmail\.com)$i/
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(youremil.value)) {
        return true;
    } else {

        return false;
    }
}
//validition emilInput
function validtionemilInput() {
  //  var regex = /^(A-Z)(a-z)\.(gamil\.com)$i/
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(emilInput.value)) {
        return true;
    } else {

        return false;
    }
}

// validtion for  password

function validtionPasswordl() {
    //var regex = /^(A-Z)(a-z)(0-9){6,}$/
    let passRegex =/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/
    if (passRegex.test(password.valu)) {
        return true;
    } else {

        return false;
    }
}
// validtion for  passwordInput
function validtionpassworInput() {
 //   var regex = /^(A-Z)(a-z)(0-9){6,}$/
 let passRegex =/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/
    if (regex.test(passwordInput.valu)) {
        return true;
    } else {

        return false;
    }
}
