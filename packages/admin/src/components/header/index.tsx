import { defineComponent } from "vue";
import { ElDropdown, ElMenu, ElAvatar } from "element-plus";
import "./style/index.less";
import { useRouter } from "vue-router";
const prefixCls = "amaz-header";
const component = {
  name: prefixCls,
  components: {
    ADropdown: ElDropdown,
    AMenu: ElMenu,
    AMenuItem: ElMenu.Item,
    AMenuDivider: ElMenu.Divider,
    AAvatar: ElAvatar,
  },
  props: {},
  data() {
    return {
      user: {},
      router: null,
    };
  },
  methods: {
    handleClick() {},
  },
  created() {
    this.router = useRouter();
  },
  render() {
    let LeftTag;
    if (this.$slots.left?.()) {
      LeftTag = this.$slots.left();
    }
    let MiddleTag;
    if (this.$slots.middle?.()) {
      MiddleTag = this.$slots.middle();
    }
    let RightTag;
    if (this.$slots.right?.()) {
      RightTag = this.$slots.right();
    }
    return (
      <div class={prefixCls}>
        <div class={[`${prefixCls}__left`, "left"]}>{LeftTag}</div>
        <div class={[`${prefixCls}__middle`, "middle"]}>{MiddleTag}</div>
        <div class={[`${prefixCls}__right`, "right"]}>
          {RightTag}
          <a-dropdown
            class={`${prefixCls}-lang`}
            placement="bottomRight"
          ></a-dropdown>
          <a-dropdown
            class={`${prefixCls}-manage`}
            destroyPopupOnHide={true}
            trigger={["click"]}
            v-slots={{
              overlay: () => (
                <a-menu onClick={this.handleClick}>
                  <a-menu-item key="user" disabled={true}>
                    <span class={prefixCls + "__text"}>test</span>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="logout">
                    <span>
                      <span class={prefixCls + "__text"}>退出系统</span>
                    </span>
                  </a-menu-item>
                </a-menu>
              ),
            }}
          >
            <label class={[`${prefixCls}__user-info`, "bb-user-info"]}>
              <a-avatar
                v-slots={{
                  icon: () => <user-outlined />,
                }}
                style="background-color: #f56a00"
                src={this.img}
                size={32}
              />
            </label>
          </a-dropdown>
        </div>
      </div>
    );
  },
};

export default defineComponent(component);
