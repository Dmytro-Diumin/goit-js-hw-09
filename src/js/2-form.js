const formRef = document.querySelector(".feedback-form");
const emailRef = formRef.elements.email;
const messageRef = formRef.elements.message;

formRef.addEventListener("input", onFormInput);

function onFormInput() {

    const userData = {
        email: emailRef.value.trim(),
        message: messageRef.value.trim(),
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

const userDataMessageRef = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (userDataMessageRef) {
        emailRef.value = userDataMessageRef.email;
        messageRef.value = userDataMessageRef.message;
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