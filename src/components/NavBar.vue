<template>
  <nav class="nav navbar navbar-expand-lg py-4 border-0" data-bs-theme="dark">
    <div class="container-fluid">
      <div class="maxWidth"><a class="navbar-brand" href="#"><img class="w-75 mx-3" src="/images/logo.png" alt="logo"></a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <select v-model="selected" @change="$emit('changeSelect', selected)"
          class="navbar-nav me-auto mb-2 mb-lg-0 px-1 mx-5 py-2" name="archetype">
          <option class="nav-link active dropdown-toggle" value="">All Archetypes</option>
          <option class="nav-link active dropdown-toggle" v-for="archetype in store.archetype"
            :value="archetype.archetype_name">{{ archetype.archetype_name }}
          </option>
        </select>
        <form class="d-flex" role="search" data-np-autofill-form-type="other" data-np-checked="1" data-np-watching="1">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { store } from '../data/store.js';
export default {
  name: 'NavBar',
  data() {
    return {
      store,
      selected: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #333;
}

.maxWidth {
  max-width: 250px !important;
}
</style>