import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: 14497,
};

export const sampleWithPartialData: ICategory = {
  id: 4290,
  name: 'smoothly besides',
};

export const sampleWithFullData: ICategory = {
  id: 7852,
  name: 'besides',
};

export const sampleWithNewData: NewCategory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
