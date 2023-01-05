<template>
    <HeaderComponentVue/>
    <JobBodyComponent/>
    <FooterComponentVue/>
</template>

<script>
import HeaderComponentVue from '../HeaderComponent.vue';
import JobBodyComponent from '../job/JobBodyComponent.vue'
import FooterComponentVue from '../FooterComponent.vue';


export default {
    name: 'JobComponent',
    components: {
        JobBodyComponent,
        HeaderComponentVue,
        FooterComponentVue
    }
}
</script>