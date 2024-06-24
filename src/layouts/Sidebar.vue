<script setup lang="ts">
import { RouteRecordRaw, useRouter } from "vue-router";
import { routes } from "./../router.ts";

const router = useRouter();

const generateButtons = (routes: RouteRecordRaw[]) => {
  const buttons: {name: string | undefined, route: string}[] = [];
  routes.forEach(route => {
    if (route.name === 'layout' && route.children && route.children.length > 0) {
      route.children.forEach(child => {
        buttons.push({
          name: child.name?.toString(),
          route: `${route.path}${child.path}`,
        });
      });
    }
  });

  return buttons;
};

const buttons = generateButtons(routes);
</script>

<template>
  <main class="min-h-screen min-w-screen flex">
    <aside class="fixed top-0 left-0 w-[200px] h-screen py-[20px] px-[20px] flex flex-col border-r-[1px] bg-background text-foreground">
      <nav class="grid items-start text-sm font-medium">
        <div v-for="button in buttons" :key="button.name">
          <router-link :class="router.currentRoute.value.name === button.name ? 'bg-muted text-primary' : 'text-muted-foreground'" class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all capitalize hover:text-primary" :to="button.route">
            {{ button.name }}
          </router-link>
        </div>
      </nav>
    </aside>
    <router-view class="ml-[200px] p-5" />
  </main>
</template>

<style scoped>
</style>
