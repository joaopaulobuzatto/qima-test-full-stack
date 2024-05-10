import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'a29e6671-25b8-4196-ab7c-47ad7310c28f',
};

export const sampleWithPartialData: IAuthority = {
  name: '282f6603-2da9-48c9-9550-38f106a2f338',
};

export const sampleWithFullData: IAuthority = {
  name: '83a70d12-2047-46aa-a56a-afaa04b1fda1',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
