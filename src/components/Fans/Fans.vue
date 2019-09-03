<template>
  <div>
    <Navbar />
    <div class="fans_page">
    <h2>LFC OFFICIAL MEMBERSHIP</h2>
    <div class="fans_head">
      <div class="fans_head_left_img"></div>
      <div class="fans_head_left_bottom"></div>
      <div class="fans_head_text">
        <div class="fans_head_text_inner">
          BEING A MEMBER IS LIKE HAVING A BIG FAMILY
        </div>
      </div>
    </div>

    <div class="fans_body">
      <div >JOIN THE WORLD'S GREATEST FOOTBALL FAMILY</div>
      <img src="/assets/fans_page_logo.png" alt="">
      <div class="fans_banner">
        <div class="fans_banner_inner">
          <p>
          There’s an LFC Official Membership to suit Reds of all ages from tots to lifelong fans. All have a range of benefits from ticket access to discount in the retail stores, giving you everything that you need to be welcomed into the world’s greatest football family...
          <br><br>
          We are Liverpool. This Means More.
        </p>
        <button>JOIN NOW</button>
        </div>
      </div>
    </div>

    <div class="fans_body1">
      <div >JOIN THE WORLD'S GREATEST FOOTBALL FAMILY</div>
      <img src="/assets/jrgen_kloop.png" alt="">
      <div class="fans_body_triangle"></div>
      <div class="fans_banner1">
        <div class="fans_banner_inner1">
            <p>
            There’s an LFC Official Membership to suit Reds of all ages from tots to lifelong fans. All have a range of benefits from ticket access to discount in the retail stores, giving you everything that you need to be welcomed into the world’s greatest football family...
            <br><br>
            We are Liverpool. This Means More.
          </p>
          <button>JOIN NOW</button>
        </div>
      </div>
    </div>

    <div class="fans_body2">
      <div >JOIN THE WORLD'S GREATEST FOOTBALL FAMILY</div>
      <img src="/assets/mohamed_salah.png" alt="">
      <div class="fans_body_triangle1"></div>
      <div class="fans_banner2">
        <div class="fans_banner_inner2">
            <p>
            There’s an LFC Official Membership to suit Reds of all ages from tots to lifelong fans. All have a range of benefits from ticket access to discount in the retail stores, giving you everything that you need to be welcomed into the world’s greatest football family...
            <br><br>
            We are Liverpool. This Means More.
          </p>
          <button>JOIN NOW</button>
        </div>
      </div>
    </div>

    <div class="official_membership">
      <h2>Which Official Membership is right for me?</h2>
      <button>BEGIN</button>
    </div>

    <Footer />
  </div>
  </div>
</template>
<script>

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default {
    name:'Fans',
    components:{
      Navbar,
      Footer
    }
}
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 1280px) {
    .fans_page{
      width: auto !important;
      .fans_head_text{
        font-size: 3rem;
      }
    }
    .fans_body_triangle{
      min-width: 350px !important;
    }
    .fans_body_triangle1{
      min-width: 350px !important;
    }
  }
  @media only screen and (max-width: 1150px) {
    .fans_head_text{
      font-size: 3.5rem !important;
    }
    .fans_body, .fans_body2{
      div{
        &:nth-child(1){
        text-align: right !important;
      }
      }
    }
     .fans_body1{
       div{
        &:nth-child(1){
        text-align: left !important;
      }
     }
    }
  }
  @media only screen and (max-width: 844px) {
    .fans_head_text{
      top: 5rem !important;
      font-size: 2.8rem !important;
      width: 50% !important;
    }
    .official_membership{
      h2{
        text-align: center !important;
      }
    }
  }
  @media only screen and (max-width: 815px) {
    .fans_body{
      .fans_banner{
        height: auto !important;
      }
      img{
        height: 200px !important;
        left: 0 !important;
        top: 50% !important;
        transform: translate(0,-20%) !important;
      }
    }
    .fans_body1{
      .fans_banner1{
        height: 350px !important;
      }
      img{
        right: 3rem !important;
        bottom: 0!important;
        
      }
    }
    .fans_body2{
      .fans_banner2{
        height: 350px !important;
      }
      img{
        height: 300px !important;
        left: 0rem !important;
        bottom: 0 !important;
      }
    }
    .fans_body_triangle{
      height: 295px !important;
    }
    .fans_body_triangle1{
      height: 300px !important;
    }
  }
  @media only screen and (max-width: 700px) {
    .fans_body{
      img{
        display: none !important;
      } 
    }
    .fans_banner{
      justify-content: center !important;
    }
    .fans_banner_inner{
      width: 100% !important;
      text-align: center !important;
    }

    .fans_body1{
      img{
        display: none !important;
      } 
    }
    .fans_banner1{
      justify-content: center !important;
    }
    .fans_banner_inner1{
      width: 100% !important;
      text-align: center !important;
    }

    .fans_body2{
      img{
        display: none !important;
      } 
    }
    .fans_banner2{
      justify-content: center !important;
    }
    .fans_banner_inner2{
      width: 100% !important;
      text-align: center !important;
    }
  }
  @media only screen and (max-width: 600px) {
    .fans_head_text{
      top: 5rem !important;
      font-size: 2.8rem !important;
      width: 60% !important;
    }
  }
  @media only screen and (max-width: 450px) {
    .fans_head_text{
      font-size: 2.2rem !important;
    }
    .fans_body{
      div{
        &:nth-child(1){
          padding: 1rem !important;
        }
      }
    }
    .fans_body1{
      div{
        &:nth-child(1){
          padding: 1rem !important;
        }
      }
    }
    .fans_body2{
      div{
        &:nth-child(1){
          padding: 1rem !important;
        }
      }
    }
    .fans_head{
      height: 400px !important;
    }
    .fans_head_text{
      font-size: 2rem !important;
    }
  }


  .fans_page{
    width: 1280px;
    margin: 0 auto;
    background: #fff;
    h2{
      text-align: left;
      padding: .8rem;
      background: crimson;
      color: #fff;
      border-bottom: 2px solid #fff;
    }
    .fans_head{
      background: url(/assets/fansBackground.jpg) center center no-repeat;
      background-size: cover;
      height: 500px;
      position: relative;
      .fans_head_left_img{
        position: absolute;
        left: 0;
        top: 0;
        width: 25%;
        height: 100%;
        background: crimson;
      }
      .fans_head_left_bottom{
        position: absolute;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to right, rgb(182, 19, 51) , transparent);
        height: 100px;
        width: 100%;
        z-index: 1;
      }
      .fans_head_text{
        width: 40%;
        text-align: left;
        position: absolute;
        
        font-size: 4rem;
        left: 3rem;
        top: 2rem;
        color: #fff;
        font-family: 'Cinzel', serif;
        font-weight: 600;
        text-shadow: 2px 2px 4px #000000;
        .fans_head_text_inner{
          position: relative;
          &::before{
            content: '"';
            position: absolute;
            top: 0;
            left: -1.5rem;
            color: #fff;
          }
          &::after{
            content: '"';
            position: absolute;
            bottom: 0;
            right: 6.5rem;
            color: #fff;
          }
        }
      }
    }
    .fans_body{
      position: relative;
      div{
        &:nth-child(1){
          padding: 3em;
        }
      }
      img{
          position: absolute;
          top: 2rem;
          left: 1rem;
          height: 300px;
          z-index: 10;
        }
      .fans_banner{
        background: url(/assets/fans_banner1.jpg) center center no-repeat/cover;
        height: 250px;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .fans_banner_inner{
          width: 60%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          flex-direction: column;
          z-index: 11;
          p{          
            color: #fff;
            z-index: 11;
            text-align: right;
            line-height: 1.5rem;
            padding-right: 2rem;
            font-weight: 500;
            font-size: 1.1rem;
          }
          button{
            display: inline-block;
            z-index: 11;
            background: crimson;
            color: #fff;
            margin: 1rem 2rem;
            padding: .3rem .8rem;
            outline: none;
            border: none;
            border-radius: .2rem;
            cursor: pointer;
          }
        }
        &::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, .6);
        }
      }
    }

    .fans_body1{
      position: relative;
      
      div{
        &:nth-child(1){
          padding: 3em;
        }
      }
      img{
          position: absolute;
          bottom: 0;
          right: 2rem;
          height: 300px;
          z-index: 10;
        }
        .fans_body_triangle{
          position: absolute;
          right: 0;
          bottom: 0;
          background: rgb(187, 16, 51);
          width: 30%;
          height: 250px;
          clip-path: polygon(0 0, 50% 100%, 100% 0);
          z-index: 9;
        }
        .fans_banner1{
        background: crimson;
        height: 250px;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .fans_banner_inner1{
          width: 60%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          flex-direction: column;
          z-index: 11;
          p{          
            color: #fff;
            z-index: 11;
            text-align: left;
            line-height: 1.5rem;
            padding-right: 2rem;
            font-weight: 500;
            font-size: 1.1rem;
          }
          button{
            display: inline-block;
            z-index: 11;
            background: #333;
            color: #fff;
            margin: 1rem 2rem;
            padding: .3rem .8rem;
            outline: none;
            border: none;
            border-radius: .2rem;
            cursor: pointer;
          }
        }
      }
    }

    .fans_body2{
      position: relative;
      div{
        &:nth-child(1){
          padding: 3em;
        }
      }
      img{
          position: absolute;
          bottom: 0;
          left: 2rem;
          height: 300px;
          z-index: 10;
        }
        .fans_body_triangle1{
          position: absolute;
          left: 0;
          bottom: 0;
          background: #b8b8b8;
          width: 30%;
          height: 250px;
          clip-path: polygon(0 0, 50% 100%, 100% 0);
          z-index: 9;
        }
      .fans_banner2{
        background: #d3d3d3;
        height: 250px;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .fans_banner_inner2{
          width: 60%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          flex-direction: column;
          z-index: 11;
          
          p{          
            color: #333;
            z-index: 11;
            text-align: right;
            line-height: 1.5rem;
            padding-top: 2rem;
            padding-right: 2rem;
            font-weight: 500;
            font-size: 1.1rem;
          }
          button{
            display: inline-block;
            z-index: 11;
            background: #333;
            color: #fff;
            margin: 2rem;
            padding: .3rem .8rem;
            outline: none;
            border: none;
            border-radius: .2rem;
            cursor: pointer;
          }
        }
      }
    }
    .official_membership{
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: crimson;
      button{
        margin: 1rem auto;
        padding: .7rem 1.5rem;
        outline: none;
        border: none;
        color: #fff;
        font-weight: 600;
        background: crimson;
        border: 1px solid #fff;
        cursor: pointer;
        border-radius: .2rem;
      }
    }
  }
</style>