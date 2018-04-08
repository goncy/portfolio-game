<template>
  <div class="face-game">
    <h2>Well {{ visitorName }}, which one is my photo?</h2>
    <div class="faces">
      <img
        src="@/assets/faces/chris.jpg"
        alt="I am this one?"
        @click="onClick(false)"
      />
      <img
        src="@/assets/faces/me.jpg"
        alt="I am this one?"
        @click="onClick(true)"
      />
      <img
        src="@/assets/faces/loki.jpg"
        alt="I am this one?"
        @click="onClick(false)"
      />
      <img
        src="@/assets/faces/chain.jpg"
        alt="I am this one?"
        @click="onClick(false)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FaceGame",
  props: {
    nextStep: {
      type: Function,
      required: true,
    },
    notify: {
      type: Function,
      required: true,
    },
    visitorName: {
      type: String,
      default: "hacker",
    },
  },
  methods: {
    onClick: function(correct) {
      if (correct) {
        this.nextStep();
      } else {
        this.notify("Almost", `Sorry, i'm not that ugly (yet)`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.face-game {
  padding: 2rem;
  width: 100%;

  .faces {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
      object-fit: contain;
      border-radius: 50%;
      border: 2px solid $primary;
      cursor: pointer;
      background: $white;
      transition: transform 0.2s;
      will-change: transform;
      justify-self: center;

      &:hover {
        transform: scale(1.1);
      }

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
}
</style>
