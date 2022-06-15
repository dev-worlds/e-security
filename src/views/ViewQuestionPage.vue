<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" v-if="question">
      <div class="ion-padding">
        <h1>{{ question.question }}</h1>
        <p>
          <answer-list-item
              v-for="answer in question.answers"
              :key="answer.id"
              :question="question"
              :answer="answer"
              :color="getColor(answer.id)"
              :answer_value="answer_value"
              @click="setAnswerValue(answer.id)"/>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {useRoute} from 'vue-router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar
} from '@ionic/vue';
import {personCircle} from 'ionicons/icons';
import {getQuestion} from '@/data/questions';
import {defineComponent, ref} from 'vue';
import AnswerListItem from "@/components/AnswerListItem.vue";

export default defineComponent({
  name: 'ViewQuestionPage',
  data() {
    return {
      personCircle,
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
      }
    }
  },
  setup() {
    const route = useRoute();
    const question = getQuestion(parseInt(route.params.id as string, 10));
    const answer_value = ref(0);
    const setAnswerValue = (num: number) => {
      answer_value.value = num;
    }
    const getColor = (id: number) => {
      if (answer_value.value) {
        if (question.value === id) {
          return 'success'
        } else {
          return 'danger'
        }
      } else {
        return '';
      }
    };
    return {question, answer_value, setAnswerValue, getColor}
  },
  components: {
    AnswerListItem,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>
