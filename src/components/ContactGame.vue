<template>
  <div class="contact-game">
    <h2>How lucky you are? But I left the worst for the end</h2>
    <blockquote>Where can you find me?</blockquote>
    <div class="actions">
      <Card class="card">
        <ul>
          <li>
            <external-link
              class="item"
              href="https://github.com/goncy"
            >
              <i class="fa fa-github"/>goncy
            </external-link>
          </li>
          <li>
            <external-link
              class="item"
              href="https://www.linkedin.com/in/gonzalopozzo/"
            >
              <i class="fa fa-linkedin"/>gonzalo.pozzo
            </external-link>
          </li>
          <li>
            <external-link
              class="item"
              href="tel:+5491141634695"
            >
              <i class="fa fa-phone"/>+5491141634695
            </external-link>
          </li>
          <li>
            <external-link
              class="item"
              href="mailto:gonzalo.pozzo4@gmail.com"
            >
              <i class="fa fa-envelope"/>
              gonzalo.pozzo4
            </external-link>
          </li>
          <li>
            <external-link
              class="item"
              href="skype:gonzalo.pozzo4?userinfo"
            >
              <i class="fa fa-skype"/>
              gonzalo.pozzo4
            </external-link>
          </li>
        </ul>
        <touchable
          class="action primary"
          @click.native="nextStep"
        >
          This one?
        </touchable>
      </Card>
      <Card class="card">
        <ul>
          <li>
            <external-link
              class="item"
              role="button"
            >
              <i class="fa fa-github"/>notgoncy
            </external-link>
          </li>
          <li>
            <external-link
              class="item"
              role="button"
            >
              <i class="fa fa-linkedin"/>not.gonzalo.pozzo
            </external-link>
          </li>
          <li>
            <external-link
              class="item"
              role="button"
            >
              <i class="fa fa-phone"/>+5491144444444
            </external-link>
          </li>
          <li>
            <external-link
              class="item"
              role="button"
            >
              <i class="fa fa-envelope"/>not.gonzalo.pozzo4
            </external-link>
          </li>
          <li>
            <external-link
              class="item"
              role="button"
            >
              <i class="fa fa-skype"/>not.gonzalo.pozzo4
            </external-link>
          </li>
        </ul>
        <touchable
          class="action primary"
          @click.native="notify('Emm', `That doesn't look like mine`)"
        >
          Seems legit
        </touchable>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "./ui/Card";

export default {
  name: "ContactGame",
  components: {Card},
  props: {
    nextStep: {
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
.contact-game {
  padding: 2rem;

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .card {
      padding: 1.5rem;
      margin: 12px;

      .item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 18px;

        i {
          margin-right: 8px;
        }
      }

      .action {
        margin-top: 1.25rem;
      }
    }
  }
}
</style>
