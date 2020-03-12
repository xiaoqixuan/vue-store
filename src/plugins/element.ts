import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Message,
  Button,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'element-ui';

Vue.use(Button);
Vue.use(Input);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.prototype.$message = Message;
