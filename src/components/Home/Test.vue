<template>
  <div class="test">
      <button class="prev_btn">Left</button>
      <button class="next_btn">Right</button>
      <ul class="slide_names">
          
      </ul>
      <button class="btn_page">Page {{ current_page }}</button>
  </div>
</template>

<script>
export default {
    name:"Test",
    data(){
        return{
            current_page : 1,
            records_per_page:2,
            nameSlide:[]
        }
    },
    mounted(){
        let current_page = 1;
        let records_per_page = 2;
        
        let names = [   
                        {name:"Mark"},
                        {name:"Anthony"},
                        {name:"Carl"},
                        {name:"Vanessa"},
                        {name:"Katy"},      
                        {name:"Tom"},          
                        {name:"Tom"},                 
                    ]

        let prev_btn = document.querySelector('.prev_btn');
        let next_btn = document.querySelector('.next_btn');
        const slideNames = document.querySelector('.slide_names');



        prev_btn.addEventListener('click', e => {
            if (current_page > 1) {
                current_page--
            }
       
            changePage()
        })
        next_btn.addEventListener('click', e => {
            if (current_page < Math.ceil(names.length/records_per_page)) {
                current_page++
            }
           
            changePage()
        })
        
        function changePage(){
    
            
            
            slideNames.innerHTML =''
            if (current_page < 1 ) {
                current_page = 1
            }
            if (current_page > Math.ceil(names.length/records_per_page)) {
                current_page = Math.ceil(names.length/records_per_page)
            }
            for (let i = (current_page -1)*records_per_page; 
                     i < (current_page*records_per_page);
                     i++) {
                         
               slideNames.innerHTML +=`
               <li>${names[i].name}</li>
               `
              
            }
        }
        window.onload = changePage()
        

    }
}
</script>

<style lang="scss" scoped>
    .test{
        width:80%;
        height: 400px;
        background: slategray;
        color: aqua;
        position: relative;
        margin: 0 auto;
        ul{
            position: relative;
            width: 100%;
            height: 100%;
            li{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: black;
            }
        }
        .test_item{
            background: black;
            height: 100%;
        }
        button{
            &:nth-child(1){
                position: absolute;
                top: 50%;
                transform: translate(-50%);
                left: 0;
                background: blue;
                color: #fff;  
                outline: none;
                border: none;
                padding: 1rem;
                cursor: pointer;  
            }
            &:nth-child(2){
                position: absolute;
                top: 50%;
                transform: translate(-50%);
                right: -3rem;
                background: blue;
                color: #fff;    
                outline: none;
                border: none;
                padding: 1rem;
                cursor: pointer;
            }
        }
        .btn_page{
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: 0;
        }
    }
</style>