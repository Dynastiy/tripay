<template>
  <div class="auth-container">
    <div class="auth-content">
      <div class="text-center">
        <span class="brand-name"> TriPay </span>
      </div>

      <div class="my-4 text-center">
        <h4 class="font-weight-bold">Login</h4>
        <small class="text-secondary">Enter correct details to login</small>
      </div>

      <form action="" @submit.prevent="">
        <div class="mb-3">
          <input type="email" placeholder="johndoe@gmail.com" />
        </div>

        <div class="mb-4">
          <input type="password" placeholder="johndoe@gmail.com" />
        </div>

        <div class="mb-2">
          <input type="submit" class="btn--primary" value="Login" />
        </div>

        <div class="text-center">
          <small class="text-secondary"
            >Not registered?
            <router-link to="/register"> Sign up now </router-link>
          </small>
        </div>
      </form>
    </div>
  </div>
</template>
