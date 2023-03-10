export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Vue":{"path":"/category/vue/","keys":["v-971c3fc0","v-6129d94a","v-26f4361c"]}}},"/zh/":{"path":"/zh/category/","map":{"javascript":{"path":"/zh/category/javascript/","keys":["v-1205b4f4"]},"PDFPreview":{"path":"/zh/category/pdfpreview/","keys":["v-1205b4f4"]},"Vue":{"path":"/zh/category/vue/","keys":["v-b92dfe36","v-e11bb6e2","v-3ac133b7"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue":{"path":"/tag/vue/","keys":["v-971c3fc0","v-6129d94a","v-26f4361c"]}}},"/zh/":{"path":"/zh/tag/","map":{"javascript":{"path":"/zh/tag/javascript/","keys":["v-1205b4f4"]},"PDFPreview":{"path":"/zh/tag/pdfpreview/","keys":["v-1205b4f4"]},"Vue":{"path":"/zh/tag/vue/","keys":["v-b92dfe36","v-e11bb6e2","v-3ac133b7"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


