Vue.component('castle', {
  template: `<div class="castle" :class="'player-' + index">
    <img class="building" :src="'svg/castle' + index + '.svg'" />
    <img class="ground" :src="'svg/ground' + index + '.svg'" />
    <castle-banners :player="player" />
  </div>`,
  props: ['player', 'index'],
})

Vue.component('castle-banners', {
  template: `<div class="banners">
    <!-- 食物点数 -->
    <img class="food-icon" scr="svg/food-icon.svg" />
    <bubble type="food" :value="player.food" :ratio="foodRatio" />
    <banner-bar class="food-bar" color="#288339" :ratio="foodRatio"/>
    <!-- 旗帜栏 -->

    <!-- 生命栏 -->
    <img class="health-icon" src="svg/health-icon.svg" />
    <bubble type="health" :value="player.health" :ratio="healthRatio" />
    <banner-bar class="health-bar" color="#9b2e2e" :ratio="healthRatio"/>
    <!-- 旗帜栏 -->    
  </div>`,
  props: ['player'],
  computed: {
    foodRatio() {
      return this.player.food / maxFood;
    },
    healthRatio() {
      return this.player.health / maxHealth;
    }
  }
})

Vue.component('bubble', {
  template: `<div class="stat-bubble" :class="type + '-bubble'"
    :style="bubbleStyle">
    <img :src="'svg/' + type + '-bubble.svg'" />
    <div class="counter">{{ value }}</div>
  </div>`,
  props: ['type', 'value', 'radio'],
  computed: {
    bubbleStyle() {
      return {
        top: (this.ratio * 220 + 40) * state.worldRatio + 'px',
      }
    }
  },
})

Vue.component('banner-bar', {
  template: '#banner',
  props: ['color', 'ratio'],
  data() {
    return {
      height: 0,
    };
  },
  computed: {
    targetHeight() {
      return 220 * this.ratio + 40;
    }
  },
  watch: {
    targetHeight(newVal, oldVal) {
      const vm = this;
      new TWEEN.Tween({ value: oldVal })
        .easing(TWEEN.EAsing.Cubic.InOut)
        .to({ value: newVal }, 500)
        .onUpdate(function() {
          vm.height = this.value.toFixed(0)
        })
        .start();
    }
  },
  created() {
    this.height = this.targetHeight;
  },
})

const cloudAnimationDurations = {
  min: 10000, // 10秒
  max: 50000, // 50秒
}

Vue.component('cloud', {
  template: `<div class="cloud" :class="'cloud' + type" :style="style">
    <img :src="'svg/cloud' + type + '.svg'" @load="initPosition" />
  </div>`,
  props: ['type'],
  data() {
    return {
      style: {
        transform: 'none',
        zIndex: 0,
      }
    }
  },
  methods: {
    setPosition(left, top) {
      // 使用transform可以获得更好的性能
      this.style.transform = `translate(${left}px, ${top}px)`;
    },
    initPosition() {
      const width = this.$el.clientWidth;
      this.setPosition(-width, 0);
    },
    startAnimation(delay = 0) {
      const vm = this;
      // 元素宽度
      const width = this.$el.clientWidth;
      // 随机动画持续时间
      const { min, max } = cloudAnimationDurations;
      const animationDuration = Math.random() * (max - min) + min;
      // 将速度快的云放到最前面
      this.style.zIndex = Math.random(max - animationDuration);
      // 动画在这里
      // 随机位置
      const top = Math.random() * (window.innerHeight * 0.3);

      new TWEEN.Tween({ value: -width })
        .to({ value: window.innerWidth }, animationDuration)
        .delay(delay)
        .onUpdate(function() {
          vm.setPosition(this.value, top);
        })
        .onComplete(() => {
          vm.startAnimation(Math.random() * 10000);
        })
        .start();
    },
  },
  mounted() {
    // 以负值延迟开始动画
    // 所以动画将从中途开始
    this.startAnimation(-Math.random() * cloudAnimationDurations.min);
  },
})
