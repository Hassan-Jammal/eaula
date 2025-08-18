<template>
    <section class="container mt-12">
        <NuxtImg src="images/ice-cube-bottle.png" alt="Ice Bottle" width="3024" height="4604" />
        <h1 class="text-center font-Anton text-6xl md:text-9xl !leading-[150%] uppercase mt-24" data-aos="fade-up">The future <br /> of water <br /> is <span class="opacity-0 invisible hidden">Local</span></h1>
        <NuxtImg data-aos="fade-up" class="mx-auto mt-12 md:mt-24 max-md:w-2/3" src="images/nature.svg" alt="Ice Bottle" width="733" height="268" />
    </section>

    <section id="about-us" class="my-12 py-12 relative">
        <NuxtImg src="images/water-drop.png" alt="Ice Bottle" width="3024" height="3790" />

        <div class="absolute top-[40%] -translate-y-1/2 left-0 w-full z-10">
            <div class="container max-md:flex max-md:justify-between">
                <div>
                    <h2 class="font-NeueMontrealMedium text-sm md:text-4xl uppercase" data-aos="fade-up">Elevating water</h2>
                    <h3 class="text-sm md:text-4xl mt-4" data-aos="fade-up">Purified. Mineralized. <br /> Sustainable</h3>
                </div>

                <AnimatedCounter 
                    :end-val="7.9" 
                    :decimal-places="1" 
                    prefix="~ " 
                    suffix="ph"
                    wrapper-class="md:hidden max-md:text-6xl text-[#A9A9A9]"
                    suffix-class="text-sm text-black uppercase"
                    data-aos="fade-up"
                />
            </div>
        </div>

        <div class="absolute bottom-[20%] -translate-y-1/2 left-0 w-full z-10">
            <div class="container grid grid-cols-2 text-center">
                <h2 class="animated-text text-xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">Born in the</h2>
                <h3 class="animated-text text-xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">UAE</h3>
            </div>
        </div>

        <div class="absolute bottom-[15%] -translate-y-1/2 left-0 w-full z-10">
            <div class="container grid grid-cols-3 text-center">
                <h2 class="animated-text text-xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl text-[#A9A9A9]">Built for the</h2>
                <div></div>
                <h3 class="animated-text text-xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl text-[#A9A9A9]">World</h3>
            </div>
        </div>

        <div class="max-md:hidden absolute bottom-[5%] -translate-y-1/2 right-0 md:right-16 lg:right-24 4xl:right-44 w-full z-10">
            <AnimatedCounter 
                :end-val="7.9" 
                :decimal-places="1" 
                prefix="~ " 
                suffix="ph"
                wrapper-class="container text-[#A9A9A9] text-3xl sm:text-7xl lg:text-8xl xl:text-9xl 3xl:text-[180px] text-right"
                suffix-class="text-3xl text-black uppercase"
                data-aos="fade-up"
            />
        </div>
    </section>

    <section class="relative">
        <div class="marquee text-3xl md:text-9xl">
            <span>No shipping&nbsp;&centerdot;&nbsp;No compromise&nbsp;&centerdot;&nbsp;</span>
            <span>No shipping&nbsp;&centerdot;&nbsp;No compromise&nbsp;&centerdot;&nbsp;</span>
        </div>
    </section>

    <section id="our-dna" class="py-56 md:py-96 relative before:content-[''] text-white">
        <div class="absolute bottom-0 left-0 w-full h-full -z-10">
            <NuxtImg class="w-full h-full max-md:object-cover" src="images/mountains.png" alt="Mountains" width="" height="" />
        </div>

        <div class="relative container">
            <h3 class="text-lg uppercase" data-aos="fade-up">Our DNA</h3>
            <h2 class="font-NeueMontrealMedium text-[#F5F5F5] text-4xl md:w-1/3 mt-4" data-aos="fade-up">Leading the GCC's Shift to Sustainable Hydration.</h2>
            
            <div class="hidden md:grid grid-cols-4 mt-24">
                <div class="relative">
                    <span class="block absolute top-0 -translate-y-1/2 left-0 bg-white w-8 h-8 rounded-full border"></span>
                    <span class="sonar block absolute top-0 -translate-y-1/2 -left-2 bg-transparent w-12 h-12 rounded-full border"></span>
                    <span class="block absolute top-0 left-0 bg-white w-full h-[1px]"></span>
                    
                    <div class="mt-20 md:w-4/5" data-aos="fade-right" data-aos-delay="0">
                        <h2 class="text-[#F5F5F5] text-2xl">Advanced Filtration Installation</h2>
                        <p class="mt-8">Eaula delivers premium still and sparkling water, purified with high-grade Italian filtration and served in elegant, microplastic-free glass bottles.</p>
                    </div>
                </div>
                
                <div class="relative">
                    <span class="block absolute top-0 -translate-y-1/2 left-0 bg-white w-8 h-8 rounded-full border"></span>
                    <span class="sonar block absolute top-0 -translate-y-1/2 -left-2 bg-transparent w-12 h-12 rounded-full border"></span>
                    <span class="block absolute top-0 left-0 bg-white w-full h-[1px]"></span>
                    
                    <div class="mt-20 md:w-4/5" data-aos="fade-right" data-aos-delay="100">
                        <h2 class="text-[#F5F5F5] text-2xl">Bottling with Sustainability</h2>
                        <p class="mt-8">Each bottle is filled directly at the venue using advanced Italian filtration systems. After use, it is sanitized and prepared for reuse, delivering freshness, with minimal impact.</p>
                    </div>
                </div>

                <div class="relative">
                    <span class="block absolute top-0 -translate-y-1/2 left-0 bg-white w-8 h-8 rounded-full border"></span>
                    <span class="sonar block absolute top-0 -translate-y-1/2 -left-2 bg-transparent w-12 h-12 rounded-full border"></span>
                    <span class="block absolute top-0 left-0 bg-white w-full h-[1px]"></span>
                    
                    <div class="mt-20 md:w-4/5" data-aos="fade-right" data-aos-delay="200">
                        <h2 class="text-[#F5F5F5] text-2xl">Continuous Quality Control</h2>
                        <p class="mt-8">Eaula meets all Dubai and international safety standards, with regular lab testing and strict quality checks to ensure purity and consistency.</p>
                    </div>
                </div>

                <div class="relative">
                    <span class="block absolute top-0 -translate-y-1/2 left-0 bg-white w-8 h-8 rounded-full border"></span>
                    <span class="sonar block absolute top-0 -translate-y-1/2 -left-2 bg-transparent w-12 h-12 rounded-full border"></span>
                    <span class="block absolute top-0 left-0 bg-white w-full h-[1px]"></span>
                    
                    <div class="mt-20 md:w-4/5" data-aos="fade-right" data-aos-delay="300">
                        <h2 class="text-[#F5F5F5] text-2xl">Redefining Water Standards</h2>
                        <p class="mt-8">Eaula eliminates single-use plastics by using reusable glass bottles, offering a scalable and sustainable water solution tailored for the hospitality industry.</p>
                    </div>
                </div>
            </div>

            <div class="block md:hidden mt-24">
                <div class="relative flex justify-start items-start gap-8">
                    <div class="relative">
                        <span class="block bg-white w-4 h-4 rounded-full border"></span>
                        <span class="sonar block absolute top-1/2 -translate-y-1/2 -left-2 bg-transparent w-8 h-8 rounded-full border"></span>
                    </div>
                    <span class="block absolute top-0 left-2 -translate-x-1/2 bg-white w-[1px] h-full"></span>
                    <div class="md:w-4/5" data-aos="fade-up">
                        <h2 class="text-[#F5F5F5] text-2xl">Advanced Filtration Installation</h2>
                        <p class="mt-8">Eaula delivers premium still and sparkling water, purified with high-grade Italian filtration and served in elegant, microplastic-free glass bottles.</p>
                    </div>
                </div>
                <div class="relative flex justify-start items-start gap-8 pt-8">
                    <div class="relative">
                        <span class="block bg-white w-4 h-4 rounded-full border"></span>
                        <span class="sonar block absolute top-1/2 -translate-y-1/2 -left-2 bg-transparent w-8 h-8 rounded-full border"></span>
                    </div>
                    <span class="block absolute top-0 left-2 -translate-x-1/2 bg-white w-[1px] h-full"></span>
                    <div class="md:w-4/5" data-aos="fade-up">
                        <h2 class="text-[#F5F5F5] text-2xl">Advanced Filtration Installation</h2>
                        <p class="mt-8">Eaula delivers premium still and sparkling water, purified with high-grade Italian filtration and served in elegant, microplastic-free glass bottles.</p>
                    </div>
                </div>
                <div class="relative flex justify-start items-start gap-8 pt-8">
                    <div class="relative">
                        <span class="block bg-white w-4 h-4 rounded-full border"></span>
                        <span class="sonar block absolute top-1/2 -translate-y-1/2 -left-2 bg-transparent w-8 h-8 rounded-full border"></span>
                    </div>
                    <span class="block absolute top-0 left-2 -translate-x-1/2 bg-white w-[1px] h-full"></span>
                    <div class="md:w-4/5" data-aos="fade-up">
                        <h2 class="text-[#F5F5F5] text-2xl">Advanced Filtration Installation</h2>
                        <p class="mt-8">Eaula delivers premium still and sparkling water, purified with high-grade Italian filtration and served in elegant, microplastic-free glass bottles.</p>
                    </div>
                </div>
                <div class="relative flex justify-start items-start gap-8 pt-8">
                    <div class="relative">
                        <span class="block bg-white w-4 h-4 rounded-full border"></span>
                        <span class="sonar block absolute top-1/2 -translate-y-1/2 -left-2 bg-transparent w-8 h-8 rounded-full border"></span>
                    </div>
                    <span class="block absolute top-0 left-2 -translate-x-1/2 bg-white w-[1px] h-full"></span>
                    <div class="md:w-4/5" data-aos="fade-up">
                        <h2 class="text-[#F5F5F5] text-2xl">Advanced Filtration Installation</h2>
                        <p class="mt-8">Eaula delivers premium still and sparkling water, purified with high-grade Italian filtration and served in elegant, microplastic-free glass bottles.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-32 md:bottom-72 right-0 w-full">
            <div class="container flex justify-end items-center gap-1 text-xs text-right">
                <Icon name="lsicon:location-outline" class="text-xl md:text-3xl" />
                Hatta, UAE
            </div>
        </div>
    </section>

    <section id="our-team" class="my-12 py-12 relative">
        <div class="container">
            <div class="md:flex max-md:flex-col gap-12">
                <div class="md:w-1/5">
                    <h3 class="text-lg uppercase text-[#A9A9A9]" data-aos="fade-up">Our Team</h3>
                </div>
                <div class="md:w-4/5">
                    <h2 class="font-NeueMontrealMedium text-4xl md:w-1/3 max-md:mt-4" data-aos="fade-up">Meet the Team <br /> Behind the Movement</h2>
                    
                    <div class="flex max-md:flex-col gap-8 mt-12">
                        <div data-aos="fade-right" data-aos-delay="0">
                            <NuxtImg class="w-full" src="images/nick-habr.png" alt="Nick Habr" width="700" height="822" />
                            <h4 class="text-lg mt-4">Nick Habr</h4>
                            <h5 class="text-base text-[#A9A9A9]">Co-Founder</h5>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="100">
                            <NuxtImg class="w-full" src="images/bilal-ballout.png" alt="Bilal Ballout" width="700" height="822" />
                            <h4 class="text-lg mt-4">Bilal Ballout</h4>
                            <h5 class="text-base text-[#A9A9A9]">Co-Founder</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="certifications" class="my-12 py-12 relative">
        <div class="container">
            <h3 class="text-[#A9A9A9] text-lg uppercase text-center" data-aos="fade-up">CERTIFIED EXCELLENCE</h3>
            <h2 class="font-NeueMontrealMedium text-4xl md:w-1/3 mx-auto text-center mt-4" data-aos="fade-up">Supplier Certifications</h2>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                <div v-for="(item, index) in certifications" :key="index"
                    class="flex flex-col items-center gap-4 border border-[#A7A7A7] rounded-3xl py-4 md:py-12 px-4"
                    data-aos="fade-right"
                    :data-aos-delay="index * 100"
                >

                    <NuxtImg class="w-20" :src="`images/certifications/${item.icon}.svg`" :alt="item.alt" width="200" height="200" />
                    <p class="text-center text-xs md:text-2xl">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </section> 

    <section class="py-56 md:py-96 relative before:content-[''] text-white">
        <div class="absolute bottom-0 left-0 w-full h-full -z-10">
            <NuxtImg class="w-full h-full max-md:object-cover" src="images/river.png" alt="River" width="" height="" />
        </div>

        <div class="container">
            <div class="md:w-1/3 mx-auto text-center">
                <h2 class="font-NeueMontrealMedium text-[#F5F5F5] text-4xl mt-4" data-aos="fade-up">Sustainability Impact in the UAE</h2>
                <p class="mt-4" data-aos="fade-up">Each Eaula bottle replaces a single-use alternative and cuts emissions at the source.</p>
                <p class="mt-12 uppercase text-2xl" data-aos="fade-up">Small switch. Massive impact.</p>
            </div>
        </div>

        <div class="border-t border-white mt-8">
            <div class="container">
                <div class="flex justify-between">
                    <div class="w-1/2 pr-4 md:pr-12 py-12 border-r-[0.5px] border-white">
                        <p class="text-base" data-aos="fade-up">Bottles Eliminated ( 500mL )</p>
                        <AnimatedCounter
                            :end-val="947000"
                            :duration="3"
                            :decimal-places="0"
                            suffix="+"
                            wrapper-class="text-3xl md:text-7xl mt-4"
                            data-aos="fade-up"
                        />
                    </div>
                    <div class="w-1/2 pl-4 md:pl-12 py-12 border-l-[0.5px] border-white">
                        <p class="text-base" data-aos="fade-up">CO2 Emissions Reduced</p>
                        <AnimatedCounter
                            :end-val="78411"
                            :duration="3"
                            :decimal-places="0"
                            suffix=" kg"
                            wrapper-class="text-3xl md:text-7xl mt-4"
                            data-aos="fade-up"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-32 md:bottom-72 right-0 w-full">
            <div class="container flex justify-end items-center gap-1 text-xs text-right">
                <Icon name="lsicon:location-outline" class="text-xl md:text-3xl" />
                Fujairah, UAE
            </div>
        </div>
    </section>

    <section id="partners" class="my-12 py-12 relative">
        <div class="container">
             <div class="relative md:flex max-md:flex-col gap-12">
                <div class="md:w-1/5 md:sticky md:top-20 md:left-0 md:h-max">
                    <h3 class="text-lg uppercase text-[#A9A9A9]" data-aos="fade-up">Our Partners</h3>
                    <h2 class="font-NeueMontrealMedium text-4xl mt-4" data-aos="fade-up">Trusted by the Region’s Most Iconic and Forward-Thinking Hospitality Groups.</h2>
                </div>
                <div class="md:w-4/5 max-md:mt-12">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div v-for="(item, index) in partners" :key="index"
                            class="flex flex-col justify-center items-center gap-4 aspect-square border border-[#A7A7A7] rounded-3xl p-4"
                            data-aos="fade-right"
                            :data-aos-delay="index * 50"
                        >
                            <NuxtImg :src="`images/partners/${item.icon}.svg`" :alt="item.alt" width="140" height="140" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 

    <section id="contact-us" class="my-12 py-12 relative">
        <div class="container">
            <div class="relative flex max-md:flex-col md:justify-between gap-6 md:gap-12">
                <div class="md:w-2/5">
                    <h3 class="text-lg uppercase text-[#A9A9A9]" data-aos="fade-up">Contact Us</h3>
                    <h2 class="font-NeueMontrealMedium text-4xl mt-4" data-aos="fade-up">Stay Connected to The Source.</h2>

                    <div class="flex justify-between gap-4 mt-12 md:mt-24">
                        <div class="w-1/2">
                            <p class="font-NeueMontrealMedium text-base" data-aos="fade-up">Contact</p>
                            <p class="text-sm mt-4" data-aos="fade-up">info@eaulawater.com</p>
                        </div>
                        <div class="w-1/2">
                            <p class="font-NeueMontrealMedium text-base" data-aos="fade-up">Address</p>
                            <p class="text-sm mt-4" data-aos="fade-up">Block B, Dubai Science Park</p>
                        </div>
                    </div>
                </div>

                <div class="md:w-1/5"></div>

                <div class="md:w-2/5">
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-2" data-aos="fade-up">
                            <label for="full_name" class="text-sm text-[#A9A9A9]">Name*</label>
                            <input v-model="form.full_name" type="text" id="full_name" class="w-full bg-transparent p-2 text-sm border border-[#A9A9A9]" placeholder="Insert your Name" />
                            <div v-if="errors.full_name" class="text-red-500 text-xs">{{ errors.full_name }}</div>
                        </div>
                        <div class="flex flex-col gap-2" data-aos="fade-up">
                            <label for="email" class="text-sm text-[#A9A9A9]">Email*</label>
                            <input v-model="form.email" type="text" id="email" class="w-full bg-transparent p-2 text-sm border border-[#A9A9A9]" placeholder="Insert your Email" />
                            <div v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</div>
                        </div>
                        <div class="flex flex-col gap-2" data-aos="fade-up">
                            <label for="mobile-number" class="text-sm text-[#A9A9A9]">Phone Number</label>
                            <div class="relative flex flex-row items-start gap-2">
                                <div class="flex flex-col gap-1 w-[160px]">
                                    <div @click="toggleDropdown" class="custom-dropdown w-full bg-[#A9A9A9]/20 p-2 text-sm border border-[#A9A9A9] outline-none cursor-pointer">
                                        <div id="selected-country" class="flex justify-start items-center gap-2 select-none">
                                            <NuxtImg loading="lazy" :src="`/images/flags/${selectedCountry.iso2 || 'LB' }.svg`" :alt="selectedCountry.name || 'Lebanon'" width="20" height="20" />
                                            <span class="text-sm">+{{ selectedCountry.code || '961' }}</span>
                                        </div>
                                    </div>
                                    <input v-model="form.code" type="hidden" id="code">
                                    <div v-if="errors.code" class="text-xs text-red-500">{{ errors.code }}</div>
                                </div>

                                <ul v-if="showDropdown" ref="dropdownContainer" @scroll="handleScroll" class="dropdown-container shadow-black/20 shadow-md absolute top-full left-0 w-full max-h-[200px] text-sm rounded-xl bg-white text-black mt-2 overflow-auto z-50">
                                    <input v-model="searchQuery" type="text" id="search" placeholder="Search" class="sticky top-0 left-0 w-full bg-white px-4 py-2 border-b border-b-[#D4D4D4] outline-0 z-10">
                                    <template v-for="country in filteredCountries">
                                        <li v-if="country.status == 1" :key="country.id" @click="selectCountry(country)" class="flex gap-2 text-black p-2 hover:bg-[#D4D4D4] cursor-pointer">
                                            <NuxtImg loading="lazy" :src="`/images/flags/${country.iso2}.svg`" :alt="country.name" width="20" height="20" />
                                            <span class="text-xs text-[#73788B]">(+{{ country.code }})</span>
                                            <span class="text-xs">{{ country.name }}</span>
                                        </li>
                                    </template>
                                </ul>

                                <div class="flex flex-col gap-1 w-full">
                                    <input v-model="form.mobile" type="text" id="mobile" placeholder="Insert your Phone Number" class="w-full bg-transparent p-2 text-sm border border-[#A9A9A9] outline-none">
                                    <div v-if="errors.mobile" class="text-xs text-red-500">{{ errors.mobile }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2" data-aos="fade-up">
                            <label for="message" class="text-sm text-[#A9A9A9]">Message*</label>
                            <textarea v-model="form.message" id="message" class="w-full bg-transparent p-2 text-sm border border-[#A9A9A9] resize-none" rows="10" placeholder="Message Us"></textarea>
                            <div v-if="errors.message" class="text-red-500 text-xs">{{ errors.message }}</div>
                        </div>
                        <div class="flex flex-col gap-2" data-aos="fade-up">
                            <button id="submit" class="w-full bg-[#081C35] py-2 text-white text-base rounded-full" :disabled="isSubmitting" @click.prevent="handleSubmit">Submit</button>
                            <div v-if="submissionMessage" class="text-sm" :class="{'text-red-500': isError, 'text-[#A9A9A9]': !isError}">{{ submissionMessage }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>

<script setup>
	import { useCountry } from '~/composables/useCountry';
    import { animate, stagger, text } from 'animejs';
    import { useTextAnimateOnScroll } from '~/composables/useTextAnimateOnScroll';

    useTextAnimateOnScroll(); // automatically handles all elements with .animated-text

    useSeoMeta({ 
        title: 'Homepage',
        description: '',

        ogTitle: 'Homepage',
        ogDescription: '',
        ogImage: 'https://moya.com/images/og-image-1200x630.webp',

        twitterTitle: 'Homepage',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const certifications = [
        {
            icon: "nsf",
            alt: "NSF Certification Logo",
            text: "NSF Certified components and filter media"
        },
        {
            icon: "ecas",
            alt: "ECAS Certification Logo",
            text: "Water is tested to ECAS standard"
        },
        {
            icon: "wras",
            alt: "WRAS Certification Logo",
            text: "Water Regulations Advisory Scheme"
        },
        {
            icon: "iso",
            alt: "ISO Certification Logo",
            text: "Filters, dispensers and fittings manufactured in ISO Certified facilities"
        },
        {
            icon: "ce",
            alt: "CE Certification Logo",
            text: "Conformité Européenne"
        },
        {
            icon: "water-quality",
            alt: "Water Quality Certification Logo",
            text: "WQA Certified components"
        }
    ]

    const partners = [
        { icon: "rosas-thai", alt: "Rosa’s Thai Café logo" },
        { icon: "al-safadi", alt: "Al Safadi Restaurant logo" },
        { icon: "awani", alt: "Awani Restaurant logo" },
        { icon: "bageri-form", alt: "Bageri Form logo" },
        { icon: "bartartine", alt: "Bartartine Bakery logo" },
        { icon: "bebabel", alt: "Bebabel Restaurant logo" },
        { icon: "bkry", alt: "BKRY Bakery logo" },
        { icon: "black-coffee", alt: "Black Coffee logo" },
        { icon: "black-tap", alt: "Black Tap Craft Burgers & Shakes logo" },
        { icon: "bosporus", alt: "Bosporus Turkish Cuisine logo" },
        { icon: "brasserie-cq-francaise", alt: "Brasserie CQ Française logo" },
        { icon: "catch-22", alt: "Catch 22 Restaurant logo" },
        { icon: "charlie-and-friends", alt: "Charlie and Friends logo" },
        { icon: "circle-cafe", alt: "Circle Café logo" },
        { icon: "eatopi", alt: "Eatopi logo" },
        { icon: "fifth-flavor", alt: "Fifth Flavor logo" },
        { icon: "funkcoolio", alt: "Funkcoolio logo" },
        { icon: "girl-and-the-goose", alt: "Girl and the Goose logo" },
        { icon: "habib-beirut", alt: "Habib Beirut logo" },
        { icon: "harrumanis", alt: "Harrumanis logo" },
        { icon: "home-bakery", alt: "Home Bakery logo" },
        { icon: "kokoro", alt: "Kokoro Japanese Restaurant logo" },
        { icon: "le-relais-de-lentrecote", alt: "Le Relais de l’Entrecôte logo" },
        { icon: "matter-by-icoffee", alt: "Matter by iCoffee logo" },
        { icon: "mila-by-smoky", alt: "Mila by Smoky logo" },
        { icon: "mohalla", alt: "Mohalla Restaurant logo" },
        { icon: "moonrise", alt: "Moonrise Dubai logo" },
        { icon: "oppidan", alt: "Oppidan Restaurant logo" },
        { icon: "parkers", alt: "Parkers Restaurant logo" },
        { icon: "paul", alt: "Paul Bakery and Restaurant logo" },
        { icon: "peoke", alt: "Peoke logo" },
        { icon: "seven-sisters-dubai", alt: "Seven Sisters Dubai logo" },
        { icon: "sfumato", alt: "Sfumato logo" },
        { icon: "smoky-beach", alt: "Smoky Beach Dubai logo" },
        { icon: "soul-kitchen", alt: "Soul Kitchen logo" },
        { icon: "spill-the-bean", alt: "Spill the Bean Café logo" },
        { icon: "thea", alt: "Thea Restaurant logo" },
        { icon: "three-cuts", alt: "Three Cuts Steakhouse logo" },
        { icon: "wakame", alt: "Wakame Japanese Restaurant logo" },
        { icon: "wine-arts-soiree", alt: "Wine & Arts Soiree logo" },
        { icon: "woodfire", alt: "Woodfire Restaurant logo" },
        { icon: "babel", alt: "Babel Restaurant logo" },
    ]

    const { selectedCountry, detectCountry, countriesData } = useCountry();

    const emit = defineEmits();

    const route = useRoute();
    const currentPath = route.path;
    const currentRoute = computed(() => route.path);

    // Country-related State
    const countries = ref([]);
    const showDropdown = ref(false);
    const placeholder = 'Code';
    const filteredCountries = ref([]);
    const searchQuery = ref('');
    const dropdownContainer = ref(null);
    const lastLoadedIndex = ref(0);
    const searchFlag = ref(false);
    const initialCode = ref(''); // Store initial value

    // Submission State
    const submissionMessage = ref('');
    const isSubmitting = ref(false);
    const isError = ref(false);

    onMounted(async () => {
        // Load initial countries in the country code dropdown
        loadInitialCountries();

        // Detect country immediately on component mount and assign it to form.value.code
        detectCountry().then(() => {
            initialCode.value = selectedCountry.value.code
            form.value.code = selectedCountry.value.code;
        });
    });

    const form = ref({
        full_name: '',
        email: '',
        code: '',
        mobile: '',
        message: '',
    });

    const errors = ref({
        full_name: '',
        email: '',
        code: '',
        mobile: '',
        message: '',
    });

    const validationRules = {
        full_name: {
            required: 'Please insert your full name',
            safe: 'Your input has invalid value'
        },
        email: {
            required: 'Please insert your email address',
            email: 'Please insert a valid email address',
            safe: 'Your input has invalid value'
        },
        code: {
            required: 'Please choose your country code',
            code: 'Please insert a valid country code',
            safe: 'Your input has invalid value'
        },
        mobile: {
            required: 'Please insert your phone number',
            numeric: 'Please insert a valid numeric phone number',
            length: 'Please insert a valid phone number',
            safe: 'Your input has invalid value'
        },
        message: {
            required: 'Please insert your message',
            safe: 'Your input has invalid value'
        },
    };

    // Submitting the form
    const handleSubmit = async () => {

        // Disable the submit button
        isSubmitting.value = true;

        // Validate form fields
        const isFormValid = validateForm(form, errors, validationRules);

        // If either form or file validation fails, stop submission
        if (!isFormValid) {
            // console.log('Validation failed:', errors.value);
            isSubmitting.value = false; // Re-enable the button
            submissionMessage.value = 'Please ensure all required fields are correctly filled and try submitting again.'; // Re-enable the butto
            isError.value = true;
            return; // Stop submission if form or file validation fails
        }

        try {
            // const API_ENDPOINT = 'https://backend.moya.com/wp-json/contact-form-7/v1/contact-forms/13/feedback';
            const formData = new FormData();

            // Append top-level fields

            Object.keys(form.value).forEach((key) => {
                formData.append(key, form.value[key]);
            });
            formData.append('_wpcf7_unit_tag', 'rte');

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    // 'Content-Type': 'multipart/form-data' // No need to set this header for FormData
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            // console.log("Form submitted successfully:", data);

            if(data.status == 'validation_failed'){
                submissionMessage.value = "Error in submitting your message. Please try again later";
                isError.value = true;

                // Clear error message after 2 seconds
                setTimeout(() => {
                    submissionMessage.value = '';
                }, 2000);
                throw new Error('Validation Error');
            }

            submissionMessage.value = "Thank you for your message."
            isError.value = false;
            // Clear success message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);

            resetForm();
            //Handle success response, such as notifying the user or redirecting
        } catch (error) {
            // console.error("Form submission error:", error);
            // Set error message
            submissionMessage.value = "Error in submitting your message. Please try again later";
            isError.value = true;

            // Clear error message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);
        } finally {
            // Re-enable the submit button
            isSubmitting.value = false;
        }
    };

    // Resetting the form
    const resetForm = () => {
        form.value = {
            full_name: '',
            email: '',
            code: selectedCountry.value ? selectedCountry.value.code : initialCode.value,
            mobile: '',
            message: '',
        };
        errors.value = {
            full_name: '',
            email: '',
            code: '',
            mobile: '',
            message: '',
        };
    };

    // Choosing Country
    const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value;

        // Reset country list and lastLoadedIndex when closing the dropdown
        if (!showDropdown.value) {
            resetDropdown();
        }
    };

    const resetDropdown = () => {
        countries.value = [];
        lastLoadedIndex.value = 0;
        filteredCountries.value = [];
        searchFlag.value = false
        searchQuery.value = ''
        loadInitialCountries();
    };

    const closeDropdown = () => {
        loadInitialCountries();
    };

    const selectCountry = (country) => {
        selectedCountry.value = country;
        form.value.code = country.code;
        emit('select', country);
        showDropdown.value = false;
        resetDropdown()
    };

    const loadInitialCountries = () => {
        loadNextCountries();
    };

    const loadNextCountries = () => {
        const batchSize = 10;
        const startIndex = lastLoadedIndex.value;
        const endIndex = startIndex + batchSize;
        const nextBatch = countriesData.slice(startIndex, endIndex);

        countries.value = [...countries.value, ...nextBatch];
        lastLoadedIndex.value = endIndex;
        filteredCountries.value = countries.value;
    };

    const handleScroll = () => {
        const container = dropdownContainer.value;
        if (searchQuery.value === '' && container.scrollTop + container.clientHeight >= container.scrollHeight - 20) {
            if (!searchFlag.value) {
                loadNextCountries();
            }
        }
    };

    const searchCountries = () => {
        const searchResults = countriesData.filter((country) =>
            country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
        if (searchQuery.value != '') {
            filteredCountries.value = searchResults;
            searchFlag.value = true
        }
        else {
            resetDropdown();
        }
    };

    watch(searchQuery, searchCountries);
</script>

<style lang="sass">
    @keyframes marquee
        0%
            transform: translateX(0)

        100%
            transform: translateX(-100%)

    .marquee
        display: flex
        align-items: center
        justify-content: flex-start
        overflow: hidden

        span
            text-transform: uppercase
            will-change: transform
            transform: translateX(0)
            white-space: nowrap
            animation: marquee 24s linear infinite

        &:hover
            span
                animation-play-state: paused
            

    @keyframes sonar-ping
        0%
            transform: translateY(-50%) scale(1)
            opacity: 0.5
    
        100%
            transform: translateY(-50%) scale(1.2)
            opacity: 0
    
    .sonar
        animation: sonar-ping 1.5s infinite
   
</style>