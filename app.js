// Instantiate class
const github = new GitHub;
const ui = new UI;

// Search input
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // show alert from ui class
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // show profile from ui class
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
        .catch(err => console.log(err));
    } else {
        // clear profile through the ui class
        ui.clearProfile();
    }

    e.preventDefault();
})