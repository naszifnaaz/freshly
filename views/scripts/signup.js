// Register user to database

let addUserToDB = document.getElementById('add-user');
addUserToDB.addEventListener('click', registerUser);

function registerUser() {
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-zip').value;

    if (email == "" || password == "")
        alert('Please fill all the fields');
    else {
        console.log(email, password);
        //Call user register API and resgister user
        window.location.href = "./plans.html"
    }
}