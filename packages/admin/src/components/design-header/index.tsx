import { defineComponent, ref, watch } from "vue";
import Header from "../header";
import {
  useRouter,
  useRoute,
  onBeforeRouteUpdate,
  RouteLocationNormalized,
} from "vue-router";
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
    watch(
      () => route.path,
      (to) => {
        console.log(route.name, "监听到变化");
      },
    );
    const current: any = ref(["formDesign"]);
    onBeforeRouteUpdate((to: RouteLocationNormalized) => {
      console.log(to, "=====");
      current.value = [to.name];
    });
    const handleSelect = ({ item, key, selectedKeys }: any) => {
      const modelCode: string = route.params.modelCode;
      const appCode: any = route.params.appCode;
      router
        .push({ name: key, params: { appCode, modelCode } })
        .then(() => {})
        .catch(() => {});
    };
    const ItemTags = [];
    menus.forEach((menu) => {
      ItemTags.push(
        <el-menu-item class={`${prefixCls}__menuitem`} key={menu.key}>
          {menu.text}
        </el-menu-item>,
      );
    });
    return () => {
      const MenuTag = (
        <el-menu
          v-model={current.value}
          mode="horizontal"
          onSelect={handleSelect}
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
