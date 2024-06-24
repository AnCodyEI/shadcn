<script setup lang="ts">
import {CoachingCreateCapsuleInput} from "@/generated/gql.coaching.ts";
import GlobalForm from "@/components/dynamic/globalForm.vue";

const inputs: CoachingCreateCapsuleInput = {
  enabled: false,
  title: '',
  slug: '',
  internalName: '',
  release: '',
  teasing: '',
  shortDescription: {},
  longDescription: '',
  thumbnail: '',
  theme: 0,
  video: '',
  links: {},
  author: {},
}
</script>

<template>
  <main class="w-full">
    <h1>Article</h1>
    <section class="mt-5 w-full">
      <global-form :data="inputs" />
    </section>
  </main>
</template>

<style scoped>

</style>
