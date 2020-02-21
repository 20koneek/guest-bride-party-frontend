export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any,
};

/** Check object. */
export type Check = {
  __typename?: 'Check',
  id: Scalars['ID'],
  /** t params. */
  name?: Maybe<Scalars['String']>,
  /** t params. */
  totalSum: Scalars['Int'],
  /** t params. */
  dateTime: Scalars['Timestamp'],
  /** A list of pets which belong to the user. */
  checkProducts: Array<CheckProduct>,
};

export type CheckInput = {
  /** t params. */
  t: Scalars['String'],
  /** t params. */
  s: Scalars['String'],
  /** t params. */
  fn: Scalars['String'],
  /** t params. */
  i: Scalars['String'],
  /** t params. */
  fp: Scalars['String'],
  /** t params. */
  n: Scalars['String'],
};

export type CheckPaginate = {
  __typename?: 'CheckPaginate',
  checks: Array<Check>,
  pageInfo: PageInfo,
};

/** Check object. */
export type CheckProduct = {
  __typename?: 'CheckProduct',
  id: Scalars['ID'],
  name: Scalars['String'],
  quantity: Scalars['Int'],
  sum: Scalars['Int'],
  price: Scalars['Int'],
};

export type Mutation = {
  __typename?: 'Mutation',
  productByBarcode?: Maybe<Product>,
  createProductByBarcode?: Maybe<Product>,
  createProduct: Product,
  updateProduct: Product,
  createProductUnit: ProductUnit,
  updateProductUnit: ProductUnit,
  createCheck: Scalars['Boolean'],
};


export type MutationProductByBarcodeArgs = {
  barcode: Scalars['String']
};


export type MutationCreateProductByBarcodeArgs = {
  id: Scalars['String']
};


export type MutationCreateProductArgs = {
  input: ProductInput
};


export type MutationUpdateProductArgs = {
  input: ProductInput,
  id: Scalars['String']
};


export type MutationCreateProductUnitArgs = {
  input: ProductUnitInput
};


export type MutationUpdateProductUnitArgs = {
  input: ProductUnitInput,
  id: Scalars['String']
};


export type MutationCreateCheckArgs = {
  checkInput: CheckInput
};

/** Check object. */
export type PageInfo = {
  __typename?: 'PageInfo',
  page: Scalars['Int'],
  perPage: Scalars['Int'],
  totalCount: Scalars['Int'],
};

/** Категория товарта. */
export type Product = {
  __typename?: 'Product',
  /** id объекта */
  id: Scalars['ID'],
  name: Scalars['String'],
  netWeight: Scalars['Int'],
  status: Scalars['String'],
};

/** Товар. */
export type ProductBarcode = {
  __typename?: 'ProductBarcode',
  id: Scalars['ID'],
  barcode: Scalars['String'],
  queryCount: Scalars['Int'],
  name: Scalars['String'],
  productId?: Maybe<Scalars['String']>,
};

export type ProductBarcodePaginate = {
  __typename?: 'ProductBarcodePaginate',
  productsBarcode: Array<ProductBarcode>,
  pageInfo: PageInfo,
};

/** Товар. */
export type ProductInput = {
  name: Scalars['String'],
  netWeight: Scalars['Float'],
  product_unit_id?: Maybe<Scalars['String']>,
};

/** Категория товарта. */
export type ProductUnit = {
  __typename?: 'ProductUnit',
  /** id объекта */
  id: Scalars['ID'],
  name: Scalars['String'],
  /** Список подкатегорий */
  productUnits: Array<ProductUnit>,
  parentProductUnit?: Maybe<ProductUnit>,
};

/** Категория товарта. */
export type ProductUnitInput = {
  /** Check object. */
  name: Scalars['String'],
  /** Check object. */
  parentProductUnitId?: Maybe<Scalars['String']>,
};

/** Категория товарта. */
export type ProductUnits = {
  __typename?: 'ProductUnits',
  /** id объекта */
  id: Scalars['ID'],
  name: Scalars['String'],
  parentProductUnitId?: Maybe<Scalars['String']>,
};

export type Query = {
  __typename?: 'Query',
  checksPaginate: CheckPaginate,
  check?: Maybe<Check>,
  productsBarcodePaginate: ProductBarcodePaginate,
  productBarcode?: Maybe<ProductBarcode>,
  products: Array<Product>,
  product?: Maybe<Product>,
  productUnits: Array<ProductUnits>,
  productUnit?: Maybe<ProductUnit>,
  retailers: Array<Retailer>,
  retailer?: Maybe<Retailer>,
};


export type QueryChecksPaginateArgs = {
  perPage: Scalars['Int'],
  page: Scalars['Int']
};


export type QueryCheckArgs = {
  id: Scalars['String']
};


export type QueryProductsBarcodePaginateArgs = {
  perPage: Scalars['Int'],
  page: Scalars['Int']
};


export type QueryProductBarcodeArgs = {
  id: Scalars['String']
};


export type QueryProductArgs = {
  id: Scalars['String']
};


export type QueryProductUnitsArgs = {
  id?: Maybe<Scalars['String']>
};


export type QueryProductUnitArgs = {
  id: Scalars['String']
};


export type QueryRetailerArgs = {
  id: Scalars['String']
};

/** Retailer object. */
export type Retailer = {
  __typename?: 'Retailer',
  id: Scalars['ID'],
  /** inn */
  inn: Scalars['String'],
  /** name */
  name: Scalars['String'],
};


export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  '__schema': {
    'types': [],
  },
}
export default result
