<template>
  <div class="merchant-nav">
    <div>
      <ul>
        <li>
          <router-link to="/dashboard"
            ><span> <i class="isax isax-home-2"></i> </span
            ><span>Dashboard</span></router-link
          >
        </li>

        <li>
          <router-link to="/transactions"
            ><span> <i class="isax isax-money-4"></i> </span
            ><span>Transactions</span></router-link
          >
        </li>

        <li>
          <router-link to="/settings"
            ><span> <i class="isax isax-setting-2"></i> </span
            ><span>Settings</span></router-link
          >
        </li>

        <li>
          <span> <i class="isax isax-logout"></i> </span><span>Logout</span>
        </li>
      </ul>
    </div>
  </div>
</template>
