<template>
    <div class="w-full h-9" style="-webkit-user-select: none; -webkit-app-region: drag"></div>
    <div class="grid grid-cols-1 gap-6 m-12">
        <label class="block">
            <span class="text-gray-700">Sentence</span>
            <input
                v-model="input.sentence"
                class="block w-full mt-1 rounded-md border-gray-400 shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
            />
        </label>
        <label class="block">
            <span class="text-gray-700">Word</span>
            <input
                v-model="input.word"
                class="block w-full mt-1 rounded-md border-gray-400 shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
            />
        </label>
    </div>
    <div class="grid grid-cols-1 gap-4 mx-12">
        <OutputRow :content="output.short" :length="12" color="bg-yellow-200" />
        <OutputRow :content="output.long" :length="24" color="bg-teal-200" />
        <OutputRow :content="output.phrase" :length="24" color="bg-green-200" />
    </div>
</template>

<script>
import { reactive, watch } from 'vue';
import OutputRow from './components/OutputRow';
import password from './dpg';

export default {
    components: { OutputRow },
    setup() {
        const input = reactive({ sentence: '', word: '' });
        const output = reactive({ short: '', long: '', phrase: '' });
        const options = reactive({ show: false, dark: false });

        watch(input, () => {
            [output.short, output.long, output.phrase] =
                input.sentence || input.word ? password(input.sentence, input.word) : ['', '', ''];
        });

        return {
            input,
            output,
            options,
        };
    },
};
</script>

<style src="./assets/tailwind.css"></style>
