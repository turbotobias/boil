<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-5">
      <h1 class="text-3xl sm:text-5xl font-semibold text-center">
        Turbo <span class="inline-block text-center"> når du trenger det </span>
      </h1>
      <Text size="xl" class="text-balance text-center">
        Få rask tilgang til gründere som kan kode
      </Text>
    </div>

    <!-- <SvgLineSquiggly class="z-0 absolute w-screen -left-5 md:-left-(--breakpoint-md-offset)" /> -->
    <LazyClientOnly>
      <Chat />
    </LazyClientOnly>
    <CardSnug>
      <UAccordion :close-others="false" type="multiple" :items="[
        {
          label: `db =>`,
          content: JSON.stringify({},null,2),
          defaultOpen: true,
        },
      ]" />
    </CardSnug>
    <div>
      <h2 class="text-xl font-semibold mb-2">
        Inkluderer
      </h2>
      <Text><b class="text-tomato">Feature 1</b> amazing</Text>
      <Text>
        <b class="text-tomato">Feature 2</b> amazing
      </Text>
      <!-- TODO feature payments: uncomment below when payments is implemented -->
      <!-- <Text><b class="text-tomato">Trygg betaling</b> du må ikke, men vi kan håndtere betalinger for deg</Text> -->
      <Text><b class="text-tomato">Feature 3</b> amazing</Text>
    </div>
    <NuxtPage />
  </div>
</template>
