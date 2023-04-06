export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-971c3fc0","v-6129d94a","v-26f4361c","v-184f4da6","v-2e3eac9e"]},"/zh/":{"path":"/zh/article/","keys":["v-ae320168","v-42a120ac","v-08842095","v-0274d737","v-3450ec4c","v-7719c3dd","v-20c378fa","v-1205b4f4","v-b92dfe36","v-3f3e6852","v-0352acb8","v-3ac133b7","v-858cfdd6","v-269ae70f","v-e11bb6e2"]}},"star":{"/":{"path":"/star/","keys":["v-971c3fc0","v-6129d94a","v-26f4361c"]},"/zh/":{"path":"/zh/star/","keys":["v-ae320168","v-42a120ac","v-08842095","v-0274d737","v-3450ec4c","v-7719c3dd","v-20c378fa","v-1205b4f4","v-b92dfe36","v-3f3e6852","v-0352acb8","v-3ac133b7"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-971c3fc0","v-6129d94a","v-26f4361c"]},"/zh/":{"path":"/zh/timeline/","keys":["v-ae320168","v-42a120ac","v-08842095","v-0274d737","v-3450ec4c","v-7719c3dd","v-20c378fa","v-1205b4f4","v-b92dfe36","v-3f3e6852","v-0352acb8","v-3ac133b7"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

