<template>
  <div class="home">
    <SideBar></SideBar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SideBar from '@/components/SideBar.vue';

@Options({
  components: {
    SideBar,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@import '../assets/scss/colours';
.home {
  width: 100vw;
  height: 100vh;
  background-color: $bg;
  box-sizing: content-box;
  display: flex;
  align-items: center;
}
</style>
