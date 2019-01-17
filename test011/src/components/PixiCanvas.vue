<template>
  <canvas id="canvas"></canvas>
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
  data () {
    return {
      renderer: null,
      stage: null,
      
    }
  },
  methods: {
    init () {
    },
    fill () {
    },
    count () {
    },
    render () {
      window.requestAnimationFrame(this.render)
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
#canvas {
  background: #000;
}
</style>
