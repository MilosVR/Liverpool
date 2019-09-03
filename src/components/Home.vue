<template>
  <div >
    <Navbar />
    <div class="home">
      <Slider />
      <VideoSection />
      <LFCRecommends />
      <NeverForgotten />
      <Footer />
    </div>
  </div>
</template>

<script>
import Slider from './Home/Slider'
import VideoSection from './Home/VideoSection'
import NeverForgotten from './Home/NeverForgotten'
import Footer from './Footer/Footer'
import LFCRecommends from './Home/LfcRecommends'
import Navbar from './Navbar/Navbar'

export default {
  name: "Home",
  components:{
    Slider,
    VideoSection,
    NeverForgotten,
    Footer,
    LFCRecommends,
    Navbar
  }
};
</script>

<style scoped lang="scss">
  // .home{
  //   width: 1280px;
  //   margin: 0 auto;
  // }

</style>
