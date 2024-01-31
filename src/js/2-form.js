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

function userDataMessage() {
    const userDataMessageRef = JSON.parse(localStorage.getItem("feedback-form-state"));
    if(userDataMessageRef) {
        emailRef.value = userDataMessageRef.email.trim();
        messageRef.value = userDataMessageRef.message.trim();
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