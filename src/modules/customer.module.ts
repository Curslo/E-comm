interface ICustomer {
  customerName: string;
  customerid: number;
  customerEmail: string;
  customerPassword: string;
  customerAvater: void;
  customerAddress: string;
  creditCardInfo: string;
  shippinginfo: string;
  accountbalance: number;
  register: () => void;
  login: () => void;
  updateProfile: () => void;
}

export class Customer implements ICustomer {
    customerName: string;
  customerid: number;
  customerEmail: string;
  customerPassword: string;
  customerAvater: void;
  customerAddress: string;
  creditCardInfo: string;
  shippinginfo: string;
  accountbalance: number;

  constructor(
    cusomerName: string,
    customerid: number,
    customerEmail: string,
    customerPassword: string,
    customerAvater: void,
    customerAddress: string,
    creditCardInfo: string,
    shippinginfo: string,
    accountbalance: number
  ) {
    (this.customerName = cusomerName),
    (this.customerid = customerid),
      (this.customerEmail = customerEmail),
      (this.customerPassword = customerPassword),
      (this.customerAvater = customerAvater),
      (this.customerAddress = customerAddress),
      (this.creditCardInfo = creditCardInfo),
      (this.shippinginfo = shippinginfo),
      (this.accountbalance = accountbalance);
  }
  register(): void {
    // The process of collecting user data for verification next time the user wants to use the web app.
    // Data is collected using a form and then send to the database for storage.
    return;
  }
  login(): void {
    // Is the process of verifying a user using the user username and password
    return;
  }
  updateProfile(): void {
    // This is the process of adding, or removing user data from the user account.
    return;
  }
}
