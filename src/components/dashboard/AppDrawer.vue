<template>
  <div class="app-drawer">
    <div class="text-center brand-name">
      <span class=""> TriPay </span>
    </div>

    <!-- If Logged in User is Merchant -->
    <MerchantNav />

    <!-- If Logged in user is developer -->
  </div>
</template>

<script>
import MerchantNav from "./navs/merchantNav.vue";
export default {
  components: {
    MerchantNav,
  },
};
</script>
