function gcd(a: number, b: number): number {
    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}