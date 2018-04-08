<template>
  <div
    id="app"
    :style="{'--primary': primaryColor}"
  >
    <div id="nav">
      <a
        v-for="color in colors"
        :style="{'background': color}"
        :key="color"
        class="color"
        role="button"
        @click="primaryColor = color"
      />
    </div>
    <notifications
      classes="toasts"
      group="notifications"
    />
    <div id="content">
      <transition
        name="fade"
        mode="out-in"
      >
        <component
          :is="steps[currentStep]"
          :next-step="nextStep"
          :last-step="lastStep"
          :notify="notify"
          :set-visitor-name="setVisitorName"
          :visitor-name="visitorName"
          class="wizard"
        />
      </transition>
    </div>
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

const STEPS = [
  "VisitorType",
  "VisitorName",
  "VisitorIntro",
  "FaceGame",
  "ExperienceGame",
  "ContactGame",
  "Summary",
];

const COLORS = ["#42b983", "cornflowerblue", "#673AB7", "#E91E63"];

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
      primaryColor: COLORS[0],
      visitorName: "not important person",
      currentStep: 0,
      steps: STEPS,
      colors: COLORS,
    };
  },
  beforeMount() {
    Mousetrap.bind("up up down down left right left right b a enter", () => {
      this.lastStep();
      this.$notify({
        group: "notifications",
        duration: 5000,
        title: "Magic 💫",
        text: "You arrived to the last step with the magical Konami code 🕹",
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

      if (this.currentStep === this.steps.length - 1) {
        this.notify(
          `Congratulations ${this.visitorName}!`,
          `You passed all the tests, now you can have my information 🙌`
        );
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
    setVisitorName: function(visitorName) {
      this.visitorName = visitorName;
    },
  },
};
</script>

<style lang="scss">
:root {
  --light: #fff;
  --light-darker: whitesmoke;
  --light-darkest: gainsboro;
  --black-lighter: #292929;
  --black: #212121;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  z-index: 1;

  a {
    font-weight: bold;
    text-decoration: none;
    color: var(--light);
    font-size: 1.5rem;
    padding: 0.25rem;
    margin: 4px;
  }

  .color {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    cursor: pointer;
  }
}

#content {
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
