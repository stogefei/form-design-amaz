import { defineComponent } from "vue";
import "./style/index.less";
import { Design } from "@amaz/form/src/design";
const prefixCls = "amaz-design";
const component = {
  name: prefixCls,
  components: {
    FormDesign: Design,
  },
  setup(props, { slots, attrs, emit }) {
    return () => {
      return <form-design />;
    };
  },
};

export default defineComponent(component);
