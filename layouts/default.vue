<script setup lang="ts"></script>

<template>
  <div class="space-y-32">
    <AppNavbar />
    <UContainer>
      <slot />
    </UContainer>
    <AppFooter />
  </div>
</template>
