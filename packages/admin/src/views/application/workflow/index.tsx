import { defineComponent } from "vue";
const prefixCls = "amaz-workflow-design";
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
