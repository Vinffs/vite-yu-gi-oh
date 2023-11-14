<template>
  <div class="page-loader">
    <img src="/images/logo.png" alt="logo">
    <h1 class="m-4 text-danger-emphasis">Loading</h1>
    <div class="d-flex flex-row m-2">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {

  },
}
</script>

<style lang="scss" scoped>
$colors_cube1: #f80000;
$colors_cube2: #BA0000;
$colors_cube3: #7C0000;
$colors_cube4: #3E0000;

.page-loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  z-index: 9999;


  .cube {
    width: 40px;
    height: 40px;
    margin-right: 10px;

    &:first-child {
      background-color: $colors_cube1;
      animation: left 1s infinite;
    }

    &:nth-child(2) {
      background-color: $colors_cube2;
    }

    &:nth-child(3) {
      background-color: $colors_cube3;
    }

    &:last-child {
      background-color: $colors_cube4;
      animation: right 1s infinite .5s;
    }
  }
}

@keyframes left {
  40% {
    transform: translateX(-60px);
  }

  50% {
    transform: translateX(0);
  }
}

@keyframes right {
  40% {
    transform: translateX(60px);
  }

  50% {
    transform: translateX(0);
  }
}
</style>