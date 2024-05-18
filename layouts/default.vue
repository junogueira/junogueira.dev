<script setup lang="ts"></script>

<template>
  <div class="space-y-32">
    <AppNavbar />
    <UContainer>
      <main class="min-h-screen">
        <slot />
      </main>
    </UContainer>
    <AppFooter />
  </div>
</template>
