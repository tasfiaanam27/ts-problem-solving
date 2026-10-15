interface CartItem {
    price: number;
    quantity: number;
    discount: number;
}

function calculateCartTotal(items: CartItem[], taxRate: number): number {
    const subtotal = items.reduce((total, item) => {
        const itemTotal = item.price * item.quantity * (1 - item.discount / 100);
        return total + itemTotal;
    }, 0);

    const finalTotal = subtotal * (1 + taxRate / 100);

    return Math.round(finalTotal * 100) / 100;
}