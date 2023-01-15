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
                <input class="mainLoginInput text-white" style="width: 100%; height: 4.3rem;" type="text"
                    placeholder="Search: &nbsp; Job title, Keyword or company" v-model="searchText"/>
            </div>
        </div>



        <div class="row g-0 py-4 my-4" v-for="(jobs, index) in filteredItems" style="background: rgba(128, 147, 241, 0.52);">
            <div class="col-md-2 p-3">
                <img src="../../assets/blog-img/blog-sm-img.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-10 ">
                <div class="card-body">
                    <div class="card-text d-flex gap-3 text-white">
                        <p class="card-title">{{ jobs['company-name'] }}</p>
                        <p class="card-title text-end">Mc Donald`s</p>
                    </div>
                    <p class="card-text text-white">{{ jobs['job-title'] }}</p>
                    <p class="card-text d-flex gap-3 text-white">
                        <small class="">{{ jobs['remote-location'] }}</small> |
                        <small class="">{{ jobs['country-location'] }}</small>
                        <small class="">{{ jobs['job-time'] }}</small>
                        <small class="">{{ jobs['job-price'] }}</small>
                    </p>
                </div>
            </div>
        </div>

        <!-- <div>
            <input type="text" v-model="searchText" placeholder="Search..." />
            <select v-model="searchCategory">
                <option value="all">All</option>
                <option value="name">Name</option>
                <option value="age">Age</option>
            </select>
            <ul>
                <li v-for="item in filteredItems" :key="item.id">{{ item['company-name'] }} - {{ item['job-title'] }}</li>
            </ul>
        </div> -->


    </div>
</template>


<script>
export default {
    name: 'DreamJobComponent',
    data() {
        return {
            searchText: '',
            searchCategory: 'all',
            items: [
                { id: 1, 'company-name': 'Mc Donald`s', 'job-title': 'Senior Product Designer', 'job-price': '$100k - $111k', 'job-time': 'Full-time', 'remote-location': 'Remote', 'country-location': 'Bulgeria only', },
                { id: 2, 'company-name': 'Facebook', 'job-title': 'Senior backend Engineer', 'job-price': '$109k - $151k', 'job-time': 'Part-time', 'remote-location': 'Remote', 'country-location': 'England only', },
                { id: 3, 'company-name': 'Amazon', 'job-title': 'Senior Product Designer', 'job-price': '$101k - $111k', 'job-time': 'Full-time', 'remote-location': 'Remote', 'country-location': 'Ukrain only', },
                { id: 4, 'company-name': 'Netflix', 'job-title': 'Feontend Engineer', 'job-price': '$55k - $100k', 'job-time': 'Part-time', 'remote-location': 'Onsite', 'country-location': 'Canada only', },
            ],
            // jobData: [
            //     { id: 1, 'company-name': 'Mc Donald`s', 'job-title': 'Senior Product Designer', 'job-price': '$100k - $111k', 'job-time': 'Full-time', 'remote-location': 'Remote', 'country-location': 'Bulgeria only', },
            //     { id: 2, 'company-name': 'Facebook', 'job-title': 'Senior backend Engineer', 'job-price': '$109k - $151k', 'job-time': 'Part-time', 'remote-location': 'Remote', 'country-location': 'England only', },
            //     { id: 3, 'company-name': 'Amazon', 'job-title': 'Senior Product Designer', 'job-price': '$101k - $111k', 'job-time': 'Full-time', 'remote-location': 'Remote', 'country-location': 'Ukrain only', },
            //     { id: 4, 'company-name': 'Netflix', 'job-title': 'Feontend Engineer', 'job-price': '$55k - $100k', 'job-time': 'Part-time', 'remote-location': 'Onsite', 'country-location': 'Canada only', },
            // ],
        };
    },
    computed: {
        filteredItems() {
            let filtered = this.items;

            if (this.searchCategory !== 'all') {
                filtered = filtered.filter(item => item[this.searchCategory].toLowerCase().includes(this.searchText.toLowerCase()));
            } else {
                filtered = filtered.filter(item => Object.values(item).join('').toLowerCase().includes(this.searchText.toLowerCase()));
            }

            return filtered;
        },
    },
}
</script>


<style scoped>
@import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";

@font-face {
    font-family: KyivTypeSerif-Bold3;
    src: url(../../assets/font/KyivTypeSerif-Bold3.ttf);
}

.container {
    font-family: KyivTypeSerif-Bold3;
}



.button {
    background: #fff;
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