<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/navigation/AppFooter.vue";
import AppHeader from "@/components/navigation/AppHeader.vue";

export default {
  name: "HomeLayout",
  components: { AppHeader, AppFooter },
};
</script>
