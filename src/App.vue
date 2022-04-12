<template>
  <div id="app">
    <!-- start header -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="'/login'">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="'/register/'">Register</a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <!-- end header -->
    <!-- start content -->
    <div>
      <router-view />
    </div>
    <!-- end content -->
    <!-- start footer -->
    <!-- end footer -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.header {
  padding: 5px;
  background-color: #09cc68;
  color: white;
}
</style>
