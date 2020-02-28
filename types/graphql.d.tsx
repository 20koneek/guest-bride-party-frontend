export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string,
    String: string,
    Boolean: boolean,
    Int: number,
    Float: number,
};

export type Guest = {
    __typename?: 'Guest',
    id: Scalars['ID'],
    name: Scalars['String'],
};

export type GuestInput = {
    name: Scalars['String'],
};

export type Mutation = {
    __typename?: 'Mutation',
    addCard: Scalars['String'],
    createGuest: Guest,
    createProductUnit: ProductUnit,
    updateProductUnit: ProductUnit,
};


export type MutationCreateGuestArgs = {
    input: GuestInput
};


export type MutationCreateProductUnitArgs = {
    input: ProductUnitInput
};


export type MutationUpdateProductUnitArgs = {
    input: ProductUnitInput,
    id: Scalars['String']
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

export type Query = {
    __typename?: 'Query',
    productUnits: Array<ProductUnit>,
    productUnit?: Maybe<ProductUnit>,
};


export type QueryProductUnitsArgs = {
    id?: Maybe<Scalars['String']>
};


export type QueryProductUnitArgs = {
    id: Scalars['String']
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
