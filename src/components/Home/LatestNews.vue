<template>
  <div>
      <h2>Latest News</h2>
      <div class="latest_news">
        <div class="news_links">
            <div>
                <img src="/assets/slide_news_1.jpg" alt="">
                <div class="news_link_description">
                    <h4> <span>1h ago</span> <br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>
            </div>
            <div>
                <img src="/assets/slide_news_2.jpg" alt="">
                <div class="news_link_description">
                    <h4> <span>1h ago</span> <br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>
            </div>
            <div>
                <img src="/assets/slide_news_3.jpg" alt="">
                <div class="news_link_description">
                    <h4> <span>1h ago</span> <br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>
            </div>
            <div>
                <img src="/assets/slide_news_4.jpg" alt="">
                <div class="news_link_description">
                    <h4> <span>1h ago</span> <br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>
            </div>
            <div>
                <img src="/assets/slide_news_5.jpg" alt="">
                <div class="news_link_description">
                    <h4> <span>1h ago</span> <br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>
            </div>
            <div>
                <img src="/assets/slide_news_6.jpg" alt="">
                <div class="news_link_description">
                    <h4> <span>1h ago</span> <br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>
            </div>
            
        </div>
        <div class="league_table">
            <h2>League Table</h2>
            <table>
                <tr>
                    <th>Team</th>
                    <th>P</th>
                    <th>Pts</th>
                </tr>
                <tr>
                    <td>Manchester City</td>
                    <td>1</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Manchester United</td>
                    <td>1</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Liverpool</td>
                    <td>1</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Brighton and Hove Albion</td>
                    <td>1</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Burnley</td>
                    <td>1</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Tottenham Hotspur</td>
                    <td>1</td>
                    <td>3</td>
                </tr>
            </table>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"LatestNews"
}
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 900px){
    .news_links{
        width: 100%!important;
        grid-template-columns: repeat(2,1fr);
    }  
    .league_table{
        display: block !important;
        margin: 0 auto;
        table{
            width: auto!important;
        }
    }
}
@media only screen and (max-width: 700px){
    .news_links{
        grid-template-columns: 1fr !important;
    }  
}


h2{
    text-align: left;
    color: crimson;
    &:nth-child(1){
        padding-left: 2rem;
    }
}
.latest_news{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    flex-wrap: wrap;
    .news_links{
        width: 70%;
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(2,1fr);
        div{
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            margin: .5rem;
            img{
                height: 100px;
                width: 150px;
                object-fit: cover;
            }
            .news_link_description{
                display: flex;
                flex-direction: column;
                text-align: left !important;
                padding: 1rem;
                min-width: 150px;
                span{
                    color: crimson
                }
            }
        }
    }
    .league_table{
        h2{
            margin:1rem 0;
        }
        table {
            border-collapse: collapse;
             border: 1px solid #333;
            td, th {
                // border: 1px solid #333;
                text-align: left;
                // padding: 8px;
            }
        }
        tr {
            
            // &:nth-child(even){
            //     background: #333;
            //     color: #d3d3d3;
            // };
            // &:nth-child(odd){
            //     background: crimson;
            //     color: #fff;
            // }
        }
    }
}
</style>