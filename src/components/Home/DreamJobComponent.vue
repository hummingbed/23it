<template>
    <div class="container py-5  ">
        <div class="row gx-5">
            <div class="col-md-6">
                <div class="d-flex mt-3 fs-1 gap-2 fw-bolder text-white find-your-dream-job">
                    <span>
                        <p id="dream-job">FIND YOUR</p>
                    </span>
                    <span>
                        <p class="dream-job "> DREAM</p>
                    </span>
                    <span>
                        <p class="">JOB</p>
                    </span>
                </div>
            </div>

            <div class="col-md-6">
                <input class="mainLoginInput border text-white" style="width: 100%; height: 4.3rem;" type="text"
                    placeholder="Search: &nbsp; Job title, Keyword or company" v-model="searchText" />
            </div>
        </div>


       



        <div class="row g-0  my-4 rounded jobs-card" v-for="(jobs, index) in filteredItems">

            <div class="col-md-2 p-5 text-md-start text-sm-center">
                <img src="../../assets/img/mc-donalds.png" class="img-fluid rounded-start" alt="...">
            </div>

            <router-link :to="{ name: 'job', params: { job_id: jobs.id } }" class="col-md-10 py-5 text-decoration-none">
                <div class="card-body">
                    <div class="content">
                        <div class="card-text row text-white">
                            <p class="col card-title fs-4">{{ jobs.company_name }}</p>
                            <p class="col card-title text-end me-3">2d ago</p>
                        </div>
                        <p class="card-text text-white fs-3 mt-3">{{ jobs.job_title }}</p>
                        <div class="row">
                            <div class="col-md-10">
                                <p class="card-text fs-4 d-flex gap-3 mt-3 text-white">
                                    <small class="">{{ jobs.remotive }}</small> |
                                    <small class="">{{ jobs.location }}</small>
                                    <small class="">{{ jobs.job_type }}</small>
                                    <small class="">{{ jobs.salary }}</small>
                                </p>
                            </div>
                        </div>

                        <div class="content-details fadeIn-bottom d-none d-md-inline offset-lg-2">
                            <div class="button fw-bold text-dark">VIEW JOB</div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>

         <div class="button text-dark float-end">
            Find a Job
            <img src="../../assets/arrow/dark-arrow-right.png" style="height: 20px;" class="img-fluid" alt="">
        </div>
    </div>




</template>


<script>
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'

export default {
    name: 'DreamJobComponent',

    data() {
        return {
            searchText: '',
            searchCategory: 'all',
            jobData: [],
        };
    },
    computed: {
        filteredItems() {
            let filtered = this.jobData;

            if (this.searchCategory !== 'all') {
                filtered = filtered.filter(item => item[this.searchCategory].toLowerCase().includes(this.searchText.toLowerCase()));
            } else {
                filtered = filtered.filter(item => Object.values(item).join('').toLowerCase().includes(this.searchText.toLowerCase()));
            }

            return filtered.slice().reverse();;
        },
    },
    async mounted() {

        const querySnapshot = await getDocs(collection(db, "jobs"));
        querySnapshot.forEach((doc) => {
            let data = {
                company_name: doc.data().company_name,
                job_title: doc.data().job_title,
                job_type: doc.data().job_type,
                jobs_id: doc.data().jobs_id,
                location: doc.data().location,
                remotive: doc.data().remotive,
                salary: doc.data().salary,
                id: doc.id,
            }

            this.jobData.push(data);
        });


    }
}
</script>


<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);



.content {
    position: relative;
}

.content .content-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    height: 99%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s
}

.content:hover .content-overlay {
    opacity: 1
}


.content-details {
    position: absolute;
    top: 80%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(90%, 50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s
}

.content:hover .content-details {
    top: 50%;
    left: 50%;
    opacity: 1
}


.fadeIn-bottom {
    top: 60%
}


@font-face {
    font-family: KyivTypeSerif-Bold3;
    src: url(../../assets/font/KyivTypeSerif-Bold3.ttf);
}

.container {
    font-family: 'Space Grotesk', sans-serif;
}

.jobs-card {
    background: #4C417E;
}

.hide {
    display: none;
}

.myDIV:hover+.hide {
    display: block;
    color: red;
}

.jobs-card:hover {
    animation: mymove 3s infinite;
}

@keyframes mymove {
    50% {
        -webkit-box-shadow: 0 0 20px #fff;
        box-shadow: 0 0 30px #fff;
    }
}


.button {
    background: #F0E4D9;
    /* border: none; */
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}


@media only screen and (min-width: 1440px) {
    .find-your-dream-job {
        font-size: 48px;
    }

    .dream-job {
        transform: rotateZ(352deg);
        background: #F7AEF8;
        width: 180px;
    }
}

@media only screen and (max-width: 1439px) {
    .find-your-dream-job {
        font-size: 3.5vw;
    }

    .dream-job {
        transform: rotateZ(352deg);
        background: #F7AEF8;
        width: 13vw;
    }
}


input:focus,
select:focus {
    outline: none !important;
}

input {
    border-top-style: groove;
    border-right-style: groove;
    border-left-style: groove;
    border-bottom-style: groove;
}

input[type="text"] {
    background-color: #070223;
}


.mainLoginInput {
    margin: 18px 0px;
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

.form-check-input {
    background-color: #070223;
}
</style>