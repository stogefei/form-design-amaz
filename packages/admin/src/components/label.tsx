import { defineComponent } from "vue";
const prefixCls = "bb-label";
const BBLabel = {
  name: prefixCls,
  props: {
    require: { default: false, Boolean },
  },
  setup(props, { slots, attrs, emit }) {
    const require = attrs.require || props.require;
    const labelProps = {
      class: {
        [prefixCls]: true,
      },
      ...props,
    };
    return () => {
      return (
        <label {...labelProps}>
          {require ? <span class={`${prefixCls}__require`}>*</span> : undefined}
          <span>{slots.default()}</span>
        </label>
      );
    };
  },
};

export default defineComponent(BBLabel);
