<template>
    <div>
      <input type="file" id="file" />
      <div id="container"></div>
      <p>XLSX Excel 2007+ XML</p>
      <p id="xportxlsx" class="xport"><input type="submit" value="Export to XLSX!" @click="doit('xlsx');"></p>
    </div>
</template>

<script>
import '../../static/xlsx/shim.min.js'
import XLSX from 'xlsx'
export default {
  data () {
    return {
      msg: 1
    }
  },
  methods: {
    doit (type, fn, dl) {
      var elt = document.getElementById('data-table')
      var wb = XLSX.utils.tabletobook(elt, { sheet: 'Sheet JS' })
      return dl ? XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) : XLSX.writeFile(wb, fn || 'test.' + (type || 'xlsx'))
    },
    processwb (wb) {
      const ws = wb.Sheets[wb.SheetNames[0]]
      const htmlstring = XLSX.utils.sheettohtml(ws, {
        id: 'data-table',
        editable: true
      })
      document.getElementById('container').innerHTML = htmlstring
    },
    handleie () {
      const path = inputdomelement.value
      const data = IELoadFile(path)
      const wb = XLSX.read(data, { type: 'binary' })
      this.processwb(wb)
    },
    handlefr (e) {
      const files = e.target.files
      const f = files[0]
      var reader = new FileReader()
      var rABS = !!reader.readAsBinaryString
      const that = this
      reader.onload = (e) => {
        var data = e.target.result
        if (!rABS) data = new Uint8Array(data)
        var wb = XLSX.read(data, { type: rABS ? 'binary' : 'array' })
        that.processwb(wb)
      }
      if (rABS) reader.readAsBinaryString(f)
      else reader.readAsArrayBuffer(f)
    },
    tableau (pid, iid, fmt, ofile) {
      const that = this
      if (typeof Downloadify !== 'undefined') {
        Downloadify.create(pid, {
          swf: 'downloadify.swf',
          downloadImage: 'download.png',
          width: 100,
          height: 30,
          filename: ofile,
          data: () => {
            return that.doit(fmt, ofile, true);
          },
          transparent: false,
          append: false,
          dataType: 'base64',
          onComplete: () => {
            alert('Your File Has Been Saved!');
          },
          onCancel: () => {
            alert('You have cancelled the saving of this file.');
          },
          onError: () => {
            alert(
              'You must put something in the File Contents or there will be nothing to save!'
            )
          }
        })
      } else {
        document.getElementById(pid).innerHTML = ''
      }
    },
    init () {
      var inputdomelement = document.getElementById('file')
      var handler = typeof IELoadFile !== 'undefined' ? this.handleie : this.handlefr
      if (inputdomelement.attachEvent) {
        inputdomelement.attachEvent('onchange', handler)
      } else {
        inputdomelement.addEventListener('change', handler, false)
      }
      this.tableau('biff8btn', 'xportbiff8', 'biff8', 'test.xls')
      this.tableau('odsbtn', 'xportods', 'ods', 'test.ods')
      this.tableau('fodsbtn', 'xportfods', 'fods', 'test.fods')
      this.tableau('xlsbbtn', 'xportxlsb', 'xlsb', 'test.xlsb')
      this.tableau('xlsxbtn', 'xportxlsx', 'xlsx', 'test.xlsx')
    }
  },
  created () {
    this.init()
  }
}
</script>

<style>
.xport,
.btn {
  display: inline;
  text-align: center;
}
a {
  text-decoration: none;
}
#data-table,
#data-table th,
#data-table td {
  border: 1px solid black;
}
</style>
