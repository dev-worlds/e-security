<template>
  <ion-item button :color="color">
    <ion-label>
      {{ answer.id }}. {{ answer.text }}
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {IonItem, IonLabel} from "@ionic/vue";

export default defineComponent({
  name: "AnswerListItem",
  props: {
    question: Object,
    answer: Object,
    answer_value: Number,
    color: String
  },

  components: {
    IonLabel,
    IonItem,
  }
})
</script>

<style scoped>

</style>