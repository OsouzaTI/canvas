<script setup lang="ts">
    import { useAlgorithmStore } from '@/stores/algorithm';
import { useFigureStore } from '@/stores/figures';
    const { placeholder, options } = defineProps(['placeholder', 'options'])
    const store = useFigureStore();
</script>

<template> 
    <div class="flex justify-around">    
        <select v-model="store.$state.figure" class="rounded-sm p-1">        
            <option name="figure" v-for="(option, id) in options" :value="option" :key="id" :id="option">            
                {{ option }}
            </option>
        </select>  
    </div> 
</template>