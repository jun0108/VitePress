<script lang="ts" setup>

</script>

<template>
  <div class="not-found">
    <span>404</span>

    <button type="button" @click="">go home</button>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  span {
    padding: 30px;
    font-size: 30px;
    font-weight: 700;
  }
}
</style>