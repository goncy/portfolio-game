<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: var(--light);
  border-radius: 4px;
  border: 1px solid var(--light-darkest);
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
    color: var(--primary);
    text-decoration: none;
  }
}
</style>
