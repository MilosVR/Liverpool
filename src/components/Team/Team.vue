<template>
  <div class="team_wraper">
    <Navbar />
    <div class="team">
      <div class="team_background"></div>
      <div>
        <div class="first_team_desc">F.C. Liverpool - First Team</div>
      </div>

      <div class="first_team">
        <div class="all_team_players">
          <div>
            <h2>GOALKEEPRES</h2>
            <div class="goalkeepers">
              <div v-for="(goalkepper, index) in goalkeppers" :key="index">
                <router-link :to="'/team/' +  goalkepper.number">
                  <div class="first_team_item">
                    <img :src="goalkepper.profileImg" alt />
                    <div>
                      <p class="first_team_item_number">{{ goalkepper.number }}</p>
                      <p class="first_team_item_name">{{ goalkepper.name }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div>
            <h2>DEFENDERS</h2>
            <div class="defenders">
              <div v-for="(defender,index) in defenders" :key="index">
                <router-link :to="'/team/' +  defender.number">
                  <div class="first_team_item">
                    <img :src="defender.profileImg" alt />
                    <div>
                      <p class="first_team_item_number">{{ defender.number }}</p>
                      <p class="first_team_item_name">{{ defender.name }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div>
            <h2>MIDFIELDERS</h2>
            <div class="midfielders">
              <div v-for="(midfielder,index) in midfielders" :key="index">
                <router-link :to="'/team/' +  midfielder.number">
                  <div class="first_team_item">
                    <img :src="midfielder.profileImg" alt />
                    <div>
                      <p class="first_team_item_number">{{ midfielder.number }}</p>
                      <p class="first_team_item_name">{{ midfielder.name }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div>
            <h2>FORWARDS</h2>
            <div class="forwards">
              <div v-for="(forward,index) in forwards" :key="index">
                <router-link :to="'/team/' +  forward.number">
                  <div class="first_team_item">
                    <img :src="forward.profileImg" alt />
                    <div>
                      <p class="first_team_item_number">{{ forward.number }}</p>
                      <p class="first_team_item_name">{{ forward.name }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="league_table">
          <img src="/assets/first_team_banner.gif" alt />
          <table>
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>P</th>
              <th>Pts</th>
            </tr>
            <tr style="color:red">
              <td>1</td>
              <td>Liverpool</td>
              <td>2</td>
              <td>6</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Arsenal</td>
              <td>2</td>
              <td>6</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Manchester City</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Manchester United</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Brighton and Hove Albion</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Tottenham Hotspur</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Bournemouth</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Sheffield United</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Everton</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Burnley</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Norwich City</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Leicester City</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Wolverhampton Wanderers</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Crystal Palace</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Chelsea</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
              <td>16</td>
              <td>West Ham United</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
              <td>17</td>
              <td>Aston Villa</td>
              <td>2</td>
              <td>0</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Newcastle United</td>
              <td>2</td>
              <td>0</td>
            </tr>
            <tr>
              <td>19</td>
              <td>Southampton</td>
              <td>2</td>
              <td>0</td>
            </tr>
            <tr>
              <td>20</td>
              <td>Watford</td>
              <td>2</td>
              <td>0</td>
            </tr>
          </table>
          <img src="/assets/first_team_banner2.gif" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar";

export default {
  name: "Team",
  components: {
    Navbar
  },
  computed: {
    goalkeppers() {
      return this.$store.getters["goalkeeprs"];
    },
    defenders() {
      return this.$store.getters["defenders"];
    },
    midfielders() {
      return this.$store.getters["midfielder"];
    },
    forwards() {
      return this.$store.getters["forward"];
    }
  },
  mounted() {
    this.$store.dispatch("fetchFirstTeam");
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1280px) {
  .team {
    width: auto !important;
  }
  .goalkeepers,
  .defenders,
  .midfielders,
  .forwards {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .league_table {
    width: auto !important;
  }
}
@media only screen and (max-width: 990px) {
  .first_team {
    flex-wrap: wrap;
    .all_team_players {
      width: 100% !important;
    }
    .league_table {
      width: 100% !important;
      justify-content: center;
      padding: 1rem !important;
      table {
        width: 100%;
      }
      img {
        display: none;
      }
    }
  }
}
@media only screen and (max-width: 700px) {
  .first_team_item {
    justify-content: center !important;
    flex-direction: column;
  }
  .goalkeepers,
  .defenders,
  .midfielders,
  .forwards {
    grid-template-columns: 1fr !important;
    padding: 1rem;
    img {
      width: 100%;
      height: 200px !important;
      object-fit: contain;
    }
  }
  .first_team_item {
    div {
      justify-content: flex-start !important;
      background: #fff;
      width: 100%;
      &:hover {
        .first_team_item_number {
          width: 12rem !important;
          transition: width 200ms ease-in-out;
        }
      }
    }
    .first_team_item_number {
      width: 6rem !important;
    }
  }
  .first_team_item_name {
    min-width: 300px;
  }
}

@media only screen and (max-width: 575px) {
  .first_team_item_name {
    min-width: 200px !important;
  }
}

.team_wraper {
  width: 100%;
  height: 100%;
  a {
    color: #333;
  }
}

.team {
  width: 1280px;
  margin: 0 auto;
  .first_team {
    display: flex;
    justify-content: center;
    .all_team_players {
      width: 75%;
      background: #fff;
      h2 {
        width: 98%;
        border-bottom: 2px solid crimson;
        padding: 0.5rem;
        text-align: left;
        margin: 1rem auto;
      }
      .goalkeepers,
      .defenders,
      .midfielders,
      .forwards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        padding-bottom: 1rem;
        img {
          height: 100px;
          padding: 0.1rem;
          background: url(/assets/anfield_player_slider.jpg) center center
            no-repeat;
          background-size: 100% 100%;
        }
        .first_team_item_number {
          width: 2rem;
          padding: 2.55rem 0.5rem;
          background: crimson;
          transition: width 200ms ease-in-out;
          color: #fff;
          font-weight: bold;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            width: 1rem;
            height: 1.5rem;
            right: 1.1rem;
            top: 50%;
            transform: translate(2rem, -50%);
            background: crimson;
            clip-path: polygon(100% 50%, 0 0, 0 100%);
            z-index: 1;
          }
        }
        .first_team_item_name {
          padding-left: 1.5rem;
          text-align: left;
          width: 2.5rem;
          font-weight: bold;
        }
        .first_team_item {
          display: flex;
          align-items: center;
          overflow: hidden;
          margin: 1rem;
          cursor: pointer;
          div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          &:hover {
            .first_team_item_number {
              width: 4rem;
              transition: width 200ms ease-in-out;
            }
          }
        }
      }
    }
    .league_table {
      width: 25%;
      background: #fff;
      padding: 0.5rem;
      table {
        border-collapse: collapse;
        font-weight: bold;
        tr {
          &:nth-child(1) {
            background: crimson;
            color: #fff;
          }
        }
      }
      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 6px;
      }
    }
  }
  .team_background {
    background: url(/assets/team_background.png) center center no-repeat;
    height: 500px;
    width: 100%;
  }
  .first_team_desc {
    background: #333;
    color: #fff;
    padding: 1rem;
    width: 100%;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: left;
  }
}
</style>