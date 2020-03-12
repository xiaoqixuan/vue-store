<template>
  <el-dropdown :trigger="trigger || 'hover'" @command="handleCommand">
    <slot name="link"></slot>
    <el-dropdown-menu slot="dropdown">
      <!-- <slot name="menu"></slot> -->
      <el-dropdown-item
        v-for="lang in options"
        :key="lang.value"
        :command="lang.value"
        :class="{ 'checked': lang.value === current }">
        {{ lang.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Dropdown', // 组件名称
  props: {
    trigger: {
      type: String,
      default: '',
    },
    current: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
})
export default class Dropdown extends Vue {
  handleCommand(command) {
    this.$emit('changeVal', command);
  }
}
</script>

<style lang="scss" scope>
  .el-dropdown-menu {
    .checked {
      background-color: #66b1ff;
      color: #ecf5ff;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
