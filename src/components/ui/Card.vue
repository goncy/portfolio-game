<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.card {
  background: $white;
  border-radius: 4px;
  border: 1px solid lighten($color: $black, $amount: 70);
  transition: transform 0.2s;
  will-change: transform;

  &:hover {
    transform: scale(1.1);
    z-index: 2;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    color: $primary;
    text-decoration: none;
  }
}
</style>
