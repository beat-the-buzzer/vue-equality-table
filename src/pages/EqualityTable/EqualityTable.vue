<template>
  <div class="equality-table">
    <h3>Equality table for '=='</h3>
    <div class="row-header">
      <table>
        <tr>
          <td></td>
          <td v-for="item in myArrShow" :key="item">
            <canvas :ref="item"></canvas>
          </td>
        </tr>
        <tr v-for="(item,index) in myTableArr" :key="index">
          <td class="cell" v-for="(v,i) in item" :key="i">
            <div
              :class="[typeof v === 'string' ? '' : 'block', (typeof v !== 'string' && v.doubleEqual) ? 'bg-green': '']"
              :title="(typeof v !== 'string' && v.doubleTitle) ? v.doubleTitle : ''"
            >{{typeof v === 'string' ? v : ''}}
            </div>
          </td>
        </tr>
      </table>
    </div>

    <hr/>
    <h3>Equality table for '==='</h3>
    <div class="row-header">
      <table>
        <tr>
          <td></td>
          <td v-for="item in myArrShow" :key="item">
            <canvas :ref="item"></canvas>
          </td>
        </tr>
        <tr v-for="(item,index) in myTableArr" :key="index">
          <td class="cell" v-for="(v,i) in item" :key="i">
            <div
              :class="[typeof v === 'string' ? '' : 'block', (typeof v !== 'string' && v.tribbleEqual) ? 'bg-green': '']"
              :title="(typeof v !== 'string' && v.tribbleTitle) ? v.tribbleTitle : ''"
            >{{typeof v === 'string' ? v : ''}}
            </div>
          </td>
        </tr>
      </table>
    </div>

    <hr/>
    <h3>Equality table for 'if()'</h3>
    <div class="row-header">
      <table>
        <tr v-for="(value,i) in myColArr" :key="i">
          <td class="cell">
            <div>{{myArrShow[i]}}</div>
          </td>
          <td class="cell">
            <div
              :class="['block', Boolean(value) ? 'bg-green' : '']"
              :title="['if(' + myArrShow[i] + ') // ' + Boolean(value)]"
            >
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { rowArr, colArr, tableArr, arrShow } from "./config";
export default {
  name: "EqualityTable",
  data() {
    return {
      myRowArr: rowArr,
      myColArr: colArr,
      myArrShow: arrShow,
      myTableArr: tableArr
    };
  },
  methods: {
    // 传入canvas对象、展示的文字，高度
    rotateText(canv, txt = "", cHeight = 80) {
      canv.width = "25";
      canv.height = cHeight;
      const c = canv.getContext("2d");
      c.rotate(Math.PI / 2);
      c.font = "15px Monospace";
      c.textAlign = "right";
      c.fillText(txt, cHeight, -10);
    }
  },
  mounted() {
    // 调用canvas处理顶部
    const { myArrShow } = this;
    for (let i = 0; i < myArrShow.length; i++) {
      let canvasD = this.$refs[myArrShow[i]][0];
      let canvasT = this.$refs[myArrShow[i]][1];
      this.rotateText(canvasD, myArrShow[i]);
      this.rotateText(canvasT, myArrShow[i]);
    }

    // 更新tableArr处理左边
    const { myTableArr } = this;
    this.myTableArr = myTableArr.map((value, index) => {
      const firstItem = myArrShow[index];
      return [myArrShow[index], ...value];
    });

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  padding-top: 60px;
  text-align: left;
}
.cell > .block {
  width: 25px;
  height: 25px;
  border: 2px solid black;
  border-radius: 3px;
  background-color: white;
  border-color: #b1b1b1;
}

.cell > .bg-green {
  background-color: #5bbe5b;
  border-color: #0b6c0b;
}
</style>
