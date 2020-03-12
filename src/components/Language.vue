<template>
  <Dropdown trigger="click" :options="options" @changeVal="changeLanguage">
    <div slot="link">
      <span class="el-dropdown-link">
        {{ $tc('locales.language')}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    </div>
    <!-- <div slot="menu">
      <el-dropdown-item
        v-for="lang in options"
        :key="lang.value" :command="lang.value" :class="{ 'checked': lang.value === lang }">{{ lang.label }}</el-dropdown-item>
    </div> -->
  </Dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import Cookie from 'js-cookie';
import Component from 'vue-class-component';
import { LANGUAGE_LIST } from '@/constants';
import Dropdown from '@/components/Dropdown.vue';

@Component({
  name: 'Language', // 组件名称
  components: { // 引入的组件components
    Dropdown,
  },
})
export default class Language extends Vue {
  get lang(): string {
    return this.$store.state.lang;
  }

  set lang(lang: string) {
    this.lang = lang;
  }

  get options(): Array<any> {
    return LANGUAGE_LIST;
  }

  changeLanguage(lang: string) {
    if (this.lang === lang) {
      return;
    }

    this.lang = lang;
    Cookie.set('lang', lang);
    location.reload();
  }
}
</script>

<style lang="scss" scope>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
