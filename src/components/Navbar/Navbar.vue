<template>
  <div class="main_navigation">
      <nav >
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
           <ul>
               <li>
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star"></i>
                </li>
               <li>
                   <img src="/assets/sponsor.png" alt=""> | <p>Main Club Sposnor</p>
                </li>
           </ul>
            </div>
           <div class="link">
                <ul>
                    <router-link to='/'><li><a href="#">Home</a></li></router-link>
                    <router-link to='/team'><li><a href="#">Team</a></li></router-link>
                    <router-link to='/shop'><li><a href="#">Shop</a></li></router-link>
                    <router-link to='/history'><li><a href="#">History</a></li></router-link>
                    <router-link to='/fans'><li><a href="#">Fans</a></li></router-link>
                </ul>
                <i class="fas fa-bars fa-2x" @click="show_menu = !show_menu"></i>
           </div>
            <div v-show="show_menu" class="collapse_menu">
                <router-link to='/'><li><a href="#">Home</a></li></router-link>
                <router-link to='/team'><li><a href="#">Team</a></li></router-link>
                <router-link to='/shop'><li><a href="#">Shop</a></li></router-link>
                <router-link to='/history'><li><a href="#">History</a></li></router-link>
                <router-link to='/fans'><li><a href="#">Fans</a></li></router-link>
            </div>
       </div>
   </div>
   <div class="nav_footer">
       <div class="other_sponsors">
           <ul>
               <li><img src="/assets/new_balance.png" alt=""> </li>
               <li><img src="/assets/western_union.png" alt=""> </li>
               <li><img src="/assets/axa.png" alt=""> </li>
           </ul>
       </div>
       <div class="nav_social_links">
           <ul>
               <li><i class="fab fa-facebook-square fa-2x"></i></li>
                <li><i class="fab fa-youtube fa-2x"></i></li>
                <li><i class="fab fa-twitter-square fa-2x"></i></li>
                <li><i class="fab fa-instagram fa-2x"></i></li>
                <li><img src="/assets/gb_flag.jpg" alt=""></li>
           </ul>
       </div>
   </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
      return{
          show_menu:false
      }
  }
};
</script>

<style scoped lang="scss">


@media only screen and (max-width: 1280px) {
    nav{
        width: auto !important;
    }
    .navbar_head{
        width: auto !important;
    }
    .sponsors{
        width: auto !important;
    }
    .main_navbar{
        width: auto !important;
    }
    .nav_footer{
        width: auto !important;
    }
}
@media only screen and (max-width: 1080px) {
    .navbar_head{
        display: none;
    }
}
@media only screen and (max-width: 768px){
    .other_sponsors{
        display: none;
    }
    .nav_footer{
        justify-content: center !important;
    }
}
@media only screen and (max-width: 650px){
    .sponsors {
        display: none !important;
    }
    .logo{
        height: 70px !important;
        top: .5rem;
    }
    .link{
        display: flex;
        justify-content: flex-end;
        ul{
            display: none !important;
        }
        i{
            cursor: pointer;
            display: flex !important;
        }
    }
}
@media only screen and (max-width: 500px){
    .logo{
        height: 40px !important;
        top: .6rem;
        left: -1rem !important;
    }

    .link{
        padding: 1rem 1rem 1rem 8rem !important;
    }
}


    .link{
        i{
            display: none;
        }
    }
    .collapse_menu{
        width: 100%;
        border-top: .1px solid #d3d3d3;
        li{
            width: 100%;
            margin: .5rem auto;
            text-align: left;
            transition: all 500ms ease-in-out;
            padding: 1rem;
                &:hover{
                    transition: all 500ms ease-in-out;
                    background: rgb(151, 13, 13);
                }
            a{
                color: #d3d3d3;
                font-weight: bold;
            }
        }
    }
    nav{
        width: 1280px;
        margin: 0 auto;
        border-bottom: 1px solid #d3d3d3;
        background: #fff;
        .navbar_head{
            border: 1px solid #d3d3d3;
            ul{
                display: flex;
                justify-content: flex-end;
                align-items: center;  
                li{
                    &:nth-child(7), &:nth-child(8){
                        background: #333;
                        a{
                            color: #fff;
                        }
                    }
                    list-style: none;
                    padding: .5rem 1rem;
                    border-right: solid #d3d3d3 .1rem;
                    &:hover{
                            background: crimson;
                        }
                    a{
                        text-decoration: none;
                        padding: .5rem;
                        color: #333;
                    }
                }
            }
        }
        .main_navbar{
            
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            background: yellow;
            .logo{
                position: absolute;
                // top:50%;
                // transform: translate(-50%);
                left: 10px;
                background: url(/assets/logo.png) center center no-repeat/contain;
                height: 200px;
                width: 100px;
            }
            .main_links{
                background: crimson;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
            }
            .link{
                padding: 2rem 2rem 2rem 8rem;
                width: 100%;
                ul{
                    li{
                        height: 100%;
                    a{
                        padding: 2rem;
                        background: transparent;
                         color: #fff;
                        transition: all 500ms ease-in-out;
                        &:hover{
                            transition: all 500ms ease-in-out;
                            background: rgb(151, 13, 13);
                        }
                    }
                }
                }
            }
            .sponsors{
                padding: 2rem 2rem 2rem 8rem;
                width: 100%;
                background: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                li{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    img{
                    width: 15%;
                    }
                }
                i{
                    color: rgb(233, 207, 64);
                }
            }
            ul{
                display: flex;
            }
        }
        .nav_footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1280px;
            margin: 0 auto;
            .nav_social_links{
                ul{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                li{
                     &:nth-child(5){
                        padding-left: .5rem;
                        border-left: 1px solid #d3d3d3;
                        cursor: pointer;
                    }
                   padding: 1rem; 
                    img{
                        width: 50px;
                        object-fit: contain;
                    }
                }
                }
                i{
                    color: crimson;
                    cursor: pointer;
                }
                img{
                    width: 5%;
                    object-fit: contain;
                }
            }
            .other_sponsors{
            ul{
                display: flex;
                justify-content: center;
                align-items: center;
                li{
                    cursor: pointer;
                    padding: 1rem;
                    img{
                        width: 50px;
                        object-fit: contain;
                    }
                }
            }
        }
        }
        
    }
</style>
