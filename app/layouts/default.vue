<template>
  <UApp>
    <div class="relative lg:h-screen lg:w-screen lg:flex lg:flex-col">
      <AppHeader />
      <main class="lg:flex-1 bg-white/5">
        <slot></slot>
      </main>
    </div>
  </UApp>
</template>
