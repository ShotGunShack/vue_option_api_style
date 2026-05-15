export default {
    template: `
        <h2>A Child Component</h2>
        <p><i>{{childCompMsg}}</i></p>
    `,
    props: {
        childCompMsg: String
    }
} 