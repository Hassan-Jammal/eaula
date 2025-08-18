<template>
    <footer class="relative">
        <div class="bg-[#FAFAFA]">
            <div class="container flex justify-between items-center gap-4">
                <p class="text-xs md:text-sm text-[#A9A9A9]" data-aos="fade-up">© 2025 Eaula Water. All rights reserved.</p>
                <div class="flex justify-center items-center gap-8" data-aos="fade-up">
                    <a href="" class="flex">
                        <Icon name="ri:instagram-line" class="text-2xl" />
                    </a>
                    <a href="" class="flex">
                        <Icon name="ri:linkedin-fill" class="text-2xl" />
                    </a>
                </div>
            </div>
        </div>
        <NuxtImg class="hidden md:block w-full h-full" src="images/eaula-water-canyon-desktop.png" alt="Eaula Water Canyon" width="" height="" />
        <NuxtImg class="block md:hidden w-full h-full" src="images/eaula-water-canyon-mobile.png" alt="Eaula Water Canyon" width="" height="" />
        <div class="relative">
            <NuxtImg class="hidden md:block w-full h-full" src="images/canyon-desktop.png" alt="Canyon" width="" height="" />
            <NuxtImg class="block md:hidden w-full h-full" src="images/canyon-mobile.png" alt="Canyon" width="" height="" />
            <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center">
                <h4 class="font-NeueMontrealMedium text-3xl md:text-6xl text-white text-center leading-tight uppercase w-min mx-auto" data-aos="fade-up">Hydrating the World</h4>
            </div>
        </div>

        <div class="absolute bottom-10 right-0 w-full">
            <div class="container flex justify-end items-center gap-1 text-right text-xs text-white">
                <Icon name="lsicon:location-outline" class="text-xl md:text-3xl" />
                Al Ula, KSA
            </div>
        </div>
    </footer>
</template>