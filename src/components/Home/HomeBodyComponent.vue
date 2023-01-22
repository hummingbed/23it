<template>
    <div class="container py-5 px-4">
        <div class="col-lg-12">
            <div class="row gx-5  mt-5">
                <b><small class="gotsek-font fs-5 pb-5" style="color: #F7AEF8;">THIS IS 23IT</small></b>
                <div class="col-md-11 mt-5 ">
                    <h2>
                        <div class="text-white fw-bolder lh-sm home-head-text">
                            <span><div class="slide-left">We are a recruitment</div> </span>
                            <span><div class="slide-left">agency with a focus</div></span>
                             on <span class="cloud-cyber-text">Cloud,
                                cyber</span> and,
                            <span>
                                <div class="d-flex slide-up">
                                <p class="dev-ops">Dev-ops</p>
                                <p>positions.</p>
                            </div>
                            </span>
                        </div>
                    </h2>
                </div>
            </div>
            <div class="d-flex gap-5 align-items-center float-end">
                <a class="text-dark fw-bolder employers-btn" href="#HomeEmployerComponent">EMPLOYERS
                    <i class=" employers-icon bi bi-arrow-right"></i></a>
                <b>
                    <a class="mt-1 job-btn text-decoration-none" href="#dream-job">
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


<style scoped>

@font-face{
  font-family: KyivTypeSerif-Bold3;
  src: url(../../assets/font/KyivTypeSerif-Bold3.ttf);
}

.container{
  font-family: KyivTypeSerif-Bold3;
}

.gotsek-font{
    font-family: 'Space Grotesk', sans-serif;
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 1s .5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 2s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 3s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 4s 2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}











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

@media only screen and (min-width: 1440px) {
    .home-head-text {
        font-size: 90px;
        letter-spacing: .3rem;
    }

    .employers-btn{
        margin-right: 5vw;
    }
}

@media only screen and (max-width: 1439px) {
    .home-head-text {
        font-size: 85px;
        letter-spacing: .3rem;
    }

    .employers-btn{
        margin-right: 5vw;
    }
}

@media only screen and (max-width: 1399px) {
    .home-head-text {
        font-size: 80px;
        letter-spacing: .3rem;
    }
}

@media only screen and (max-width: 1199px) {
    .home-head-text {
        font-size: 60px;
        letter-spacing: .3rem;
    }

    .employers-btn{
        margin-right: 5vw;
    }
}

@media only screen and (max-width: 991px) {
    .home-head-text {
        font-size: 45px;
        letter-spacing: .3rem;
    }
    .employers-btn{
        margin-right: 5vw;
    }
}

@media only screen and (max-width: 767px) {
    .home-head-text {
        font-size: 35px;
        letter-spacing: .3rem;
    }
    .employers-btn{
        margin-right: 5vw;
    }
}


@media only screen and (max-width: 515px) {
    .home-head-text {
        font-size: 30px;
        /* letter-spacing: .3rem; */
    }
    .employers-btn{
        margin-right: 5vw;
        padding: 10px 28px;
    }
}

@media only screen and (max-width: 462px) {
    .home-head-text {
        font-size: 20px;
        /* letter-spacing: .3rem; */
    }
    
}
/*  */

.cloud-cyber-text {
    background: #8093F1;
}


.dev-ops {
    transform: rotateZ(350deg);
    background: #F7AEF8;
}
</style>