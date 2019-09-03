<template>
  <div class="never_forgotten_wraper">
    <div class="never_forgotten">  
        <div><img src="/assets/never.png" alt=""></div>
        <div><img src="/assets/memoria.jpg" alt=""></div>
    </div>

    <div class="ynwa_text">
            <h1>
        <span></span>
                YOU'LL NEVER WALK ALONE
        <span></span>
            </h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
   @import url('https://fonts.googleapis.com/css?family=Cinzel:400,700,900&display=swap');

    @media only screen and (max-width: 1280px){
        .never_forgotten_wraper{
            width: auto !important;
        }
        .never_forgotten{
            width: auto !important;
        }
    }
    @media only screen and (max-width: 1063px){
        .never_forgotten{
            justify-content: center !important;
            div{
                width: 100% !important;
                margin: .5rem;
            }
        }
    }

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Cinzel', serif;
        color: gray;
        width: 100%;
        margin: 1rem;
    }
    .never_forgotten_wraper{
        width: 1280px;
        margin: 0 auto;
        background: #fff;
        padding: 2rem;
    }
    .ynwa_text{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        span{
            background: gray;
            width: 25%;
            height: 1px;
            margin: 1rem;
        }
    }
    .never_forgotten{
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        
         div{
             
             &:nth-child(1){
                 width: 400px;
                img{
                    background: #d3d3d3;
                    padding: 1rem;
                }
            }
            &:nth-child(2){
                width: 550px;
                img{
                    background: #fff;
                    
                    height: 100%;
                }
            }
         }
        img{
            width: 100%;
            height: 150px;
            object-fit: contain;
        }
    }
</style>