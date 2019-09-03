<template>
  <div class="footer_wraper">
      <div class="sponsors_images">
          <div>
            <img src="/assets/standard.png" alt="">
            <img src="/assets/new_balance.png" alt="">
          </div>
          <div>
            <img src="/assets/axa_logo.jpg" alt="">
            <img src="/assets/western.png" alt="">
          </div>
          <div>
              <img src="/assets/carlsberg.png" alt="">
              <img src="/assets/1xbet.png" alt="">
              <img src="/assets/mg.png" alt="">
              <img src="/assets/falken.png" alt="">
              <img src="/assets/tigerwit.png" alt="">
              <img src="/assets/easports.png" alt="">
              <img src="/assets/joie.png" alt="">
              <img src="/assets/petro_canada.png" alt="">
          </div>
      </div>
      <div class="footer">
          <img src="/assets/footer_logo.png" alt="">
          <div class="footer_links">
              <ul>
                  <li>Privacy Policy</li>
                  <li>Terms And Conditions</li>
                  <li> Anti-Slavery</li>
                  <li>Cookies</li>
                  <li>Help</li>
                  <li>Browser Support</li>
                  <li>RSS Feeds</li>
                  <li>Contact Us</li>
                  <li>Accessibility</li>
              </ul>
              <div>
                <p>© Copyright 2019 The Liverpool Football Club and Athletic Grounds Limited. All rights reserved. </p>
                <p>Developed and maintained by the LFC Technology and Transformation Team</p>
                <p>Match Statistics supplied by Opta Sports Data Limited. Reproduced under licence from Football DataCo Limited. All rights reserved.</p>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style lang="scss" scoped>

     @media only screen and (max-width: 1280px){
         .footer_wraper{
             width:  auto !important;
         }
     }


    .footer_wraper{
        background: crimson;
        width: 1280px;
        margin: 0 auto;
    }
    .sponsors_images{
        div{
            background: #d3d3d3;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid gray;
            padding: 1rem;
            &:nth-child(1){
                img{
                    margin:0 1rem;
                    height: 50px;
                }
            }
            &:nth-child(2){
                img{
                    margin:0 1rem;
                    height: 50px;
                }
            }
            &:nth-child(3){
                flex-wrap: wrap;
                img{
                    margin:0 1rem;
                    height: 50px;
                }
            }
        }
    }
    .footer{
        color: #fff;
        padding: 1rem;
        font-size: .8rem;
        .footer_links{
            &:nth-child(2){
                p{
                    line-height: 1.1rem;
                }
            }
        }
        img{
            height: 150px;
        }
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            li{
                margin: 1rem;
                text-decoration: underline;
                cursor: pointer;
                padding-bottom: 1rem;
            }
        }
    }
</style>