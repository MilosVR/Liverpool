<template>
  <div class="favorite">
     <Navbar />
    <div class="favorite_inner">
        
    <div class="favorite_wraper">
        <div class="t-shirt"
            v-for="(tshirt,index) in favorites" 
            :key="index"
            >
            <div class="favorite_item">
                <img :src="tshirt.tshirtImg" alt="">
                <h5>{{ tshirt.name }}</h5>
                <p>${{ tshirt.price }}</p>
                <span @click="removeFavorite(tshirt)">x</span>
            </div>
        </div>  
    </div>
    
    </div>

    <Footer />
  </div>
</template>

<script>

import ShopItem from './ShopItem'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default {
    name:'Favorite',
    components:{
        ShopItem,
        Navbar,
        Footer
    },
    computed:{
        favorites(){
            return this.$store.state.favorite
        }
    },
    methods:{
        removeFavorite(tshirt){
            return this.$store.commit('REMOVE_FROM_FAVORITE', tshirt)
        }
    }
}
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 1280px) {
    .favorite_inner{
        width: auto !important;
    }
}
@media only screen and (max-width: 1020px) {
    .favorite_wraper{
        grid-template-columns: repeat(3, 1fr) !important;
    }
}
@media only screen and (max-width: 768px) {
    .favorite_wraper{
        grid-template-columns: repeat(2, 1fr) !important;
    }
}
@media only screen and (max-width: 550px) {
    .favorite_wraper{
        grid-template-columns: 1fr !important;
    }
}


    .favorite{
        width: 100%;
        height:100%;
        .favorite_inner{
            background: #d3d3d3;
            min-height: 100vh;
            width: 1280px;
            margin: 0 auto;
            padding: 1rem;
            border-bottom: 2px dashed crimson;
        }
        .favorite_wraper{
            padding-bottom: 5rem;
            display: grid;
            justify-content: center;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 2rem;
        }
        .favorite_item{
            position: relative;
            background: #fff;
            span{
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: crimson;
                color: #fff;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                line-height: 1.5rem;
                cursor: pointer;
            }
            img{
                height: 150px;
            }
        }
    }
</style>








// <style lang="scss" scoped>

// @media only screen and (max-width: 1280px) {
//     .search_results_inner{
//         width: auto !important;
//     }
// }
// @media only screen and (max-width: 1020px) {
//     .search_item_results{
//         grid-template-columns: repeat(3, 1fr) !important;
//     }
// }
// @media only screen and (max-width: 768px) {
//     .search_item_results{
//         grid-template-columns: repeat(2, 1fr) !important;
//     }
// }
// @media only screen and (max-width: 550px) {
//     .search_item_results{
//         grid-template-columns: 1fr !important;
//     }
// }

// .search_results{
//     width: 100%;
//     height: 100%;
//     .search_results_inner{
//         background: #d3d3d3;
//         min-height: 100vh;
//         width: 1280px;
//         margin: 0 auto;
//         padding: 1rem;
//         border-bottom: 2px dashed crimson;
//             .search_results_description{
//                 display: flex;
//                 justify-content: space-between;
//                 align-items: center;
//                 padding: 1.5rem 0;
//             }
//     .search_item_results{
//         padding-bottom: 5rem;
//         display: grid;
//         justify-content: center;
//         grid-template-columns: repeat(4, 1fr);
//         grid-gap: 2rem;
//       }
//     }
// }

// </style>