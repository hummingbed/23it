<template>
    <div class="container py-5 px-4">
        <div class="col-lg-12">
            <div class="row gx-5  mt-5">
                <b><small class="px-4  pb-5" style="color: #F7AEF8;">This is 23it</small></b>
                <div class="col-md-11 mt-5 ">
                    <h2>
                        <div class="px-4  text-white fw-bolder lh-sm home-head-text">
                            We are a recruitment agency with a focus <br> on <span class="cloud-cyber-text">Cloud,
                                cyber</span> and,
                            <div class="d-flex">
                                <p class="dev-ops">Dev-ops</p>
                                <p>positions.</p>
                            </div>
                        </div>
                    </h2>
                </div>
            </div>
            <div class="d-flex gap-5 align-items-center float-end">
                <a class="text-dark fw-bolder employers-btn" href="#">EMPLOYERS
                    <i class=" employers-icon bi bi-arrow-right"></i></a>
                <b>
                    <a class="mt-1 job-btn text-decoration-none" href="#">
                        FIND A JOB
                        <i class="bi bi-arrow-down"></i>
                    </a>
                </b>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeBodyComponent',
}
</script>


<style>

.employers-icon {
    background: #fff;
}

.employers-btn {
    background: #fff;
    /* border: none; */
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.job-btn {
    color: #F7AEF8;
}

@media only screen and (min-width: 1020px) {
    .home-head-text {
        font-size: 7.2vw;
        letter-spacing: .3rem;
    }

    .dev-ops {
        width: 35vw;
    }
    .employers-btn{
        margin-right: 5vw;
    }
}

@media only screen and (min-width: 768px) {
    .home-head-text {
        font-size: 6vw;
    }

    .dev-ops {
        width: 30vw;
    }
}

@media only screen and (max-width: 767px) {
    .home-head-text {
        font-size: 6vw;
    }

    .dev-ops {
        width: 30vw;
    }
}

.cloud-cyber-text {
    background: #8093F1;
}



@media only screen and (max-width: 424px) {

    .home-head-text {
        font-size: 7vw;
    }

    .dev-ops {
        width: 30vw;
    }
}


.dev-ops {
    transform: rotateZ(350deg);
    background: #F7AEF8;
}
</style>