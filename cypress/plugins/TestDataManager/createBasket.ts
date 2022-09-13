import axios from 'axios';

export default async function (credentials: NewCustomerCredentials, brand: GroupBrands, locale: 'uk', apiKey: string, token: string): Promise<string> {

  // Buidl URL.
  const prefix = process.env.PRODUCTION ? 'mobile-gateway' : 'dev-mobile-gateway';
  const endpoint = `https://${prefix}.${brand}/${locale}/baskets?locale=en-GB`;
  
  // Send request.
  const response = await axios.post(endpoint, {
    currency: 'GBP'
  }, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'x-dw-jwt-token': token,
    }
  });

  // Validate.
  if (response.status === 200) {
    const json = await response.data;
    return json.basket_id as string;
  }

  // Error handling.
  throw new Error(`createBasket: did not get success status with error code ${response.status} (${response.statusText}) ${JSON.stringify(response.data, null, 4)} (token: ${token})`);
}