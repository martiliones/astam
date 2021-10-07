<template>
  <canvas ref="canvas">

  </canvas>
</template>

<style lang="scss" scoped>
canvas {
  max-width: 100%;
}
</style>

<script>
export default {
  name: 'levelOne',
  methods: {
    func(){
      const points = [
        0, 0, 0, 0, 10, 5, 10, 15, 15, 10, 20, 25, 30, 40, 35, 45, 50, 50, 50, 60, 70, 66, 90, 85, 100,
      ].map((el, index) => [index * 20, 100 - el * 2]);

      const cvn = this.$refs.canvas;
      const ctx = cvn.getContext("2d");
      ctx.setLineDash([20, 20]);
      ctx.beginPath();
      ctx.strokeStyle = '#ffffff8a';
      ctx.lineDashOffset = 4;
      ctx.lineWidth = 2;
      ctx.moveTo(0, 25);
      ctx.lineTo(300, 25);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.setLineDash([0, 0]);
      ctx.lineWidth = 2;

      ctx.moveTo(points[0][0], points[0][1]);

      for (let i = 1; i < points.length - 2; i ++) {
        var xc = (points[i][0] + points[i + 1][0]) / 2;
        var yc = (points[i][1] + points[i + 1][1]) / 2;
        ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
      }
      // curve through the last two points
      ctx.quadraticCurveTo(points[points.length - 2][0], points[points.length - 2][1], points[points.length - 1][0],points[points.length - 1][1]);
      ctx.stroke();
      console.log(ctx);
    }
  },
  mounted(){
    this.func();
  }
}
</script>
