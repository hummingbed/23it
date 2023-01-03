<template>
    <HeaderComponent />
    <HomeBodyComponent />
    <DreamJobComponent />
    <GuttersPageComponent />
    <HomeEmployerComponent />
    <HomeCandidate />
    <FooterComponent/>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue'
import HomeBodyComponent from '../Home/HomeBodyComponent.vue'
import DreamJobComponent from '../Home/DreamJobComponent.vue'
import GuttersPageComponent from '../Home/GuttersPageComponent.vue'
import HomeEmployerComponent from '../Home/HomeEmployerComponent.vue'
import HomeCandidate from '../Home/HomeCandidate.vue'
import FooterComponent from '../FooterComponent.vue'

export default {
	name: 'HomeComponent',
    components: {
        HeaderComponent,
        HomeBodyComponent,
        DreamJobComponent,
        GuttersPageComponent,
        HomeEmployerComponent,
        HomeCandidate,
        FooterComponent
        
  }
}
</script>