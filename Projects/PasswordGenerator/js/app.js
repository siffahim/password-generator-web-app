const copyBtn = document.getElementById("btn-copy")
const inputText = document.getElementById("inputText")
const copyMessage = document.querySelector(".copyMess");
const eyeContainer = document.querySelector(".eyes-container");


//auto genarator---------->
const autoGenarate = () => {
    const randomNum = Math.floor(Math.random() * 10000);
    const randomNumString = randomNum + '';

    if (randomNumString.length === 4) {
        inputText.value = randomNum.toString().split("").join("eZ").split("").join("$")
    } else {
        return autoGenarate()
    }

    if (inputText.value) {
        copyBtn.removeAttribute("disabled")
        copyBtn.style.cursor = "pointer"
        copyBtn.style.background = "#676b70"
    }

}

const copypassword = () => {
    inputText.select()
    document.execCommand('copy')
    copyMessage.style.top = '0%'
}

//show password button and toggle------>
const showPassword = () => {
    if (inputText.type === 'password') {
        inputText.type = 'text'
    } else {
        inputText.type = 'password'
    }
    eyeContainer.classList.toggle("actived")
}

//popup close here--------->
const popupClose = () => {
    copyMessage.style.top = '-100%'
}