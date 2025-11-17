function loginUser() {
    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Admin credentials
    if (uname === "Muruga" && pass === "Muruga#135") {
        window.location.href = "admin/dashboard.html";
    } 
    // Bidder credentials
    else if (uname.startsWith("bidder") && pass === "bidder#135") {
        window.location.href = "bidder/dashboard.html";
    } 
    // Spectator credentials
    else if (uname.startsWith("spec") && pass === "spec#135") {
        window.location.href = "spectator/dashboard.html";
    } 
    else {
        alert("Invalid Login Credentials!");
    }
}
