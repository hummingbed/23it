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

        <div class="row g-5 pt-5 justify-content-space between">
            <div class="col-md-8">
                <form class="border" ref="form" @submit.prevent="sendEmail">
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
                            <label for="exampleFormControlTextarea1">Respond to the vacancy </label>
                            <textarea style="background-color: #070223; " v-model="message"
                                placeholder="Write a cover letter..." class="form-control text-white text-color-white"
                                name="message" id="exampleFormControlTextarea1">
                            </textarea>
                        </div>

                        <p class="pt-3" style="color: #F7AEF8; " data-bs-toggle="modal" href="#exampleModalToggle"
                            role="button" @change="changeFile">Upload Cover Letter <i class="bi bi-arrow-up-right"></i><br>
                            <input name="cv" class="" type="file" id="formFile">
                        </p>

                        <p class="pt-3" style="color: #F7AEF8; " data-bs-toggle="modal" href="#exampleModalToggle"
                            role="button">Upload CV <i class="bi bi-arrow-up-right"></i><br>
                            <input name="cover_letter" class="" type="file" id="formFile">
                        </p>

                        <div class=" mt-5">
                            <input href="" class=" text-dark px-5 py-3 fw-bold border-0" type="submit" value="APPLY"
                                style="background: #F0E4D9;" />
                        </div>
                    </div>
                </form>
            </div>

            <div class="col-md-3 mt-5">
                <div class="p-3 text-white" style="background: #8093F1;">
                    <img v-bind:src="job_img" class="img-fluid mb-4" alt="">
                    <p class="fs-3">{{ company_name }}</p>
                    <p class="col-11">
                        {{ description }}
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
            name: '',
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
            job_skills: [],
            job_img: null,
            message: '',
            cv: null
        };
    },
    methods: {
        sendEmail() {
            if (this.message.length <= 1 && this.cv == 1) {
                this.$swal(`Please, fill in the input field tp continue`);
            } else {

                emailjs.sendForm('service_ylxu3ro', 'template_fa4ysa5', this.$refs.form, '3NvocUzIR52-_Il9l')
                    .then((result) => {
                        console.log(this.message)
                        this.$swal(`Your application was sent successfully`);
                    }, (error) => {
                        this.$swal(`Hello, ${this.name} <br> Your application failed`);
                    });

            }

        },
        changeFile(e){
            this.cv = e.target.files.length;
        }
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
                this.job_img = doc.data().job_img
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