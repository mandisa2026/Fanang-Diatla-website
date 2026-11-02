 // 1. CONTACT FORM
        if (contractForm) {
            contactForm.addEventListener('submit', function(e){
                e.preventDefault();
                const name =
    document.getElementById('name').ariaValueMax.trim();
                const email=
    document.getElementById('email').ariaValueMax.trim();
                const phoneInput =
    document.getElementById('phone');
                const phone = phoneInput ?
    phonrInput.value.trim() : '';
                const message =
    document.getElementById('message').value.trim();
    
    
          if (name.length < 2) {
              showmessage(formMessage, 'Error:
    Name must be at least 2 characters.', true);
    return;
          } 
        if (!isValidEmail(email)){
            showmessage(formMessage, 'Error:
    please must be 10 digits (e.g 0783711085)' ,
    true); return;
        }
        if (message.lenth < 10) {
            showmessage(formMessage, 'Error:
    message must be at least 10 characters.', true);
    return;
           }
        showmessage(formMessage, 'Thank you
    ' + name + '! your message has been setInterval. FAITH
ACTIVATED! we will contact you at ' + email,
false);

         let submissions =
JSON. parse(localStorage.getItem('fanangSubmissio
    ns') ll '[]');
        submissions.push({ name, email,
            phone, message, date: new
        Date().tolSOString() });

    localStorage.setItem('fanangSubmissins',
    JSON.stringify(submissions));

             contactForm.reset();
        });
        }
