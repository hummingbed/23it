<template>

    <div id="HomeEmployerComponent">

        <div class="container text-white py-5">
            <div class="col fw-bold" style="color: #F7AEF8;">
                EMPLOYER
            </div>
            <div class="col  fw-bold pb-5 putting-right-people">
                <div> Putting the <span style="color: #B388EB;">right people</span></div>
                <div>in the right <span style="color: #B388EB;">positions</span> gives</div>
                <div> us energy.</div>
            </div>
            <div class="row py-5 gy-3 gx-5">
                <div class="col-lg-6 col-md-12 mt-2">
                    <div class="p-3">
                        <div class="d-grid fs-5">
                            <p>Covering the Netherlands, Europe and the US, we combine marketing and recruitment
                                technology </p>
                            <p>We creating a deep candidate pool meaning you have access to the best talent in the
                                business. Not only do we make sure their skills match your needs, we make sure they fit
                                into your culture too.</p>
                            <p>The best talent with the best personalities - easy. Whether it’s video screening,
                                psychometric testing, or remote in-house talent </p>
                            <p>Our candidates are engaged and dynamic. Get in touch to find out how we can help you hire
                                and recruit better talent. </p>
                            <p>We design a system that works.</p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-6 text-center text-lg-end col-md-12">
                    <img src="../../assets/img/home-grp-img.png" class="img-fluid img-animation" alt="">
                </div>
            </div>
            <a class="fw-bold text-dark mt-4 get-in-touch-btn offset-md-2 " href="#">GET IN TOUCH</a>
        </div>
    </div>
</template>


<script>
export default {
    name: 'HomeEmployerComponent',
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

.img-animation {
    transition: width 2s, height 2s, transform 2s;
}

.img-animation:hover {
    transform: rotate(360deg);
}




@media only screen and (min-width: 1440px) {
    .putting-right-people {
        font-size: 90px;
    }
}

@media only screen and (max-width: 1439px) {
    .putting-right-people {
        font-size: 6vw;
    }
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
</style>