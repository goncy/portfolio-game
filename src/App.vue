<template>
  <div id="app">
    <div id="wrapper">
      <div id="nav">
        <router-link to="/">
          <i class="fa fa-home" />
        </router-link>
        <router-link to="/about">
          <i class="fa fa-address-card" />
        </router-link>
      </div>
      <transition
        name="fade"
        mode="out-in"
      >
        <keep-alive>
          <router-view class="router" />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/theme.scss";

#wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#nav {
  position: absolute;
  top: 0;
  left: 0;
  background: $primary;
  padding: 4px;
  display: flex;
  flex-direction: column;
  z-index: 1;

  a {
    font-weight: bold;
    text-decoration: none;
    color: $white;
    font-size: 1.5rem;
    padding: 0.25rem;
    opacity: 0.5;
    will-change: opacity;
    transition: opacity 0.25s;

    &.router-link-exact-active {
      text-decoration: underline;
      opacity: 1;
    }
  }
}
</style>
