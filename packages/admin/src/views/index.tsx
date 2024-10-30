import { defineComponent, ref } from "vue";
import { UserUtils } from "@amaz/utils";
import { useRouter } from "vue-router";
const prefixCls = "bb-home";
export default defineComponent({
  name: prefixCls,
  components: {},
  setup() {
    const router = useRouter();
    const handleLogout = async () => {};
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
      return <div>index</div>;
    };
  },
});
