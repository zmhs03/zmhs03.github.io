
    document.addEventListener("DOMContentLoaded", function() {
        // Select the navigation links
        var navLinks = document.querySelectorAll("#main-nav a");

        // Attach click event listeners to the navigation links
        navLinks.forEach(function(link) {
            link.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent the default link behavior
                var href = link.getAttribute("href"); // Get the URL from the href attribute
                window.location.href = href; // Redirect to the URL
            });
        });
    });

