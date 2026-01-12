document.body.classList.add("fade-in");

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
        if (link.getAttribute("href").includes(".html")) {
            e.preventDefault();
            document.body.classList.remove("fade-in");
            setTimeout(() => {
                window.location = link.href;
            }, 300);
        }
    });
});

