import { ICategory } from 'app/entities/category/category.model';

export interface IProduct {
  id: number;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  categoryPath?: ICategory | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
