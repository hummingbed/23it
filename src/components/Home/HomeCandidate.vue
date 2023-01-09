<template>
    <div id="candidate">
        <div class="container py-5 overflow-hidden">
            <div class="p-3 col fw-bold" style="color: #F7AEF8;">
                CANDIDATE
            </div>
            <div class="row justify-content-between text-white g-5">
                <div class="col-md-5">
                    <div class="p-3 d-grid">
                        <span class="fs-2 fw-bold">
                            Learn and grow as an
                            <p> IT professional</p>
                        </span>
                        <p class="fs-5 gotsek-font">When you find a new job with an IT staffing service, you can assume that you will land a job
                            or assignment full of challenges, job satisfaction and growth. We will guide you through all
                            the processes so that you can fully focus on your work or task.</p>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="p-3 d-grid  gutter-left-text">
                        <span class="fs-2 fw-bold">
                            Moving to the
                            <p> Netherlands.</p>
                        </span>
                        <p class="fs-5 gotsek-font">
                            Are you currently working in IT in your country and are you willing to work and live in the
                            Netherlands? We will help you find a job and provide the necessary assistance with moving.
                            How to find housing, a social security number and a bank account.
                        </p>
                    </div>
                </div>

                <div class="col-md-5">
                    <div class="p-3 d-grid">
                        <span class="fs-2 fw-bold">
                            We know our clients
                            <p> inside out.</p>
                        </span>
                        <p class="fs-5 gotsek-font">Their ambitions, company culture and what they are really looking for in a candidate. We
                            survey our customers extensively, both technically and functionally. Therefore, we know for
                            sure that your new place of work or destination will really suit you.
                        </p>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="p-3 d-grid  gutter-left-text">
                        <span class="fs-2 fw-bold">
                            we know what you
                            <p> want.</p>
                        </span>
                        <p class="fs-5 gotsek-font">
                            You're not just taking the next step as an IT professional. You want to be in an
                            organization where you will be given space to further develop your talents. A company with
                            potential, ambition and a corporate culture where you feel at home. We can find these
                            companies for you.
                        </p>
                    </div>
                </div>
            </div>
            <a class="fw-bold text-dark mt-4 get-in-touch-btn float-end " href="#">GET IN TOUCH</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeCandidate',
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

.get-in-touch-btn {
    background: #fff;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
@media only screen and (min-width: 767px) {
    .gutter-left-text {
        float: right;
    }
}
</style>