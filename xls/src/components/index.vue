<template>
<div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
<div class="row">
<div class="col-xs-12">
<form class="form-inline">
<div class="form-group">
<label for="file" class="labels">
  点击上传
  <input type="file" class="form-control" id="file" :accept="SheetJSFT" @change="_change" />
</label>
</div>
</form>
</div></div>
<div class="row"><div class="col-xs-12">
<el-button type="primary" :disabled="data.length ? false : true" class="btn btn-success" @click="_export">导出excel</el-button>
</div></div>
    <div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%;">
      <div class="hidden-columns">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="el-table__header-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 100%;">
          <colgroup>
              <col name="el-table_2_column_4" v-for="(r, key) in title" :key="key">
          </colgroup>
          <thead class="has-gutter">
            <tr v-for="(r, key) in data" :key="key" v-if="key === 0">
              <th colspan="1" rowspan="1" style="text-align: center;" class="el-table_2_column_4     is-leaf" v-for="c in cols" :key="c.key" @click="handle(c.key)" contenteditable="true">
                <div class="cell">{{r[c.key]}}</div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 100%;">
          <colgroup>
              <col name="el-table_2_column_4" v-for="(r, key) in title" :key="key">
          </colgroup>
          <tbody>
            <tr class="el-table__row" v-for="(r, key) in data" :key="key" v-if="key !== 0">
              <td rowspan="1" colspan="1" class="el-table_2_column_4" v-for="c in cols" :key="c.key" @click="handle(c.key)" contenteditable="true">
                <div class="cell"> {{ r[c.key] }}</div>
              </td>
            </tr><!---->
          </tbody>
        </table><!----><!---->
      </div><!----><!----><!----><!---->
      <div class="el-table__column-resize-proxy" style="display: none;"></div>
    </div>
<div class="row"><div class="col-xs-12">
</div></div>
</div>
</template>

<script>
import XLSX from 'xlsx'
const makecols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x, i) => ({name: XLSX.utils.encode_col(i), key:i}));

const _SheetJSFT = ['xlsx', 'xlsb', 'xlsm', 'xls', 'xml', 'csv', 'txt', 'ods', 'fods', 'uos', 'sylk', 'dif', 'dbf', 'prn', 'qpw', '123', 'wb*', 'wq*', 'html', 'htm'
].map(function (x) { return '.' + x }).join(',')
export default {
  data () {
    return {
      // 表格里面的数据
      data: [''.split(''), ''.split('')],
      // 表格里面有几列
      cols: [],
      // 标题
      title: [],
      SheetJSFT: _SheetJSFT
    }
  },
  methods: {
    _suppress (evt) { evt.stopPropagation(); evt.preventDefault() },
    _drop (evt) {
      evt.stopPropagation(); evt.preventDefault()
      const files = evt.dataTransfer.files
      if (files && files[0]) this._file(files[0])
    },
    _change (evt) {
      const files = evt.target.files
      if (files && files[0]) this._file(files[0])
    },
    _export (evt) {
      /* convert state to workbook */
      const ws = XLSX.utils.aoa_to_sheet(this.data)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
      /* generate file and send to client */
      XLSX.writeFile(wb, 'sheetjs.xlsx')
      this.data = [''.split(''), ''.split('')]
    },
    _file (file) {
      /* Boilerplate to set up FileReader */
      const reader = new FileReader()
      reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result
        const wb = XLSX.read(bstr, {type: 'binary'})
        /* Get first worksheet */
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws, {header:1})
        /* Update state */
        this.data = data
        const obj = JSON.stringify(this.data)
        console.log(obj)
        console.log(JSON.parse(obj))
        this.title = data[0]
        this.cols = makecols(ws['!ref'])
      }
      reader.readAsBinaryString(file)
    },
    handle (index) {
      console.log(this.cols[index].key)
    }
  }
}
</script>
<style>
  #file {
    display: none
  }
  .labels {
    /* width: 100px; */
    font-size: 14px;
    padding: 6px 10px;
    border-radius: 5px;
    background: #409EFF;
    color: #FFF;
    border: 1px solid #409EFF;
    position: absolute;
    top: 2%;
    left: 40%;
  }
</style>
