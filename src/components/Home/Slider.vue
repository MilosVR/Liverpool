<template>
  <div class="slider">

       <div class="arrow_left" @click="slideLeft">
         <div></div>
       </div>
       
       <div class="arrow_right" @click="slideRight"><div></div></div>
       
     <ul>

       <li>
         <div class="slider_matches_left">
           <h2>Last Match</h2>
           <div class="score">
             <img src="/assets/logo.png" alt="">
             <div class="score_table">4 : 1</div>
             <img src="/assets/norwich.png" alt="">
           </div>
            <img src="/assets/p_league.png" alt="" class="premier_league_logo">
           <p>20:00 Fri 9th August 2019</p>
           <button>More</button>
         </div>

        <div class="slider_matches_right">
           <h2>Upcoming Matches</h2>
           <div class="upcoming">
             <div class="upcoming_matches">
               <div class="versus">
                  <img src="/assets/logo.png" alt="">
                  <p>V</p>
                  <img src="/assets/chelsea.png" alt="">
                </div>
                <img src="/assets/p_league.png" alt="" class="premier_league_logo">
                <p>20:00 Wed 14th August 2019</p>
                 <button>More</button>
             </div>
             <hr>
             <div class="upcoming_matches">
               <div class="versus">
                  <img src="/assets/southampton.png" alt="">
                  <p>V</p>
                  <img src="/assets/logo.png" alt="">
                </div>
                <img src="/assets/p_league.png" alt="" class="premier_league_logo">
                <p>15:00 Wed 17th August 2019</p>
                 <button>More</button>
             </div>
           </div>
         </div>

       </li>

       <li>
         <div class="slider_news">

           <div class="slide_news_main">
             <img src="/assets/slide_news_main.jpg" alt="">
             <h3>Team news update.</h3>
           </div>

           <div class="slide_news">
           
               <div>
                 <img src="/assets/slide_news_1.jpg" alt="">
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
               </div>
               <div>
                 <img src="/assets/slide_news_2.jpg" alt="">
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
               </div>
               <div>
                 <img src="/assets/slide_news_3.jpg" alt="">
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
               </div>
               <div>
                 <img src="/assets/slide_news_4.jpg" alt="">
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
               </div>
         
           </div>

           <div class="second_slide_commercial">
            
           </div>

         </div>
       </li>

     </ul>
   </div>
</template>

<script>
export default {
    name:"Slider",
    data(){
    return{
      currentSlide:0
    }
  },
  methods:{
    slideLeft(){
      const sliderUl = document.querySelector('.slider ul').children;
      const slider = Array.from(sliderUl)
    
      slider.map(item => {
        item.style.opacity = '0'
      })

      if (this.currentSlide === 0) {
        this.currentSlide = slider.length
      }
        for (let i = 0; i < slider.length; i++) {
          slider[this.currentSlide - 1].style.opacity = '1'
        }
       this.currentSlide--
    },
    slideRight(){
      const sliderUl = document.querySelector('.slider ul').children;
      const slider = Array.from(sliderUl)
    
      slider.map(item => {
        item.style.opacity = '0'
      })

      if (this.currentSlide === slider.length - 1) {
        this.currentSlide = -1
      }
        for (let i = 0; i < slider.length; i++) {
          slider[this.currentSlide + 1].style.opacity = '1'
        }
       this.currentSlide++
    }
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 1280px) {
  .slider{
      width: auto !important;
  }
}
@media only screen and(max-width: 1130px){
  .slider{
    height: 700px !important;
      li{
        height: 100% !important;
      }
      .second_slide_commercial{
          width: 100% !important;
          background: url('/assets/slide_commercial.gif')center center no-repeat/cover !important;
      }
  }
}
@media only screen and(max-width: 768px){
  .slider_matches_right{
    height: auto !important;
    width: 450px !important;
  }
  .upcoming{
    flex-direction: column;
  }
  .slider{
    height: 900px !important;
  }
  .arrow_left{
      top: 99% !important;
      left: 15rem !important;
      transform: translate(0,-99%) !important;
  }
  .arrow_right{
      top: 99% !important;
      right: 15rem !important;
      transform: translate(0,-99%) !important;
  }
  .second_slide_commercial{
      display: none !important;
    }
  .slide_news{
    width: 100% !important;
    height: 100% !important;
    img{
      width: 160px !important;
    }
  }  
  
  .slide_news_main{
    width: 100% !important;
  }
}
@media only screen and(max-width: 600px){
  .arrow_left{
      left: 10rem !important;
  }
  .arrow_right{
      right: 10rem !important;  
  }
}
@media only screen and(max-width: 500px){
  .commercial_banner{
    img{
      &:nth-child(1){
        width: 100% !important;
      }
    }
  }
  .arrow_left{
      left: 7rem !important;
  }
  .arrow_right{
      right: 7rem !important;  
  }
}
  .slider{
    position: relative;
    width: 1280px;
    margin: 0 auto;
    height: 400px;
     overflow: hidden;
    .score_table{
      width: 70px;
      height: 50px;
      background: crimson;
      clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
    }
    ul{
      position: relative;
      li{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-bottom: 2px solid crimson;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        &:nth-child(1){
          background: url(/assets/anfield_slide.jpg) center center no-repeat/cover;
          height: 400px;
          transition: all 500ms ease-in-out;
        }
         &:nth-child(2){
           opacity: 0;
           display: flex;
           width: 100%;
           height: 400px;
           background: url(/assets/second_slide.jpg) center center no-repeat/cover;
           transition: all 500ms ease-in-out;
         }
      }
    }
    .slider_matches_left{
        border:1px solid #d3d3d3;
        width: 450px;
        height: 300px;
        background: rgba($color: #000000, $alpha: .8);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1rem;
        .premier_league_logo{
          width: 150px;
          margin-bottom: .5rem;
          border-bottom: 1px solid #d3d3d3;
        }
        .score_table{
          color: #fff;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 60px;
          margin: 1rem;
          font-size: 1.5rem;
        }
        .score{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h2{
          color: #fff;
        }
        p{
          color: #fff;
        }
        img {
          width: 90px;
          object-fit: contain;
        }
        button{
          padding: .5rem 2rem;
          margin: .6rem;
          outline: none;
          border: none;
          background: crimson;
          color: #fff;
          cursor: pointer;
          border-radius: .1rem;
        }
    }
    .slider_matches_right{
      width: 600px;
      height: 300px;
      background: rgba(0, 0, 0, .8);
      margin: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid #d3d3d3;
      .premier_league_logo{
            width: 110px !important;
            object-fit: contain;
            border-bottom: 1px solid #d3d3d3;
            margin: .5rem;
      }
       h2{
          color: #fff;
          margin-bottom: 1rem;
        }
        p{
          color: #fff;
        }
        .upcoming{
          display: flex;
          justify-content: center;
          align-items: center;
            div{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              width: 250px;
              height: 200px;
              img {
                width: 70px;
                object-fit: contain;
              }
          }
          .versus{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                p{
                  font-size: 2rem;
                  margin: .5rem;
                  font-weight: 900;
                  color: #fff;
                }
          }
          button{
          padding: .5rem 2rem;
          margin: .6rem;
          outline: none;
          border: none;
          background: crimson;
          color: #fff;
          cursor: pointer;
          border-radius: .1rem;
        }
      }

    }
  }
  .arrow_left{
      position:absolute;
      top: 50%;
      left: 1rem;
      transform: translate(0,-50%);
      background: rgba($color: crimson, $alpha: .5);
      padding: 1rem;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 500ms ease-in-out;
      &:hover{
        transition: all 500ms ease-in-out;
        background: crimson;
      }
      div{
        border: solid #ffffff;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 1rem;
        margin-right: -1rem;
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }
  }
  .arrow_right{
      position:absolute;
      top: 50%;
      right: 1rem;
      transform: translate(0,-50%);
      background: rgba($color: crimson, $alpha: .5);
      padding: 1rem;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 500ms ease-in-out;
      &:hover{
        transition: all 500ms ease-in-out;
        background: crimson;
      }
      div{
        border: solid #ffffff;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 1rem;
        margin-left: -1rem;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    }
    .slider_news{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        div{
            margin:.5rem;
        }
        .slide_news_main{
            width: 350px;
            height: 300px;
            border: 1px solid white;
            position: relative;
             h3{
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                bottom: 10px;
                color: #fff;
                z-index: 1;
                text-shadow: 2px 2px 4px #000000;
            }
            img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }           
        }
        .slide_news{
            width: 300px;
            height: 300px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: .4rem;
                padding: .25rem;
                background: rgba($color: crimson, $alpha: .8);    
                border: 1px solid #fff;
                p{
                    font-size: .8rem;
                    color: #fff;
                }
            }
            img{
                width: 90px;
                border: 1px solid #fff;
            }
            
        }
        .second_slide_commercial{
            width: 300px;
            height: 300px;
            border: 1px solid white;
            position: relative;
            background: url('/assets/slide_commercial1.gif')center center no-repeat/cover;
        }
    }
</style>