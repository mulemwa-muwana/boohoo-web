import { CardDetails} from '../support/types';

class Cards{

  visa: CardDetails ={
    cardNo: '4111111111111111',
    end: '1111',
    owner: 'test',
    date: '03/30',
    month: '03',
    year: '2030',
    code: '737',
  };

  master: CardDetails ={
    cardNo: '5454545454545454',
    end: '5454',
    owner: 'test',
    date: '03/30',
    month: '03',
    year: '2030',
    code: '737',
  };

  amex: CardDetails ={
    cardNo: '370000000100018',
    end: '0018',
    owner: 'test',
    date: '03/30',
    month: '03',
    year: '2030',
    code: '7373',
  };

}
export default new Cards();