<template>
    <div ref="wrapper" :class="wrapperClass">
        <span v-if="prefix">{{ prefix }}</span>
        <span ref="countEl">{{ startVal }}</span>
        <span v-if="suffix" :class="suffixClass">{{ suffix }}</span>
    </div>
</template>

<script setup>
import { CountUp } from "countup.js"

const props = defineProps({
    startVal: { type: Number, default: 0 },
    endVal: { type: Number, required: true },
    duration: { type: Number, default: 2.5 },
    decimalPlaces: { type: Number, default: 0 },
    prefix: { type: String, default: "" },
    suffix: { type: String, default: "" },
    wrapperClass: { type: String, default: "" },
    suffixClass: { type: String, default: "" },
    triggerOnce: { type: Boolean, default: true }, // animate only once
    threshold: { type: Number, default: 0.5 }, // intersection trigger point
})

const wrapper = ref(null)
const countEl = ref(null)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                const counter = new CountUp(countEl.value, props.endVal, {
                    startVal: props.startVal,
                    duration: props.duration,
                    decimalPlaces: props.decimalPlaces,
                })

                counter.start()

                if (props.triggerOnce) observer.disconnect()
            }
        },
        { threshold: props.threshold }
    )

    observer.observe(wrapper.value)
})
</script>
