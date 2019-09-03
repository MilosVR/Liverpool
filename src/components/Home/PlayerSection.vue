<template>
  <div class="player_section">
      <div class="media_watch">

          <div class="media_journalist">
            <div class='media_image'></div>
              <div class="media_description">
                  <h4>Evening Standard</h4>
              <span>11 August</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, modi.</p>
            </div>
          </div>

          <div class="media_journalist">
              <div class="media_description">
                  <h4>Evening Standard</h4>
              <span>11 August</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, modi.</p>
            </div>
           <div class='media_image'></div>
          </div>

          <div class="media_journalist">
            <div class='media_image'></div>
            <div class="media_description">
                  <h4>Evening Standard</h4>
              <span>11 August</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, modi.</p>
            </div>
          </div>

          <div class="media_journalist">
              <div class="media_description">
                  <h4>Evening Standard</h4>
              <span>11 August</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, modi.</p>
            </div>
            <div class='media_image'></div>
          </div>

          <div class="media_journalist">
           <div class='media_image'></div>
            <div class="media_description">
                <h4>Evening Standard</h4>
                <span>11 August</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, modi.</p>
            </div>
          </div>
          

      </div>
        <TestSlider />

        <!-- <div class="shop_banner_live_it"></div> -->
  </div>
</template>

<script>
import TestSlider from '../Fans/TestSlider'

export default {

    name:"PlayerSection",
    components:{
        TestSlider
    },
}
</script>

<style lang="scss" scoped>

    // @media only screen and (max-width: 1280px) {
    //     .player_section{
    //         width:auto !important;
    //         grid-template-columns: 1fr !important;
    //     }
    //     .media_watch{
    //         width: auto !important;
    //         padding: 1rem;
            
    //     }
    //      .media_journalist{
    //          width: auto !important;
    //      }
    // }
    @media only screen and (max-width: 900px){
        .media_watch{
            grid-template-columns: repeat(3, 1fr) !important;
        }
        .media_journalist{
             margin:.5rem;
             border: 1px solid red;
         }
    }
    @media only screen and (max-width: 768px){
        .media_watch{
            grid-template-columns: repeat(2, 1fr) !important;
        }
    }
    @media only screen and (max-width: 600px){
        .media_watch{
            grid-template-columns: 1fr !important;
        }
    }

    .player_section{
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        border-bottom: 1px solid #d3d3d3;
        width: 100%;
        padding: 1rem;
        .media_watch{
          display: grid;
          grid-template-columns: repeat(5,1fr);
          justify-content: center;
          align-items: center;
        .media_journalist{
            border: 1px solid #d3d3d3;
            &:nth-child(1){
                .media_image{
                  background: url(/assets/DE.png)center center no-repeat/contain;
                }
              }
              &:nth-child(2){
                 .media_image{
                  background: url(/assets/es.png)center center no-repeat/contain;
                }
              }
              &:nth-child(3){
                  .media_image{
                  background: url(/assets/dm.png)center center no-repeat/contain;
                }
              }
              &:nth-child(4){
                  .media_image{
                  background: url(/assets/DE.png)center center no-repeat/contain;
                }
              }
              &:nth-child(5){
                  .media_image{
                  background: url(/assets/espn.png)center center no-repeat/contain;
                }
              }
            &:nth-child(odd) {
                background:#fff;
                .media_description{
                    background: crimson;
                    color: #fff;
                    position: relative;
                     &::before{
                        content:'';
                        position: absolute;
                        top: -1rem;
                        left: 50%;
                        transform: translate(-50%, 0rem);
                        width: 1.5rem;
                        height:1rem;
                        background: crimson;
                        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                    }
                    span{
                        color: #333;
                        font-weight: bold;
                    }
                }
            }

            &:nth-child(even) {
                background: #fff;
                .media_description{
                    background: gray;
                    color: #fff;
                    position: relative;
                    &::before{
                        content:'';
                        position: absolute;
                        bottom: -.9rem;
                        left: 50%;
                        transform: translate(-50%, 0rem);
                        width: 1.5rem;
                        height:1rem;
                        background: gray;
                        clip-path: polygon(50% 100%, 0 0, 100% 0);
                    }
                    span{
                        color: #333;
                        font-weight: bold;
                    }
                }
            }
          .media_image{
              height: 200px;
          }
          .media_description{
              padding:1rem;
              text-align: left;
              line-height: 1.8rem;
              h4{
                  font-weight: normal;
              }
              p{
                  line-height: 1.3rem;
                  font-weight: bold;
              }
              span{

              }
          }
         }
        }
       
        .shop_banner_live_it{
            grid-area: shop;
            background: url(/assets/live_it_2.gif) no-repeat center center;
            background-size: contain;
        }
    }
</style>