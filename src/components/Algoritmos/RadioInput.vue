<script setup lang="ts">
    import { useAlgorithmStore } from '@/stores/algorithm';
    const { placeholder, options } = defineProps(['placeholder', 'options'])
    const store = useAlgorithmStore();
</script>

<template> 
    <div class="flex justify-around">        
        <div v-for="(option, id) in options" class="flex gap-2">        
            <input v-model="store.$state.algorithm" type="radio" name="algoritmo"  :value="option" :key="id" :id="option" />
            <label :for="option">{{ option }}</label>
        </div>  
    </div> 
</template>