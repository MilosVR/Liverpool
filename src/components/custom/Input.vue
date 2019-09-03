<template>
  <div class="custom_input">
      <input 
        type="text" 
        :value='input_value' 
        readonly="true"
        >
      <div v-show="show_input_menu" class="show_input_menu">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Input',
    data(){
      return{
        input_value:'Sort By',
        show_input_menu:false
      }
    },
    mounted(){
      const input = document.querySelector('.custom_input')
      const show_input_menu = document.querySelector('.show_input_menu')

      input.addEventListener('click', e => {
       
        this.show_input_menu = !this.show_input_menu
      })

      Array.from(show_input_menu.children).map(item => {
        item.addEventListener('click', e=> {
          this.input_value = e.target.innerHTML
        })
      })
    

    }
}
</script>

<style lang="scss" scoped>
  .custom_input{
    height: 100px;
    input{
      cursor: pointer;
      outline: none;
      padding: .5rem;
      border: none;
      background: crimson;
      color: #fff;
      font-weight: 700;
    }
    .show_input_menu{
      div{
        cursor: pointer;
        text-align: left;
        border: 1px solid #d3d3d3;
        // margin: .5rem 0;
        padding: .3rem;
        &:hover{
          background: #d3d3d3;
        }
      }
    }
  }
</style>