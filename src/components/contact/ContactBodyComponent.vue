<template>
    <div class="contact mt-5">
        <div class="container py-5">
            <nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
                <ol class="breadcrumb fw-bold">
                    <li class="breadcrumb-item mt-2">
                        <router-link style="color: #F7AEF8;" :to="'/'"> HOME</router-link>
                    </li>

                    <li class="breadcrumb-item"> <i class="bi bi-arrow-left fs-3" style="color: #F7AEF8;"></i></li>
                    <li class="breadcrumb-item active mt-2" aria-current="page">
                        <a href="" style="color: #F7AEF8;">CONTACT US</a>
                    </li>
                </ol>
            </nav>

            <div class="d-grid gap-2 fw-bold offset-md-1 pb-5 text-white">

                <p>Let’s get down to business.</p>
                <small>Fill in the form or send us an email. <br>
                    We’ll be in touch very soon.</small>
            </div>
            <div>
                <form class="" ref="form" @submit.prevent="sendEmail">
                    <div class="px-3 pt-5 row justify-content-center">
                        <div class="col-md-8 d-grid gap-2 ">
                            <label for="exampleFormControlInput1" class="form-label fw-bold text-white">What’s your
                                name?</label>
                            <input class="mainLoginInput text-white" style="width: 100%; height: 5rem;" type="text"
                                placeholder="Capitan America" v-model="name" name="name" required/> <br />
                            <label for="exampleFormControlInput1" class="form-label fw-bold text-white">What’s your
                                email?</label>
                            <input class="mainLoginInput text-white" style="width: 100%; height: 5rem;" type="text"
                                placeholder="Capitan.america@mail.com" name="user_email" required/> <br />
                            <label for="exampleFormControlInput1" class="form-label fw-bold text-white">What are your
                                qustion?</label>
                            <input class="mainLoginInput text-white" style="width: 100%; height: 5rem;" type="text"
                                placeholder="Tell us everything" name="message" required/>

                            <!-- <label for="exampleFormControlInput1" class="form-label fw-bold text-white">cv
                                qustion?</label>
                            <input class="mainLoginInput text-white" style="width: 100%; height: 5rem;" type="file"
                                placeholder="Tell us everything" name="cv" />

                                <label for="exampleFormControlInput1" class="form-label fw-bold text-white">What are your
                                qustion?</label>
                            <input class="mainLoginInput text-white" style="width: 100%; height: 5rem;" type="file"
                                placeholder="Tell us everything" name="cover_letter" /> -->
                                
                        </div>
                    </div>
                    <input class="fw-bold text-dark get-in-touch-btn mt-2" type="submit" value="Send">
                    <!-- <a class="fw-bold text-dark get-in-touch-btn mt-2 " data-bs-toggle="modal"
                        href="#exampleModalToggle" role="button">
                        SEND <i class="bi bi-arrow-right fs-5" ></i>
                    </a> -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// import emailjs from '@emailjs/browser';

export default {
    name: 'ContactBodyComponent',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_ylxu3ro', 'template_fa4ysa5', this.$refs.form, '3NvocUzIR52-_Il9l')
            .then((result) => {
                this.$swal(`Hello, ${this.name} <br> Your message was sent successfully`);
            }, (error) => {
                this.$swal(`Hello, ${this.name} <br> Your message failed`);
            });
        }
    },
    mounted() {

    }


}
</script>


<style scoped>
/* @import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css"; */
.get-in-touch-btn {
    background: #fff;
    border: none;
    color: white;
    padding: 4px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 15vw;
}

input:focus,
select:focus {
    outline: none !important;
}

input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
}


input[type="text"] {
    background-color: #070223;
}


@media only screen and (min-width: 1440px) {
    .mainLoginInput {
        margin: 5px 0px;
        letter-spacing: 5px;
        font-size: 55px;
    }

}


@media only screen and (max-width: 1439px) {
    .mainLoginInput {
        margin: 5px 0px;
        letter-spacing: 5px;
        font-size: 3vw;
    }

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
</style>