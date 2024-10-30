import { defineComponent, ref } from "vue";
import "./style/index.scss";
const prefixCls = "amaz-form-design";
const tabs: any = [
  {
    name: "组件",
    key: "control",
  },
  {
    name: "数据项",
    key: "data_item",
  },
];

const component = {
  name: prefixCls,
  props: {},
  setup(props, { slots, attrs, emit }) {
    const isActive = ref("control");
    const handleClick = (key) => {
      isActive.value = key;
    };
    return () => {
      const headerTabs = tabs.map((item) => {
        return (
          <div
            onClick={() => handleClick(item.key)}
            class={[
              prefixCls + "__header-tab",
              isActive.value === item.key ? "active" : "",
            ]}
          >
            {item.name}
          </div>
        );
      });
      return (
        <el-container class={prefixCls}>
          <el-aside class={prefixCls + "__aside"}>
            <el-container>
              <el-header class={prefixCls + "__aside-header"}>
                {headerTabs}
              </el-header>
              <el-main>Aside</el-main>
            </el-container>
          </el-aside>

          <el-container class={prefixCls + "__middle"}>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
          </el-container>

          <el-aside class={prefixCls + "__aside"}>
            <el-container>
              <el-header class={prefixCls + "__aside-header"}>Header</el-header>
              <el-main>Aside</el-main>
            </el-container>
          </el-aside>
        </el-container>
      );
    };
  },
};

export default defineComponent(component);
