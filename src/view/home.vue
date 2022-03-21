<template>
    <div>
        <carrousel/>
        <main-navigation/>
    </div>
</template>

<style>

</style>

<script>
import Carrousel from '../components/Carrousel/carrousel.vue'
import Main from '../components/MainNavigation/mainNavigation.vue'

export default {
    components:{
        Carrousel,
        MainNavigation:Main,
    }
}
</script>