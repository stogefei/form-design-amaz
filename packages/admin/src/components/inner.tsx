import { defineComponent, ref } from "vue";
import type { Dayjs } from "dayjs";
import {
  Label,
  Avatar,
  BButton,
  Combobox,
  confirm,
  DatePicker,
} from "@amaz/pc-ui";
import { Button } from "ant-design-vue";
import dayjs from "dayjs";
// import Labelt from './label';
// confirm
const prefixCls = "bb-inner";
const Inner = {
  name: prefixCls,
  components: {
    BLabel: Label,
    BAvatar: Avatar,
    BButton: BButton,
    BCombobox: Combobox,
    BDatePicker: DatePicker,
    AButton: Button,
  },
  props: {},
  setup() {
    const comboboxVisible = ref(true);
    const dateValue = ref<Dayjs>();
    // console.log(dayjs('2015/01/01', 'YYYY-MM-DD'), 'd');
    const handleClick = (e) => {
      confirm.show({
        title: "确定？",
        content: "确定要删除么",
        buttons: [],
        onOk: async () => {},
        onCancel: () => {
          console.log("取消");
        },
      });
    };
    const handleClick2 = () => {
      console.log(222);
    };
    const submit = () => {
      console.log(dateValue.value, "dateValue----");
      if (dateValue.value) {
        console.log(dayjs(dateValue.value).format("YYYY-MM-DD HH:mm:ss"));
      }
    };
    return () => {
      return (
        <div>
          <h2>label</h2>
          <b-label>姓名</b-label>
          <h2>avatar</h2>
          <b-avatar size={48} icon="user" />
          <h2>button</h2>
          <b-button onTest={handleClick2} onClick={(e) => handleClick(e)}>
            按钮
          </b-button>
          <h2>Combobox</h2>
          <b-combobox
            visible={comboboxVisible.value}
            v-slots={{
              label: () => <div>combobox</div>,
            }}
            trigger="hover"
            arrow={true}
          >
            <div class={`${prefixCls}-imagebox`}>test</div>
          </b-combobox>
          <h3>DatePicker</h3>
          <b-date-picker
            format={"YYYY-MM-DD"}
            v-model:value={dateValue.value}
          />
          <h2>提交</h2>
          <a-button onClick={(e) => submit()}>提交</a-button>
        </div>
      );
    };
  },
};

export default defineComponent(Inner);
