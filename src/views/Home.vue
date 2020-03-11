<template>
  <div class="home">
    <img alt="Vue logo" @click="testFunction" src="../assets/logo.png">
    <el-button @click="changeLanguage"> {{ $tc('confirm.save') }}</el-button>
    <HelloWorld msg="bb"/>
  </div>
</template>

<script lang="ts">
import Cookie from 'js-cookie';
import Vue from 'vue';
import Component from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import $httpUser from '@/api/user';

@Component({
  name: 'Home', // 组件名称
  components: { // 引入的组件components
    HelloWorld,
  },
})
export default class Home extends Vue {
  // data
  bb: string = 'ddddddd';
  lang: string = 'ja-JP';

  get username() {
    return this.$store.state.user.username;
  }

  // methods
  testFunction() {
    console.log(this.bb);
    $httpUser.hasApproachKey()
      .then(({ data }) => {
        alert(`++++${data}++++`);
      })
      .catch((response = {}) => {
        alert(`===========${response}===============`);
      });
  }

  changeLanguage() {
    Cookie.set('lang', 'ko-KR');
    location.reload();
  }
}
</script>

<style lang="scss" scoped>
  .home{
    margin: 0 auto;
  }
</style>
