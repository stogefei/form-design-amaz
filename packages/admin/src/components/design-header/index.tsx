import { defineComponent, ref, watch } from "vue";
import Header from "../header";
import { useRouter, useRoute } from "vue-router";
const prefixCls = "amaz-design-header";

const menus = [
  {
    key: "formDesign",
    text: "表单设计",
  },
  {
    key: "flowDesign",
    text: "流程设计",
  },
];

const component = {
  name: prefixCls,
  components: {
    BHeader: Header,
  },
  props: {},
  setup(props, { slots, attrs, emit }) {
    const router: any = useRouter();
    const route: any = useRoute();
    const current: any = ref("formDesign");

    watch(
      () => route.path,
      (to) => {
        console.log(route.name, "监听到变化====");
        current.value = route.name;
      },
      { immediate: true, deep: true },
    );
    const handleSelect = (key, keyPath) => {
      const modelCode: string = route.params.modelCode;
      const appCode: any = route.params.appCode;
      router
        .push({ name: key, params: { appCode, modelCode } })
        .then(() => {
          current.value = key;
        })
        .catch(() => {});
    };

    const ItemTags = [];
    menus.forEach((menu) => {
      ItemTags.push(
        <el-menu-item
          class={`${prefixCls}__menuitem`}
          index={menu.key}
          route={{ path: menu.key }}
          key={menu.key}
        >
          {menu.text}
        </el-menu-item>,
      );
    });
    return () => {
      const MenuTag = (
        <el-menu
          defaultActive={current.value}
          mode="horizontal"
          onSelect={handleSelect}
          router={true}
        >
          {ItemTags}
        </el-menu>
      );
      return (
        <b-header
          v-slots={{
            left: () => <span>模型</span>,
            middle: () => MenuTag,
          }}
        >
          {prefixCls}
        </b-header>
      );
    };
  },
};

export default defineComponent(component);
