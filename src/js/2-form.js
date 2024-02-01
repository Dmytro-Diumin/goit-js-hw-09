const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector(".feedback-form input");
const messageRef = document.querySelector(".feedback-form textarea");

formRef.addEventListener("input", onFormInput);

function onFormInput() {

    const userData = {
        email: emailRef.value.trim(),
        message: messageRef.value.trim(),
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

const userDataMessageRef = localStorage.getItem("feedback-form-state");

if (userDataMessageRef) {
    const parsedDataRef = JSON.parse(userDataMessageRef);

    const localEmailRef = document.getElementById("email");
    const localMessageRef = document.getElementById("message");

    if (localEmailRef && localMessageRef) {
        localEmailRef.value = parsedDataRef.email;
        localMessageRef.value = parsedDataRef.message;
    }
}

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    
    if (emailRef.value !== '' && messageRef.value !== '') {
        console.log({
            email: emailRef.value.trim(),
            message: messageRef.value.trim(),
        });
        e.currentTarget.reset();
        localStorage.removeItem("feedback-form-state");
      } else {
        alert('Please enter your email and message');
      }
}