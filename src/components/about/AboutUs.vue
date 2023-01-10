<template>

    <div class="container py-5 text-white">

        <nav class="mt-5" style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
            <ol class="breadcrumb fw-bold">
                <li class="breadcrumb-item">
                    <router-link style="color: rgba(247, 174, 248, 0.5);" :to="'/'"> HOME</router-link>
                </li>

                <li class="breadcrumb-item">
                    <img src="../../assets/arrow/arrow-left.png" class="img-fluid" style="height: 15px;" alt="">
                </li>

                <li class="breadcrumb-item active " aria-current="page">
                    <a href="" style="color: #F7AEF8;">MEET OUR TEAM</a>
                </li>
            </ol>
        </nav>

        <div class="row mb-5 kyiv-font">
            <div class="col text-uppercase about-us-lead-text">
                <div>we are a leading</div>
                <div class="d-flex g-5">
                    <div class="font-monospace recruitment">
                        recruitment
                    </div>

                    <div>agency</div>
                </div> 
               
            </div>
        </div>


        <div class="row py-5 g-5">
            <div class="col-sm-12 col-md-6 ">
                <img src="../../assets/img/about-grp-img.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-6  col-sm-12">
                <h3 class="fs-1">Orelio lopes</h3>
                <div class="fs-5 lh-1">
                    <p>I’ve started my first years within Randstad as a</p>
                <p> Consultant. Than switch over to YER a recruitmentagency</p>
                <p>which focuses on IT staffing and Sales & Marketing. After </p>
                <p>that I’ve started as an entrepreneur. Freelancing in</p>
                <p>different organizations with detailed strategy on</p>
                <p>Recruitment and getting the best people in for these</p>
                <p>organizations.</p>
                <p>Now with our own company, we can have a focus on</p>
                <p>specific domains and give the business the attention that </p>
                <p> they deserve!</p>
                </div>
            </div>
        </div>


        <div class="row pt-5 kyiv-font">
            <div class="col focused-recruiting" >
                <p>We are <span style="color: #B388EB;"> focused</span> on <span
                        style="background-color: #F7AEF8;">recruiting</span> </p>
                <p>and <span style="background-color: #B388EB;">selection </span> of permanent </p>
                <p>and interim <span style="color: #F7AEF8;"> professionals.</span></p>
            </div>
        </div>


        <div class="row g-5">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="px-3 pt-3 fs-5" style="background: rgba(128, 147, 241, 0.52);">
                    <div>
                        From our Dutch head office in
                    </div>
                    <div>
                        Amsterdam, we link suitable
                    </div>
                    <div>
                        candidates to vacancies that
                    </div>
                    <div>
                        perfectly match their knowledge,
                    </div>
                    <div>
                        skills, and ambitions.
                    </div>

                    <div class="mt-3 progress col-11">
                        <div class="progress-bar w-100" style="background: #93A3F3;" role="progressbar"
                            aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="px-3 pt-3 fs-5" style="background: rgba(128, 147, 241, 0.52);">
                    <div>
                        Are you a manager or specialist
                    </div>
                    <div>
                        looking to fill in your vacancy
                    </div>
                    <div>
                        regarding Cloud & DevOps. Or are
                        you
                    </div>
                    <div>
                        looking for qualified professionals on
                    </div>
                    <div>
                        behalf of a company or organization?
                    </div>
                    <div class="mt-3 progress col-11">
                        <div class="progress-bar w-100" style="background: #93A3F3;" role="progressbar"
                            aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="px-3 pt-3 fs-5" style="background: rgba(128, 147, 241, 0.52);">
                    <div>
                        If you’re searching for a
                    </div>
                    <div>
                        Recruitment agency focused
                    </div>
                    <div>
                        on Cloud & DevOps be sure to get in

                    </div>
                    <div>
                        touch
                        with our headquarters in
                    </div>
                    <div>
                        Amsterdam.
                    </div>
                    <div class="mt-3 progress col-11">
                        <div class="progress-bar w-100" style="background: #93A3F3;" role="progressbar"
                            aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col pt-5 ms-2 ">
                <router-link class="text-dark fw-bold px-4 py-3 text-decoration-none" style="background: #F0E4D9;"
                    :to="'/contact'"> CONTACT
                    US</router-link>
            </div>
        </div>


    </div>
</template>

<script>

export default {
    name: 'AboutUs',

}
</script>


<style>

@font-face{
  font-family: KyivTypeSerif-Bold3;
  src: url(../../assets/font/KyivTypeSerif-Bold3.ttf);
}

.kyiv-font{
  font-family: KyivTypeSerif-Bold3;
}



@media only screen and (min-width: 1441px) {
    .focused-recruiting {
        font-size: 85px;
    }

    .about-us-lead-text {
        font-size: 100px;
    }

    .recruitment {
        transform: rotateZ(355deg);
        background: #B388EB;
        width: 700px;
    }

}

@media only screen and (max-width: 1440px) {
    .focused-recruiting {
        font-size: 6vw;
    }

    .about-us-lead-text {
        font-size: 7.2vw;
    }

    .recruitment {
        transform: rotateZ(355deg);
        background: #B388EB;
        width: 48vw;
        /* style="background-color: #B388EB; " */
    }
}
</style>


