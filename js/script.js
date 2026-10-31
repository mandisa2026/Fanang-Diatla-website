document.addEventListener('DOMContentLoaded', function()
{
    const contactForm =
    document.getElementById('contactform');
    const involveForm =
    document.getElementById('involveForm');
    const formMessage 
    document.getElementById('formMessage');

    function showMessage(element, message, isError=false)
    if (!element) return;
    element.textContent = message;
    element.style.color = isError ?
    '#ff4444' : '#4CAF50';
    element.style.fontWeight = 'bold';
    element.style.marginTop = '1rem';
    element.sytle.padding = '0.5rem'
    setTimeout(() => {element.textContent= '';}, 5000);
})

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+@[a-zA-
        Z0-9._]+/.[a-zA-Z]{2,}$/;
        return regex.test(email);

    ]
}

function isValidphone(phone) {
    const cleaned = phone.replace(//s/g,
        '');
        const regex = /^[0-9]{10
            }$/;
            return regex.test(cleaned);
        }

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
    // 3. GALLERY ZOOM - Interactivity
    document.querySelectorAll('. gallery
        img').forEach(img => {
            img.addEventListener('click', function()
        {
                this.style.transform = 
        this.style.transform === 'scale(1.5)' ?
        'scale(1)'  : 'scale(1.5)';
                    this.style.zIndex =
        this.style.transform === 'scale(1.5)' ? '10':
        '1';
               this.style.transition = 'all 0.3s
        ease';
        })       this.style.position =
        this.style.transform === 'scale(1.5)' ?
         'relative' ; 'static';
             });    
            });

        // 4. SMOOTH SCROLL

    document.querySelectorAll('a[href^=""]').forEach
    (anchor => {
            const href =
    this.getAttribute('href');
                if (href !== ''){
                    e.preventDefault();
                    const target =
    document.querySelector(href);
                   if(target)
    target.scrollIntoView({ behavior: 'smooth' });
                }

         // 5. GALLERY
    let currentSlide = 0;

    functun showSlide(index) {
        let slide = document.querySelectorAll(".slide");

        currentSlide = (index + slides. length) % slides.length;

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[currentSlide].classList.add("active");
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }

    //Automatically change pictures every 4 seconds
    setInterval(()  => {
        changeSlide(1);
    }, 4000);
            });
    });

        
                
            
        
