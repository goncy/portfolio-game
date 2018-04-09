<template>
  <div class="face-game">
    <h2>Let's see {{ visitorName }}, which one is my photo?</h2>
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
.face-game {
  padding: 2rem;
  width: 100%;
  max-width: 800px;

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
      border: 2px solid var(--primary);
      cursor: pointer;
      background: var(--light);
      transition: transform 0.2s, border-color 0.2s;
      will-change: transform 0.2s, border-color 0.2s;
      justify-self: center;

      &:hover {
        transform: scale(1.1);
      }

      &:not(:last-child) {
        margin: 8px;
      }
    }
  }
}
</style>
