<template>
  <div class="visitor-intro">
    <div>
      Well, <b>{{ visitorName }}</b>, welcome to my CV, if you want my ✨precious✨ information, you will need to pass 3 games <span class="striked tiny">or go to LinkedIN</span>.
    </div>
    <div>
      <span>So, are you ready?</span>
      <div class="actions">
        <button @click="nextStep">Yes</button>
        <button @click="nextStep">Sure</button>
        <button @click="nextStep">Absolutely</button>
        <button disabled>No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisitorIntro",
  props: {
    nextStep: {
      type: Function,
      required: true,
    },
    visitorName: {
      type: String,
      default: "hacker",
    },
  },
};
</script>

<style lang="scss">
.visitor-intro {
  padding: 2rem;

  form {
    margin-top: 1rem;

    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
