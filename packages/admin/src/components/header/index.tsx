import { defineComponent } from "vue";
import "./style/index.less";
import { ArrowDown } from "@element-plus/icons-vue";
const prefixCls = "amaz-header";
const component = {
  name: prefixCls,
  components: {
    ArrowDown,
  },
  render() {
    const slot = (
      <el-dropdown-menu>
        <el-dropdown-item onClick={() => this.$router.push("/login")}>
          退出系统
        </el-dropdown-item>
      </el-dropdown-menu>
    );
    return (
      <div class={prefixCls}>
        <div class={[`${prefixCls}__left`, "left"]}>{this.$slots.left?.()}</div>
        <div class={[`${prefixCls}__middle`, "middle"]}>
          {this.$slots.middle?.()}
        </div>
        <div class={[`${prefixCls}__right`, "right"]}>
          {this.$slots.right?.()}
          <el-dropdown
            v-slots={{
              dropdown: () => slot,
            }}
          >
            <el-avatar style="background-color: #f56a00" size={32} />
          </el-dropdown>
        </div>
      </div>
    );
  },
};

export default defineComponent(component);
