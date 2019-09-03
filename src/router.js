import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home.vue';
import Shop from './components/Shop/Shop.vue'
import Fans from './components/Fans/Fans.vue'
import Team from './components/Team/Team.vue'
import History from './components/History/History.vue'
import PlayerDetails from './components/Team/Player_Details.vue'
import Favorite from './components/Shop/Favorite.vue'
import SearchResults from './components/Shop/SearchResults.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
        path: "/",
        component: Home
    },
    {
        path: "/shop",
        component: Shop
    },
    {
        path: "/fans",
        component: Fans
    },
    { 
        path: "/history",
        component: History
    },
    { 
        path: "/team",
        component: Team
    },
    { 
        path: "/team/:id",
        component: PlayerDetails
    },
    { 
        path: "/favorite",
        component: Favorite
    },
    { 
        path: "/search/:term",
        component: SearchResults
    },
    ]
});
