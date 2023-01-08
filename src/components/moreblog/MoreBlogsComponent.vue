<template>
    <HeaderComponentVue/>
    <MoreBlogsBody />
    <FooterComponentVue/>
</template>


<script>
import HeaderComponentVue from '../HeaderComponent.vue';
import MoreBlogsBody from './MoreBlogsBody.vue'
import FooterComponentVue from '../FooterComponent.vue';

export default {
    name: 'MoreBlogsComponent',
    components: {
        HeaderComponentVue,
        MoreBlogsBody,
        FooterComponentVue
    }
}
</script>