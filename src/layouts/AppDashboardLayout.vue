<template>
  <div>
    <AppDrawer />

    <div class="main-dashboard">
      <app-header />
      <slot />
    </div>
  </div>
</template>

<script>
import AppDrawer from "@/components/dashboard/AppDrawer.vue";
import AppHeader from "@/components/dashboard/AppHeader.vue";
export default {
  components: { AppHeader, AppDrawer },
  name: "DashboardLayout",
};
</script>
