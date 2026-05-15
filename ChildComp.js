export default {
    template: `
        <h2>A Child Component</h2>
        <p><i>{{childCompMsg}}</i></p>
        <slot>
            <h3>Fallback No message slot received from the parent => fallback content</h3>
        </slot>
    `,
    props: {
        childCompMsg: String
    },
    emits: ['childCompEvent'],
    created() {
        let domParser = new DOMParser();
        this.$emit(
            'childCompEvent',
            "Message sent from Child Component to the parent Component using <b style='color:green;'>$emit()</b>"
        );
    }
} 