<template>
    <header class="relative z-50">
        <div :class="[
            'container flex justify-between items-center min-h-[--header-height] z-50',
            isOpen ? 'fixed inset-x-0 top-0' : 'relative'
        ]">
            <NuxtLink to="/">
                <NuxtImg src="images/logo.svg" alt="Eaula Logo" width="154" height="42" />
            </NuxtLink>

            <!-- Toggle button -->
            <button class="flex" @click="isOpen = !isOpen" aria-label="Toggle menu">
                <Icon v-if="!isOpen" name="ci:hamburger" class="text-3xl" />
                <Icon v-else name="material-symbols-light:close-rounded" class="text-3xl" />
            </button>
        </div>

        <!-- Overlay Menu -->
        <transition name="fade">
            <div v-if="isOpen" class="fixed inset-0 bg-[#8F8F8F] flex flex-col items-center justify-center space-y-8 text-2xl font-semibold z-40">
                <!-- Nav Links -->
                <nav class="flex flex-col items-center space-y-8" @click="isOpen = false">
                    <ScrollButton target="about-us" class="cursor-pointer" data-aos="fade-down" data-aos-delay="00">ABOUT US</ScrollButton>
                    <ScrollButton target="our-dna" class="cursor-pointer" data-aos="fade-down" data-aos-delay="100">OUR DNA</ScrollButton>
                    <ScrollButton target="our-team" class="cursor-pointer" data-aos="fade-down" data-aos-delay="200">OUR TEAM</ScrollButton>
                    <ScrollButton target="certifications" class="cursor-pointer" data-aos="fade-down" data-aos-delay="300">CERTIFICATIONS</ScrollButton>
                    <ScrollButton target="partners" class="cursor-pointer" data-aos="fade-down" data-aos-delay="400">PARTNERS</ScrollButton>
                    <ScrollButton target="contact-us" class="cursor-pointer" data-aos="fade-down" data-aos-delay="500">CONTACT US</ScrollButton>
                </nav>
            </div>
        </transition>
    </header>
</template>

<script setup>
    const isOpen = ref(false)
</script>

<style scoped>
    /* Smooth fade for overlay */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

</style>