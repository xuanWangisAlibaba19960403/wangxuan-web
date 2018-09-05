<template>
  <div>
    子组件:
    <span>{{inputName}}</span>
    <input type="text" v-model="data" @change="handle">
  </div>
</template>

<script>
export default {
  // 接受父组件的值
  props: {
    inputName: String,
    required: true
  },
  data () {
    return {
      data: '',
      text: 'success'
    }
  },
  methods: {
    handle () {
      this.$emit('vs', this.text)
    }
  }
}
</script>

<style>
</style>
