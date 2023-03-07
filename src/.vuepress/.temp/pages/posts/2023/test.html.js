export const data = JSON.parse("{\"key\":\"v-1b9490ac\",\"path\":\"/posts/2023/test.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-03-06T00:00:00.000Z\",\"category\":[\"test\"],\"tag\":[\"大\",\"中\",\"小\"],\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"posts/2023/test.md\",\"localizedDate\":\"March 6, 2022\",\"excerpt\":\"\",\"autoDesc\":true}")

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
