import { GroupBrands } from '../support/types';
import createCustomer from './TestDataManager/index';

module.exports = async (on, config) => {
  on('task', {
    async createUser (brand: GroupBrands) {
      const customer = await createCustomer(brand, 'uk');
      return {
        email: customer.email,
        password: customer.password
      };
    }
  });
};