export class TokenizerDetokenizer {
    /**
     * Encode a string into comma-separated decimal Unicode values.
     */
    public encode(text: string): string {
        if (!text) return "";
        return Array.from(text)
            .map(char => char.charCodeAt(0).toString())
            .join(",");
    }

    /**
     * Decode comma-separated decimal Unicode values into a string.
     */
    public decode(decimalStr: string): string {
        if (!decimalStr.trim()) return "";

        const decimals = decimalStr.split(",").map(num => parseInt(num.trim(), 10));

        if (decimals.some(num => isNaN(num) || num < 0 || num > 0x10FFFF)) {
            throw new Error("Invalid input: Must be comma-separated numbers between 0 and 1114111");
        }

        return String.fromCodePoint(...decimals);
    }
}
