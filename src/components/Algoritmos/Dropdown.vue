<script setup lang="ts">
    const { placeholder, options } = defineProps(['placeholder', 'options'])
</script>

<template>    
    <select name="algoritmo" class="p-2 rounded-sm m-2 w-full text-black">
        <option value="" selected disabled>{{ placeholder }}</option>
        <option v-for="(option, id) in options" :value="option" :key="id">
            {{ option }}
        </option>
    </select>
</template>