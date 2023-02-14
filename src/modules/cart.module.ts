interface ICart {
cartid: number;
productid: number;
quantity: number;
dateadded: Date;
addCartItems: () => string;
updateQuantity: () => number;
viewCartDate: () => void;
checkOut: () => void;
}

export class Cart implements ICart {
cartid: number;
productid: number;
quantity: number;
dateadded: Date;

constructor (
cartid: number,
productid: number,
quantity: number,
dateadded: Date,
) {
    (this.cartid = cartid),
    (this.productid = productid),
    (this.quantity = quantity),
    (this.dateadded = dateadded)
}
addCartItems(): string {
    // This method is used by a user {Customer} to add items in a cart.
    // A customer, products/items needed
    return ""
}
updateQuantity(): number{
    // Increase or decrease the product quantity.
    // Products required.
    return 0
}
viewCartDate(): void {
    // This is the date in which the cart items where submitted
    return 
}
checkOut(): void {
    // Is the process of submitting the items in the cart.
    // After submission, the items are then taken as orders.
    return
}
}
