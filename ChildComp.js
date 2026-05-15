export default {
    template: `
        <h2>A Child Component</h2>
        <p><i>{{childCompMsg}}</i></p>
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