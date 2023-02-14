interface IUser {
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

export class User implements IUser {
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
    customerName: string,
    customerid: number,
    customerEmail: string,
    customerPassword: string,
    customerAvater: void,
    customerAddress: string,
    creditCardInfo: string,
    shippinginfo: string,
    accountbalance: number,
  ) 
  {
    (this.customerName = customerName),
    (this.customerid = customerid),
    (this.customerEmail = customerEmail),
    (this.customerPassword = customerPassword),
    (this.customerAvater = customerAvater),
    (this.customerAddress = customerAddress),
    (this.creditCardInfo = creditCardInfo),
    (this.shippinginfo = shippinginfo),
    (this.accountbalance = accountbalance)
  }

  register(): void {
    // The process of collecting user data for the purpose of recognition
    // Collect data using forms
  }
  login(): void {
    // The process of verifying a user using user details
  }
  updateProfile(): void {
    // Edit user info.
  }
}
