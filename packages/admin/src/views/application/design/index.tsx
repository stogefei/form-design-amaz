import { defineComponent } from "vue";
import "./style/index.less";
const prefixCls = "amaz-design";
const component = {
  name: prefixCls,
  props: {},
  setup(props, { slots, attrs, emit }) {
    return () => {
      return (
        <div class={prefixCls}>
          <router-view />
        </div>
      );
    };
  },
};

export default defineComponent(component);
