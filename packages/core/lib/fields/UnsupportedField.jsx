import { defineComponent } from 'vue';
export default defineComponent({
    name: 'UnsupportedField',
    props: {
        schema: {
            type: Object,
            required: true,
        },
        reason: {
            type: String,
            required: true,
        },
    },
    setup() {
        return () => <div>unsupported</div>;
    },
});
