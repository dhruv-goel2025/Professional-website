// Basic password protection
(function() {
    // The password you want to use
    const password = "DhruvGoel2025";
    
    // Check if user is already authenticated
    if (sessionStorage.getItem('authenticated') !== 'true') {
        // Prompt for password
        const userPassword = prompt("Please enter the password to view this site:");
        
        // Check password
        if (userPassword === password) {
            // Store authentication in session
            sessionStorage.setItem('authenticated', 'true');
        } else {
            // Redirect to a different page or show access denied
            alert("Incorrect password");
            window.location.href = "https://github.com";
        }
    }
})();
