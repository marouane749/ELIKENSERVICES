/* A propos de moi */

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    /* Menu mobile */

    var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right = "-200px";
    }

  

/* Effets */

    const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');

    sections.forEach((section, index) => {
        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "all 1.6s";
    });

    skills.forEach((elem, index) => {

        elem.style.width = "0";
        elem.style.transition = "all 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            let elem = entry.target;
            elem.style.opacity = 1;
        }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            let elem = entry.target;
            elem.style.width = elem.dataset.width + '%';
        }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
    }

    observerIntersectionAnimation();

    /* Form */

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
      
        const serviceID = "service_5ewc5v3";
        const templateID = "template_7xphuh4";
       
      
        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            alert("Message envoyé avec succès !");
          })
          .catch((error) => {
            console.error("Erreur lors de l'envoi :", error);
            alert("Une erreur s'est produite. Veuillez réessayer.");
          });
      });
      