<template>
    <button
        @click="copy"
        class="flex items-center justify-center w-12 h-12 text-gray-400 hover:text-gray-600 active:hover:text-gray-600 focus:hover:text-gray-600 bg-gray-100 rounded-lg"
    >
        <svg
            class="h-8 pl-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            ></path>
        </svg>
    </button>
</template>

<script>
import { clipboard } from 'electron';

export default {
    props: {
        text: String,
    },
    setup(props) {
        return {
            copy: () => clipboard.writeText(props.text),
        };
    },
};
</script>
