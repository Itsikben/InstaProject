<template>
  <section>
    <h1>PhotoEditor {{rotateDeg % 360}} </h1>
    <div ref="editor" class="editor" v-hammer:pan="panMove" v-hammer:panend="panEnd">
        <div class="grid" v-if="isEditEnable">
            <div class="lines-x"></div>
            <div class="lines-y"></div>
        </div>
        <img ref="img"  class="editor-img" :style="styleSize" src="http://hdwarena.com/wp-content/uploads/2017/04/Beautiful-Wallpaper.jpg" alt="">
        <button class="btn resize" @click="isEditEnable = !isEditEnable"><i class="fa fa-expand" aria-hidden="true"></i></button>
        <button class="btn rotate" @click="rotate"><i class="fa fa-repeat" aria-hidden="true"></i>
</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isEditEnable: false,
      isWide: false,
      rotateDeg: 0,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      isPanMove: false
    };
  },
  methods: {
    panMove() {
      if (!this.isEditEnable) return;
      this.left += event.movementX;
      this.top += event.movementY;
      this.isPanMove = true;
    },
    panEnd() {
      if (!this.isEditEnable) return;
      this.isPanMove = false;
      let tempTop = Math.abs(this.top) + this.$refs.editor.clientHeight;
      let tempLeft = Math.abs(this.left) + this.$refs.editor.clientWidth;
      if (this.top > 0) this.top = 0;
      if (this.left > 0) this.left = 0;
      if (tempTop > this.$refs.img.clientHeight)
        this.top = -(
          this.$refs.img.clientHeight - this.$refs.editor.clientHeight
        );
      if (tempLeft > this.$refs.img.clientWidth)
        this.left = -(
          this.$refs.img.clientWidth - this.$refs.editor.clientWidth
        );
    },
    rotate() {
      this.rotateDeg += 90;
    }
  },
  computed: {
    styleSize() {
      return {
        width: this.styleWidth,
        height: this.styleHeight,
        top: this.top + "px",
        left: this.left + "px",
        transform: `rotate(${this.rotateDeg}deg)`,
        transition: this.isPanMove ? "all 0ms" : "all 0.2s ease"
      };
    },
    styleWidth() {
      return !this.isEditEnable && this.isWide && (this.rotateDeg % 360 === 0 || this.rotateDeg % 360 === 180) ? "100%" : "";
    },
    styleHeight() {
      return !this.isEditEnable && this.isWide && (this.rotateDeg % 360 === 0 || this.rotateDeg % 360 === 180) ? "" : "100%";
    }
  },
  created() {
      
  },
  mounted() {
    this.$refs.img.onload = () => {
      if (this.$refs.img.scrollWidth > this.$refs.img.scrollHeight)
        this.isWide = true;
      else this.isWide = false;
    };
  },

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
  border-color: rgba(255, 255, 255, 0.493);
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
