<template>
  <div class="visitor-type">
    <h2 class="title">What type of visitor are you?</h2>
    <div class="actions">
      <button @click="nextStep">A recruiter</button>
      <button @click="lastStep">Someone that this CV UI & UX won't modify his/her decision to contact me, therefore my future economy and work life won't be affected if the super fun next steps are skipped</button>
      <button @click="notify('Oh man 🤦‍♂️', 'Just use the Konami code 🕹')">Just me debugging</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisitorType",
  props: {
    nextStep: {
      type: Function,
      required: true,
    },
    lastStep: {
      type: Function,
      required: true,
    },
    notify: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.visitor-type {
  padding: 2rem;

  .actions {
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
}
</style>
