<template>
  <div class="view-container">
    <div class="bg-container">
      <div class="head"><Logo-vue></Logo-vue> <Nav-Vue></Nav-Vue></div>
    </div>
    <div class="split1">
      <span><a href="">查看更多>></a></span>
    </div>
    <div class="team-act">
      <span><img src="../../assets/team_act.png" /></span>
      <span style="width: 700px"
        ><ul class="info-container">
          <li
            v-for="(index, v) in infolist"
            :key="index"
            @mouseover="handleMouseOver"
            @mouseout="handleMouseOut"
            @click="handleClick"
          >
            <a href="#">{{ index }}&nbsp;&nbsp;&nbsp;{{ v }}</a>
          </li>
        </ul></span
      >
    </div>
    <div class="split2">
      <span><a href="">查看更多>></a></span>
    </div>
    <div class="science">
      <div class="img-container">
        <div class="sub-img1" @click="scienceinfo1">
          <img
            src="../../assets/sciencepro1.png"
            style="margin: 30px 30px; height: 300px"
          />
          <h1
            style="
              margin: 30px 30px;
              color: #ffffff;
              font-size: 20px;
              width: 500px;
              line-height: 40px;
            "
          >
            材料学院张弛团队助力研发国内超大口径超高压力耐蚀楔式闸阀<br />2024.05.23
          </h1>
        </div>
        <div class="sub-img2" @click="scienceinfo2">
          <img
            src="../../assets/sciencepro2.png"
            style="margin: 30px 60px; height: 300px"
          />
          <h1
            style="
              margin: 30px 60px;
              color: #ffffff;
              font-size: 20px;
              width: 500px;
              line-height: 40px;
            "
          >
            清华团队在量子多体伤痕态嵌入开放量子系统研究中取得重要进展<br />2024.05.23
          </h1>
        </div>
        <div class="sub-info">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="banner-container">
      <div class="banner">
        要大力推进农业机械化、智能化，为农业现代化插上科技的翅膀。
      </div>
    </div>
    <div class="split3">
      <span><a href="">查看更多>></a></span>
    </div>
    <div class="teachers">
      <div class="intro">
        新疆特色经济作物生产机械化研究团队334研究室培育和凝聚了一批又一批高水平的专家学者。近年来，团队遵循
      </div>
      <div class="intro">
        "引进与培养并举"的方针，加强青年教师队伍建设，在国内外选聘优秀人才，师资队伍水平稳步提高。
      </div>
      <div class="info1">
        <span class="span1">
          <ul>
            <li id="nums">18</li>
            <li id="types">教师人数</li>
          </ul>
        </span>
        <span class="span2">
          <ul>
            <li id="nums">14</li>
            <li id="types">高级职称人数</li>
          </ul>
        </span>
        <span class="span3">
          <ul>
            <li id="nums">14</li>
            <li id="types">博士学位人数</li>
          </ul>
        </span>
        <span class="span">
          <ul>
            <li id="nums">1</li>
            <li id="types">客座教授人数</li>
          </ul>
        </span>
      </div>
      <div class="info2">
        <span class="span1" style="height: 120px">
          <ul>
            <li id="nums">1</li>
            <li id="types">博士生导师人数</li>
          </ul>
        </span>
        <span class="span2" style="height: 120px">
          <ul>
            <li id="nums">7</li>
            <li id="types">硕士生导师人数</li>
          </ul>
        </span>
        <span class="span3" style="height: 120px">
          <ul>
            <li id="nums">1</li>
            <li id="types">新疆维吾尔自治区<br />天山英才</li>
          </ul>
        </span>
        <span class="span4" style="height: 120px">
          <ul>
            <li id="nums">1</li>
            <li id="types">兵团青年科技<br />创新领军人才</li>
          </ul>
        </span>
        <span class="span5" style="height: 120px">
          <ul>
            <li id="nums">1</li>
            <li id="types">自治区教学能手</li>
          </ul>
        </span>
      </div>
    </div>
    <div class="banner-container">
      <div class="banner">
        守祖国西北边疆&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;书农业机械新篇
      </div>
    </div>
    <Foot-Vue></Foot-Vue>
  </div>
</template>

<script>
import LogoVue from "@/components/logo.vue";
import NavVue from "@/components/nav.vue";
import FootVue from "@/components/foot.vue";

export default {
  name: "HomeView",
  components: { LogoVue, NavVue, FootVue },
  data() {
    return {
      infolist: {
        20240523: "“少年沐风启新程，逐梦同行万里期”毕业生活动顺利开展",
        20240524: "“少年沐风启新程，逐梦同行万里期”毕业生活动顺利开展",
        20240525: "“少年沐风启新程，逐梦同行万里期”毕业生活动顺利开展",
        20240526: "“少年沐风启新程，逐梦同行万里期”毕业生活动顺利开展",
      },
    };
  },
  mounted() {
    document
      .getElementsByClassName("info-container")[0]
      .childNodes.forEach((el) => {
        if (el.nodeName == "LI") {
          el.addEventListener(
            "mouseover",
            function handleMouseOver(event) {
              // event.target.classList.add("active");
              el.style.background = "rgb(0, 69, 157)";
              el.firstChild.style.color = "#ffffff";
            },
            false
          );
          el.addEventListener(
            "mouseout",
            function handleMouseOut(event) {
              // event.target.classList.remove("active");
              el.style.background = "#ffffff";
              el.firstChild.style.color = "black";
            },
            false
          );
          el.addEventListener("click", function handleClick(event) {
            // console.log(event);
          });
        }
      });

    document
      .getElementsByClassName("img-container")[0]
      .childNodes.forEach((e) => {
        e.addEventListener("click", function scienceinfo1() {
          console.log("scienceinfo is clicked");
          e.style.cursor = "pointer";
        });
      });
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.view-container {
  position: relative;
  width: 100%;
  height: auto;
  background: #ffffff;

  .bg-container {
    width: 100%;
    height: 680px;
    background-image: url("../../../src/assets/home_team.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.head {
  top: 0;
  position: fixed;
  height: 150px;
  width: 100%;
  background: url("../../assets/cover.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.split1 {
  display: flex;
  height: 100px;
  width: 100%;
  background: url("../../assets/split.png") no-repeat;
  background-size: cover;
  justify-content: flex-end;
  color: rgb(0, 69, 157);
  span {
    margin-top: 35px;
    margin-right: 60px;

    font-size: 20px;
  }
}
.split2 {
  display: flex;
  height: 100px;
  width: 100%;
  background: url("../../assets/split2.png") no-repeat;
  background-size: cover;
  justify-content: flex-end;
  color: rgb(0, 69, 157);
  span {
    margin-top: 35px;
    margin-right: 60px;
    font-size: 20px;
  }
}
.split3 {
  margin-top: 60px;
  display: flex;
  height: 100px;
  width: 100%;
  background: url("../../assets/split3.png") no-repeat;
  background-size: cover;
  justify-content: flex-end;
  color: rgb(0, 69, 157);
  span {
    margin-top: 35px;
    margin-right: 60px;
    font-size: 20px;
  }
}
.team-act {
  display: flex;
  height: 600px;
  width: 100%;

  img {
    margin-left: 60px;
  }
  .info-container {
    width: 700px;
    margin-left: 30px;
    li {
      margin-top: 9px;
      width: 700px;
      line-height: 120px;
      transition: background-color 0.3s;
      a {
        color: black;
        font-size: 20px;
      }
    }
  }
}
.science {
  width: 100%;
  height: 500px;
  .img-container {
    display: flex;
    margin-top: 60px;
    margin-left: 60px;
    width: 1400px;
    height: 500px;
    background: url("../../assets/science_bg.png") no-repeat;
    background-size: contain;
    .sub-img1,
    .sub-img2 {
      width: 500px;
      height: 500px;
      img {
        transition: transform 0.3s;
      }
      img:hover {
        transform: translateY(-5px);
      }
    }
    .sub-info {
      height: 500px;
      width: 500px;
      span {
        height: 100px;
        width: 60px;
        margin-left: 30px;
        background: #000;
      }
    }
  }
}
.banner-container {
  width: 100%;
  height: 100px;
  .banner {
    width: 1390px;
    height: 100px;
    background: rgb(68, 114, 196);
    margin-left: 60px;
    margin-top: 5px;
    text-align: center;
    align-content: center;
    font-size: 40px;
    color: #ffffff;
  }
}

.teachers {
  width: 100%;
  height: 400px;

  .intro {
    text-align: center;
    height: 30px;
    font-size: 20px;
  }
}

.info2 {
  margin-top: 30px;
  margin-left: 250px;
  display: flex;
}

.info1 {
  margin-top: 60px;
  margin-left: 350px;
  display: flex;
}
.span1,
.span2,
.span3,
.span,
.span4,
.span5 {
  display: inline-block;
  justify-items: center;
  width: 200px;
  height: 120px;
  #nums {
    text-align: center;
    align-content: center;
    font-size: 70px;
    color: rgb(0, 69, 157);
  }
  #types {
    text-align: center;
    font-size: 20px;
  }
}

.span1,
.span2,
.span3,
.span4 {
  border-right: 2px solid black;
}
</style>
