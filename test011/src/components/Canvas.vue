<template>
  <canvas id="canvas"></canvas>
</template>

<script>
export default {
  data () {
    return {
      width: 0,
      height: 0,
      context: null,
      posX: 0,
      posY: 0,
      flg: false
    }
  },
  methods: {
    init () {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.$el.width = this.width
      this.$el.height = this.height
      this.context = this.$el.getContext('2d')
    },
    fill () {
      const ctx = this.context
      this.posX = this.$el.width / 2
      this.posY = this.$el.height / 2
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, this.posX, this.posY)
    },
    count () {
      if(!this.flg && (this.posX < this.width)) {
        this.posX++
        this.posY++
      } else if(!this.flg && (this.posX >= this.width)) {
        this.flg = true
        this.context.clearRect(0, 0, this.posX, this.posY)
      } else if(this.flg && (this.posX > 0)) {
        --this.posX
        --this.posY
      } else if(this.flg && (this.posX <= 0)) {
        this.flg = false
        this.context.clearRect(0, 0, this.posX, this.posY)
      }
    },
    render () {
      this.count()
      this.context.fillRect(0, 0, this.posX, this.posY)
      window.requestAnimationFrame(this.render)
    }
  },
  mounted () {
    this.init()
    this.fill()
    this.render()
  }
}
</script>

<style scoped lang="scss">
#canvas {
  background: #000;
}
</style>
