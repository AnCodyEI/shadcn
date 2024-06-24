<script setup lang="ts">
import {CoachingCreateNicheInput} from "@/generated/gql.coaching.ts";
import GlobalForm from "@/components/dynamic/globalForm.vue";

const inputs: CoachingCreateNicheInput = {
  enabled: false,
  internalName: "",
  description: "",
  options: {},
  position: 0,
}
</script>

<template>
  <main class="w-full">
    <h1>Niche</h1>
    <section class="mt-5 w-full">
      <global-form :data="inputs" />
    </section>
  </main>
</template>

<style scoped>

</style>
