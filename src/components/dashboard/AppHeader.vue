<template>
  <div class="dashboard-header">
    <div
      class="d-flex justify-content-between container-fluid align-items-center"
    >
      <div></div>
      <div class="d-flex align-items-center" style="gap: 20px">
        <div role="button">
          <i class="isax isax-notification" style="font-size: 18px"></i>
        </div>
        <div>
          <span class="avatar a">A</span>
        </div>
        <div class="d-flex align-items-center" style="gap: 5px" role="button">
          <i class="isax isax-logout" style="font-size: 18px"></i>
          <span class="small">Logout</span>
        </div>
      </div>
    </div>

    <div class="user-data_header container-fluid">
      <bread-crumb />
      <div class="my-3">
        <h2 class="text-secondary">
          Welcome back <span style="font-size: 35px">John Doe 🙌</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import breadCrumb from "./breadCrumb.vue";
export default {
  components: { breadCrumb },
};
</script>
