export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Vue":{"path":"/category/vue/","keys":["v-6129d94a"]},"Guide":{"path":"/category/guide/","keys":["v-26f4361c"]}}},"/zh/":{"path":"/zh/category/","map":{"Vue":{"path":"/zh/category/vue/","keys":["v-e11bb6e2"]},"Guide":{"path":"/zh/category/guide/","keys":["v-3ac133b7"]}}}},"tag":{"/":{"path":"/tag/","map":{"Page config":{"path":"/tag/page-config/","keys":["v-6129d94a"]},"Vue":{"path":"/tag/vue/","keys":["v-6129d94a"]},"vue":{"path":"/tag/vue/","keys":["v-26f4361c"]},"Guide":{"path":"/tag/guide/","keys":["v-26f4361c"]}}},"/zh/":{"path":"/zh/tag/","map":{"Page config":{"path":"/zh/tag/page-config/","keys":["v-e11bb6e2","v-3ac133b7"]},"Vue":{"path":"/zh/tag/vue/","keys":["v-e11bb6e2"]},"Guide":{"path":"/zh/tag/guide/","keys":["v-3ac133b7"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


