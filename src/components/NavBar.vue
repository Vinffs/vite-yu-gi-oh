<template>
  <nav class="nav navbar navbar-expand-lg bg-dark border-bottom border-body py-4" data-bs-theme="dark">
    <div class="container-fluid">
      <div class="maxWidth"><a class="navbar-brand" href="#"><img class="w-75 mx-3" src="/images/logo.png" alt="logo"></a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
          <li class="nav-item">
            <a class="nav-link active dropdown-toggle px-3" aria-current="page" href="#">Monsters</a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle px-3" href="#">Spells</a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle px-3" href="#">Tags</a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle px-3" href="#">Others</a>
          </li>
        </ul>
        <form class="d-flex" role="search" data-np-autofill-form-type="other" data-np-checked="1" data-np-watching="1">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>