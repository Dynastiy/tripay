<template>
  <div class="bread-crumb">
    <div class="">
      <span
        class="breadcumb-item"
        v-for="item in breadCrumb"
        :key="item.id"
        :class="item.active ? 'active-breadcrumb' : ''"
        >{{ item.title }} {{ item.separator === null ? "" : "/" }}
      </span>
      <!-- <span> {{ breadCrumb }} </span> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    breadCrumb() {
      return this.$route.meta.breadcrumbs;
    },
  },
};
</script>
