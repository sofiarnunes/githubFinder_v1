class GitHub {
    constructor(){
        this.client_id = '4c91db32619680b2dbc1';
        this.client_secret = '3b323f8946e908bb5fe1eb8995c6a2d75db1fe28';
        this.repos_count = 5;
        this.respos_sort = 'created: asc';
    };

    async getUser(user) {
        const response = await fetch(`https://api.github.com/users/${user}?cliend_id=${this.client_id}&client_secret=${this.client_secret}`);
        const responseRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.respos_sort}cliend_id=${this.client_id}&client_secret=${this.client_secret}`);

        const data = await response.json();
        const repos = await responseRepos.json();

        return {
            profile: data,
            repos
        };
    }

}