<script setup lang="ts">
import ExperienceCard from '@/components/ExperienceCard.vue';
import VolunteerCard from '../components/VolunteerCard.vue';
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/ResumeStore';

const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);
</script>

<template>
  <!-- Experience -->
  <ExperienceCard />
  <!-- Volunteer -->
  <VolunteerCard v-if="resume.volunteer.length" />
</template>
