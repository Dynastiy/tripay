<template>
  <div class="auth-container">
    <div class="auth-content">
      <div class="text-center">
        <span class="brand-name"> TriPay </span>
      </div>

      <div class="my-4 text-center">
        <h4 class="font-weight-bold">Sign Up</h4>
        <small class="text-secondary"
          >Enter correct details to create Account</small
        >
      </div>

      <form action="" @submit.prevent="">
        <div class="mb-3">
          <input type="email" placeholder="First Name" />
        </div>

        <div class="mb-3">
          <input type="email" placeholder="Last Name" />
        </div>

        <div class="mb-3">
          <input type="email" placeholder="email" />
        </div>

        <div class="mb-4">
          <input type="password" placeholder="password" />
        </div>

        <div class="mb-2">
          <input type="submit" class="btn--primary" value="Sign Up" />
        </div>

        <div class="text-center">
          <small class="text-secondary"
            >Already registered?
            <router-link to="/login"> Login now </router-link>
          </small>
        </div>
      </form>
    </div>
  </div>
</template>
