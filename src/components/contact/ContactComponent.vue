<template>
    <HeaderComponentVue />
    <ContactBodyComponent />
    <FooterComponent />
</template>

<script>
import HeaderComponentVue from '../HeaderComponent.vue';
import ContactBodyComponent from './ContactBodyComponent.vue'
import FooterComponent from '../FooterComponent.vue';
export default {
    name: 'ContactComponent',
    components: {
        HeaderComponentVue,
        ContactBodyComponent,
        FooterComponent
    }
}
</script>