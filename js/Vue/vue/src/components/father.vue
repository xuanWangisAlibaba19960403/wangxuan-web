<template>
  <div>
    父组件:
    <input type="text" v-model="name">
    <br>
    <br>
    <!-- 引入子组件 -->
    <child :inputName="name" @vs="vs"></child>
    <br>
    <br>
    <button :title="text">接收数据</button>
  </div>
</template>

<script>
import child from './child'
export default {
  components: {
    child
  },
  data () {
    return {
      name: 'father',
      text: ''
    }
  },
  methods: {
    vs (data) {
      console.log(data)
      this.text = data
    },
    animate (element, attr, target, fn) {
      // 清除上一次的定时器
      clearInterval(element.timerId)
      // 开启定时器 让元素开始运动
      element.timerId = setInterval(function () {
        // 元素的当前值
        let current = parseInt(getComputedStyle(element)[attr])
        // getComputedStyle(element)[attr] =>  100px
        // parseInt(100px)  => 100
        // 计算运动速度
        let speed = 0
        // 如果当前值 小于 目标点 向上取整
        if (current < target) {
          speed = Math.ceil((target - current) / 10)
        } else {
          // 如果当前值 大于目标点  向下取整
          speed = Math.floor((target - current) / 10)
        }
        // 如果当前值等于目标点
        if (current === target) {
          // 清除定时器 让运动停止
          clearInterval(element.timerId)
          // 如果传递了fn函数 就调用
          if (fn) {
            fn()
          }
        } else {
          // 元素朝着目标点进行运动
          element.style[attr] = current + speed + 'px'
        }
      }, 30)
    }
  },
  computed: {
    reserveText () {
      return this.text + 'computed'
    }
  }
}
</script>

<style>
</style>
