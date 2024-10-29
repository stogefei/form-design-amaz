import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from "vue-router";

const designRouter: RouteRecordRaw = {
  path: "/apps/:appCode", // 应用编码 + 模型编码
  name: "表单设计",
  components: {
    default: () => import("../views/application/wrap/index"),
  },
  meta: { title: "模型管理" },
  children: [
    {
      path: ":modelCode/model", // 应用编码 + 模型编码
      components: {
        default: () => import("../views/application/design/index"),
      },
      children: [
        {
          path: "/",
          redirect: { name: "formDesign" },
        },
        {
          path: "form",
          name: "formDesign",
          meta: {
            title: "表单设计",
          },
          component: () => import("../views/application/form/index"),
        },
        {
          path: "workflow",
          meta: { title: "流程设计" },
          name: "flowDesign",
          component: () => import("../views/application/workflow/index"),
        },
      ],
    },
  ],
};

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    components: {
      default: () => import("../views/index"),
    },
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: `登录`,
      unauthorized: true,
    },
    components: {
      default: () => import("../views/login"),
    },
  },
  designRouter,
];

// export default {
//   mode: process.env.NODE_ENV === 'development' ? 'history' : 'hash',
//   base: process.env.BASE_URL,
//   routes,
// };

const router: Router = createRouter({
  history:
    import.meta.env.MODE === "development"
      ? createWebHistory()
      : createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
