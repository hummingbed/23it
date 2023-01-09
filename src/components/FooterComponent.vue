<template>
    <div class="container py-5">
        <div class="row border-top border-secondary">
            <div class="col-md-5 px-5">
                <div class="p-3 d-grid gap-3 grotesk-font">
                    <router-link class="text-white text-decoration-none fs-4" :to="'/about'"> About Us</router-link>
                    <a href="/#HomeEmployerComponent" class="text-white text-decoration-none fs-4"> Employer</a>
                    <a href="#" class="text-white text-decoration-none fs-4"> Newsletter</a>
                    <router-link class="text-white text-decoration-none fs-4" :to="'/contact'"> Contact Us</router-link>	
                </div>
            </div>
            <div class="col-md-7">
                <div class="p-5 ">
                    <h1 class="col lh-1 text-white fw-bold business-text-body">
                        Let`s get down
                        <div class="d-flex gap-2">
                            to
                            <p class="business-text">business.</p>
                        </div>
                    </h1>
                </div>
            </div>
        </div>

        <div class="row g-5 py-5 ">
            <div class="col">
                <div class="px-5  d-flex fs-5 gap-4">
                    <a href="https://www.linkedin.com/company/80849894"><i class="bi bi-linkedin py-1 px-2 text-dark"></i></a>
                    <a href="https://www.instagram.com/23it_company/"><i class="bi bi-instagram py-1 px-2 text-dark"></i></a>
                </div>
            </div>
            <div class="col grotesk-font">
                <div class="px-5 d-grid text-white">
                    <p>Copyright 2022 23it</p>
                    <div class="d-flex gap-3">
                        <a class="text-white" href="#">Privacy policy</a>
                        <a class="text-white" href="#">Cookie policy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    name: 'FooterComponent',
}
</script>

<style scoped>

@font-face{
  font-family: KyivTypeSerif-Bold3;
  src: url(../assets/font/KyivTypeSerif-Bold3.ttf);
}

.container{
  font-family: KyivTypeSerif-Bold3;
}


.grotesk-font{
    font-family: 'Space Grotesk', sans-serif;
}


@media screen and (min-width: 1024px) {
    .business-text-body {
        font-size: 70px;
    }

    .business-text {
        transform: rotateZ(352deg);
        background: #F7AEF8;
        width: 20rem;
    }
}

@media screen and (max-width: 1023px) {
    .business-text {
        transform: rotateZ(352deg);
        background: #F7AEF8;
        width: 11rem;
    }
}

.bi-linkedin,
.bi-instagram {
    background: #F7AEF8;

}
</style>