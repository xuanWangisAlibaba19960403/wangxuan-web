<template>
  <div>
    <div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%;">
      <div class="hidden-columns">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 100%;">
          <colgroup>
              <col name="el-table_2_column_4" v-for="(r, key) in data" :key="key">
          </colgroup>
          <tbody>
            <tr class="el-table__row" v-for="(r, key) in data" :key="key">
              <td rowspan="1" colspan="1" class="el-table_2_column_4">
                <div class="cell"> {{ r.gys }}</div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_2_column_4" v-for="(c, index) in r.children" :key="index">
                <div class="cell"> {{ c.bt }}</div>
                <input class="cell" v-model="c.score" @change="handle(c.score)"/>
              </td>
            </tr><!---->
          </tbody>
        </table><!----><!---->
      </div><!----><!----><!----><!---->
      <div class="el-table__column-resize-proxy" style="display: none;"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          gys: '供应商1',
          children: [
            {bt: '产品1得分', score: 20},
            {bt: '产品1得分', score: 20},
            {bt: '产品1得分', score: 20},
            {bt: '产品1得分', score: 20}
          ]
        }
      ]
    }
  },
  methods: {
    handle (Val) {
      console.log(Val)
    }
  },
  watch: {

  }
}
</script>

<style>

</style>
