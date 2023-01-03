<template>
  <HeaderComponent />
  <MediaComponent />
  <FooterComponent/>
</template>


<script>
// @ is an alias to /src
import HeaderComponent from '../components/HeaderComponent.vue'
import MediaComponent from '@/components/media/MediaComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'MediaView',
  components: {
    MediaComponent,
    HeaderComponent,
    FooterComponent
  }
}
</script>