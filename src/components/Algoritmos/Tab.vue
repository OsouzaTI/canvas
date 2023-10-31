<script setup lang="ts">
import { ref } from 'vue';
import Circle from './Circle.vue';
import Fill from './Fill.vue';
import Line from './Line.vue';
    const currentTab = ref<string>('Line');
    const tabs = {
        Line,
        Circle,
        Fill
    };
</script>

<template>
    <header class="flex flex-col justify-around">
        <div class="flex flex-row gap-1">
            <button
            v-for="(_, tab) in tabs"
            :key="tab"
            :class="['p-2 w-1/2 bg-stone-950 hover:bg-stone-800', 'tab-button', { active: currentTab === tab }]"
            @click="currentTab = tab"
            >
            {{ tab }}
            </button>
        </div>
        <div class="p-5 w-full h-5/6">
            <component :is="tabs[currentTab]" />
        </div>
        <button class="p-2 m-2 rounded-md text-black bg-green-500 hover:bg-green-600">Processar</button>
    </header>   
</template>