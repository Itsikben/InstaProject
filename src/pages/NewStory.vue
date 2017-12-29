<template>
  <section>
    <h1>PhotoEditor {{rotateDeg % 360}} </h1>
    <div class="editor">
        <div class="grid">
            <div class="lines-x"></div>
            <div class="lines-y"></div>
        </div>
        <img ref="img" class="editor-img" :style="styleSize" src="https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg" alt="">
        <button class="btn resize" @click="isFullWidth = !isFullWidth"><i class="fa fa-expand" aria-hidden="true"></i></button>
        <button class="btn rotate" @click="rotate"><i class="fa fa-repeat" aria-hidden="true"></i>
</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isFullWidth: true,
      rotateDeg: 0
    };
  },
  methods: {
    rotate() {
      this.rotateDeg += 90;
    }
  },
  computed: {
    styleSize() {
      return {
        width: this.isFullWidth ? "100%" : "auto",
        height: this.isFullWidth ? "" : "100%",
        transform: `rotate(${this.rotateDeg}deg)`
      };
    }
  },
  created() {},
  components: {}
};
</script>

<style scoped>
.editor {
  overflow: hidden;
  position: relative;
  width: 99.9vw;
  height: 99.9vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.editor-img {
  position: absolute;
  width: 0;
  transition: width 500ms, all 500ms;
}
.resize {
  position: absolute;
  left: 0%;
  bottom: 0%;
}
.rotate {
  position: absolute;
  right: 0%;
  bottom: 0%;
}
.btn {
  z-index: 2;
  outline: none;
  border: none;
  background-color: #fff;
  width: 35px;
  height: 35px;
  margin: 15px;
  border-radius: 50%;
  box-shadow: 0px 0px 4px black;
}
.grid {
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 5px dashed black;
}
.lines-y {
  position: absolute;
  left: 33%;
  width: 33%;
  height: 100%;
  border-color:rgba(255, 255, 255, 0.493);
  border-style: solid;
  border-width: 0px 1px;
}
.lines-x {
  position: absolute;
  top: 33%;
  height: 33%;
  width: 100%;
  border-color: rgba(255, 255, 255, 0.493);
  border-style: solid;
  border-width: 1px 0px;
}
</style>
