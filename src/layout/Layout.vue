<template>
  <div>
    <div class="page-header">头部</div>

    <div class="page-body">
      <slot name="body"></slot>
    </div>
    <slot name="body-extend"></slot>

    <div class="page-footer">底部</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Layout extends Vue {
  tip:string = '主布局文件，子路由套用即可享有布局文件的布局效果';
}
</script>

<style lang="scss" scoped>
  .page-header, .page-footer {
    height: 100px;
  }
</style>
