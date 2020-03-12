<template>
  <div class="hello">
    <h1>{{ msg }}</h1>{{ $tc('validate.customDefault')}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'HelloWorld', // 组件名称
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
})
export default class HelloWorld extends Vue {
  msg: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
