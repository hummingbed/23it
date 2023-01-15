<template>
    <div class="container">
        <nav class="pt-5" style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
            <ol class="breadcrumb fw-bold mt-5">
                <li class="breadcrumb-item mt-2">
                    <router-link style="color: #F7AEF8;" :to="'/'"> HOME</router-link>
                </li>

                <li class="breadcrumb-item"> <i class="bi bi-arrow-left fs-3" style="color: #F7AEF8;"></i></li>
                <li class="breadcrumb-item active mt-2" aria-current="page">
                    <a href="" style="color: #F7AEF8;">JOB BOARD</a>
                </li>
            </ol>
        </nav>

        <div class="job-openings fs-1">
            <p class="text-color-white ">Job <span class="px-2" style="background-color: #F7AEF8;">Openings</span></p>
        </div>



        <div class="row g-2">
            <div class="col-md-6 col-sm-12">
                <div class="input-group mb-3">
                    <div class="text-color-white border px-4 py-3" style="background-color: #070223;">WHAT</div>
                    <input style="background-color: #070223; " placeholder="Job title, keywords, or company" type="text"
                        class="form-control" aria-label="Text input with dropdown button">
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="input-group mb-3">
                    <div class="text-color-white border px-4 py-3 border" style="background-color: #070223;">WHERE</div>
                    <input style="background-color: #070223;" placeholder="Country, City" type="text"
                        class="form-control border" aria-label="Text input with dropdown button">
                </div>
            </div>
        </div>


        <hr class="text-white my-5">

        <div class="row g-5">
            <div class="col-md-3 text-white">
                <p>Filter</p>
                <div class="d-grid gap-2">
                    <p>Date posted</p>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Anytime
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                        <label class="form-check-label" for="flexCheckChecked">
                            Past week
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Past 24 hours
                        </label>
                    </div>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                        <label class="form-check-label" for="flexCheckChecked">
                            Past month
                        </label>
                    </div>

                </div>

                <div class="mt-3 d-grid gap-2">
                    <p>Job type</p>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Full-time
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                        <label class="form-check-label" for="flexCheckChecked">
                            Part-time
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Contract
                        </label>
                    </div>
                
                </div>


                <div class="mt-3 d-grid gap-2">
                    <p>Salary estimate</p>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            0-50K
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                        <label class="form-check-label" for="flexCheckChecked">
                            50-100K
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            100-150K
                        </label>
                    </div>
                    
                </div>

            </div>









            <div class="col-md-9">


                <div class="gap-3 d-flex ps-3">
                    <p class="text-color-white fw-bold">25.478 Offers Worldwide</p>
                    <p class="text-color-white fw-bold">Sort by: relevance - <span style="color: #F7AEF8;"> date</span>
                    </p>
                </div>



                <div class="container ">
                    <div class="row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2 g-lg-3">
                        <div class="col">
                            <div class="p-3 text-white rounded" style="background: #4C417E;">
                                <div class="row">
                                    <p class="col">McDonalds</p>
                                    <p class="col text-end">1hr ago</p>
                                </div>
                                <p class="fw-bold fs-4">Senior Product Designer</p>
                                <div class="d-flex gap-2">
                                    <i class="bi bi-clock" style="color: #F7AEF8;"></i>
                                    <p>Full-time</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-cash" style="color: #F7AEF8;"></i>
                                    <p>$110 - $150</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-globe-asia-australia" style="color: #F7AEF8;"></i>
                                    <p>Remote</p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="p-3 text-white" style="background: #4C417E;">
                                <div class="row">
                                    <p class="col">McDonalds</p>
                                    <p class="col text-end">1hr ago</p>
                                </div>
                                <p class="fw-bold fs-4">Senior Product Designer</p>
                                <div class="d-flex gap-2">
                                    <i class="bi bi-clock"></i>
                                    <p>Full-time</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-cash"></i>
                                    <p>$110 - $150</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-globe-asia-australia"></i>
                                    <p>Remote</p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="p-3 text-white" style="background: #4C417E;">
                                <div class="row">
                                    <p class="col">McDonalds</p>
                                    <p class="col text-end">1hr ago</p>
                                </div>
                                <p class="fw-bold fs-4">Senior Product Designer</p>
                                <div class="d-flex gap-2">
                                    <i class="bi bi-clock"></i>
                                    <p>Full-time</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-cash"></i>
                                    <p>$110 - $150</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-globe-asia-australia"></i>
                                    <p>Remote</p>
                                </div>
                            </div>
                        </div>



                        <div class="col">
                            <div class="p-3 text-white" style="background: #4C417E;">
                                <div class="row">
                                    <p class="col">McDonalds</p>
                                    <p class="col text-end">1hr ago</p>
                                </div>
                                <p class="fw-bold fs-4">Senior Product Designer</p>
                                <div class="d-flex gap-2">
                                    <i class="bi bi-clock"></i>
                                    <p>Full-time</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-cash"></i>
                                    <p>$110 - $150</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-globe-asia-australia"></i>
                                    <p>Remote</p>
                                </div>
                            </div>
                        </div>


                        <div class="col">
                            <div class="p-3 text-white" style="background: #4C417E;">
                                <div class="row">
                                    <p class="col">McDonalds</p>
                                    <p class="col text-end">1hr ago</p>
                                </div>
                                <p class="fw-bold fs-4">Senior Product Designer</p>
                                <div class="d-flex gap-2">
                                    <i class="bi bi-clock"></i>
                                    <p>Full-time</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-cash"></i>
                                    <p>$110 - $150</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-globe-asia-australia"></i>
                                    <p>Remote</p>
                                </div>
                            </div>
                        </div>


                        <div class="col">
                            <div class="p-3 text-white" style="background: #4C417E;">
                                <div class="row">
                                    <p class="col">McDonalds</p>
                                    <p class="col text-end">1hr ago</p>
                                </div>
                                <p class="fw-bold fs-4">Senior Product Designer</p>
                                <div class="d-flex gap-2">
                                    <i class="bi bi-clock"></i>
                                    <p>Full-time</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-cash"></i>
                                    <p>$110 - $150</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-globe-asia-australia"></i>
                                    <p>Remote</p>
                                </div>
                            </div>
                        </div>



                        <div class="col">
                            <div class="p-3 text-white rounded" style="background: #4C417E;">
                                <div class="row">
                                    <p class="col">McDonalds</p>
                                    <p class="col text-end">1hr ago</p>
                                </div>
                                <p class="fw-bold fs-4">Senior Product Designer</p>
                                <div class="d-flex gap-2">
                                    <i class="bi bi-clock" style="color: #F7AEF8;"></i>
                                    <p>Full-time</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-cash" style="color: #F7AEF8;"></i>
                                    <p>$110 - $150</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-globe-asia-australia" style="color: #F7AEF8;"></i>
                                    <p>Remote</p>
                                </div>
                            </div>
                        </div>



                        <div class="col">
                            <div class="p-3 text-white rounded" style="background: #4C417E;">
                                <div class="row">
                                    <p class="col">McDonalds</p>
                                    <p class="col text-end">1hr ago</p>
                                </div>
                                <p class="fw-bold fs-4">Senior Product Designer</p>
                                <div class="d-flex gap-2">
                                    <i class="bi bi-clock" style="color: #F7AEF8;"></i>
                                    <p>Full-time</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-cash" style="color: #F7AEF8;"></i>
                                    <p>$110 - $150</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-globe-asia-australia" style="color: #F7AEF8;"></i>
                                    <p>Remote</p>
                                </div>
                            </div>
                        </div>


                        <div class="col">
                            <div class="p-3 text-white rounded" style="background: #4C417E;">
                                <div class="row">
                                    <p class="col">McDonalds</p>
                                    <p class="col text-end">1hr ago</p>
                                </div>
                                <p class="fw-bold fs-4">Senior Product Designer</p>
                                <div class="d-flex gap-2">
                                    <i class="bi bi-clock" style="color: #F7AEF8;"></i>
                                    <p>Full-time</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-cash" style="color: #F7AEF8;"></i>
                                    <p>$110 - $150</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-globe-asia-australia" style="color: #F7AEF8;"></i>
                                    <p>Remote</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>




            </div>

        </div>

    </div>
</template>


<script>

export default {
    name: 'ShotJob',
}
</script>



<style >
.text-color-white {
    color: #F0E4D9;

}

.button {

    border: none;
    color: white;
    /* padding: 15px 44px; */
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>