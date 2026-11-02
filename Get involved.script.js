 //2. GET INVOLVED FORM
        if (involeForm) {
            involveForm.addEventListener('submit',
    function(e) {
             e.preventDefault();
             const name =
    document.getElementById('name')? .value.trim();
                const email=
    document.getElementById('email')? .value.trim();
                const helpType =
    document.getElementById('helpType')?.value;
                
            if (!name ll name.length < 2)
    { showMessage(formMessage, 'Please enter a valid
    email.' true); return; }
            if (!isValidEmail(email))
    { showmessage(formMessage, 'please select how
        you want to help.', true); return: }

             showmessage(formMessage, 'Thank you!
    you selected: ' + helpType + '. We will email
    you at ' + email + ' with next steps.', false);
               involveForm.reset();
             });
            }
