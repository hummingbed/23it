<template>
    <HeaderComponentVue/>
    <ShotJob/>
    <FooterComponentVue/>
</template>



<script>
 import HeaderComponentVue from '../HeaderComponent.vue';
import ShotJob from './ShotJob.vue'
import FooterComponentVue from '../FooterComponent.vue';


export default {
    name: 'ShotJobComponent',
    components: {
        ShotJob,
        HeaderComponentVue,
        FooterComponentVue
    }
}
</script>