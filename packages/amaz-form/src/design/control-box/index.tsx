import { defineComponent } from "vue";

const prefixCls = "amaz-form-design-control-box";
const component = {
  name: prefixCls,
  props: {},
  setup(props, { slots, attrs, emit }) {
    return () => {
      return <h3>{prefixCls}</h3>;
    };
  },
};

export default defineComponent(component);
