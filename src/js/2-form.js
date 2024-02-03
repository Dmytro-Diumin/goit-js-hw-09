const formRef = document.querySelector(".feedback-form");
const emailRef = formRef.elements.email;
const messageRef = formRef.elements.message;
const LOCAL_STORAGE_KEY = "feedback-form-state";

formRef.addEventListener("input", onFormInput);

function onFormInput() {

    const userData = {
        email: emailRef.value.trim(),
        message: messageRef.value.trim(),
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
}

const userDataMessageRef = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY || ""));
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
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } else {
        alert('Please enter your email and message');
      }
}