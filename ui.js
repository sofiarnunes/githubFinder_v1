class UI {
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid"
                    </div>
                    <div class="col-md-9">
                    </div>
                </div>
            </div>
        `;
    }
}