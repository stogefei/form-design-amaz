import { defineComponent, Ref, ref } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "./styles/index.less";
const prefixCls = "amaz-layout";
export default defineComponent({
  name: prefixCls,
  components: {
    ElConfigProvider,
  },
  setup() {
    return () => {
      return (
        <el-config-provider locale={zhCn}>
          <div class={prefixCls}>
            <router-view />
          </div>
        </el-config-provider>
      );
    };
  },
});
