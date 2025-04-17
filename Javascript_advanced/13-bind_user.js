let user = {
    hobby: 'Callygraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Guillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer',
};

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${user.firstName}. Your occupation is: ${user.occupation}`);
};

let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser("Hello");