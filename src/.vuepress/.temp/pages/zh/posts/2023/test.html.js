export const data = JSON.parse("{\"key\":\"v-42c4855b\",\"path\":\"/zh/posts/2023/test.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-03-06T00:00:00.000Z\",\"category\":[\"test\"],\"tag\":[\"大\",\"中\",\"小\"],\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"zh/posts/2023/test.md\",\"localizedDate\":\"2022年3月6日\",\"excerpt\":\"\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
