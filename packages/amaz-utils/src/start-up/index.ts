import {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";
import UserUtils from "../user";

interface ISettingsParams {
  /**
   * 消息组件
   */
  message: any;
  /**
   * route配置
   */

  router: Router;

  /**
   * 自定义路由规则
   */
  cusRouteRule?: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => Promise<boolean>;
}
/**
 * 启动设置
 */
async function settings({
  message: any,
  router,
  cusRouteRule,
}: ISettingsParams) {
  const process = import.meta.env;
  if (process.MODE === "development") {
    // 开发模式默认打开dubug console
    (window as any).__BB_DEBUG__ = true;
  }
  routerHandler(router, cusRouteRule);
}
function routerHandler(router: Router, handle?: Function) {
  router.beforeEach(
    async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext,
    ) => {
      let title: any = "";
      if (to.meta && to.meta.title) {
        title = to.meta.title;
      }
      document.title = title;
      if (handle) {
        const res = await handle({ to, from, next });
        if (res === false) {
          return;
        }
      }
      /**
       * 是否不需要授权登录的用户
       */
      if (to.meta?.unauthorized) {
        next();
      } else {
        const token = UserUtils.getToken();
        if (!token) {
          if (to.name !== "login") {
            next({ name: "login" });
          }
        } else {
          next();
        }
      }
    },
  );
  return router;
}
export { routerHandler, settings, ISettingsParams };
export default {
  routerHandler,
  settings,
};
