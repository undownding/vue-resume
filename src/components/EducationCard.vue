<script setup lang="ts">
import { computed } from 'vue';
import EducationCardItem from './EducationCardItem.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';
import i18n from '@/i18n';

const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);

const total = computed(() => {
  return resume.value.education.length;
});
</script>

<template>
  <div class="card">
    <h2 class="mb-5 text-lg font-semibold dark:text-night-50">{{ i18n.global.t('education') }}</h2>

    <EducationCardItem
      v-for="(item, index) in resume.education"
      :key="index"
      :item="item"
      :separator="total > index + 1" />
  </div>
</template>
