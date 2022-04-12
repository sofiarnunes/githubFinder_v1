class GitHub {
    constructor(){
        this.client_id = '316072b120ea65576a85';
        this.client_secret = '4e9592c9069f9e80f78bb4ca001c2ceee51f4b9e';
    };

    async getUser(user) {
        const response = await fetch(`https://api.github.com/users/${user}?cliend_id=${this.client_id}&client_secret=${this.client_secret}`);

        const data = await response.json();
        return {
            profile: data
        };
    }

}