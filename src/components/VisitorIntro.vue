<template>
  <div class="visitor-intro">
    <div>
      Well, <b>{{ visitorName }}</b>, welcome to my CV, if you want my ✨precious✨ information, you will need to pass 3 games <span class="striked tiny">or go to LinkedIN</span>.
    </div>
    <div class="form">
      <span>So, are you ready?</span>
      <div class="actions">
        <touchable @click.native="nextStep">Yes</touchable>
        <touchable @click.native="nextStep">Sure</touchable>
        <touchable @click.native="nextStep">Absolutely</touchable>
        <touchable disabled>No</touchable>
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
  max-width: 640px;
  padding: 2rem;

  .form {
    margin-top: 1rem;

    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
