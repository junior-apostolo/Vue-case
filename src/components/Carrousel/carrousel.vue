<template>
    <div class="cmp-carrousel">
        <div class="cmp-carrousel__slider">
            <img class="selected" src="../../assets/connor-coyne-OgqWLzWRSaI-unsplash.jpg" alt="">
            <img src="../../assets/jason-charters-IorqsMssQH0-unsplash.jpg" alt="">
            <img src="../../assets/sven-kucinic-Z0KjmjxUsKs-unsplash.jpg" alt="">
        </div>
    </div>
</template>

<style lang="sass">
@import './carrousel.scss';
</style>

<script>
export default {
    data() {
        return {
          time:2000,
          currentImageIndex: 0,
        }
    },

    mounted(){
        this.startCarrousel()
    },

    methods:{
        nextImage(){
            let images = document.querySelectorAll('.cmp-carrousel__slider img')
            let max = images.length

            images[this.currentImageIndex].classList.remove("selected")
            
            this.currentImageIndex++

            if(this.currentImageIndex >= max)
                this.currentImageIndex = 0

            images[this.currentImageIndex].classList.add("selected")
        },
        startCarrousel(){
            setInterval(() => {

                this.nextImage()
            },this.time)
        },


    }
}
</script>