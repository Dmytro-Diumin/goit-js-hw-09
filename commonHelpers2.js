import"./assets/modulepreload-polyfill-ec808ebb.js";const s=document.querySelector(".feedback-form"),t=document.querySelector(".feedback-form input"),a=document.querySelector(".feedback-form textarea");s.addEventListener("input",l);function l(){const e={email:t.value.trim(),message:a.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}const r=localStorage.getItem("feedback-form-state");if(r){const e=JSON.parse(r),o=document.getElementById("email"),m=document.getElementById("message");o&&m&&(o.value=e.email,m.value=e.message)}s.addEventListener("submit",n);function n(e){e.preventDefault(),t.value!==""&&a.value!==""?(console.log({email:t.value.trim(),message:a.value.trim()}),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")):alert("Please enter your email and message")}
//# sourceMappingURL=commonHelpers2.js.map