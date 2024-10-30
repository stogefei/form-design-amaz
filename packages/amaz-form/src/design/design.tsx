import { defineComponent } from "vue";
import "./style/index.scss";
const prefixCls = "amaz-form-design";
const component = {
  name: prefixCls,
  props: {},
  setup(props, { slots, attrs, emit }) {
    return () => {
      return (
        <el-container class={prefixCls}>
          <el-aside class={prefixCls + "__aside"}>
            <el-container>
              <el-header height="40px">
                <div>组件</div>
                <div>数据项</div>
              </el-header>
              <el-main>Aside</el-main>
            </el-container>
          </el-aside>

          <el-container class={prefixCls + "__middle"}>
            <el-header height="40px">Header</el-header>
            <el-main>Main</el-main>
          </el-container>

          <el-aside class={prefixCls + "__aside"}>
            <el-container>
              <el-header height="40px">Header</el-header>
              <el-main>Aside</el-main>
            </el-container>
          </el-aside>
        </el-container>
      );
    };
  },
};

export default defineComponent(component);
