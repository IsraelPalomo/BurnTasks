<template>
  <div class="home">
    <aside class="sidebar">
      <SideBar></SideBar>
    </aside>
    <header class="topbar">
      <SearchBar></SearchBar>
    </header>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SideBar from '@/components/SideBar.vue';
import SearchBar from '@/components/SearchBar.vue';

@Options({
  components: {
    SideBar,
    SearchBar,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@import '../assets/scss/colors';
.home {
  width: 100vw;
  height: 100vh;
  background-color: $bg;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'sidebar topbar topbar topbar topbar'
    'sidebar main main main main'
    'sidebar main main main main'
    'sidebar main main main main'
    'sidebar main main main main';
  padding: 1rem;
}
.sidebar {
  grid-area: sidebar;
}
.topbar {
  grid-area: topbar;
}
.main {
  grid-area: main;
}
</style>
