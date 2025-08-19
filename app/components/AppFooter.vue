<template>
    <footer class="relative">
        <NuxtImg class="hidden md:block w-full h-full" src="images/eaula-water-canyon-desktop.webp" alt="Eaula Water Canyon" width="" height="" />
        <NuxtImg class="block md:hidden w-full h-full" src="images/eaula-water-canyon-mobile.webp" alt="Eaula Water Canyon" width="" height="" />
        <div class="relative">
            <NuxtImg class="hidden md:block w-full h-full" src="images/canyon-desktop.webp" alt="Canyon" width="" height="" />
            <NuxtImg class="block md:hidden w-full h-full" src="images/canyon-mobile.webp" alt="Canyon" width="" height="" />
            <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center">
                <h4 class="w-min mx-auto font-NeueMontrealMedium text-3xl md:text-6xl !leading-tight text-white text-center uppercase" data-aos="fade-up">Hydrating the World</h4>
            </div>
        </div>

        <div class="absolute bottom-10 right-0 w-full">
            <div class="container flex justify-between items-center gap-4">
                <p class="text-xs md:text-sm text-white">© 2025 Eaula Water. All rights reserved.</p>

                <div class="flex justify-between items-center gap-1 text-right max-md:text-xs text-white">
                    <Icon name="lsicon:location-outline" class="text-xl md:text-3xl" />
                    Al Ula, KSA
                </div>
            </div>
        </div>
    </footer>
</template>

