import createCustomer from './TestDataManager/index';

export default async function (on: Cypress.PluginEvents): Promise<void> {
  on('task', {
    async createUser (brand: GroupBrands): Promise<NewCustomerCredentials> {
      const customer = await createCustomer(brand, 'uk');
      return {
        email: customer.email,
        password: customer.password
      };
    }
  });
}