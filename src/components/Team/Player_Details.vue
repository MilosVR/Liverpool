<template>
  <div>
      <Navbar /> 

    <div class="player_details" :style='{background:`url(${players.coverImg})center center/cover`}'>
        <div class="player_name_and_position">
            <div class="player_name"></div>
            <h4>{{ players.position }}</h4>
        </div>
        <div class='player_number'>
            {{ players.number }}
        </div>
        <div class="player_nationality_and_date_of_birth">
            <div class="player_nationality">
                <p>NATIONALITY</p>
                 <p>{{ players.nationality }}</p>
            </div>
            <div class="player_DOB">
                <p>D.O.B </p>
                <p>{{ players.dateOfBirth }}</p>    
            </div>
        </div>

    </div>

    <div class="player_description_wraper">
        <div class="player_description_title">
            <div class="player_career_title">
                <p>Career</p>
            </div>
        </div>

        <div class="player_description">
            <h2>{{ players.name }}</h2> 
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nulla.</p><br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempore ipsam voluptatum iusto ullam impedit, non eos perferendis blanditiis distinctio facere rerum eius aperiam nesciunt minus, minima accusamus labore eaque omnis!<br> 
            <img :src="players.profileImg" alt="">
            Voluptatibus at debitis nam id optio dolores incidunt laboriosam dicta est a reiciendis dolorum quod, repudiandae, saepe reprehenderit deserunt! Dolorem ad suscipit doloribus nisi eveniet necessitatibus inventore magni, cupiditate quibusdam veritatis dolores odio recusandae magnam eum commodi.<br><br> Rem ratione similique consequatur libero blanditiis maiores non tenetur labore eius facere sequi hic obcaecati repudiandae dignissimos quo, neque architecto necessitatibus saepe aperiam voluptatum. Iusto inventore ratione quo minus eveniet aspernatur non obcaecati minima, voluptatibus, voluptatem id laudantium libero expedita ullam optio? Rerum, distinctio tempore a asperiores quidem aut nihil et accusantium eligendi placeat recusandae qui dolore facere similique totam quo eius hic nobis repudiandae ea minima quisquam? 
            <br><p class="unnecessary_text">Repellat doloremque culpa voluptas omnis perferendis aliquam dolore accusantium repellendus doloribus? Nulla vitae nobis omnis corporis, fuga incidunt distinctio, libero odio, sunt aspernatur dicta vel! Quaerat laboriosam, ipsum labore nam veniam delectus aliquid aperiam repudiandae. Optio consequatur assumenda adipisci praesentium. Earum enim voluptas praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore excepturi earum non veniam porro veritatis maiores. Unde, aspernatur est. Est aspernatur repellendus, explicabo autem consequuntur esse minima illo blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum! Magni corporis repellendus quia recusandae velit iusto nobis placeat ab?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, animi illum. Deleniti molestiae aut voluptates animi. Minus perspiciatis quo soluta impedit laudantium fuga at, quis ipsum aliquam ipsa maxime quidem dignissimos vel dolores id dicta similique corrupti! Fuga nam non magni velit ex deserunt, nobis eligendi maiores vitae eaque corrupti excepturi officia odio!</p>

            
           
            
        </div>
    </div>

    <Footer />

  </div>
</template>

<script>

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default {
    name:'PlayerDetails',
    components:{
        Navbar,
        Footer
    },
    data(){
        return {
            id:this.$route.params.id,     
        }
    },
    computed:{
        players(){
            return this.$store.state.first_team.find(item => {
                return item.number == this.id;
            })
        }
    },
    mounted(){
    this.$store.dispatch('fetchFirstTeam');

    const player_name = document.querySelector('.player_name')
    let player_match = this.$store.state.first_team.find(item => {
            return item.number == this.id;
        })
    player_match.name.split(' ').forEach(item => {
        player_name.innerHTML+=`
        <h1>${item}</h1>
        `
    });
    player_name.children[0].style.fontWeight = 'normal';
    
    
    }
}
</script>

<style lang="scss" scoped>


@media only screen and (max-width: 1280px) {
    .player_details{
        width: auto !important;
    }
    .player_description_wraper{
        width: auto !important;
    }
}
@media only screen and (max-width: 800px) {
    .player_name_and_position{  
        top: 70% !important;
        transform: translate(1rem, -70%) !important;
        font-size: 1.4rem !important;
        h4{
            font-weight: normal;
        }
    }
    .player_nationality_and_date_of_birth{
        position: absolute;
        top: 10% !important;
        right: 1rem;
        transform: translate(-1rem, -10%) !important;
        text-align: right;
        font-size: 2rem;
        color: #fff;
    }
    .player_details{
        &::before{
            content:'';
            position: absolute;
            top: 500px!important;
            left: 0;
            width: 300px !important;
            height: 100px !important;
            clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%) !important;
        }
    }
    .player_number{
        font-size: 4rem;
        color:#fff;
        position: absolute;
        top: 32rem !important;
        left: 5.5rem; 
    }
}
@media only screen and(max-width:600px){
    .unnecessary_text{
        display: none !important;
    }
}

    .player_details{
        position: relative;
        width: 1280px;
        margin: 0 auto;
        height: 600px;
        .player_number{
            font-size: 4rem;
            color:#fff;
            position: absolute;
            top: 5.5rem;
            left: 5.5rem;  
        }
        .player_name_and_position{
            position: absolute;
            top: 50%;
            left: 1rem;
            transform: translate(1rem, -50%);
            text-align: left;
            font-size: 2rem;
            color: #fff;
            h4{
                font-weight: normal;
            }
        }
        .player_nationality_and_date_of_birth{
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translate(-1rem, -50%);
            text-align: right;
            font-size: 2rem;
            color: #fff;
        }
        &::before{
            content:'';
            position: absolute;
            top: 0;
            left: 0;
            width: 350px;
            height: 350px;
            background: rgba($color: crimson, $alpha: .6);
            clip-path: polygon(40% 0, 100% 0, 0 100%, 0 40%);
        }
        .player_nationality{
            p{
                &:nth-child(1){
                    font-size: 1rem;
                    letter-spacing: 2px;
                }
            }
        }
        .player_DOB{
            margin-top: 2rem;
            p{
                &:nth-child(1){
                    font-size: 1rem;
                    letter-spacing: 2px;
                }
            }
        }
    }
    .player_description_wraper{
        width: 1280px;
        margin: 0 auto;
        position: relative;
        .player_career_title{
            position: absolute;
            right:0;
            top: 0;
            width: 50%;
            height: 100%;
            background: rgba($color: crimson, $alpha: .8);
            clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
            p{
                color: #fff;
                font-size: 2rem;
                line-height: 70px;
            }
        }
        .player_description_title{
            height: 70px;
            width: 100%;
            background: #333;
            position: relative;
        }
        .player_description{
            display: block;
            padding: 1rem;
            background:#fff;
            position: relative;

            p{
                 text-align: justify;
                 padding: 1rem;
            }
            img{
                 float:left;
                width: 200px;
                height: 200px;
                position: relative;
                margin: 1rem;
            }
            h2{
                padding: 2rem 0;
                margin: 1rem;
                text-align: left;
                font-size: 1.8rem;
                border-bottom: 1px solid #d3d3d3;
            }
            div{
                text-align: justify;
                margin: 1rem;
                padding: 1rem;
            }
        }
    }
</style>