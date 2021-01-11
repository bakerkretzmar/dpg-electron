<template>
    <div class="flex items-center space-x-4">
        <span
            class="flex items-center justify-center w-full h-12 px-6 text-xl font-bold text-opacity-95 bg-opacity-50 rounded-lg"
            :class="[color, content ? 'text-gray-800' : 'text-gray-500']"
        >
            {{ split(content || '•'.repeat(length)) }}
        </span>
        <Copy :text="content" />
    </div>
</template>

<script>
import Copy from './Copy';

const split = (s, n = 3) => [...Array(Math.ceil(s.length / n))].map((_, i) => s.slice(i * n, i * n + n)).join(' ');

export default {
    components: { Copy },
    props: {
        content: String,
        length: Number,
        color: String,
    },
    setup() {
        return { split };
    },
};
</script>
