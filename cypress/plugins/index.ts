import createCustomer from './TestDataManager/index';
import { join } from 'path';

export default async function (on: Cypress.PluginEvents): Promise<void> {

  const configWithDotenv = (await import('dotenv')).config({path: join(__dirname, '..', '..', '.env')});
  if (configWithDotenv.error) {
    throw configWithDotenv.error;
  }
  
  console.log('Environment Variables', configWithDotenv.parsed);

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