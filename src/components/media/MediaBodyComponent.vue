<template>
    <div class="container my-5">
        <nav class="py-5" style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
            <ol class="breadcrumb fw-bold">
                <li class="breadcrumb-item">
                    <router-link style="color: rgba(247, 174, 248, 0.5);" :to="'/'"> HOME</router-link>
                </li>

                <li class="breadcrumb-item">
                    <img src="../../assets/arrow/arrow-left.png" class="img-fluid" style="height: 15px;" alt="">
                </li>

                <li class="breadcrumb-item active " aria-current="page">
                    <a href="" style="color: #F7AEF8;">MEDIA</a>
                </li>
            </ol>
        </nav>

        <div class="media-top-text pb-5">
            <div class="col fw-bold text-white font-uppercase mb-5">
                <div>
                    <span class="contour">Find some <span style="background-color: #8093F1; ">interestings</span> clips
                        regarding our business</span>
                </div>
                <div> <span class="contour">or tips which can help you in your</span>
                    <span> career moves, </span>
                </div>
                <div>from salary negotiations, work permits, </div>
                <div>understanding Dutch culture and many more!</div>
            </div>
        </div>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link border-0 fw-bold fs-5 text-white active" id="home-tab" data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                    aria-selected="true">
                    ALL
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link border-0 fw-bold text-white fs-5" id="profile-tab" data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
                    aria-selected="false">
                    HR
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link border-0 fw-bold text-white fs-5" id="contact-tab" data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane"
                    aria-selected="false">
                    TECH
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link border-0 fw-bold text-white fs-5" id="disabled-tab" data-bs-toggle="tab"
                    data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane"
                    aria-selected="false">
                    OTHER
                </button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">

            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                tabindex="0">

                <div class="container overflow-hidden fw-bold text-white">
                    <div class="row gx-5 g-y py-5">

                        <div class="col-md-6 col-lg-4 human-resource"
                            v-for="(eachMedia, index) in mediaData.slice(0, showMoreMediaNum)">
                            <div class="row">
                                <div class="col d-grid ">
                                    <div>{{ eachMedia.media_title }}</div>
                                    <div> {{ eachMedia.media_subtitle }}</div>
                                </div>
                                <div class="col">
                                    <div v-if="eachMedia.media_category == 'HR'" class="fs-4 px-4 float-end " style="background-color: #FDC5F5; ">
                                        {{ eachMedia.media_category }}
                                    </div>
                                    <div v-if="eachMedia.media_category == 'TECH'" class="fs-4 px-4 float-end " style="background-color: #B388EB; ">
                                        {{ eachMedia.media_category }}
                                    </div>
                                    <div v-if="eachMedia.media_category == 'OTHER'" class="fs-4 px-4 float-end " style="background-color: #72DDF7; ">
                                        {{ eachMedia.media_category }}
                                    </div>
                                </div>
                            </div>
                            <div class="ratio ratio-16x9 ">
                                <iframe class="embed-responsive-item" :src="eachMedia.media_url"
                                    allowfullscreen></iframe>
                                <div class="col text-white position-absolute px-3 stacked-text" style="z-index: 1;">
                                    <div>
                                        <small class="col-md-10" style="background: #FDC5F5; width: 40%;">
                                            {{ eachMedia.media_title }} </small>
                                    </div>
                                    <small class="col-md-10 bg-danger w-50">{{ eachMedia.media_subtitle }}</small>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <small><i class="text-end bi bi-heart"></i></small> &nbsp;({{
                                            eachMedia.media_likes
                                        }})
                                    </div>

                                    <div class="col text-end">
                                        <small><i class="text-end bi bi-eye"></i></small>&nbsp;({{
                                            eachMedia.media_views
                                        }}) &nbsp;
                                        <small><i class="text-end bi bi-upload"></i></small>&nbsp;({{
                                            eachMedia.media_uploads
                                        }})
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="" v-if="showMoreMediaNum < mediaData.length">
                        <div class="fs-5 text-center user-select-none text-decoration-underline" style="color: #F7AEF8;"
                            v-on:click="loadMoreMediaHandler">LOAD MORE</div>
                    </div>


                </div>
            </div>

            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

                <div class="container overflow-hidden fw-bold text-white">
                    <div class="row gx-5 g-y py-5">

                        <div class="col-md-6 col-lg-4 human-resource"
                            v-for="(eachMedia, index) in hrMedia.slice(0, showMoreHrMediaNum)">
                            <div class="row">
                                <div class="col d-grid ">
                                    <div>{{ eachMedia.media_title }}</div>
                                    <div> {{ eachMedia.media_subtitle }}</div>
                                </div>
                                <div class="col">
                                    <div class="fs-4 px-4 float-end " style="background-color: #F7AEF8; ">
                                        {{ eachMedia.media_category }}
                                    </div>
                                </div>
                            </div>
                            <div class="ratio ratio-16x9 ">
                                <iframe class="embed-responsive-item" :src="eachMedia.media_url"
                                    allowfullscreen></iframe>
                                <div class="col text-white position-absolute px-3 stacked-text" style="z-index: 1;">
                                    <div>
                                        <small class="col-md-10" style="background: #FDC5F5; width: 40%;">
                                            {{ eachMedia.media_title }} </small>
                                    </div>
                                    <small class="col-md-10 bg-danger w-50">{{ eachMedia.media_subtitle }}</small>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <small><i class="text-end bi bi-heart"></i></small> &nbsp;({{
                                            eachMedia.media_likes
                                        }})
                                    </div>

                                    <div class="col text-end">
                                        <small><i class="text-end bi bi-eye"></i></small>&nbsp;({{
                                            eachMedia.media_views
                                        }}) &nbsp;
                                        <small><i class="text-end bi bi-upload"></i></small>&nbsp;({{
                                            eachMedia.media_uploads
                                        }})
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="" v-if="showMoreHrMediaNum < hrMedia.length">
                        <div class="fs-5 text-center user-select-none text-decoration-underline" style="color: #F7AEF8;"
                            v-on:click="loadMoreHrMediaHandler">LOAD MORE</div>
                    </div>
                </div>

            </div>

            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">

                <div class="container overflow-hidden fw-bold text-white">
                    <div class="row gx-5 g-y py-5">

                        <div class="col-md-6 col-lg-4 human-resource"
                            v-for="(eachMedia, index) in techMedia.slice(0, showMoreTechMediaNum)">
                            <div class="row">
                                <div class="col d-grid ">
                                    <div>{{ eachMedia.media_title }}</div>
                                    <div> {{ eachMedia.media_subtitle }}</div>
                                </div>
                                <div class="col">
                                    <div class="fs-4 px-4 float-end " style="background-color: #B388EB; ">
                                        {{ eachMedia.media_category }}
                                    </div>
                                </div>
                            </div>
                            <div class="ratio ratio-16x9 ">
                                <iframe class="embed-responsive-item" :src="eachMedia.media_url"
                                    allowfullscreen></iframe>
                                <div class="col text-white position-absolute px-3 stacked-text" style="z-index: 1;">
                                    <div>
                                        <small class="col-md-10" style="background: #FDC5F5; width: 40%;">
                                            {{ eachMedia.media_title }} </small>
                                    </div>
                                    <small class="col-md-10 bg-danger w-50">{{ eachMedia.media_subtitle }}</small>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <small><i class="text-end bi bi-heart"></i></small> &nbsp;({{
                                            eachMedia.media_likes
                                        }})
                                    </div>

                                    <div class="col text-end">
                                        <small><i class="text-end bi bi-eye"></i></small>&nbsp;({{
                                            eachMedia.media_views
                                        }}) &nbsp;
                                        <small><i class="text-end bi bi-upload"></i></small>&nbsp;({{
                                            eachMedia.media_uploads
                                        }})
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="" v-if="showMoreTechMediaNum < techMedia.length">
                        <div class="fs-5 text-center user-select-none text-decoration-underline" style="color: #F7AEF8;"
                            v-on:click="loadMoreTechMediaHandler">LOAD MORE</div>
                    </div>

                </div>

            </div>

            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
                tabindex="0">

                <div class="container overflow-hidden fw-bold text-white">
                    <div class="row gx-5 g-y py-5">

                        <div class="col-md-6 col-lg-4 human-resource"
                            v-for="(eachMedia, index) in otherMedia.slice(0, showMoreOtherMediaNum)">
                            <div class="row">
                                <div class="col d-grid ">
                                    <div>{{ eachMedia.media_title }}</div>
                                    <div> {{ eachMedia.media_subtitle }}</div>
                                </div>
                                <div class="col">
                                    <div class="fs-4 px-4 float-end " style="background-color: #72DDF7; ">
                                        {{ eachMedia.media_category }}
                                    </div>
                                </div>
                            </div>
                            <div class="ratio ratio-16x9 ">
                                <iframe class="embed-responsive-item" :src="eachMedia.media_url"
                                    allowfullscreen></iframe>
                                <div class="col text-white position-absolute px-3 stacked-text" style="z-index: 1;">
                                    <div>
                                        <small class="col-md-10" style="background: #FDC5F5; width: 40%;">
                                            {{ eachMedia.media_title }} </small>
                                    </div>
                                    <small class="col-md-10 bg-danger w-50">{{ eachMedia.media_subtitle }}</small>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <small><i class="text-end bi bi-heart"></i></small> &nbsp;({{
                                            eachMedia.media_likes
                                        }})
                                    </div>

                                    <div class="col text-end">
                                        <small><i class="text-end bi bi-eye"></i></small>&nbsp;({{
                                            eachMedia.media_views
                                        }}) &nbsp;
                                        <small><i class="text-end bi bi-upload"></i></small>&nbsp;({{
                                            eachMedia.media_uploads
                                        }})
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="" v-if="showMoreOtherMediaNum < otherMedia.length">
                    <div class="fs-5 text-center user-select-none text-decoration-underline" style="color: #F7AEF8;"
                        v-on:click="loadMoreOtherMediaHandler">LOAD MORE</div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

export default {
    name: 'MediaBodyComponent',
    data() {
        return {
            mediaData: [],
            hrMedia: [],
            techMedia: [],
            otherMedia: [],
            showMoreMediaNum: 8,
            showMoreHrMediaNum: 8,
            showMoreTechMediaNum: 8,
            showMoreOtherMediaNum: 8,
        };
    },
    methods: {
        loadMoreMediaHandler: function () {
            this.showMoreMediaNum = this.mediaData.length;
        },
        loadMoreHrMediaHandler: function () {
            this.showMoreHrMediaNum = this.hrMedia.length;
        },
        loadMoreTechMediaHandler: function () {
            this.showMoreTechMediaNum = this.techMedia.length;
        },
        loadMoreOtherMediaHandler: function () {
            this.showMoreOtherMediaNum = this.otherMedia.length;
            // this.$swal('Hello Vue world!!!');
        },
    },
    async mounted() {

        const querySnapshot = await getDocs(collection(db, "media"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data().media_url)

            let data = {
                media_category: doc.data().media_category,
                media_color: doc.data().media_color,
                media_id: doc.data().media_id,
                media_likes: doc.data().media_likes,
                media_subtitle: doc.data().media_subtitle,
                media_title: doc.data().media_title,
                media_uploads: doc.data().media_uploads,
                media_views: doc.data().media_views,
                media_url: doc.data().media_url,
            }
            if (doc.data().media_category == 'HR') {
                this.hrMedia.push(data);
            }
            if (doc.data().media_category == 'TECH') {
                this.techMedia.push(data);
            }
            if (doc.data().media_category == 'OTHER') {
                this.otherMedia.push(data);
            }
            this.mediaData.push(data);
        });
    }
}
</script>

<style scoped>
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #f3f3f3;
    background-color: transparent;
    border-color: transparent transparent #f3f3f3;
    border-bottom: 4px solid !important;
    font-size: 20px;
    font-weight: bold;
}


@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Roboto+Slab:wght@200&family=Space+Grotesk:wght@300&display=swap');

/* .contour {
    color: black;
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: #070223;
} */

.stacked-text {
    top: 60%;
}

@media only screen and (min-width: 1440px) {
    .media-top-text {
        font-size: 42px;
    }

}


@media only screen and (max-width: 1439px) {
    .media-top-text {
        font-size: 3vw;
    }

}

@media only screen and (max-width: 594px) {
    .media-top-text {
        font-size: 22px;
    }

}

@media only screen and (max-width: 991px) {
    .human-resource {
        margin-top: 15%;
    }

}
</style>