import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 18091,
  login: 'QPS@J4f\\A9clFi5\\=ult\\/EO\\kF\\Vgp7',
};

export const sampleWithPartialData: IUser = {
  id: 29061,
  login: 'CC',
};

export const sampleWithFullData: IUser = {
  id: 1175,
  login: 'y',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
