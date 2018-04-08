<template>
  <button class="touchable">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.touchable {
  background-color: var(--primary);
  color: var(--light);
  border-radius: 2px;
  padding: 8px 16px;
  margin: 4px;
  font-size: 18px;
  line-height: 1.4;
  border: none;
  font-weight: 400;
  cursor: pointer;
  will-change: filter, opacity, background-color;
  transition: filter 0.2s, opacity 0.2s, background-color 0.2s;
  filter: none;

  &:hover {
    filter: brightness(115%);
  }

  &:disabled {
    filter: brightness(115%);
    opacity: 0.6;
  }

  *:link {
    text-decoration: none;
  }
}
</style>
