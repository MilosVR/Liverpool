<template>
  <div class="search_results">
    <Navbar />
    <div class="search_results_inner">
        
        <div class="search_results_description">
            <h2 class="search_results_title">Search results for <span>"{{ term }}"</span></h2>
            <h4>{{ searcResults.length }} results found</h4>
        </div>
        
    <div class="search_item_results">
        <div class="t-shirt"
            v-for="(tshirt,index) in searcResults" 
            :key="index"
            >
            <ShopItem :tshirt='tshirt'/>
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
    name:'SearchResults',
    components:{
        ShopItem,
        Navbar,
        Footer
    },
    data(){
        return{
            term:this.$route.params.term
        }
    },
    computed:{
        searcResults(){
            return this.$store.getters.search(this.term)
        }
    }
}
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 1280px) {
    .search_results_inner{
        width: auto !important;
    }
}
@media only screen and (max-width: 1020px) {
    .search_item_results{
        grid-template-columns: repeat(3, 1fr) !important;
    }
}
@media only screen and (max-width: 768px) {
    .search_item_results{
        grid-template-columns: repeat(2, 1fr) !important;
    }
}
@media only screen and (max-width: 550px) {
    .search_item_results{
        grid-template-columns: 1fr !important;
    }
}
@media only screen and(max-width:500px){
    .search_results_title{
        font-size: 1rem !important;
        span{
            color: crimson;
        }
    }
}
.search_results{
    width: 100%;
    height: 100%;
    .search_results_inner{
        background: #d3d3d3;
        min-height: 100vh;
        width: 1280px;
        margin: 0 auto;
        padding: 1rem;
        border-bottom: 2px dashed crimson;
            .search_results_description{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 0;
            }
    .search_item_results{
        padding-bottom: 5rem;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
      }
    }
}

</style>