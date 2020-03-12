<template>
  <layout class="home">
    <template slot="body">
      <img alt="Vue logo" src="../assets/logo.png">
      <el-button @click="testFunction">testAPi</el-button>
      <Language></Language>

      <ValidationProvider name="initScriptName" rules="required|ipAddress" v-slot="{ classes, errors }">
        <div class="valid-control" :class="classes">
          <el-input v-model.trim="initScriptName" type="text" placeholder="请输入内容" class="w-150"></el-input>
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <HelloWorld msg="bb"/>
    </template>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Layout from '@/layout/Layout.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Language from '@/components/Language.vue';
import $httpUser from '@/api/user';

@Component({
  name: 'Home', // 组件名称
  components: { // 引入的组件components
    Layout,
    HelloWorld,
    Language,
  },
})
export default class Home extends Vue {
  // data
  bb: string = 'ddddddd';
  lang: string = 'pt-BR';
  initScriptName: string = '';

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
}
</script>

<style lang="scss" scoped>
  .home{
    margin: 0 auto;
  }
</style>
