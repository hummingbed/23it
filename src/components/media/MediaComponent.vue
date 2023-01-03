<template>
    <HeaderComponentVue/>
    <MediaBodyComponent />
</template>


<script>
import HeaderComponentVue from '../HeaderComponent.vue';
import MediaBodyComponent from './MediaBodyComponent.vue'

export default {
    name: 'MediaComponent',
    components: {
        HeaderComponentVue,
        MediaBodyComponent,
    }
}
</script>