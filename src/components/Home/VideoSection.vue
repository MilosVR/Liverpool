<template>
 <div class='featured_videos'>
     <div class="commercial_banner">
         <img src="/assets/shop_banner.gif" alt="">
         <img src="/assets/live_it_1.gif" alt="">
     </div>
     <h1>Featured Videos</h1>
      <div class="video_section">
      <div class="video_section_wrapper">
        <iframe 
            src="https://www.youtube.com/embed/cuk-b47-n9M?controls=1">
        </iframe>
        <div class="video_section_description">
            <span>Interview</span>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>9th Aug 2019</p>
        </div>
      </div>
      
    <div class="video_section_wrapper">
        <iframe 
            src="https://www.youtube.com/embed/HZHkVTfv0cY?controls=1">
        </iframe>
        <div class="video_section_description">
            <span>Interview</span>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>9th Aug 2019</p>
        </div>
      </div>

      <div class="video_section_wrapper">
        <iframe 
            src="https://www.youtube.com/embed/ZE_Z8On5tdo?controls=1">
        </iframe>
        <div class="video_section_description">
            <span>Interview</span>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>9th Aug 2019</p>
        </div>
      </div>

      <div class="video_section_wrapper">
        <iframe 
            src="https://www.youtube.com/embed/UQU8pUAwtyk?controls=1">
        </iframe>
        <div class="video_section_description">
            <span>Interview</span>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>9th Aug 2019</p>
        </div>
      </div>
  </div>
  <LatestNews />
  <img src="/assets/lfcgo_banner.gif" alt="" class="lfcgo_banner">
  <PlayerSection />
 </div>
</template>


<script>
import LatestNews from './LatestNews'
import PlayerSection from './PlayerSection'

export default {
  name:'VideoSection',
  components:{
    LatestNews,
    PlayerSection
  }
};
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 1280px){
    .featured_videos{
        width: auto !important;
    }
    .video_section_wrapper{
        width: auto !important;
    }
    iframe{
        width: 100% !important;
    }
    .commercial_banner{
         width: auto !important;
        img{
            width: 100% !important;
            height: auto !important;
            &:nth-child(2){
                display: none;
            }
        }
    }
}

@media only screen and (max-width: 768px){
    .video_section{
        flex-wrap: wrap !important;
    }
}



.featured_videos{
    background: #fff;
    border-top: 2px solid #fff;
    display: flex;
    flex-direction: column;
    width: 1280px;
    margin: 0 auto;
    .lfcgo_banner{
        margin: 2rem;
    }
    h1{
        margin-top: 1rem;
        margin-bottom: .5rem;
       text-align: left;
       padding-left: 1rem;
    }
    .commercial_banner{
        display: flex;
        justify-content: center;
        align-content: center;
        padding-bottom: 50px;
        padding: 1rem;
        // clip-path: polygon(100% 0, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0 0);
        img{
            &:nth-child(1){
                width: 60%;
            }
            &:nth-child(2){
                width: 30%;
            }
            height: 120px;
            margin: 1rem;
        }
    }
.video_section{
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-wrap: wrap;
    padding: 1rem;
    iframe{
        border:none;
    }
    .video_section_wrapper{
        margin: .5rem;
        box-shadow: 0px 2px 14px -4px rgba(0,0,0,0.75);
        border-radius: .3rem;
    }
    .video_section_description{
        
        padding: 1rem;
        text-align: left;
        h3{
            margin-top: .5rem;
        }
        span{
            color: crimson;
            font-weight: 700;
        }
        p{
            margin-top: 1.5rem;
            color: #999999;
        }
    }

}
}

</style>