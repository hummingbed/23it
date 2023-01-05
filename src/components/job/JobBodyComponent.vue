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

        <div class="job-openings">
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
            <div class="col-lg-7 ">

                <div class="row g-2">
                    <div class="col dropdown">
                        <a class="button px-5 w-100 py-3 text-color-white border dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false" style="background-color: #070223;  ">
                            Date Posted
                        </a>
                        <ul class="col dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <div class="col dropdown">
                        <a class="button px-5 w-100 py-3 text-color-white border dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false" style="background-color: #070223;  ">
                            Salary Estimate
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <div class="col-sm-12 col-md-3 dropdown">
                        <a class="button px-5 py-3 w-100 text-color-white border dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false" style="background-color: #070223;  ">
                            Job Type
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>



        <div class="row g-5">
            <div class="col-md-4">
                <div class="py-5">
                    <p class="text-color-white fw-bold">25.478 Offers Worldwide</p>
                    <p class="text-color-white fw-bold">Sort by: relevance - <span style="color: #F7AEF8;"> date</span>
                    </p>

                </div>
                
                <div class="py-2 border ">
                    <div class="mx-auto col-9">
                        <div>
                            <p class="fs-3 text-color-white fw-bold">Azure DevOps
                                Engineer</p>
                            <div class="text-color-white fw-bold"><span><i class="bi bi-buildings"
                                        style="color: #F7AEF8;"></i></span> Forever young</div>
                            <div class="text-color-white "><span><i class="bi bi-geo-alt"
                                        style="color: #F7AEF8;"></i></span> Kathmandu, Nepal</div>
                            <div class="text-color-white mb-3"><span><i class="bi bi-cash"
                                        style="color: #F7AEF8;"></i></span> 2000 EUR - 2500 EUR</div>
                            <small class="text-color-white ">
                                <ul>
                                    <li>Ability to write code – HTML & CSS</li>
                                    <li>Experience using Invision a plus</li>
                                </ul>
                            </small>
                            <p class="text-color-white "><i class="bi bi-person-fill"
                                    style="color: #F7AEF8;"></i> Fulltime</p>
                            <small class="text-color-white">Posted 3 days ago</small>
                        </div>
                    </div>
                </div>

                <div class="py-2 border ">
                    <div class="mx-auto col-9">
                        <div>
                            <p class="fs-3 text-color-white fw-bold">Azure DevOps
                                Engineer</p>
                            <div class="text-color-white fw-bold"><span><i class="bi bi-buildings"
                                        style="color: #F7AEF8;"></i></span> Forever young</div>
                            <div class="text-color-white "><span><i class="bi bi-geo-alt"
                                        style="color: #F7AEF8;"></i></span> Kathmandu, Nepal</div>
                            <div class="text-color-white mb-3"><span><i class="bi bi-cash"
                                        style="color: #F7AEF8;"></i></span> 2000 EUR - 2500 EUR</div>
                            <small class="text-color-white ">
                                <ul>
                                    <li>Ability to write code – HTML & CSS</li>
                                    <li>Experience using Invision a plus</li>
                                </ul>
                            </small>
                            <p class="text-color-white "><i class="bi bi-person-fill"
                                    style="color: #F7AEF8;"></i> Fulltime</p>
                            <small class="text-color-white">Posted 3 days ago</small>
                        </div>
                    </div>
                </div>

                <div class="py-2 border ">
                    <div class="mx-auto col-9">
                        <div>
                            <p class="fs-3 text-color-white fw-bold">Azure DevOps
                                Engineer</p>
                            <div class="text-color-white fw-bold"><span><i class="bi bi-buildings"
                                        style="color: #F7AEF8;"></i></span> Forever young</div>
                            <div class="text-color-white "><span><i class="bi bi-geo-alt"
                                        style="color: #F7AEF8;"></i></span> Kathmandu, Nepal</div>
                            <div class="text-color-white mb-3"><span><i class="bi bi-cash"
                                        style="color: #F7AEF8;"></i></span> 2000 EUR - 2500 EUR</div>
                            <small class="text-color-white ">
                                <ul>
                                    <li>Ability to write code – HTML & CSS</li>
                                    <li>Experience using Invision a plus</li>
                                </ul>
                            </small>
                            <p class="text-color-white "><i class="bi bi-person-fill"
                                    style="color: #F7AEF8;"></i> Fulltime</p>
                            <small class="text-color-white">Posted 3 days ago</small>
                        </div>
                    </div>
                </div>

                <div class="py-2 border ">
                    <div class="mx-auto col-9">
                        <div>
                            <p class="fs-3 text-color-white fw-bold">Azure DevOps
                                Engineer</p>
                            <div class="text-color-white fw-bold"><span><i class="bi bi-buildings"
                                        style="color: #F7AEF8;"></i></span> Forever young</div>
                            <div class="text-color-white "><span><i class="bi bi-geo-alt"
                                        style="color: #F7AEF8;"></i></span> Kathmandu, Nepal</div>
                            <div class="text-color-white mb-3"><span><i class="bi bi-cash"
                                        style="color: #F7AEF8;"></i></span> 2000 EUR - 2500 EUR</div>
                            <small class="text-color-white ">
                                <ul>
                                    <li>Ability to write code – HTML & CSS</li>
                                    <li>Experience using Invision a plus</li>
                                </ul>
                            </small>
                            <p class="text-color-white "><i class="bi bi-person-fill"
                                    style="color: #F7AEF8;"></i> Fulltime</p>
                            <small class="text-color-white">Posted 3 days ago</small>
                        </div>
                    </div>
                </div>

               

                

                <div>
                    <p class=" fw-bold" style="color: #F7AEF8;">
                        <i class="bi bi-arrow-left"></i>
                        1 <span class="opacity-25"> 234...789 </span>
                        <i class="bi bi-arrow-right"></i>
                    </p>
                </div>

            </div>
            <div class="col-md-8">
                <div class="pt-5">
                    <div class="p-5 border text-color-white">
                        <p class="fs-2 ">Azure DevOps Engineer (Full time)</p>
                        <p> Forever young</p>
                        <p>2000 EUR - 2500 EUR</p>
                        <p class="mb-4">Kathmandu, Nepal</p>
                        <div class=" mb-5">
                            <a href="" class=" text-dark px-5 py-3 fw-bold" style="background: #F0E4D9;">APPLY</a>
                        </div>
                        <hr>

                        <p class="fw-bold">Description</p>
                        <p>
                            Description A friendly multi-disciplinary practice have just been awarded an exciting
                            Residential and Commercial project and are now looking for the right Architectural
                            Technician or
                            Architectural Assistant to join their friendly team in Hertfordshire. This is an ideal
                            opportunity for any technical Architectural Assistants and Technicians/ Technologists
                            looking to
                            work for a growing practice and be heavily involved in all aspects with long term career
                            progression
                        </p>

                        <p class="fw-bold">Duties & Responsibilities</p>

                        <ul class="opacity-50 text-color-white">
                            <li> Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)
                            </li>
                            <li>Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch
                                is
                                our preferred concepting)</li>

                        </ul>
                        <ul class="opacity-25 text-color-white">
                            <li>Cross-browser and platform testing as standard practice</li>
                            <li>Experience using Invision a plus </li>
                            <li>Experience in video production a plus or, at a minimum, a willingness to learn</li>
                        </ul>

                        <p class="fw-bold"> Skills & Experience</p>

                        <ul>
                            <li>Advanced degree or equivalent experience in graphic and web design3 or more years of
                                professional design experience
                            </li>
                            <li>Direct response email experience</li>
                            <li>Ecommerce website design experience</li>
                            <li>Familiarity with mobile and web apps preferred</li>
                            <li>
                                Excellent communication skills, most notably a demonstrated ability to solicit and
                                address
                                creative and design feedback
                            </li>
                            <li>
                                Must be able to work under pressure and meet deadlines while maintaining a positive
                                attitude
                                and providing exemplary customer service
                            </li>
                            <li>
                                Ability to work independently and to carry out assignments to completion within
                                parameters
                                of instructions given, prescribed routines, and standard accepted practices
                            </li>
                        </ul>
                        <p class="fw-bold"> Benefits</p>
                        <p>
                            Company is a 2016 Iowa City-born start-up that develops consectetuer adipiscing elit.
                            Phasellus
                            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
                            mattis
                            vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                        </p>

                        <p style="color: #F7AEF8;">To The Job Details</p>


                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Respond to the vacancy</label>
                            <textarea style="background-color: #070223; " placeholder="Write a cover letter..."
                                class="form-control text-color-white" id="exampleFormControlTextarea1"
                                rows="3"></textarea>
                        </div>

                        <p class="pt-3" style="color: #F7AEF8; " data-bs-toggle="modal" href="#exampleModalToggle"
                            role="button">Upload Cover Letter <i class="bi bi-arrow-up-right"></i><br>
                            <input class="" type="file" id="formFile">
                        </p>

                        <p class="pt-3" style="color: #F7AEF8; " data-bs-toggle="modal" href="#exampleModalToggle"
                            role="button">Upload CV <i class="bi bi-arrow-up-right"></i><br>
                            <input class="" type="file" id="formFile">
                        </p>

                        <div class=" mt-5">
                            <a href="" class=" text-dark px-5 py-3 fw-bold" style="background: #F0E4D9;">APPLY</a>
                        </div>


                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

export default {
    name: 'JobBodyComponent',

}
</script>


<style>

.job-openings{
    font-size: 10vw;
}
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