import { defineComponent, ref } from "vue";
import {
  Menu,
  Layout,
  LayoutHeader,
  LayoutContent,
  Dropdown,
  Row,
  Col,
  message,
} from "element-plus";
import Inner from "../components/inner";
import { UserUtils } from "@amaz/utils";
import { useRouter } from "vue-router";
const prefixCls = "bb-home";
export default defineComponent({
  name: prefixCls,
  components: {
    AMenu: Menu,
    AMenuDivider: Menu.Divider,
    AMenuItem: Menu.Item,
    ALayout: Layout,
    ALayoutHeader: LayoutHeader,
    ALayoutContent: LayoutContent,
    ADropdown: Dropdown,
    ARow: Row,
    ACol: Col,
    BInner: Inner,
  },
  setup() {
    const router = useRouter();
    const handleLogout = async () => {
      const url = "/auth/logout";
      const res: any = await API.request(url, "DELETE");
      if (res.code === ResponseCode.SUCCESS) {
        UserUtils.removeToken();
        message.success("退出成功", 1, () => {
          router.replace({ name: "login" });
        });
      }
    };
    const handleClick = async ({ item, key, keyPath }: any) => {
      console.log(key);
      switch (key) {
        case "logOut":
          handleLogout();
          break;
      }
    };
    const getPopupContainer = (node: any) => {
      if (node && node.parentNode) {
        return node.parentNode;
      }
      return node;
    };
    const selectedKeys = ref<string[]>(["1"]);
    return () => {
      const overlay = (
        <a-menu onClick={handleClick}>
          <a-menu-item key="update">
            <a href="javascript:void (0);">修改密码</a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="logOut">
            <a href="javascript:void (0);">退出系统</a>
          </a-menu-item>
        </a-menu>
      );
      return (
        <div>
          <a-layout class="layout">
            <a-layout-header>
              <a-row>
                <a-col span="2">
                  <div class="logo" />
                </a-col>
                <a-col span="20">
                  <a-menu
                    v-model:selectedKeys={selectedKeys.value}
                    theme="dark"
                    mode="horizontal"
                  >
                    <a-menu-item key="1">表单 1</a-menu-item>
                    <a-menu-item key="2">表单 2</a-menu-item>
                    <a-menu-item key="3">表单 3</a-menu-item>
                  </a-menu>
                </a-col>
                <a-col span="2">
                  <a-dropdown
                    trigger="['click']"
                    getPopupContainer={getPopupContainer}
                    overlay={overlay}
                  >
                    <a class="ant-dropdown-link">退出登录</a>
                  </a-dropdown>
                </a-col>
              </a-row>
            </a-layout-header>
            <a-layout-content style="padding: 0 50px">
              <b-inner />
            </a-layout-content>
          </a-layout>
        </div>
      );
    };
  },
});
