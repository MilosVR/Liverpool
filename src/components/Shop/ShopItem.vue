<template>
 <div class="shop_item">
    <img :src="tshirt.tshirtImg" alt="">
    <h5>{{ tshirt.name }}</h5>
    <p>${{ tshirt.price }}</p>
    
    <div class="favorite_icon">
        <i class="far fa-heart" 
            @click="add_to_favorite" 
            v-show="!is_show_fav_icon"
            >
        </i>
        <i class="fas fa-heart" 
            @click="remove_from_favorite" 
            v-show="is_show_fav_icon"
            >
        </i>
    </div>
    
 </div>
</template>

<script>




export default {
    name:"ShopItem",
    props:['tshirt'],
    data(){
        return {
            is_show_fav_icon:false
        }
    },
    methods:{
        add_to_favorite(){   
            this.is_show_fav_icon = true
            this.$store.commit('ADD_TO_FAVORITE', this.tshirt)    
        },
        remove_from_favorite(){
            this.is_show_fav_icon = false
            this.$store.commit('REMOVE_FROM_FAVORITE', this.tshirt)   
        }
    }
}
</script>

<style lang="scss">
    .shop_item{
        position: relative;
        background: #fff;
        .favorite_icon{
            position: absolute;
            top: .5rem;
            right: .5rem;
        }
        img{
            z-index: 1;
            height: 200px;
        }
    }
</style>