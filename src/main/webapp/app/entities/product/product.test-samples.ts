import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 19743,
};

export const sampleWithPartialData: IProduct = {
  id: 25385,
  name: 'ail',
  description: 'contributor although magic',
};

export const sampleWithFullData: IProduct = {
  id: 13031,
  name: 'drat murmur',
  description: 'shoes ugh',
  price: 19026.23,
};

export const sampleWithNewData: NewProduct = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
