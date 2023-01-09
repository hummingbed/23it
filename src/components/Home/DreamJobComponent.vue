<template>
    <div class="container py-5  ">
        <div class="row gx-5">
            <div class="col ">
                <div class="p-3 ">
                    <div
                        class="border-bottom d-flex gap-2  my-3 fw-bolder text-white bounce find-your-dream-job">
                        <span><p id="dream-job">FIND YOUR</p></span>
                        <span><p class="dream-job "> DREAM</p></span>
                       <span> <p class="">JOB</p></span>
                    </div>
                    <form>
                        <input class="mainLoginInput text-white" style="width: 100%; height: 3.3rem;" type="text"
                            placeholder="&#61442; &nbsp; KEYWORDS" /> <br />
                        <input class="mainLoginInput text-white" style="width: 100%; height: 3.3rem;" type="text"
                            placeholder="&#xf041; &nbsp; LOCATION" /> <br />
                        <input class="mainLoginInput text-white" style="width: 100%; height: 3.3rem;" type="text"
                            placeholder="&#xf0b1; &nbsp; CHOOSE A CATEGORY... " /> <br />

                        <div class="my-3 row g-3 justify-content-between">
                            <div class="col-md-3 col-lg-2 form-check text-white">
                                <input class="form-check-input border" type="checkbox">
                                <label class="form-check-label">
                                    FREELANCE
                                </label>
                            </div>
                            <div class="col-md-3 col-lg-2 form-check text-white">
                                <input class="form-check-input border" type="checkbox">
                                <label class="form-check-label">
                                    FULLTIME
                                </label>
                            </div>

                            <div class="col-md-3 col-lg-2 form-check text-white">
                                <input class="form-check-input border" type="checkbox">
                                <label class="form-check-label">
                                    INTERNSHIP
                                </label>
                            </div>
                            <div class="col-md-3 col-lg-2 form-check text-white">
                                <input class="form-check-input border" type="checkbox">
                                <label class="form-check-label">
                                    PART TIME
                                </label>
                            </div>
                            <div class="col-md-3 col-lg-2 form-check text-white">
                                <input class="form-check-input border" type="checkbox">
                                <label class="form-check-label">
                                    TEMPORARY
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="button float-end mt-3 fw-bold text-dark">
                                FIND A JOB  
                                <img src="../../assets/arrow/dark-arrow-right.png" class="img-fluid mb-1" style="height: 20px;" alt="">
                            </div>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'DreamJobComponent',
}
</script>


<style scoped>
@import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";

@font-face{
  font-family: KyivTypeSerif-Bold3;
  src: url(../../assets/font/KyivTypeSerif-Bold3.ttf);
}


.bounce span {
    animation: bounce 1s infinite;
}
@keyframes bounce {
    0%,
    50%,
    100% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-20px);
    }
}

.ten span:nth-of-type(1) {
    animation-delay: 0.1s;
}




.container{
  font-family: KyivTypeSerif-Bold3;
}



.button {
    background: #fff;
    /* border: none; */
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}


@media only screen and (min-width: 1440px) {
    .find-your-dream-job {
        font-size: 48px;
    }

    .dream-job {
        transform: rotateZ(352deg);
        background: #F7AEF8;
        width: 180px;
    }
}

@media only screen and (max-width: 1439px) {
    .find-your-dream-job {
        font-size: 3.5vw;
    }

    .dream-job {
        transform: rotateZ(352deg);
        background: #F7AEF8;
        width: 13vw;
    }
}


input:focus,
select:focus {
    outline: none !important;
}

input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
}

input[type="text"] {
    background-color: #070223;
    /* background-image: url("../../assets/img/input.png"); */
}


.mainLoginInput {
    margin: 18px 0px;
    letter-spacing: 3px;
}

.mainLoginInput::-webkit-input-placeholder {
    font-family: FontAwesome;
    font-weight: normal;
    overflow: visible;
    vertical-align: top;
    display: inline-block !important;

}

.mainLoginInput::-moz-placeholder {
    font-weight: normal;
    overflow: visible;
    vertical-align: top;
    display: inline-block !important;
}

.mainLoginInput:-ms-input-placeholder {
    font-family: FontAwesome;
    font-weight: normal;
    overflow: visible;
    vertical-align: top;
    display: inline-block !important;
}

.form-check-input {
    background-color: #070223;
}
</style>