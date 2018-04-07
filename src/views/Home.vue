<template>
  <div class="home">
    <notifications
      classes="toasts"
      group="notifications"
    />
    <transition
      name="fade"
      mode="out-in"
    >
      <component
        :is="steps[currentStep]"
        :next-step="nextStep"
        :last-step="lastStep"
        :notify="notify"
        class="wizard"
      />
    </transition>
  </div>
</template>

<script>
import Mousetrap from "mousetrap";

import VisitorType from "@/components/VisitorType.vue";
import VisitorName from "@/components/VisitorName.vue";
import VisitorIntro from "@/components/VisitorIntro.vue";
import FaceGame from "@/components/FaceGame.vue";
import ExperienceGame from "@/components/ExperienceGame.vue";
import ContactGame from "@/components/ContactGame.vue";
import Summary from "@/components/Summary.vue";

export default {
  name: "Home",
  components: {
    VisitorType,
    VisitorName,
    VisitorIntro,
    FaceGame,
    ExperienceGame,
    ContactGame,
    Summary,
  },
  data: function() {
    return {
      currentStep: 0,
      steps: [
        "VisitorType",
        "VisitorName",
        "VisitorIntro",
        "FaceGame",
        "ExperienceGame",
        "ContactGame",
        "Summary",
      ],
    };
  },
  beforeMount() {
    Mousetrap.bind("up up down down left right left right b a enter", () => {
      this.lastStep();
      this.$notify({
        group: "notifications",
        duration: 5000,
        title: "Magic 💫",
        text: "You arrived to last step with the magical Konami code",
      });
    });
  },
  beforeDestroy() {
    Mousetrap.unbind("up up down down left right left right b a enter");
  },
  methods: {
    nextStep: function() {
      this.cleanNotifications();

      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    lastStep: function() {
      this.cleanNotifications();

      this.currentStep = this.steps.length - 1;
    },
    notify: function(title, text) {
      this.$notify({
        group: "notifications",
        duration: 7500,
        title,
        text,
      });
    },
    cleanNotifications: function() {
      this.$notify({
        group: "notifications",
        clean: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  .wizard {
    max-width: 100vw;
    overflow-x: hidden;
  }
}
</style>
