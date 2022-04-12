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

            } else {
                // show profile from ui class
                ui.showProfile(data.profile);
            }
        })
        .catch(err => console.log(err));
    } else {
        // clear profile through the ui class
    }

    e.preventDefault();
})