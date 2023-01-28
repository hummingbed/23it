<template>
    <div class="container mt-5">
        <div class="row justify-content-between py-5">
            <div class="mb-3">
                <span v-if="blog_category == 'HR'" class="px-2 text-white fs-5 " style="background: #FDC5F5;">{{ blog_category }}</span>
                <span v-if="blog_category == 'TECH'" class="px-2 text-white fs-5 " style="background: #B388EB;">{{ blog_category }}</span>
                <span v-if="blog_category == 'OTHER'" class="px-2 text-white fs-5 " style="background: #72DDF7;">{{ blog_category }}</span>
            </div>
            <div class="col-lg-7 col-md-6 fw-bold text-white">
                <p class="text-uppercase">{{ blog_header }}</p>
                <div class="d-flex gap-3">
                    <p class="text-uppercase">{{ read_time }} mins read</p>
                    <p class="text-uppercase">{{ comment }} Comments</p>
                </div>
                <div>
                    <img v-bind:src="blog_large_img" class="img-fluid" alt="">
                </div>

                <div class="col">
                    <p> {{ blog_body }} </p>

                    <p class="fs-3">{{ blog_subHead }}</p>

                    <p class="text-break"> {{ blog_subHead_body }}</p>

                    <div class="row gy-2">
                        <div class="col-lg-6 col-md-12 ">
                            <div class="d-flex gap-3" style="background: rgba(128, 147, 241, 0.5);">
                                <img src="../../assets/arrow/arrow-left.png" class="img-fluid mt-5 ms-2"
                                    style="height: 20px;" alt="">
                                <img src="../../assets/blog-img/blog-sm-img.png" style="height: 80px;"
                                    class="img-fluid mt-3" alt="">
                                <div class="d-grid mt-3">
                                    <p>Prevous post</p>
                                    <p>Way to Better <br> Project Management</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 ">
                            <div class="d-flex gap-3" style="background: rgba(128, 147, 241, 0.5);">

                                <div class="d-grid mt-3 ms-2">
                                    <p>Next post</p>
                                    <p>Way to Better <br> Project Management</p>
                                </div>
                                <img src="../../assets/blog-img/blog-sm-img.png" style="height: 80px;"
                                    class="img-fluid mt-3" alt="">
                                <img src="../../assets/arrow/arrow-right.png" class="img-fluid mt-5"
                                    style="height: 20px;" alt="">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6  mt-5 text-white">
                <div class="fw-bold">
                    <p>CATEGORIES</p>
                </div>
                <div>
                    <ul class="d-grid gap-2 fw-bold">
                        <li>
                            <span style="background: #FDC5F5;"> TRAVEL (3)</span>
                        </li>

                        <li>
                            <span style="background: #8093F1;">HOTEL (1)</span>
                        </li>
                        <li>
                            <span style="background: #B388EB;">RESTURANT (1)</span>
                        </li>
                        <li>
                            <span style="background: #72DDF7;">SPA & SALON (1)</span>
                        </li>
                        <li>
                            <span style="background: #FDC5F5;">FESTIVAL (1)</span>
                        </li>
                    </ul>
                </div>
                <div class="fw-bold">
                    <p>TAGS</p>
                    <div class="col-7 d-flex gap-3">
                        <span class="px-2" style="background: #8093F1;">ADVISE</span>
                        <span class="px-2" style="background: #8093F1;">BALANCE</span>
                        <span class="px-2" style="background: #8093F1;">EDUCATION</span>
                    </div>

                    <div class="col-7 d-flex mt-3 gap-3">
                        <span class="px-2" style="background: #8093F1;">NEWS</span>
                        <span class="px-2" style="background: #8093F1;">SUGGESSTIONS</span>
                        <span class="px-2" style="background: #8093F1;">INTROS</span>
                    </div>

                    <div class="col-7 d-flex mt-3 gap-3">
                        <span class="px-2" style="background: #8093F1;">REVIEWS</span>
                        <span class="px-2" style="background: #8093F1;">RECENT POSTS</span>
                    </div>
                </div>

                <div class="mt-5 fw-bold">
                    <p>RECENT POST</p>

                    <ul class="text-uppercase d-grid gap-3">
                        <li v-for="eachData in blogData.slice(0, 5)">
                            <router-link  :to="{ name: 'more-blogs', params: { blog_id: eachData.blog_id } }" class="text-decoration-none text-white">
                                {{ eachData.blog_header }}
                            </router-link>
                            
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';


export default {
    name: 'MoreBlogsBody',
    data() {
        return {
            blog_body: '',
            blog_category: '',
            blog_date_posted: '',
            blog_header: '',
            blog_id: '',
            blog_img: '',
            blog_subHead: '',
            blog_subHead_body: '',
            read_time: '',
            comment: '',
            blogData: [],
        };
    },
    async mounted() {

        const blog_id = this.$route.params.blog_id;

        const docRef = doc(db, "blogs", blog_id);
        getDoc(docRef).then((doc) => {
            this.blog_body = doc.data().blog_body;
            this.blog_category = doc.data().blog_category;
            this.blog_date_posted = doc.data().blog_date_posted;
            this.blog_header = doc.data().blog_header;
            this.blog_id = doc.id;
            this.blog_img = doc.data().blog_img;
            this.blog_subHead = doc.data().blog_subHead;
            this.blog_subHead_body = doc.data().blog_subHead_body;
            this.read_time = doc.data().read_time,
            this.comment = doc.data().comment,
            this.blog_large_img = doc.data().blog_large_img
        });


        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach((doc) => {
            let datas = {
                blog_body: doc.data().blog_body.substring(0, 97),
                blog_category: doc.data().blog_category,
                blog_date_posted: doc.data().blog_date_posted,
                blog_header: doc.data().blog_header,
                blog_id: doc.id,
                blog_img: doc.data().blog_img,
            }
            console.log(datas)
            this.blogData.push(datas);
        });
    }

}
</script>