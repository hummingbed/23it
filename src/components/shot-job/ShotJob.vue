<template>
    <div class="container">
        <div style="height: 100vh;"
            class="position-relative w-100">
            <div class="position-absolute text-white d-flex flex-column align-items-center justify-content-center"
                style="top: 0; right: 0; bottom: 0; left: 0; ">
                <h1 class="mb-4 mt-2 font-weight-bold text-center">The official job board for developers</h1>
                <div class="text-center">
                    <a href="#jobSearch" id="" class="btn px-5 py-3 text-white mt-3 mt-sm-0 mx-1"
                        style="border-radius: 30px; background-color: #9B5DE5;">Get Started</a>                   
                </div>
            </div>
        </div>

        <div class="job-openings fs-1"  id="jobSearch">
            <p class="text-color-white ">Job <span class="px-2" style="background-color: #F7AEF8;">Openings</span></p>
        </div>

        <div class="row g-2">
            <div class="col-md-6 col-sm-12">
                <div class="input-group mb-3">
                    <div class="text-color-white border px-4 py-3" style="background-color: #070223;">WHAT</div>
                    <input style="background-color: #070223; " placeholder="Job title, keywords, or company" type="text"
                        class="form-control text-white" v-model="searchText" aria-label="Text input with dropdown button">
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="input-group mb-3">
                    <div class="text-color-white border px-4 py-3 border" style="background-color: #070223;">WHERE</div>
                    <input style="background-color: #070223;" placeholder="Country, City" type="text"
                        class="form-control text-white border" v-model="searchCategory"
                        aria-label="Text input with dropdown button">
                </div>
            </div>
        </div>


        <hr class="text-white my-5">

        <div class="row g-5">
            <div class="col-md-3 text-white">
                <p>Filter</p>

                <div class="mt-3 d-grid gap-2">
                    <p>Job type</p>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Full-time" v-model="checkedJobType"
                            id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Full-time
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Part-time" v-model="checkedJobType"
                            id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Part-time
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="checkedJobType" value="Contract"
                            id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Contract
                        </label>
                    </div>

                </div>


                <div class="mt-3 d-grid gap-2">
                    <p>Salary estimate</p>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="- 50k" v-model="checkedSalary"
                            id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            0 - 50K
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="100k" v-model="checkedSalary"
                            id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            50 - 100K
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" v-model="checkedSalary" type="checkbox" value="150k"
                            id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            100 - 150K
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

                        <router-link :to="{ name: 'job', params: { job_id: jobData.id } }"
                            v-for="jobData in filteredItems.slice(0, 5)" class="col text-decoration-none">
                            <!-- <router-link :to="{ name: 'job', params: { job_id: jobs.id } }"></router-link> -->
                            <div class="p-3 jobs-card text-white rounded" style="background: #4C417E;">
                                <div class="row ">
                                    <div class="col-md-8 gap-2 d-flex">
                                        <img v-bind:src="jobData.job_img" style="height: 35px; width: 35px;"
                                            class="img-fluid" alt="">
                                        <p class="col"> {{ jobData.company_name }} </p>
                                    </div>
                                    <!-- <p class="col text-end">1hr ago</p> -->
                                </div>
                                <p class="fw-bold fs-4">{{ jobData.job_title }}</p>
                                <div class="d-flex gap-2">
                                    <i class="bi bi-clock" style="color: #F7AEF8;"></i>
                                    <p>{{ jobData.job_type }}</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-cash" style="color: #F7AEF8;"></i>
                                    <p>{{ jobData.salary }}</p>
                                </div>

                                <div class="d-flex gap-2">
                                    <i class="bi bi-globe-asia-australia" style="color: #F7AEF8;"></i>
                                    <p>{{ jobData.remotive }} | {{ jobData.location }}</p>
                                </div>
                            </div>
                        </router-link>

                    </div>
                </div>




            </div>

        </div>

    </div>
</template>


<script>
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'


export default {
    name: 'ShotJob',

    data() {
        return {
            searchText: '',
            searchCategory: '',
            jobData: [],
            checkedSalary: [],
            checkedJobType: [],
        };
    },
    computed: {
        filteredItems() {
            console.log(this.checkedSalary[0])
            let filtered = this.jobData;

            if (filtered.filter(item => item.location == this.searchCategory)) {
                filtered = filtered.filter(item => Object.values(item.location).join('')
                    .toLowerCase().includes(this.searchCategory.toLowerCase()));

                if (filtered.length == 0 && this.searchCategory.length > 3) {
                    // alert(`country: ${this.searchCategory} not found`)
                    this.$swal(`country: ${this.searchCategory} not found`);
                }
            }
            if (this.searchText) {
                filtered = filtered.filter(item => Object.values(item).join('').toLowerCase().includes(this.searchText.toLowerCase()));
            }
            if (this.checkedSalary[0]) {
                filtered = filtered.filter(item => Object.values(item).join('').toLowerCase().includes(this.checkedSalary[0].toLowerCase()));
            }
            if (this.checkedJobType[0]) {
                filtered = filtered.filter(item => Object.values(item).join('').toLowerCase().includes(this.checkedJobType[0].toLowerCase()));
            }

            return filtered.slice().reverse();
        },
    },
    async mounted() {
        console.log(db)
        const querySnapshot = await getDocs(collection(db, "jobs"));
        console.log('db')
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            let data = {
                company_name: doc.data().company_name,
                job_title: doc.data().job_title,
                job_type: doc.data().job_type,
                jobs_id: doc.data().jobs_id,
                location: doc.data().location,
                remotive: doc.data().remotive,
                salary: doc.data().salary,
                job_img: doc.data().job_img,
                id: doc.id,
            }
            this.jobData.push(data);
            console.log(data)
        });
    }
}
</script>



<style >
.jobs-card:hover {
    animation: mymove 3s infinite;
}

@keyframes mymove {
    50% {
        -webkit-box-shadow: 0 0 20px #fff;
        box-shadow: 0 0 30px #fff;
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
}</style>