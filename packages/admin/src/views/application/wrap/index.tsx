import { defineComponent } from "vue";
import DesignHeader from "../../../components/design-header";
import "../style/wrap.less";
const prefixCls = "amaz-wrap";
const component = {
  name: prefixCls,
  components: {
    BDesignHeader: DesignHeader,
  },
  props: {},
  setup(props, { slots, attrs, emit }) {
    const RouterViewTag = [];
    RouterViewTag.push(<b-design-header />);
    RouterViewTag.push(<router-view />);
    return () => {
      return (
        <div class={prefixCls}>
          <div class={`${prefixCls}__right`}>{RouterViewTag}</div>
        </div>
      );
    };
  },
};

export default defineComponent(component);
