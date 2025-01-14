import { RouteRecordRaw } from "vue-router";
import CdHome from "@/components/home/cd.home.vue";
import CdSearchResults from "@/components/search-results/cd.search-results.vue";
import CdSubmissions from "@/components/submissions/cd.submissions.vue";
import CdFooter from "@/components/base/cd.footer.vue";
import CdContribute from "@/components/contribute/cd.contribute.vue";
import AuthRedirect from "@/components/account/auth-redirect.vue";
import CdRegisterDataset from "@/components/register/cd.register-dataset.vue";
import { hasLoggedInGuard } from "./guards";
import CdDataset from "./components/dataset/cd.dataset.vue";

export const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    components: {
      content: CdHome,
      footer: CdFooter,
    },
  },
  {
    name: "search",
    path: "/search",
    components: {
      content: CdSearchResults,
      footer: CdFooter,
    },
    meta: {
      title: "Search",
    },
  },
  {
    name: "contribute",
    path: "/contribute",
    components: {
      content: CdContribute,
      footer: CdFooter,
    },
    meta: {
      title: "Contribute",
      flat: true,
    },
    beforeEnter: [hasLoggedInGuard],
  },
  {
    name: "register",
    path: "/register",
    components: {
      content: CdRegisterDataset,
      footer: CdFooter,
    },
    meta: {
      title: "Register Dataset",
      hasLoggedInGuard: true,
    },
    beforeEnter: [hasLoggedInGuard],
  },
  {
    name: "submissions",
    path: "/submissions",
    components: {
      content: CdSubmissions,
      footer: CdFooter,
    },
    meta: {
      title: "My Submissions",
      hasLoggedInGuard: true,
    },
    beforeEnter: [hasLoggedInGuard],
  },
  {
    name: "dataset",
    path: "/dataset/:id",
    components: { content: CdDataset, footer: CdFooter },
    meta: {
      title: "Dataset",
      flat: true,
    },
  },
  {
    name: "dataset-edit",
    path: "/dataset/:id/edit",
    components: { content: CdContribute, footer: CdFooter },
    meta: {
      title: "Edit Dataset",
      flat: true,
      hasLoggedInGuard: true,
    },
    beforeEnter: [hasLoggedInGuard],
  },
  {
    name: "auth-redirect",
    path: "/auth-redirect",
    components: {
      content: AuthRedirect,
    },
    meta: {
      hideNavigation: true,
    },
  },
  /** @see https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes */
  { path: "/:pathMatch(.*)*", name: "not-found", redirect: { name: "home" } },
  {
    path: "/:pathMatch(.*)",
    name: "bad-not-found",
    redirect: { name: "home" },
  },
];
