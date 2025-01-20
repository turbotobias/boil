<template>
	<div class="bg-sand-100 min-h-screen h-full flex flex-col">
		<div class="w-full mx-auto px-5 pb-20 max-w-screen-lg grow flex flex-col">
			<LazyDebug />
			<AppHeader />
			<div class="w-full max-w-md mx-auto grow flex flex-col justify-center">
				<slot />
			</div>
		</div>
	</div>
</template>
