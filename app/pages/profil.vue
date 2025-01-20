<script setup lang="ts">
import throttle from "just-throttle";

definePageMeta({
	layout: "default",
});

const { $rpc } = useNuxtApp();
const { data: userData } = await $rpc.user.get.useQuery(getFakeUser().id);

const toast = useToast();
const isModalForUserDeletionOpen = ref(false);
const input = useTemplateRef("input");
const isUploading = ref(false);
const jobData = ref("");

const jobDataStrength = computed(() => Math.round(jobData.value.length / 100));
const updateUserContext = throttle(async (value: string) => {
	// TODO $rpc.user.update.mutation({id: user.id, workData: value })

	jobData.value = value;
	isUploading.value = false;
}, 1000, {
	leading: false,
	trailing: true,
});
</script>

<template>
	<CardSnug>
		<div class="flex items-center gap-5">
			<UAvatar :src="userData?.user.avatar" size="4xl" />
			<Heading level="h3">
				{{ userData?.user.firstName }} {{ userData?.user.lastName }}
			</Heading>
		</div>

		<div class="mt-2">
			<UButton
				leading-icon="i-lucide-circle-fading-plus" variant="ghost" color="neutral" aria-controls="avatar-upload"
				@click="() => input?.inputRef?.click()"
			>
				Bytt fjes
			</UButton>
			<UInput
				id="avatar-upload" ref="input" type="file" accept="image/*" aria-label="Last opp nytt profilbilde"
				class="sr-only" @change="(event) => {
					const elementInput = event.target as HTMLInputElement
					const image = elementInput.files?.item?.(0)
					if (!image) return console.trace('can not upload image without file/image')

					// TODO upload image (seems like trpc handles File by default)
					// $rpc.user.update.mutation({id: idUser, avatar: image })
				}"
			/>
		</div>
		<USeparator class="my-10" />
		<div class="flex flex-col gap-3">
			<div class="flex items-center justify-between">
				<Heading level="h5">
					Kontakt
				</Heading>
				<ULink to="#todo-add-link-to-users-vipps-profile" target="_blank">
					<UButton
						id="todo-add-link-to-users-vipps-profile" size="md" variant="soft" color="neutral"
						trailing-icon="i-lucide-external-link"
					>Endre i Vipps</UButton>
				</ULink>
			</div>
			<div>
				<Text is-muted>
					E-post
				</Text>
				<Text class="lowercase">
					{{ userData?.user.email || "ingen" }}
				</Text>
			</div>
			<div>
				<Text is-muted>
					Mobilnummer
				</Text>
				<Text>
					{{ userData?.user.phoneNumber || "ingen" }}
				</Text>
			</div>
		</div>
		<USeparator class="my-10" />
		<div class="flex flex-col gap-3">
			<Heading id="arbeidsdata" level="h5">
				Ditt liv (CV)
			</Heading>
			<div>
				<Text is-muted>
					Fortell om alt du kan
				</Text>
				<Text>
					Lim inn arbeidserfaring, evner, utdannelse, erfaringer, egenskaper...
				</Text>
			</div>
			<UProgress
				v-model="jobDataStrength" animation="swing"
				:color="jobDataStrength < 10 ? 'neutral' : jobDataStrength < 70 ? 'primary' : 'success'"
			/>
			<UTextarea
				block class="w-full" :rows="12" size="xl" color="neutral" placeholder="Din CV..." @update:model-value="(value) => {
					isUploading = true;
					updateUserContext(String(value));
				}"
			/>
		</div>
		<USeparator class="my-10" />
		<div class="flex flex-col gap-3">
			<Heading level="h5">
				E-post fra Liv
			</Heading>
			<USwitch
				size="xl" color="neutral" unchecked-icon="i-lucide-x" checked-icon="i-lucide-check"
				:default-value="false" label="Motta e-post med informasjon" @update:model-value="(consentsToNotificationsEmail) => {
					console.log('consentsToNotificationsEmail', consentsToNotificationsEmail)
					// TODO
					// $rpc.user.update.mutation({ id: userData.user.id, consentsToNotificationsEmail })
				}"
			/>
		</div>
		<USeparator class="my-10" />

		<div class="flex flex-col gap-3">
			<Heading level="h5">
				SMS fra Liv
			</Heading>
			<USwitch
				size="xl" color="neutral" unchecked-icon="i-lucide-x" checked-icon="i-lucide-check"
				:default-value="false" label="Motta SMS med jobbtilbud" @update:model-value="(consentsToNotificationsSms) => {
					console.log(' consentsToNotificationsSms', consentsToNotificationsSms)
					// TODO
					// $rpc.user.update.mutation({ id: userData.user.id, consentsToNotificationsSms })
				}"
			/>
		</div>
		<USeparator class="my-10" />
		<div class="flex flex-col gap-3">
			<Heading level="h5">
				Lovlig
			</Heading>

			<ULink to="vilkar" class="w-full group">
				<UButton
					class="group-hover:nudge-r nudge" block variant="soft" color="neutral" leading-icon="i-lucide-scale"
					trailing-icon="i-lucide-arrow-right" size="xl"
				>
					Bruksvilkår
				</UButton>
			</ULink>
			<ULink to="personvern" class="w-full group">
				<UButton
					class="group-hover:nudge-r nudge nudge-r" block variant="soft" color="neutral"
					leading-icon="i-lucide-scale" trailing-icon="i-lucide-arrow-right" size="xl"
				>
					Personvern
				</UButton>
			</ULink>
		</div>
		<USeparator class="my-10" />
		<div class="flex flex-col gap-3">
			<Heading level="h5">
				Konto
			</Heading>
			<ULink to="logg-ut" class="w-full group">
				<UButton
					class="group-hover:nudge-r nudge" block variant="soft" color="neutral"
					trailing-icon="i-lucide-arrow-right" size="xl"
				>
					Logg ut
				</UButton>
			</ULink>
		</div>
	</CardSnug>
	<div class="flex flex-col gap-3">
		<Heading level="h5" class="mt-20">
			Slett meg
		</Heading>
		<Text>Slett min konto permanent</Text>
		<div>
			<UButton variant="subtle" color="neutral" size="xl" class="flex" @click="isModalForUserDeletionOpen = true">
				Slett
			</UButton>
		</div>
	</div>
	<UModal
		v-model:open="isModalForUserDeletionOpen" title="Vil du slette kontoen din?"
		description="All data blir slettet og kan ikke gjenopprettes, med unntak av transaksjoner og data som tilhører bokføring, som lagres i 6 måneder etter sletting"
	>
		<template #footer>
			<div class="w-full flex items-center justify-between gap-3">
				<UButton variant="solid" color="neutral" size="lg" class="flex" @click="isModalForUserDeletionOpen = false">
					Avbryt
				</UButton>
				<UButton
					variant="soft" color="neutral" size="lg" class="flex" leading-icon="i-lucide-user-x" @click="() => {
						// TODO: $rpc.user.delete.mutation(user.id)
						toast.add({ title: `Takk for tiden og velkommen tilbake` })
						isModalForUserDeletionOpen = false
						useRouter().push('/logg-ut')
					}"
				>
					Bekreft sletting
				</UButton>
			</div>
		</template>
	</UModal>
</template>
