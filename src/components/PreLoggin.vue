<template>
<div class="s">
  <section>
    <div class="log-box">
    <login-box></login-box>
    </div>
    <div class="photoHolder">
     <img src=" http://res.cloudinary.com/dxdmd1v1z/image/upload/c_scale,e_blur_region:100,w_333/a_0/v1514365021/cover_ocosvz.jpg" alt="">
    </div>
  </section>
  </div>
</template>

<script>
import LoginBox from './LoginBox'
export default {
  name: "PostsList",
  components:{
    LoginBox
  }
};
</script>
<style>
.s {
  /* display: flex;
  flex-direction: row-reverse;
  justify-content: space-around; */
  padding: 5%;
}
.photoHolder {
  max-width: 60%;
  transform: rotate(-12deg);
  margin: 5%; 
}
.log-box {
  min-width: 350px;
}
</style>



