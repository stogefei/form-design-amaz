import { defineComponent } from "vue";
import "./style/index.less";
// import { Design } from '@amaz/form/src/design';
import { useRoute } from "vue-router";
const prefixCls = "amaz-form-design";
const component = {
  name: prefixCls,
  components: {
    // BFormDesign: Design,
  },
  data() {
    return {
      schemaCode: null,
      formCode: null,
    };
  },
  created() {
    const route = useRoute();
    this.schemaCode = route.params.modelCode;
    this.formCode = route.query.code;
    // console.log(this.schemaCode, 'this.schemaCode');
    // console.log(this.formCode, 'formCode');
  },
  render() {
    return (
      <div class={[prefixCls, "bb-main"]}>
        {/* <b-form-design schemaCode={this.schemaCode} formCode={this.formCode}/> */}
      </div>
    );
  },
};

export default defineComponent(component);
