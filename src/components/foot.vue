<template>
  <div class="foot">
    <div class="tips">
      <div class="head"><h1>友情提示</h1></div>
      <div class="chain">
        <div class="line1">
          <span
            ><a
              href="https://www.shzu.edu.cn/structure/index.psp?ivk_sa=1024320u"
              >石河子大学</a
            ></span
          >
          <span><a href="https://kyc.shzu.edu.cn/">石河子大学科研处</a></span>
          <span><a href="https://jwc.shzu.edu.cn/">石河子大学教务处</a></span>
        </div>
        <div class="line2">
          <span
            ><a href="https://jdxy.shzu.edu.cn/"
              >石河子大学机械电气工程学院</a
            ></span
          >
          <span><a href="https://jcc.shzu.edu.cn/">石河子大学计财处</a></span>
          <span style="margin-left: 160px"
            ><a href="https://yz.shzu.edu.cn/"
              >石河子大学研究生招生信息网</a
            ></span
          >
        </div>
        <div class="line3">
          <span
            ><a href="https://yjsh.shzu.edu.cn/xyjj/list.htm"
              >石河子大学研究生院(学科建设办公室)</a
            ></span
          >
          <span><a href="https://lib.shzu.edu.cn/">石河子大学图书馆</a></span>
          <span style="margin-left: 230px"
            ><a href="https://www.chsi.com.cn/">学信网</a></span
          >
        </div>
      </div>
    </div>

    <div class="foot-container" style="position: fixed; bottom: 0; width: 100%">
      <div class="foot1">
        <img
          src="../../src/assets/图片1.svg"
          style="width: 50px; height: 50px; margin-left: 60px"
        /><span>新疆维吾尔自治区石河子市北五路石河子大学北苑新区</span>
      </div>
      <div class="foot2">
        <img
          src="../../src/assets/图片2.svg"
          style="width: 50px; height: 50px; margin-left: 60px"
        /><span>832003 </span>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.foot {
  height: 350px;
}
.chain {
  height: auto;
  width: 100%;
  .line1 {
    margin-left: 60px;
    span {
      line-height: 50px;
      margin-right: 330px;
      font-size: 20px;
      a {
        color: #ffffff;
      }
    }
  }
  .line2 {
    margin-left: 60px;
    span {
      line-height: 50px;
      margin-right: 170px;
      font-size: 20px;
      a {
        color: #ffffff;
      }
    }
  }
  .line3 {
    margin-left: 60px;
    span {
      line-height: 50px;
      margin-right: 100px;
      font-size: 20px;
      a {
        color: #ffffff;
      }
    }
  }
}
.tips {
  height: 250px;
  width: 100%;
  background-color: rgb(38, 88, 189);
  .head {
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
    margin-left: 60px;
    h1 {
      width: 1300px;
      line-height: 80px;
      border-bottom: 3px solid #ffffff;
    }
  }
}
.foot-container {
  height: 100px;
  // margin-top: 620px;
  background: rgb(4, 29, 93);
  .foot1 {
    display: flex;
    color: #ffffff;
    span {
      display: flex;
      margin-left: 15px;
      align-items: center;
    }
  }
  .foot2 {
    display: flex;
    color: #ffffff;
    span {
      display: flex;
      margin-left: 15px;
      align-items: center;
    }
  }
}
</style>
