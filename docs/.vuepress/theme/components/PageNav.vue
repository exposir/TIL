<template>
  <div>
    <PageNavOrigin :sidebarItems="sidebarItems" />
  </div>
</template>
<script>
import PageNavOrigin from "@vuepress/theme-default/components/PageNav.vue";

export default {
  name: "PageNav",
  props: ["sidebarItems"],
  components: {
    PageNavOrigin,
  },
};
</script>
