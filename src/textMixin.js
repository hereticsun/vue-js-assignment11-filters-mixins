export const textMixin = {
    data() {
        return {
            copy: 'The party told you to reject the evidence of your eyes and ears. It was their final, most essential command… and if all others accepted the lie, which the party imposed, if all records told the same tale, then the lie passed into history and became truth'
        }
    },
    computed: {
        countedText() {
            return this.copy + ' (' + this.copy.length + ')';
        }
    }
}
