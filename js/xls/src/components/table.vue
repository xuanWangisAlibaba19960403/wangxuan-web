<template>
  <div>
    <div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%;">
      <div class="hidden-columns">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="el-table__header-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 100%;">
          <colgroup>
              <col name="el-table_2_column_4" v-for="(r, key) in data" :key="key">
          </colgroup>
          <thead class="has-gutter">
            <tr>
              <th colspan="1" rowspan="1" v-for="(r, key) in data" :key="key" style="text-align: center;" class="el-table_2_column_4     is-leaf">
                <div class="cell">{{r}}</div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 100%;">
          <colgroup>
              <col name="el-table_2_column_4" v-for="(r, key) in data" :key="key">
          </colgroup>
          <tbody>
            <tr class="el-table__row" v-for="(r, key) in singleTable.itemdocs" :key="key">
              <td rowspan="1" colspan="1" class="el-table_2_column_4" v-for="c in r" :key="c.key">
                <div class="cell"> {{ c }}</div>
              </td>
            </tr><!---->
            <tr class="el-table__row">
              <td rowspan="1" colspan="1" class="el-table_2_column_4">
                <div class="cell">合计</div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_2_column_4" v-for="(r, key) in singleTable.totaldocs" :key="key">
                <div class="cell"> {{ r }}</div>
              </td>
            </tr>
            <tr class="el-table__row">
              <td rowspan="1" colspan="1" class="el-table_2_column_4">
                <div class="cell">平均</div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_2_column_4" v-for="(r, key) in singleTable.avgdocs" :key="key">
                <div class="cell"> {{ r }}</div>
              </td>
            </tr>
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
      // 标题
      data: ['日期', '页面浏览人数', '页面浏览次数', '下载按钮点击人数', '下载按钮点击次数', '更多按钮点击人数', '更多按钮点击次数'],
      singleTable: {
        itemdocs: [
          {
            itemname: 1535990400000,
            t1personcount: 2,
            t1reccount: 13,
            t2personcount: 2,
            t2reccount: 7,
            t3personcount: 2,
            t3reccount: 6
          },
          {
            itemname: 1536076800000,
            t1personcount: 0,
            t1reccount: 0,
            t2personcount: 0,
            t2reccount: 0,
            t3personcount: 0,
            t3reccount: 0
          }
        ],
        totaldocs: {
          t1personcount: 2,
          t1reccount: 13,
          t2personcount: 2,
          t2reccount: 7,
          t3personcount: 2,
          t3reccount: 6
        },
        avgdocs: {
          t1personcount: 1,
          t1reccount: 6.5,
          t2personcount: 1,
          t2reccount: 3.5,
          t3personcount: 1,
          t3reccount: 3
        }
      }
    }
  }
}
</script>

<style>

</style>
