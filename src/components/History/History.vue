<template>
<div class="history_wraper">
    <div class="history">
    
    <div class="history_background">

      <nav class="home">
      <div class="navbar_head">
          <ul>
              <li><a href="#">LFCYV GO</a></li>
              <li><a href="#">Match Hospitality</a></li>
              <li><a href="#">Membership</a></li>
              <li><a href="#">Foundation</a></li>
              <li><a href="#">Soocer School</a></li>
              <li><a href="#">More</a></li>
              <li><a href="#">Log In</a></li>
              <li><a href="#">Register</a></li>
          </ul>
      </div>
      <div class="main_navbar">
          <div class="logo"></div>
          <div class="main_links">
            <div class="sponsors">
            <div></div>
              <div class="nav_footer">
                  <div class="nav_social_links" :class='{show_history : show_history_menu}'>
                      <ul>
                        <li><i class="fab fa-facebook-square fa-2x"></i></li>
                        <li><i class="fab fa-youtube fa-2x"></i></li>
                        <li><i class="fab fa-twitter-square fa-2x"></i></li>
                        <li><i class="fab fa-instagram fa-2x"></i></li>
                          <li class="history_menu_wraper">
                            <i class="fas fa-bars fa-2x" @click="show_history_menu = !show_history_menu"></i>
                              <div class="history_menu" :class='{show_history : show_history_menu}'>
                                <ul>
                                  <router-link to='/'><li><a href="#">Home</a></li></router-link>
                                  <router-link to='/team'><li><a href="#">Team</a></li></router-link>
                                  <router-link to='/shop'><li><a href="#">Shop</a></li></router-link>
                                  <router-link to='/history'><li><a href="#">History</a></li></router-link>
                                  <router-link to='/fans'><li><a href="#">Fans</a></li></router-link>
                                </ul>
                              </div>
                          </li>
                      </ul>
                  </div>
                </div>
              </div>
          </div>
      </div>
      </nav>

    <div class="history_inner">
      <div class="history_inner_desc">
        <div>
          <h1>Our</h1> 
          <h1>Story</h1>
        </div>
        <h4>Celebrating <span>127 Years</span> Of The Liverpool Way</h4>
        <p>Celebrate our heroes and relive the pivotal moments that have shaped the club's illustrious history. </p>
      </div>

      <div class="history_inner_circle">
        <p>1892</p>
        <i class="fas fa-chevron-circle-right fa-4x"></i>
        <span>2019</span>
      </div>
    </div>

    <div class="comming_soon_heroes">
      <div class="comming_soon_heroes_shape"></div>
      <div class="comming_soon_heroes_inner">
        <h2><span>LFC</span>  Heroes</h2>
        <p>We begin telling the story of Liverpool FC’s 125 years with a look at some of the club’s most iconic figures...</p>
      </div>
    </div>

    <div class="profile_heroes_img">
      <p>More Heroes Coming Soon!</p>
      <img src="/assets/profile.png" alt="">
    </div>

    </div>

  <div class="lfc_legends">
    <div class="shankly">
      <img src="/assets/history/shankly.jpg" alt="">
      <div class="lfc_legends_name">
        <h2>Bill</h2>
        <h1>Shankly</h1>
      </div>
    </div>
    <div class="paisley">
      <img src="/assets/history/paisley.jpg" alt="">
       <div class="lfc_legends_name">
        <h2>Bob</h2>
        <h1>Paisley</h1>
      </div>
    </div>
    <div class="daglish">
      <img src="/assets/history/kdaglish.jpg" alt="">
       <div class="lfc_legends_name">
        <h2>Kenny</h2>
        <h1>Daglish</h1>
      </div>
    </div>
    <div class="gerrard">
      <img src="/assets/history/hgerrard.jpg" alt="">
       <div class="lfc_legends_name">
        <h2>Steven</h2>
        <h1>Gerrard</h1>
      </div>
    </div>
  </div>

  <div class="history_banner">
    <img src="/assets/history/history_banner.gif" alt="">
  </div>

  <Footer style="background:#333"/>
  </div>
</div>
</template>



<script>

import Footer from '../Footer/Footer' 

export default {
    name:"History",
    components:{
      Footer
    },
    data(){
      return {
        show_history_menu:false
      }
    }
}
</script>



<style lang="scss" scoped>


 @media only screen and (max-width: 1280px) {
    .history{
      width: auto !important;
    }
    .history nav{
      width: auto !important;
    }
      .main_navbar{
      width: auto !important;
    }
    .lfc_legends{
      width: auto !important;
    }
  }
@media only screen and (max-width: 1170px) {
  .navbar_head{display: none;}
  .logo{
    margin-top: 25px;
  }
  
}
@media only screen and (max-width : 900px){
  .history_inner{
    justify-content: center !important;
    width: auto !important;
    padding: 1rem;
  }
  .history_inner_desc{
   
    div{
      width: auto !important;
      padding: 2rem;
      font-size: 3rem !important;
      h1{
          &:nth-child(1){
          color: crimson;
          margin-bottom: -3rem !important;
          }
        }
    }
  }
  
  .history_inner_circle{
    display: none !important;
  }
  .comming_soon_heroes_inner{
    flex-direction: column;
    text-align: left;
    padding-top: 5rem !important;
    h2{
      padding: 1rem;     
      span{
        padding-bottom: .5rem;
      }
    }
    p{
      width: auto !important;
      height: auto !important;
    }
  }
  .profile_heroes_img{
    display: none !important;
  }
  .lfc_legends{
    grid-template-columns: repeat(2,1fr) !important;
    height: 700px !important;
  }
}
@media only screen and (max-width : 600px){
  .history_inner_desc{
    h4, p{
      width: auto !important
    }
  }
  .comming_soon_heroes_inner{
    flex-direction: column;
    text-align: left;
    padding-top: 4.5rem !important;
    width: 100% !important;
    h2{
      padding: 1rem;     
      span{
        padding-bottom: .5rem;
      }
    }
    p{
      width: 80% !important;
      height: auto !important;
    }
  }
  .logo{
    height: 70px !important;
    top: -.6rem !important;
    left: -1rem !important;
  }
  .lfc_legends{
    grid-template-columns: 1fr!important;
    height: 1600px !important;
    background: #333 !important;
    div{
      margin: 1rem;
    }
  }
}

@media only screen and (max-width:500px) {
  .logo{
    display: none;
  }
  .main_links{
    width: auto !important; 
  }
  .history_inner_desc{
    div{
      font-size: 2rem !important;
      padding: 0 !important;
      h1{
        &:nth-child(1){
          margin-bottom: -2rem !important;
        }
      }
    }
    p{
      margin-left: 5rem !important;
      text-align: right !important;
      margin-top: 1rem;
    }
    h4{
      margin-left: 0rem !important;
      font-size: 1.2rem !important;
    }
  }
}


.history_menu_wraper{
  position: relative;
}
.history_menu{
  position: absolute;
  right: 0.1rem;
  z-index: 100;
  top: 4rem;
  transform: translate3d(0px, -450px, 0px);
  transition: transform 200ms ease-in-out; 
    &.show_history{
      transition: transform 1s ease-in-out;
      transform: translate3d(0px, 0px, 0px) ;
    }
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: rgba($color: #333, $alpha: 1);
        li{
            height: 100%;
            margin: .5rem;
            border-bottom: 1px solid red;
            background: linear-gradient(transparent, black);
            width: 290px;
            cursor: pointer;
            &:hover{
                background: linear-gradient(transparent, crimson);
                a{
                  color: #fff;
                }
            }
        a{
            background: #333;
            padding: 1rem 6.5rem;
            background: transparent;
            color: #d3d3d3;
            font-weight: bold;
        }
    }
  }
}

  .history_wraper{
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: url(/assets/history_wraper.jpg) center center no-repeat/cover !important;
  }
  .history{
    width: 1280px;
    margin: 0 auto;

    .history_background{
      background: url(/assets/history/history_background.jpg) center center no-repeat/cover;
      height: 100vh;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(black, .6);
      }
    }
    .history_inner{
      z-index: 2;
      color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      top: 40%;
      left:50%;
      width: 100%;
      transform: translate(-50%, -40%);
      .history_inner_desc{
        display: flex;
          justify-content: flex-start;
          flex-direction: column;
          text-align: left;
        div{
          font-size: 5rem;
          h1{
            &:nth-child(1){
            color: crimson;
            margin-bottom: -5rem;
            margin-left: 9rem;
          }
          }
        }
          h4{
            margin-top: .5rem;
            margin-bottom: 1rem;
            font-size: 1.6rem;
          }
          p{
            color: #d3d3d3;
            font-weight: bold;
            width: 500px;
          }
        span{
          color: crimson;
        }
      }
    }
    .history_inner_circle{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background: #333;
      color: #fff;
      height: 300px;
      border: 2px solid black;
      width: 300px !important;
      border-radius: 50%;
      p{
        font-size: 4rem;
      }
      span{
        color: crimson;
        font-size: 4rem;
      }
    }
    // Heroes Coming Soon ****  section ******

    .comming_soon_heroes{
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba($color: crimson, $alpha: .6);
      width: 100%;
      height: 250px;
      z-index: 11;
      clip-path: polygon(0 0, 100% 70%, 100% 100%, 0 100%);
      
      .comming_soon_heroes_shape{
        position: absolute;
        bottom: 2rem;
        left: 0rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #d3d3d3;
        background: crimson;
        clip-path: polygon(0 10%, 100% 90%, 100% 100%, 0 100%);
        height: 80%;
        width: 100%;
       
      }
      .comming_soon_heroes_inner{
        padding-top: 9rem;
        display: flex;
        position: relative;
        width: 500px;
        z-index: 12;
        h2{
          line-height: 1.5rem;
          text-shadow: 1px 1px 2px #000000;
          font-size: 2.5rem;
          span{
            display: block;
            color: yellow;
            font-size: 2rem;
          }
        }
        p{
          width: auto;
          text-align: left;
          padding-left: 1rem;
          color: #d3d3d3;
        }
      }
    }

    //////////////////////////////////////////
    .profile_heroes_img{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: -1rem;
      right: 2rem;
      z-index: 11;
      p{
        margin-right: -1.5rem;
        z-index: 12;
        color: #d3d3d3;
        font-weight: bold;
      }
      img{
        height: 150px;
      }
    }
    .lfc_legends{
      width: 1280px;
      height: 400px;
      background: black;
      margin: 0 auto;
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
      overflow: hidden;
      border-bottom: 1px solid #fff;
      .lfc_legends_name{
        background: rgba($color: #000000, $alpha: .7);
        width: 80%;
        position: absolute;
        bottom:1rem;
        left: 50%;
        padding: .5rem;
        transform: translate(-50%, -1rem);
        color: #d3d3d3;
        transition: all 500ms ease-in-out;
      }
      .shankly{
        cursor:pointer;
        transition: all 500ms ease-in-out;
        height:100%;
        position:relative;
        overflow:hidden;
        &:hover{
          .lfc_legends_name{
            transition: all 500ms ease-in-out;
            color: crimson;
          }
        }
        img{
          position: absolute;
          top: 0;
          left:0;
          width: 100%;
          height: 100%;
          object-fit: cover;
           transition: all 500ms ease-in-out;
        &:hover{
          transform: scale(1.1);
          transition: all 500ms ease-in-out;
        }
        }
      }
      .paisley{
        cursor:pointer;
        transition: all 500ms ease-in-out;
        height:100%;
        position:relative;
        overflow:hidden;
        &:hover{
          .lfc_legends_name{
            transition: color 500ms ease-in-out;
            color: crimson;
          }
        }
        &:hover{
          .lfc_legends_name{
            color: crimson;
          }
        }
        img{
          position: absolute;
          top: 0;
          left:0;
          width: 100%;
          height: 100%;
          object-fit: cover;
           transition: all 500ms ease-in-out;
        &:hover{
          transform: scale(1.1);
          transition: all 500ms ease-in-out;
        }
        }
      }
      .daglish{
        cursor:pointer;
        transition: all 500ms ease-in-out;
        height: 100%;
        position:relative;
        overflow:hidden;
        &:hover{
          .lfc_legends_name{
            transition: color 500ms ease-in-out;
            color: crimson;
          }
        }
        &:hover{
          .lfc_legends_name{
            color: crimson;
          }
        }
        img{
          position: absolute;
          top: 0;
          left:0;
          width: 100%;
          height: 100%;
          object-fit: cover;
           transition: all 500ms ease-in-out;
        &:hover{
          transform: scale(1.1);
          transition: all 500ms ease-in-out;
        }
        }
      }
      .gerrard{
        cursor:pointer;
        transition: all 500ms ease-in-out;
        height: 100%;
        position:relative;
        overflow:hidden;
        &:hover{
          .lfc_legends_name{
            transition: color 500ms ease-in-out;
            color: crimson;
          }
        }
        &:hover{
          .lfc_legends_name{
            color: crimson;
          }
        }
        img{
          position: absolute;
          top: 0;
          left:0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 500ms ease-in-out;
        &:hover{
          transform: scale(1.1);
          transition: all 500ms ease-in-out;
        }
        }
      }
    }
    .history_banner{
      position: relative;
      background: #333;
      padding: 1.5rem;
      border-bottom: 1px solid #fff;
      img{ 
        width: 100%;
        height: 100%;
        object-fit: contain;
        top: 0;
        left: 0;
      }
    }
     nav{
        width: 1280px;
        margin: 0 auto;
        
        background: transparent;
        .navbar_head{
            border: 1px solid gray;
            position: relative;
            ul{
                display: flex;
                justify-content: flex-end;
                align-items: center;  
                li{
                    &:nth-child(7), &:nth-child(8){
                        background: #333;
                        a{
                            color: #d3d3d3;
                        }
                    }
                    list-style: none;
                    padding: .5rem 1rem;
                    border-right: solid #d3d3d3 .1px;
                    &:hover{
                            background: crimson;
                        }
                    a{
                        text-decoration: none;
                        padding: .5rem;
                        color: #d3d3d3;
                    }
                }
            }
        }
        .main_navbar{
            width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            
            .logo{
                position: absolute;
                left: 10px;
                background: url(/assets/logo.png) center center no-repeat/contain;
                height: 200px;
                width: 100px;
            }
            .main_links{
                background: transparent;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
            }
           
        }
            .sponsors{
                padding: 1rem;
                width: 100%;
                background: transparent;
                display: flex;
                justify-content: space-between;
                align-items: center;
              
            }
            ul{
                display: flex;
            }
        .nav_footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nav_social_links{
              transition: background 500ms ease-in-out;
              background: black;
              &.show_history{
                transition: background 500ms ease-in-out;
                background: #333 !important;
              }
                ul{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                li{
                     &:nth-child(5){
                        cursor: pointer;
                        border-left: 1px solid #d3d3d3;
                    }
                   padding: 1rem; 
                    img{
                        width: 50px;
                        object-fit: contain;
                    }
                }
                }
                i{
                    color: gray;
                    cursor: pointer;
                }
                img{
                    width: 5%;
                    object-fit: contain;
                }
            }
        
        }
        
    }
  }
</style>