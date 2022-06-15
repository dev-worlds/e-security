<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Электробезопасность</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Электробезопасность</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <QuestionListItem v-for="question in questions" :key="question.id" :question="question"/>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import QuestionListItem from '@/components/QuestionListItem.vue';
import {defineComponent} from 'vue';
import {getQuestions} from '@/data/questions';

export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      questions: getQuestions()
    }
  },
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    QuestionListItem
  },
});
</script>
