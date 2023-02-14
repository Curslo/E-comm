interface IAdmin {
  adminName: string;
  adminEmail: string;
  adminPassword: string;
  updateCatalog: () => void;
  viewSales: () => void;
  login: () => void;
  updateAdminDetail: () => void;
}

export class Admin implements IAdmin {
  adminName: string;
  adminEmail: string;
  adminPassword: string;

  constructor(adminName: string, adminEmail: string, adminPassword: string) {
    (this.adminName = adminName),
      (this.adminEmail = adminEmail),
      (this.adminPassword = adminPassword);
  }
  updateCatalog(): void  {
    // A catalog is a complete list of items arranged in a systematic order.
    // Here we update the list of products available for purchase.
    // The list of products is stored in a database.
    // We add to the list of items using Forms.
    // We remove a product from the list of items when a sale is made or when a product has expired.
    // Updating the catalog is the process of automatically adding and removing items from the items list.
    // Database
    return;
  }
  viewSales(): void {
    // Viewing a sale is the process of looking at the sales made in a specific period of time.
    // Data required for statistics
    return;
  }
  login(): void {
    // This is the process of verifying wether the user details aretrue or false.
    // Login form, user data required
  }
  updateAdminDetail(): void {
    // This is the process of changing user details or modifying user details.
    // Login form, user data required
  }
}
