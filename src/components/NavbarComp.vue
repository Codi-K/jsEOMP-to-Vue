<template>
  <div>
     <!-- navbar  -->
      <nav class="navbar text-white navbar-dark bg-dark ">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            <!-- Logo -->
            <img class="img-fluid logo" src="https://cdn.betterttv.net/emote/5ecbe33cf54be95e2a82ec94/2x.webp" alt="Logo">
          </router-link>
          <!-- Company Name -->
          <div>
            <router-link class="nav-link" to="/">
              <h4>Devotion Desktops</h4>
            </router-link>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/products">Desktops</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/checkout">Checkout</router-link>
                </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                For Administator
              </router-link>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><router-link class="dropdown-item" to="/admin">Admin Page</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>