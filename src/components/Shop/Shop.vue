<template>
  <div class="shop">
    <Navbar />
    <div class="search_filter">
      <form @submit="searchSubmit">
        <input type="text" placeholder="T-Shirts..." v-model="term">
        <button type="submit">Submit</button>
      </form>
    </div>
      <h1 class="shop_title">T-SHIRTS</h1>
      <div class="shop_wraper">

        <div class="shop_left">
          <div class="size">
            <div @click="showSize=!showSize" class="filter_btn">Size</div>
            <div  :class="{size_show : showSize}" class="size_show_hide">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
          </div>
          <div class="brand">
            <div @click="showBrand=!showBrand" class="filter_btn">Brand</div>
            <div v-show="showBrand">
              Liverpool FC'47
            </div>
          </div>
          <div class="price">
            <div @click="showPrice=!showPrice" class="filter_btn">Price</div>
            <div :class="{price_show : showPrice}" class="price_show_hide">
              <div @click="rangePrice0_10">
                £0.00 - £10.00
              </div>
              <div @click="rangePrice10_20">
                £10.00 - £20.00
              </div>
              <div @click="rangePrice20_25">
                £20.00 - £25.00
              </div>
              <div @click="rangePrice30_orMore">
                £30.00 or More
              </div>
            </div>
          </div>
          <button v-show="showResetBtn"
            @click="resetFilter" 
            class="reset_filter_btn"
            >Reset filter
          </button>
        </div>

        <div class="shop_right">
          <div class="filtering_t-shirts">
            <div class="live_it">
             <img src="/assets/shop/live_it.png" alt="">
            </div>
           
        
          <div class="custom_input">
            <input id="filter_select"
              type="text" 
              :value='selectValue' 
              readonly="true"
              >
            <router-link to='/favorite'>
              <button> 
                Favorite ({{ this.$store.state.favorite.length }}) 
              </button>
            </router-link>

            <div v-show="show_input_menu" class="show_input_menu">
              <div>Sort: A to Z</div>
              <div>Sort: Z to A</div>
              <div>Sort:High To Low</div>
              <div>Sort:Low To High</div>
            </div>
        </div>  
        
            <!-- <select id="filter_select" v-model='selectValue'>
              <option value="" selected disabled>SORT BY</option>
              <option value="Sort: A to Z">Name:A - Z</option>
              <option value="Sort: Z to A">Name:Z - A</option>
              <option value="Sort:Low To High">Price: Low To High</option>
              <option value="Sort:High To Low">Price: High To Low</option>
            </select> -->
          </div>

          <div class="grid_t-shirts">

            <div class="t-shirt"
              v-for="(tshirt,index) in tshirts.slice(0,loadMore)" 
              :key="index"
              >
              <ShopItem :tshirt = 'tshirt'/>
            
            </div>

           
          </div>
          <button class="load_more"
            @click="loadMore = loadMore + 4" 
            v-show="loadMore < tshirts.length">Load More</button>
        </div>
      </div>  
     
  </div>
</template>

<script>

import Navbar from '../Navbar/Navbar'
import Input from '../custom/Input'
import ShopItem from './ShopItem'

export default {
    name:'Shop',
    components:{
      Navbar,
      Input,
      ShopItem
    },
    data(){
      return {
        showSize:true,
        showBrand:true,
        showPrice:true,
        loadMore:12,
        selectValue:'Sort By',
        rangePrices:null,
        show_input_menu:false,
        showResetBtn:false,
        term:''
      }
    },
    computed:{
      tshirts(){
        if (this.selectValue == 'Sort By') {
          return this.$store.getters['all_tshirts'] 
          }
          else if(this.selectValue == 'Sort:Low To High'){
            return this.$store.getters['sortByLowToHigh'];
          }
          else if(this.selectValue == 'Sort:High To Low'){
            return this.$store.getters['sortByHighToLow']
          }
          else if(this.selectValue == 'Sort: A to Z'){
            return this.$store.getters['sortByNameAtoZ']
          }
          else if(this.selectValue == 'Sort: Z to A'){
            return this.$store.getters['sortByNameZtoA']
          }
          else if(this.selectValue == '0-10'){
             return this.$store.getters['price0_10']
          }
          else if(this.selectValue == '10-20'){
             return this.$store.getters['price10_20']
          }
          else if(this.selectValue == '20-25'){
             return this.$store.getters['price20_25']
          }
          else if(this.selectValue == '30 or More'){
             return this.$store.getters['price30orMore']
          }
      },
    },
    methods:{
      resetFilter(){
        this.selectValue = 'Sort By'
        const select = document.querySelector('#filter_select');
        select.style.opacity = '1'
        this.loadMore = 12
        this.showResetBtn = false
      },
      rangePrice0_10(){
        const select = document.querySelector('#filter_select');
        select.style.opacity = '0'
        this.loadMore = this.$store.state.tshirts.length
        this.selectValue = '0-10';
        this.showResetBtn = true
      },
      rangePrice10_20(){
        const select = document.querySelector('#filter_select');
        select.style.opacity = '0'
        this.loadMore = this.$store.state.tshirts.length;
        this.selectValue = '10-20'
        this.showResetBtn = true
      },
      rangePrice20_25(){
        const select = document.querySelector('#filter_select');
        select.style.opacity = '0'
        this.loadMore = this.$store.state.tshirts.length;
        this.selectValue = '20-25'
        this.showResetBtn = true
      },
      rangePrice30_orMore(){
        const select = document.querySelector('#filter_select');
        select.style.opacity = '0'
        this.loadMore = this.$store.state.tshirts.length;
        this.selectValue = '30 or More'
        this.showResetBtn = true
      },
      searchSubmit(e){
        e.preventDefault()
        return this.$router.push({ path: `/search/${this.term}` })
      }
    },
    mounted(){
      this.$store.dispatch('fetchTshirts');

      const input = document.querySelector('.custom_input')
      const show_input_menu = document.querySelector('.show_input_menu')

      input.addEventListener('click', e => {
        const load_more = document.querySelector('.load_more')
        
        this.show_input_menu = !this.show_input_menu
      })
      document.body.addEventListener('click', e => {
        if (e.target !== document.querySelector('#filter_select')) {
          this.show_input_menu = false
        }
        
      })
      Array.from(show_input_menu.children).map(item => {
        item.addEventListener('click', e=> {
          this.selectValue = e.target.innerHTML
        })
      })
    }
}
</script>
  

<style lang="scss" >

@media only screen and (max-width: 1280px) {
   .shop{
     .search_filter{
      width: auto !important;
     }
     .shop_wraper{
       width: auto !important;
     }
  }
}
@media only screen and (max-width: 1066px) {
   .grid_t-shirts{
     grid-template-columns: repeat(3,1fr) !important;
   }
}
@media only screen and (max-width: 850px) {
  .live_it{
    opacity: 0;
  }
   .grid_t-shirts{
     grid-template-columns: repeat(2,1fr) !important;
   }
   .shop_wraper{
     flex-direction: column;
     .shop_left{
       height: 300px !important;
       width: 100% !important;
       flex-direction: row !important;
       margin:1rem auto;
       align-items: baseline !important;
       padding: 0 !important;
     }
   }
   .size, .brand, .price{
     padding: .5rem;
   }
   .shop_title{
     display:none;
   }
   .shop_right{
     justify-content: center !important;
     width:100% !important;
   }
}
@media only screen and (max-width: 600px){
  .grid_t-shirts{
     grid-template-columns: 1fr !important;
   }
   .search_filter{
     input{
       width: auto !important;
       padding-right: 5rem !important;
     }
   }
   .brand{
     display: none !important;
   }
}

  .shop{
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: white !important;
    
    .search_filter{
      padding: 2rem;
      background: crimson;
      color: #fff;
      width: 1280px;
      margin: 0 auto;
      label{
        padding-right: 1rem;
        font-weight: 600;
      }
      input{
        padding: .5rem 1rem;
        outline: none;
        border: none;
        width: 30rem;
        border-radius: .2rem;
      }
      button{
        padding: .5rem 2rem;
        border-radius: .2rem;
        outline: none;
        border: 1px solid #fff;
        background: crimson;
        margin: .5rem;
        color: #fff;
      }
    }
    .live_it{
        padding-left: 1rem;
      img{
        height: 50px;
      }
    }
    h1{
      padding: 2rem;
    }
    .load_more{
      background: crimson;
      color: #fff;
      border: none;
      outline: none;
      padding: 1rem 0;
      cursor: pointer;
      margin: 1rem;
    }
    .shop_wraper{
      display: flex;
      justify-content: center;
      width: 1280px;
      margin: 0 auto;
      .shop_left{
        width: 20%;
        background: gray;
        color: white;
        padding: 3rem  1rem;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div{
          width: 100%;
          margin: 0 auto;
        }
        button{
          padding: .5rem 1rem;
          margin: .5rem;
          border-radius: .3rem;
          cursor: pointer;
          outline: none;
          border: none;
        }
        .filter_btn{
          cursor: pointer;
          padding: .5rem 1rem;
          background: #fff;
          border:1px solid white;
          color: crimson;
          border-radius: .3rem;
          margin: 1rem auto;
          width: 100%;
          }
        .reset_filter_btn{
          background: crimson;
          color: #fff;
          padding: .5rem 1.5rem;
          outline: none;
          border: none;
          border-radius: .3rem;
          margin: .5rem;
          cursor: pointer;
        }
        .size{
            .size_show_hide{
              height: 0;
              opacity: 0;
              &.size_show{
                height: 100%;
                opacity:1;
                transition: opacity 1s ease-in-out;
              }
            }
          }
        .price{
          .price_show_hide{
            height: 0;
            opacity: 0;
            &.price_show{
                height: 100%;
                opacity:1;
                transition: opacity 1s ease-in-out;
              }
          }
          div {
            &:nth-child(2){
            div{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              border-radius: .3rem;
              margin: .5rem 0;
              padding: .7rem;
              cursor: pointer;
              background: #d3d3d3;
              color: #333;
            }
            }
          }
        }
      }
      .shop_right{
        width: 80%;
        background:#fff;
        display: flex;
        flex-direction: column;
        .filtering_t-shirts{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 2rem;
        }
        .grid_t-shirts{
          display: grid;
          justify-content: center;
          align-items: center;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 1rem;
        }
        .t-shirt{
          box-shadow: 0px 0px 12px -6px rgba(0,0,0,0.75);
          margin: 1rem;
          padding: 1rem .5rem;
          cursor: pointer;
          transition: all 400ms ease-in-out;
          &:hover{
            transition: all 400ms ease-in-out;
            box-shadow: 0px 0px 22px -6px rgba(0,0,0,0.75);
          }
          img{
            height: 150px;
          }
        }
      }
    }
  }
  .custom_input{
    position: relative;
    input{
      height: 40px;
      cursor: pointer;
      outline: none;
      padding: .5rem;
      margin-right: 1rem;
      border: 1px solid #d3d3d3;
      background: crimson;
      color: #fff;
      font-weight: 700;
      width: 200px;
    }
    .show_input_menu{
      position: absolute;
      top: 40px;
      left: 0;
      width: 216px;
      z-index: 10;
      div{
        margin-right: 1rem;
        display:block;
        background: #333;
        color: #d3d3d3;
        cursor: pointer;
        text-align: left;
        border: 1px solid #d3d3d3;
        // margin: .5rem 0;
        padding: .3rem;
        &:hover{
          background: crimson;
          color: #333;
        }
      }
    }
    button{
      height: 40px;
      padding: .5rem 1.5rem;
      outline: none;
      background: #333;
      color: #d3d3d3;
      border-radius: .2rem;
      border: none;
      margin-right: 1rem;
    }
  }

</style>