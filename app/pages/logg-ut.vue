<script setup lang="ts">
definePageMeta({ layout: "default" });

const session = useSessionStore();
const router = useRouter();

onMounted(() => {
	session.unset();
	router.replace("/");
});
</script>

<template>
	<div>
		<h1>Logget ut</h1>
		<p>
			<NuxtLink to="/">
				Til forsiden
			</NuxtLink>
		</p>
	</div>
</template>
