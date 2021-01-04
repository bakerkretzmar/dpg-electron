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
        <span
            class="block px-6 py-4 text-xl font-bold text-gray-800 text-opacity-95 bg-yellow-200 bg-opacity-50 rounded-lg"
        >
            {{ output.short }}
        </span>
        <span
            class="block px-6 py-4 text-xl font-bold text-gray-800 text-opacity-95 bg-teal-200 bg-opacity-50 rounded-lg"
        >
            {{ output.long }}
        </span>
        <span
            class="block px-6 py-4 text-xl font-bold text-gray-800 text-opacity-95 bg-green-200 bg-opacity-50 rounded-lg"
        >
            {{ output.phrase }}
        </span>
    </div>
</template>

<script>
import { reactive, watch } from 'vue';
import password from './dpg';

const split = (s, n = 3) => [...Array(Math.ceil(s.length / n))].map((_, i) => s.slice(i * n, i * n + n)).join(' ');

export default {
    setup() {
        const input = reactive({ sentence: '', word: '' });
        const output = reactive({ short: '', long: '', phrase: '' });

        watch(input, () => {
            let [short, long, phrase] = password(input.sentence, input.word);
            output.short = split(short);
            output.long = split(long);
            output.phrase = split(phrase);
        });

        return { input, output };
    },
};
</script>

<style src="./assets/tailwind.css"></style>
