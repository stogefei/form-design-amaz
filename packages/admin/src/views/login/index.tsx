import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElButton, ElInput, ElFormItem, ElDivider, ElForm } from "element-plus";
import { UserUtils } from "@amaz/utils";
import "./styles/index.less";
const prefixCls = "amaz-login";
interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  name: prefixCls,
  components: {
    ElForm: ElForm,
    ElButton: ElButton,
    ElFormItem: ElFormItem,
    ElDivider: ElDivider,
    ElInput: ElInput,
  },
  setup: function () {
    const router = useRouter();
    const formRef = ref<any>();
    const loading = ref(false);
    const formState = reactive<FormState>({
      username: "zaf1",
      password: "12345678",
    });
    const handleLogin = async () => {
      UserUtils.setToken("test");
      const path = "apps/zaf/MET57OX3/model/form?code=MET57OX3";
      router.replace({ path });
    };
    const login = async (name: string, pwd: string) => {};
    const formProps = {
      labelWidth: "auto",
      model: formState,
      name: "dynamic_rule",
      ref: formRef,
    };
    return () => {
      // 账户登录
      const AccountLoginTag = (
        <div class={prefixCls + "__wrapper"}>
          <div class={prefixCls + "__box"}>
            <h3 class={`${prefixCls}__header`}>账号登录</h3>
            <el-divider />
            <el-form {...formProps}>
              <el-form-item
                label="用户名"
                name="username"
                rules={[{ required: true, message: "请输入账号!" }]}
              >
                <el-input
                  v-model={formState.username}
                  autocomplete="off"
                  clearable
                  placeholder="请输入密码"
                />
              </el-form-item>

              <el-form-item
                label="密码"
                name="password"
                rules={[{ required: true, message: "请输入密码!" }]}
              >
                <el-input
                  class={`${prefixCls}__pwd`}
                  type="password"
                  clearable
                  v-model={formState.password}
                  autocomplete="off"
                  placeholder="请输入密码"
                />
              </el-form-item>

              <el-form-item>
                <el-button
                  class={`${prefixCls}__btn`}
                  size="large"
                  block
                  type="primary"
                  onClick={handleLogin}
                  loading={loading.value}
                >
                  登录
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      );
      return <div class={prefixCls}>{AccountLoginTag}</div>;
    };
  },
});
