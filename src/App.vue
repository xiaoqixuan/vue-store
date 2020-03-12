<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="store-body"></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  name: 'app',
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import 'scss/common.scss';

#app {
  font-family: $fontStyle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
