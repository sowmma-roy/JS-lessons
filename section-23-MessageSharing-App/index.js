
// document.querySelector('#shareLink').style.display="none"


//we listen for the 'submit' event of the 'form' element
document.querySelector('#formContainer').addEventListener('submit', (eve)=>{

    eve.preventDefault(); //prevents the default browser handle of form submission event which extracts all the data to send it over to a backend server. The preventDefault and lets us handle the submit event how we want
    console.log("The Form was Submitted")

    // console.log(eve)


    //toggle visibility
    //using no-class raw style approach, could potentially use html attribute hidden
    // document.querySelector('#formContainer').style.display="none"

    // document.querySelector('#shareLink').style.display="block"

    //using the toggling of 'hide' class from Materialize
    document.querySelector('#formContainer').classList.toggle('hide')
    document.querySelector('#shareLink').classList.toggle('hide')
    



    const inputEle = document.querySelector('#message-input')
    const userMessage = inputEle.value
    const encryptedMessage = btoa(userMessage)


    const inputLink = document.querySelector('#link-input')
    let visitableLink = `${window.location}#${encryptedMessage}`
    inputLink.value = visitableLink

    //making the inputLink selected - impoved UX for user
    inputLink.select();

    //toggle the visibility of initial form with sharelink form

    //can I create a css class with JS? I know we can toggle/add/remove a class, but can we create a class?





    
    


    


})


/*
--- My attempts ---

1. using a separte <a> tag:
const clickableLink = document.querySelector('#encryptedLink')
clickableLink.innerHTML = `<a id="encryptedLink" href=${visitableLink}>Check this out - ${visitableLink}</a>`   



2. approaching with btn click

const formContainerEle = document.querySelector('#formContainer')

const btnEle =  document.querySelector('button')
// btnEle.addEventListener('click', processMessage)

// function processMessage () {

//     const inputEle = document.querySelector('form > input')    
//     const userMessage = inputEle.value;
//     console.log(userMessage)

//     console.log("Btn clicked")

//     formContainerEle.querySelector('label').innerText = "Share this link with a friend";

//     inputEle.value="LoremImpsumInfo"

//     formContainerEle.querySelector('button').style.display="none"


// }
*/