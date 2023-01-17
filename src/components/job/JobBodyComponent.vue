<template>
    <div class="container">
        <nav class="pt-5" style="--bs-breadcrumb-divider: ''" aria-label="breadcrumb">
            <ol class="breadcrumb fw-bold mt-5">
                <li class="breadcrumb-item mt-2">
                    <router-link style="color: #F7AEF8;" :to="'/'"> HOME</router-link>
                </li>
                <li class="breadcrumb-item">
                    <i class="bi bi-arrow-left fs-3" style="color: #F7AEF8;"></i>
                </li>
                <li class="breadcrumb-item active mt-2" aria-current="page">
                    <a href="" style="color: #F7AEF8;">JOB BOARD</a>
                </li>
            </ol>
        </nav>

        <div class="row g-5 pt-5 justify-content-space between border">
            <div class="col-md-8">
                <div class="border">
                    <div class="p-4 text-color-white">
                        <div class="row">
                            <p class="col fw-bold">JOB DESCRIPTION</p>
                            <p class="col text-end">Posted 1 hour ago</p>
                        </div>

                        <p class="fs-2 "> {{ job_title }}</p>

                        <div class="d-flex gap-3">
                            <p class="  ">{{ company_name }} </p>
                            <p class=" border-end "></p>
                            <p class="">{{ location }}</p>
                            <li class="">{{ job_type }}</li>
                            <li class="">{{ salary }}</li>
                        </div>

                        <div class=" my-5">
                            <a href="#applyJob" class="text-decoration-none text-dark px-5 py-3 fw-bold"
                                style="background: #F0E4D9;">APPLY FOR JOB</a>
                        </div>
                        <hr>

                        <p class="fw-bold">Description</p>
                        <p>{{ description }}</p>



                        <div class="responsibility">
                            <p class="fw-bold">Duties & Responsibilities</p>
                            <ul v-for="eachResponsibility in job_responsibility" class="text-color-white ">
                                <li>{{ eachResponsibility }}</li>
                            </ul>
                        </div>


                        <p class="fw-bold"> Skills & Experience</p>

                        <ul v-for="eachSkill in job_skills">
                            <li>{{ eachSkill }}</li>
                        </ul>

                        <p class="fw-bold"> Benefits</p>
                        <p> {{ job_benefit }}</p>

                        <p id="applyJob" style="color: #F7AEF8;">To The Job Details</p>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Respond to the vacancy</label>
                            <textarea style="background-color: #070223; " placeholder="Write a cover letter..."
                                class="form-control text-color-white" id="exampleFormControlTextarea1" rows="3">
                            </textarea>
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

            <div class="col-md-3 mt-5">
                <div class="p-3 text-white" style="background: #8093F1;">
                    <img src="../../assets/img/mc-donalds.png" class="img-fluid mb-4" alt="">
                    <p class="fs-3">McDonalds</p>
                    <p class="col-11">
                        McDonald’s U.S. leadership team draws from a proud history and set of values that made the
                        company an icon of American business. Meet our President and CEO, as well as other McDonald’s
                        U.S. executive team members who continue to build our legacy and ensure our Golden Arches shine
                        bright.
                    </p>
                    <p class="fs-5">Company Details</p>
                    <ul>
                        <li><small>201-500 employees</small></li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'


export default {
    name: 'JobBodyComponent',
    data() {
        return {
            company_name: null,
            id: null,
            job_title: null,
            job_type: null,
            jobs_id: null,
            location: null,
            remotive: null,
            salary: null,
            description: null,
            job_benefit: null,
            job_responsibility: [],
            job_skills: []
        };
    },
    mounted() {

        const jobId = this.$route.params.job_id;
        console.log(jobId)

        const docRef = doc(db, "jobs", jobId);
        getDoc(docRef)
            .then((doc) => {
                console.log(doc.data().job_responsibility, 'success')
                this.company_name = doc.data().company_name;
                this.job_title = doc.data().job_title;
                this.job_type = doc.data().job_type;
                this.salary = doc.data().salary;
                this.location = doc.data().location;
                this.description = doc.data().description;
                this.job_benefit = doc.data().job_benefit;
                this.job_responsibility = doc.data().job_responsibility;
                this.job_skills = doc.data().job_skills;
            });
    }


}
</script>


<style>
@media only screen and (min-width: 1441px) {
    .job-openings {
        font-size: 120px;
    }

}

@media only screen and (max-width: 1440px) {
    .job-openings {
        font-size: 10vw;
    }

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