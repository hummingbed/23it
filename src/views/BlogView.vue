<template>
  <HeaderComponent />
  <BlogComponent />
  <FooterComponentVue />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import BlogComponent from '../components/blog/BlogComponent.vue'
import FooterComponentVue from '@/components/FooterComponent.vue';

export default {
  name: 'BlogView',
  components: {
    HeaderComponent,
    BlogComponent,
    FooterComponentVue
  }
}
</script>