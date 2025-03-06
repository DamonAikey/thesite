document.getElementById("enter-btn").addEventListener("click", () => {
    document.getElementById("password-modal").style.display = "block";
});

document.getElementById("submit-password-btn").addEventListener("click", () => {
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    if (password === "terry man!") {
        document.getElementById("password-modal").style.display = "none";
        document.getElementById("options-modal").style.display = "block";
    } else {
        errorMsg.textContent = "Incorrect password. Try again!";
    }
});

document.querySelectorAll('.option-btn').forEach((button) => {
    button.addEventListener("click", (e) => {
        const option = e.target.id;
        if (option === "terry-btn") {
            document.getElementById("options-modal").style.display = "none";
            document.getElementById("chatroom").style.display = "block";
        }
    });
});

document.getElementById("group-terminal-btn").addEventListener("click", () => {
    alert("Group terminal functionality coming soon!");
});

document.getElementById("solo-terminal-btn").addEventListener("click", () => {
    alert("Solo terminal functionality coming soon!");
});
