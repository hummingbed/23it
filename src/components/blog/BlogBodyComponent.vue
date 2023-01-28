<template>
    <div class="container pt-5">
        <div class="row justify-content-between">
            <div class="col-md-6 pe-lg-5 blog-banner mt-5">
                <img src="../../assets/blog-img/blog-banner.png" class="img-fluid h-100" alt="">
            </div>
            <div class="col-md-6 mt-5 text-white fw-bold">
                <div class="col d-flex my-3 gap-2">
                    <span class="fw-bold px-2" style="background-color: #FDC5F5;">HR</span>
                    <span>November11, 2022</span>
                </div>
                <div class="fs-3">
                    <p class="col-md-10">Chanhg Mai - the Thai city what is love IT people. Mountings, monks and
                        prostitute</p>
                </div>
                <div class="d-flex gap-3">
                    <img src="../../assets/img/sm-orielo.png" style="width: 35px; height: 35px;" alt="">
                    <p class="fs-5">Orelio Lopes</p>
                </div>
            </div>
        </div>

        <div class="col pt-5">
            <div class="fs-3 fw-bold text-white">Latest Articles</div>
            <div class="row mt-3">
                <div class="col-md-6">
                    <p class="fs-3 text-white">Explore best articles on Human resource, Technology & other topics</p>
                </div>
                <div class="col-md-6">
                    <!-- <div class="button fs-5 text-dark float-md-end">
                        VIEW ALL
                        <img src="../../assets/arrow/dark-arrow-right.png" style="height: 20px;" class="img-fluid"
                            alt="">
                    </div> -->
                </div>
            </div>
        </div>

        <ul class="nav nav-tabs pt-5" id="myTab" role="tablist">
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
                tabindex="0">.

                <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-5 g-lg-5 text-break pt-5 pb-5">
                    <div class="col" v-for="(blog, index) in blogsData.slice(0, showMoreBlogNum)">
                        <div class="row g-3">
                            <div class="col-md-6 text-white d-grid gap-2">
                                <div class="col d-flex gap-2">
                                    <span v-if="blog.blog_category == 'HR'" class="fw-bold px-2" style="background-color: #FDC5F5;">
                                    {{ blog.blog_category }}
                                    </span>
                                    <span v-if="blog.blog_category == 'OTHER'" class="fw-bold px-2" style="background-color: #72DDF7;">
                                    {{ blog.blog_category }}
                                    </span>
                                    <span v-if="blog.blog_category == 'TECH'" class="fw-bold px-2" style="background-color: #B388EB;">
                                    {{ blog.blog_category }}
                                    </span>
                                    <span>{{ blog.blog_date_posted }}</span>
                                </div>
                                <div>
                                    <div class="mt-2 fw-bold fs-5">
                                        {{ blog.blog_header }}
                                    </div>

                                    <div class="mt-2 ">
                                        {{ blog.blog_body }}
                                    </div>
                                </div>
                                <div>
                                    <!-- router-link :to="{ name: 'more-blogs', params: { blog_id: blogData.id } }" -->
                                    <router-link  :to="{ name: 'more-blogs', params: { blog_id: blog.blog_id } }" href="" style="color: `${blog.blog_color}`;">READ ARTICLE</router-link >
                                </div>
                            </div>

                            <div class="col-md-6">
                                <img v-bind:src="blog.blog_img" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="" v-if="showMoreBlogNum < blogsData.length">
                    <div class="fs-5 text-center user-select-none text-decoration-underline" style="color: #F7AEF8;"
                        v-on:click="loadMoreBlogsHandler">LOAD MORE</div>
                </div>
            </div>

            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

                <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-5 g-lg-4 text-break pt-5 pb-5">
                    <div class="col" v-for="(blog, index) in hrBlog.slice(0, showMoreHrBlogNum)">
                        <div class="row g-3">
                            <div class="col-md-6 text-white d-grid gap-2">
                                <div class="col d-flex gap-2">
                                    <span class="fw-bold px-2" style="background-color: #FDC5F5;">{{
                                        blog.blog_category
                                    }}</span>
                                    <span>{{ blog.blog_date_posted }}</span>
                                </div>
                                <div>
                                    <div class="mt-2 fw-bold fs-5">
                                        {{ blog.blog_header }}
                                    </div>

                                    <div class="mt-2 ">
                                        {{ blog.blog_body }}
                                    </div>
                                </div>
                                <div>
                                    <router-link  :to="'/more-blogs'" href="" style="color: `${blog.blog_color}`;">READ ARTICLE</router-link >
                                </div>
                            </div>

                            <div class="col-md-6">
                                <img v-bind:src="blog.blog_img" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- #FDC5F5 -->
                </div>
                <div class="" v-if="showMoreHrBlogNum < hrBlog.length">
                    <div class="fs-5 text-center user-select-none text-decoration-underline" style="color: #F7AEF8;"
                        v-on:click="loadMoreHrBlogsHandler">LOAD MORE</div>
                </div>

            </div>
            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">

                <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-5 g-lg-4 text-break pt-5 pb-5">
                    <div class="col" v-for="(blog, index) in techBlog.slice(0, showMoreTechBlogNum)">
                        <div class="row g-3">
                            <div class="col-md-6 text-white d-grid gap-2">
                                <div class="col d-flex gap-2">
                                    <span class="fw-bold px-2" style="background-color: #B388EB;">{{
                                        blog.blog_category
                                    }}</span>
                                    <span>{{ blog.blog_date_posted }}</span>
                                </div>
                                <div>
                                    <div class="mt-2 fw-bold fs-5">
                                        {{ blog.blog_header }}
                                    </div>

                                    <div class="mt-2 ">
                                        {{ blog.blog_body }}
                                    </div>
                                </div>
                                <div>
                                    <router-link  :to="'/more-blogs'" href="" style="color: `${blog.blog_color}`;">READ ARTICLE</router-link >
                                </div>
                            </div>

                            <div class="col-md-6">
                                <img v-bind:src="blog.blog_img" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- #FDC5F5 -->
                </div>

                <div class="" v-if="showMoreTechBlogNum < techBlog.length">
                    <div class="fs-5 text-center user-select-none text-decoration-underline" style="color: #F7AEF8;"
                        v-on:click="loadMoreTechBlogsHandler">LOAD MORE</div>
                </div>

            </div>
            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
                tabindex="0">

                <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-5 g-lg-4 text-break pt-5 pb-5">
                    <div class="col" v-for="(blog, index) in otherBlog.slice(0, showMoreOtherBlogNum)">
                        <div class="row g-3">
                            <div class="col-md-6 text-white d-grid gap-2">
                                <div class="col d-flex gap-2">
                                    <span class="fw-bold px-2" style="background-color: #72DDF7;">{{
                                        blog.blog_category
                                    }}</span>
                                    <span>{{ blog.blog_date_posted }}</span>
                                </div>
                                <div>
                                    <div class="mt-2 fw-bold fs-5">
                                        {{ blog.blog_header }}
                                    </div>

                                    <div class="mt-2 ">
                                        {{ blog.blog_body }}
                                    </div>
                                </div>
                                <div>
                                    <router-link  :to="'/more-blogs'" href="" style="color: `${blog.blog_color}`;">READ ARTICLE</router-link >
                                </div>
                            </div>

                            <div class="col-md-6">
                                <img v-bind:src="blog.blog_img" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- #FDC5F5 -->
                </div>

                <div class="" v-if="showMoreOtherBlogNum < otherBlog.length">
                    <div class="fs-5 text-center user-select-none text-decoration-underline" style="color: #F7AEF8;"
                        v-on:click="loadMoreOtherBlogsHandler">LOAD MORE</div>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

export default {
    name: 'BlogBodyComponent',
    data() {
        return {
            blogsData: [],
            hrBlog: [],
            techBlog: [],
            otherBlog: [],
            showMoreBlogNum: 8,
            showMoreHrBlogNum: 8,
            showMoreTechBlogNum: 8,
            showMoreOtherBlogNum: 8,
        };
    },
    methods: {
        loadMoreBlogsHandler: function () {
            this.showMoreBlogNum = this.blogsData.length;
        },
        loadMoreHrBlogsHandler: function () {
            this.showMoreHrBlogNum = this.hrBlog.length;
        },
        loadMoreTechBlogsHandler: function () {
            this.showMoreTechBlogNum = this.techBlog.length;
        },
        loadMoreOtherBlogsHandler: function () {
            this.showMoreOtherBlogNum = this.otherBlog.length;
        },
    },
    async mounted() {

        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach((doc) => {
            let data = {
                blog_body: doc.data().blog_body.substring(0, 97),
                blog_category: doc.data().blog_category,
                blog_date_posted: doc.data().blog_date_posted,
                blog_header: doc.data().blog_header,
                blog_id: doc.id,
                blog_img: doc.data().blog_img,
                blog_date_posted: doc.data().blog_date_posted,

            }
            if (doc.data().blog_category == 'HR') {
                this.hrBlog.push(data);
            }
            if (doc.data().blog_category == 'TECH') {
                this.techBlog.push(data);
            }
            if (doc.data().blog_category == 'OTHER') {
                this.otherBlog.push(data);
            }
            this.blogsData.push(data);
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

/* .blog-banner {
    height: 35vh;
    position: relative;

    background-image: url("../../assets/blog-img/blog-banner.png");
    background-repeat: no-repeat;
} */


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
</style>