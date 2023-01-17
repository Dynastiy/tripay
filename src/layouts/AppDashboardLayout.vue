<template>
  <div>
    <app-header />
    <slot />
  </div>
</template>

<script>
import AppHeader from "@/components/dashboard/AppHeader.vue";
export default {
  components: { AppHeader },
  name: "DashboardLayout",
};
</script>
