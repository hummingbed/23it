<template>
    <HeaderComponent/>
    <AboutUs/>
    <FooterComponentVue />
</template>


<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import AboutUs from '../components/about/AboutUsComponent.vue'
import FooterComponentVue from '@/components/FooterComponent.vue';

export default {
  name: 'AboutUsView',
  components: {
    HeaderComponent,
    AboutUs,
    FooterComponentVue
  }
}
</script>