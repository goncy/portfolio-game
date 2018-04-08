<template>
  <div class="visitor-name">
    <div class="title">
      <h2 class="title">What's your name?</h2>
      <small class="tiny">I will just sell it on the interwebs</small>
    </div>
    <form @submit.prevent="submit">
      <input
        v-model="name"
        class="name"
        maxlength="24"
      />
      <button :disabled="!name">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "VisitorName",
  props: {
    nextStep: {
      type: Function,
      required: true,
    },
    setVisitorName: {
      type: Function,
      required: true,
    },
  },
  data: function() {
    return {
      name: "",
    };
  },
  methods: {
    submit: function() {
      this.setVisitorName(this.name);
      this.nextStep();
    },
  },
};
</script>

<style lang="scss" scoped>
.visitor-name {
  padding: 2rem;

  .title {
    margin-bottom: 1rem;

    h2 {
      margin: 0;
      line-height: 1rem;
    }
  }

  form {
    margin-top: 12px;
    display: flex;
    flex-direction: column;

    .name {
      margin-bottom: 4px;
    }

    button {
      margin: 0;
    }
  }
}
</style>
