<template>
  <div class="test_slider">
    <div class="home-product-new-hldr">
      <div class="left_btn_wrapper">
        <div></div>
      </div>

      <div class="home-product-new">
        <div class="player_slider">
          <div class="item-container" v-for="(player,index) in players" :key="index">
            <div class="item">
              <img :src="player.profileImg" />
            </div>
            <div class="player_proofile">
              <div>{{ player.number }}</div>
              <div>{{ player.name.split(' ')[0] }}</div>
            </div>
          </div>
        </div>
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
      <div class="right_btn_wrapper">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestSlider",
  computed: {
    players() {
      return this.$store.state.players;
    }
  },
  mounted() {
    this.$store.dispatch("fetchPlayers");

    (function() {
      let listEl = document.querySelector(".player_slider");
      let btnLeftEl = document.querySelector(".left_btn_wrapper");
      let btnRightEl = document.querySelector(".right_btn_wrapper");
      let count = 0;
      let pages = [];

      const dots = document.querySelector(".dots").children;

      const totalDots = -18 / 4;

      function number_test(totalDots) {
        var result = totalDots - Math.floor(totalDots) !== 0;

        if (result) {
          var dotsWraper = document.querySelector(".dots");
          // let newSpan = []
          // let span = document.createElement('span')
          // span.classList.add('dot')
          // span.style.width = '1rem'
          // span.style.height = '1rem';
          // span.style.background = '#333'
          // span.style.borderRadius = '50%'
          // span.style.margin = '.5rem'
          // dotsWraper.appendChild(span)
        } else {
          return console.log("It is a whole number.");
        }
      }
      number_test(totalDots);
      // console.log(dotsWraper);

      for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", e => {
          slideImages("", i);
        });
      }
      dots[0].classList.add("is_active_dot");

      // RESPONSIVE BREAKPOINTS
      const breakpoint900 = matchMedia("(max-width:900px)");
      const breakpoint768 = matchMedia("(max-width:768px)");
      const breakpoint600 = matchMedia("(max-width:600px)");

      // LARGE BREAKPOINT
      function changeSizeLG(mql, direction) {
        if (mql.matches) {
          return (btnRightEl.style.display = count > -15 ? "block" : "none");
        } else {
          return;
        }
      }
      breakpoint900.addListener(changeSizeLG);
      changeSizeLG(breakpoint900, "");

      // MEDIUM BREAKPOINT
      function changeSizeMD(mql, direction) {
        if (mql.matches) {
          btnRightEl.style.display = count > -16 ? "block" : "none";
          return;
        } else {
          return;
        }
      }
      breakpoint900.addListener(changeSizeMD);
      changeSizeMD(breakpoint900, "");

      // SMALL BREAKPOINT
      function changeSizeSM(mql, direction) {
        if (mql.matches) {
          return (btnRightEl.style.display = count > -17 ? "block" : "none");
        } else {
          return;
        }
      }
      breakpoint600.addListener(changeSizeSM);
      changeSizeSM(breakpoint600, "");

      // SLIDER
      function slideImages(direction, i) {
        let totalChildren = listEl.querySelectorAll(".item").length;
        let numPages = Math.floor(totalChildren / 4);

        for (let j = 0; j < numPages; j++) {
          pages[j] = j * 4;
        }

        pages[numPages] = totalChildren - 4;

        if (direction === "left") {
          count++;
        }
        if (direction === "right") {
          count--;
        }
        if (i !== undefined) {
          count = pages[i] === 0 ? 0 : -pages[i];
        }
        listEl.style.left = count * 198 + "px";

        btnLeftEl.style.display = count < 0 ? "block" : "none";
        btnRightEl.style.display = count > 4 - totalChildren ? "block" : "none";

        for (let y = 0; y < dots.length; y++) {
          dots[y].classList.remove("is_active_dot");
        }

        if (count === 0) {
          dots[0].classList.add("is_active_dot");
        } else if (-count >= totalChildren - 4) {
          dots[4].classList.add("is_active_dot");
        } else {
          dots[Math.floor(-count / 4)].classList.add("is_active_dot");
        }
      }

      btnLeftEl.addEventListener("click", function(e) {
        slideImages("left");
        changeSizeLG(breakpoint900, "left");
        changeSizeMD(breakpoint768, "left");
        changeSizeSM(breakpoint600, "left");
      });
      btnRightEl.addEventListener("click", function(e) {
        slideImages("right");
        changeSizeLG(breakpoint900, "right");
        changeSizeMD(breakpoint768, "right");
        changeSizeSM(breakpoint600, "right");
      });
    })();
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1280px) {
  .test_slider {
    width: auto !important;
  }
  .player_slider {
    width: auto !important;
  }
}

@media only screen and (max-width: 900px) {
  .home-product-new-hldr {
    position: relative;
    width: auto !important;
  }
  .home-product-new {
    width: 600px !important;
  }
  .dots {
    display: none !important;
  }
}
@media only screen and (max-width: 768px) {
  .home-product-new {
    width: 400px !important;
  }
}
@media only screen and (max-width: 600px) {
  .home-product-new {
    width: 200px !important;
  }
}

.test_slider {
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.home-product-new-hldr {
  position: relative;
  width: 800px;
}

.home-product-new {
  width: 800px;
  overflow: hidden;
}

.player_slider {
  transition: all 500ms ease-in-out;
  position: relative;
  white-space: nowrap;
  left: 0;
}

.item-container {
  display: inline-block;
  width: 189px;
  margin: 5px;
  background: #fff;
  border: 1px solid #d3d3d3;
  .item {
    background: url(/assets/anfield_player_slider.jpg) center center
      no-repeat/cover;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .player_proofile {
    display: flex;
    align-items: center;
    background: red;
    margin-top: -3.5px;
    overflow: hidden;
    div {
      color: #fff;
      padding: 1rem;
      &:nth-child(2) {
        background: #fff;
        color: black;
        width: 100%;
        font-weight: 700;
      }
    }
  }
}

.left_btn_wrapper {
  position: absolute;
  top: 50%;
  left: -4rem;
  transform: translate(0, -50%);
  background: rgba($color: crimson, $alpha: 0.5);
  padding: 1rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;
  transition: all 500ms ease-in-out;
  &:hover {
    transition: all 500ms ease-in-out;
    background: crimson;
  }
  div {
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 1rem;
    margin-right: -1rem;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
}

.right_btn_wrapper {
  position: absolute;
  top: 50%;
  right: -4rem;
  transform: translate(0, -50%);
  background: rgba($color: crimson, $alpha: 0.5);
  padding: 1rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  cursor: pointer;
  transition: all 500ms ease-in-out;
  &:hover {
    transition: all 500ms ease-in-out;
    background: crimson;
  }
  div {
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 1rem;
    margin-left: -1rem;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
}

#left-btn {
  display: none;
}

.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  .dot {
    width: 1rem;
    height: 1rem;
    background: #333;
    margin: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    &.is_active_dot {
      background: crimson;
    }
  }
}
</style>