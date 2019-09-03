<template>
  <div class="lfc_recommends">
      <h1>LFC Recommends</h1>
      <div class="recommends">
          <div>
              <img src="/assets/recommend_1.jpg" alt="">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odit veniam eveniet sequi possimus illum.</p>
              <button>JOIN NOW</button>
          </div>
          <div>
              <img src="/assets/recommend_2.jpg" alt="">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odit veniam eveniet sequi possimus illum.</p>
              <button>JOIN NOW</button>
          </div>
          <div>
              <img src="/assets/recommend_3.jpg" alt="">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odit veniam eveniet sequi possimus illum.</p>
              <button>JOIN NOW</button>
          </div>
          <div>
              <img src="/assets/recommend_4.jpg" alt="">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odit veniam eveniet sequi possimus illum.</p>
              <button>JOIN NOW</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"LFCRecommends"
}
</script>

<style lang="scss" scoped>

    @media only screen and (max-width: 1280px){
        .lfc_recommends{
            width: auto !important;
        }
        .recommends{
            grid-template-columns: repeat(2, 1fr) !important;
            img{
                height: auto !important;
            }
        }
    }
    @media only screen and (max-width: 600px){
        .recommends{
            grid-template-columns: 1fr !important;
        }
    }


    .lfc_recommends{
        background: #fff;
        padding: 1rem;
        width: 1280px;
        margin: 0 auto;
        button{
            padding: 1rem 2rem;
            background: crimson;
            color: #fff;
            outline: none;
            border: none;
            width: 150px;
            margin: 1rem;
            cursor: pointer;
        }
        h1{
            text-align: left;
            padding: 1rem .5rem;
        }
        .recommends{
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 2rem;
            div{
                display: flex;
                flex-direction: column;
                border: 1px solid #d3d3d3;
                p{
                    text-align: left;
                    padding: 1rem;
                    line-height: 1.5rem;
                }
                img{
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                }
            }
        }
    }
</style>