<script setup lang="ts">
import EducationCard from '../components/EducationCard.vue';
import CertificateCard from '../components/CertificateCard.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';

const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);
</script>

<template>
  <!-- Education -->
  <EducationCard />
  <!-- Certificate -->
  <CertificateCard v-if="resume.certificate.length" />
</template>
