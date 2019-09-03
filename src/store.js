import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players:[],
    tshirts:[],
    first_team:[],
    favorite:[],
    searchResults:[]
  },
  getters:{
    search : state => term => {
      return state.tshirts.filter(item => {
        return item.name.toLowerCase().includes(term.toLowerCase())
      })      
    },
    all_tshirts: state =>{
      return state.tshirts
    },
    sortByNameAtoZ : state => {
      return state.tshirts.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    },
    sortByNameZtoA : state => {
      return state.tshirts.reverse(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    },
    sortByLowToHigh : state => {
     return state.tshirts.sort((a,b)=> {
       return parseFloat(a.price) - parseFloat(b.price)
     })
    },
    sortByHighToLow : state => {
      return state.tshirts.sort((a,b)=> {
        return parseFloat(b.price) - parseFloat(a.price)
      })
     },
     price0_10 : (state) => {
       return state.tshirts.filter(item => {
         return parseFloat(item.price) > 0 && parseFloat(item.price) < 10;
       })
     },
     price10_20 : (state) => {
      return state.tshirts.filter(item => {
        return parseFloat(item.price) >= 10 && parseFloat(item.price) < 20;
      }).sort((a, b)=> {
       return parseFloat(a.price) - parseFloat(b.price)
     })
    },
    price20_25 : (state) => {
     return state.tshirts.filter(item => {
       return parseFloat(item.price) >= 20 && parseFloat(item.price) < 25;
     }).sort((a, b)=> {
       return parseFloat(a.price) - parseFloat(b.price)
     })
   },
    price30orMore : (state) => {
      return state.tshirts.filter(item => {
        return parseFloat(item.price) > 25;
      }).sort((a, b)=> {
       return parseFloat(a.price) - parseFloat(b.price)
     })
    },
    goalkeeprs : state => {
      return state.first_team.filter(item => {
        return item.position == 'Goalkeeper'
      })
    },
    defenders : state => {
      return state.first_team.filter(item => {
        return item.position == 'Defender'
      })
    },
    midfielder : state => {
      return state.first_team.filter(item => {
        return item.position == 'Midfielder'
      })
    },
    forward : state => {
      return state.first_team.filter(item => {
        return item.position == 'Forward'
      })
    }
  },
  mutations: {
    GET_PLAYERS( state, players ){
      return state.players = players
    },
    GET_SHOP_ITEMS( state, tshirts ){
      return state.tshirts = tshirts
    },
    GET_FIRST_TEAM(state, first_team) {
      return state.first_team = first_team
    },
    ADD_TO_FAVORITE(state, item){
      return state.favorite.push(item)
    },
    REMOVE_FROM_FAVORITE(state, item){
      return state.favorite.splice(state.favorite.indexOf(item), 1)
    }
  },
  actions: {
    fetchPlayers(context){
        axios.get('/static/data.json')
          .then(res => {
            context.commit("GET_PLAYERS", res.data)
          })
          .catch(err => console.log('error',err))
    },
    fetchTshirts(context){
      axios.get('/static/shop.json')
        .then(res => {
          context.commit("GET_SHOP_ITEMS", res.data)
        })
        .catch(err => console.log('error',err))
    },
    fetchFirstTeam(context){
      axios.get('/static/first_team.json')
        .then(res => {
          context.commit("GET_FIRST_TEAM", res.data)
        })
        .catch(err => console.log('error',err))
    },
}
});
