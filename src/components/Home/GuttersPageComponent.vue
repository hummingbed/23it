<template>

    <div class="container py-5">
        <div class=" py-2 col fw-bolder" style="color: #F7AEF8;">
            01
        </div>
        <div class="col fs-1 fw-bold lh-base">
            <span class="text-white we-know">We know what we are <br> talking about and will make <br> the</span> <span
                class="text-blue we-know">difference!</span>
        </div>
        <div class="container overflow-hidden pt-5 fs-4">
            <div class="row justify-content-between gy-5 lh-base">
                <div class="col-md-6">
                    <div class=" text-break text-white">
                        We firmly believe in specialization to <br> better understand what the business
                        <br> needs are and what
                        the needs are from <br> the candidate.
                    </div>
                </div>
                <div class="col-md-6 ">
                    <div class="  text-break text-white gutter-left-text">
                        We do recruit crossboarders. So when <br> needed we will make sure your perfect <br> candidate
                        will be
                        selected whenever, <br> wherever!
                    </div>
                </div>
            </div>
        </div>



        <!-- <div class=" text-white col-md-12 my-3"> -->


        <div class="row g-5 mt-5 text-white gutter-background">
            <div class="col-sm-12 col-md-12 col-lg-6 position-relative search-and-selection">
                <div class="pt-5 text-lg-start text-center fs-1 fw-bold">
                    <div class="col-lg-6">
                        <div>Search & Selection</div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 position-relative col-lg-6">
                <div class="fs-4 mb-4 lh-base ">
                    Software consulting services help plan and implement software improvements as well as staff
                    software development projects. We architect, build, and deliver robust digital products
                    entirely in-house, backed by our reputation for quality, stability and support.
                </div>
            </div>
        </div>



        <div class="row g-5 mt-5 py-5 text-white gutter-background">

            <div class="col-lg-6 col-md-12 col-sm-12 search-and-selection d-inline d-lg-none">
                <div class="text-center text-lg-end fs-1 fw-bold">
                    Freelance
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="fs-4 pb-4 lh-base">
                    Take advantage of our outsourcing team to build an effective, external DevOps pipeline to speed up
                    your software delivery process.
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 position-relative search-and-selection d-none d-lg-inline">
                <div class="position-absolute top-50 start-50 translate-middle  text-start fs-1 fw-bold">
                    Freelance
                </div>
            </div>
        </div>



        <div class="row g-5 mt-5 text-white gutter-background">
            <div class="col-sm-12 col-md-12 col-lg-6 position-relative search-and-selection">
                <div class="pt-5 text-lg-start text-center fs-1 fw-bold">
                    <div class="col-lg-6">
                        <div>Outsourcing</div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 position-relative col-lg-6">
                <div class="fs-4 mb-4 lh-base ">
                    Take advantage of our outsourcing team to build an effective, external DevOps pipeline to speed up
                    your software delivery process. We are also able to deliver the right expertise besides DevOps and
                    Cloud.
                </div>
            </div>
        </div>






        <div class="row g-5 mt-5 text-white gutter-background">

            <div class="col-lg-4 col-sm-12 col-md-12 search-and-selection d-inline d-lg-none">
                <div class="text-center text-lg-end fs-1 fw-bold">
                    Trainee Development
                </div>
            </div>

            <div class="col-lg-8 col-sm-12 col-md-12">
                <div class="fs-4 pb-4 lh-base">
                    How fast does the IT market will evolve? What does that ask from us in the current
                    situation? What do the IT specialist and our clients need in the future? With those
                    questions we are working on these topics together with our clients needs and build
                    traineeships on the specif demands. With a focus on IT Traineeship Cloud Engineering &
                    DevOps.
                </div>
            </div>

            <div class="col-lg-4 col-sm-12 col-md-12 position-relative search-and-selection d-none d-lg-inline">
                <div class="position-absolute top-50 start-50 translate-middle  text-start fs-1 fw-bold">
                    Trainee Development
                </div>
            </div>
        </div>


        <!-- </div> -->
    </div>

</template>

<script>
export default {
    name: 'GuttersPageComponent',
}
</script>

<style scoped>
@media only screen and (max-width: 767px) {
    .search-and-selection {
        height: 20vh;
    }

}


.gutter-background {
    background: rgba(128, 147, 241, 0.52);
}

@media only screen and (min-width: 767px) {
    .gutter-left-text {
        float: right;
    }
}

@media only screen and (min-width: 1440px) {
    .we-know {
        font-size: 80px;
    }
}

@media only screen and (max-width: 1439px) {
    .we-know {
        font-size: 5.2vw;
    }
}


.lh-base {
    letter-spacing: .1rem;
}

.text-blue {
    color: #B388EB;
}
</style>