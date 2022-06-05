(function(){
    const form =document.querySelector('.form');
    function handleSubmit (event) {
        event.preventDefault();
        const status = document.querySelector ('.form-status');
        fetch(form.action, {
            method: form.method,
            body: new FormData(event.target),
            headers: {
                'Accept': 'application/json'
            }
        }).then( () => {
            status.innerHTML="Thank for your submission!";
            form.reset();
        }).catch ( () => {
            status.innerHTML = "Oops! There was a problem submitting your form"  
        });
        }
        form.addEventListener ("submit", handleSubmit)
})();