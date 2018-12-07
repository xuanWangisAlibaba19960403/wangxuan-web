<template>
  <div>
    A组件:
    <span>{{elementValue}}</span>
    <input type="button" value="点击触发" @click="elementByValue">
  </div>
</template>
<script>
// 引入公共的bug，来做为中间传达的工具
import Bus from '@/api/eventBus.js'
export default {
  data () {
    return {
      elementValue: 4
    }
  },
  methods: {
    elementByValue () {
      Bus.$emit('val', this.elementValue++)
    }
  },
  watch: {
    elementValue (oldValue, NewValue) {
      console.log(oldValue, NewValue)
    }
  }
}
</script>

<style>

</style>
