document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("viewMoreBtn");
    const hiddenProjects = document.querySelectorAll(".hidden-project");
    const previewProject = document.querySelector(".preview");
    const projectsSection = document.querySelector(".projects");

    let expanded = false;

    if (btn) {

        btn.addEventListener("click", () => {

            expanded = !expanded;

            if (expanded) {

                projectsSection.classList.add("expanded");

                previewProject.classList.remove("preview");

                hiddenProjects.forEach((project, index) => {

                    setTimeout(() => {
                        project.classList.add("show");
                    }, index * 120);

                });

                btn.textContent = "View Less";

            } else {

                projectsSection.classList.remove("expanded");

                previewProject.classList.add("preview");

                hiddenProjects.forEach(project => {
                    project.classList.remove("show");
                });

                btn.textContent = "View More";

                window.scrollTo({
                    top: projectsSection.offsetTop,
                    behavior: "smooth"
                });

            }

        });

    }


    /* SCROLL REVEAL */

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    }, {
        threshold: 0.15
    });

    reveals.forEach(el => observer.observe(el));

});

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        const subject = encodeURIComponent("Portfolio Contact from " + name);

        const body = encodeURIComponent(
            "Name: " + name + "\n\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message
        );

        window.location.href =
            "mailto:oddie.karadeth@gmail.com?subject=" + subject + "&body=" + body;

    });

}

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const button = form.querySelector("button");
    button.textContent = "Sending...";

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        status.style.display = "block";
        status.textContent = "Thanks! I’ll get back to you soon.";
        status.style.color = "#111";
      } else {
        status.style.display = "block";
        status.textContent = "Something went wrong. Please try again.";
        status.style.color = "red";
      }
    } catch (error) {
      status.style.display = "block";
      status.textContent = "Network error. Please try again.";
      status.style.color = "red";
    }

    button.textContent = "Send Message";
  });
}