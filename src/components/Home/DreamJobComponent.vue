<template>
    <div class="container py-5  ">
        <div class="row gx-5">
            <div class="col ">
                <div class="p-3 ">
                    <div class="border-bottom d-flex gap-1 fs-4 my-3 fw-bolder text-white ">
                        <p>FIND YOUR</p> 
                        <p class="dream-job "> DREAM</p>  
                        <p>JOB</p>
                    </div>
                    <form>
                        <input class="mainLoginInput text-white" style="width: 100%; height: 3.3rem;" type="text"
                            placeholder="&#61442; &nbsp; KEYWORDS" /> <br />
                        <input class="mainLoginInput text-white" style="width: 100%; height: 3.3rem;" type="text"
                            placeholder="&#xf041; &nbsp; LOCATION" /> <br />
                        <input class="mainLoginInput text-white" style="width: 100%; height: 3.3rem;" type="text"
                            placeholder="&#xf0b1; &nbsp; CHOOSE A CATEGORY... " /> <br />

                        <div class="my-3 row g-3 justify-content-center">
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
                                    PARTIME
                                </label>
                            </div>
                            <div class="col-md-3 col-lg-2 form-check text-white">
                                <input class="form-check-input border" type="checkbox">
                                <label class="form-check-label">
                                    TEMPOARY
                                </label>
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
    margin: 5px 0px;
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

.form-check-input{
    background-color: #070223;
}

.dream-job {
    transform: rotateZ(352deg);
    background: #F7AEF8;
    width: 6rem;
}

</style>