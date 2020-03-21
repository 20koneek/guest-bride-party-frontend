/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string,
    String: string,
    Boolean: boolean,
    Int: number,
    Float: number,
};

export enum CardStatus {
    NotSet = 'NotSet',
    Added = 'Added',
    Skipped = 'Skipped'
}

export type Contest = {
    __typename?: 'Contest',
    id: Scalars['ID'],
    name: Scalars['String'],
};

export type ContestCondition = {
    __typename?: 'ContestCondition',
    id: Scalars['ID'],
    name: Scalars['String'],
};

export type Guest = {
    __typename?: 'Guest',
    id: Scalars['ID'],
    name: Scalars['String'],
    cardStatus: CardStatus,
};

export type GuestInput = {
    name: Scalars['String'],
    weddingId: Scalars['String'],
};

export type Mutation = {
    __typename?: 'Mutation',
    addCard: Scalars['String'],
    createGuest: Guest,
    pay: Payment,
    createWedding: Wedding,
};


export type MutationCreateGuestArgs = {
    input: GuestInput
};


export type MutationPayArgs = {
    input: PaymentInput
};

export type Payment = {
    __typename?: 'Payment',
    id: Scalars['ID'],
    amount: Scalars['Int'],
    status: Status,
    contestCondition: ContestCondition,
};

export type PaymentInput = {
    amount: Scalars['Float'],
    contestConditionId: Scalars['String'],
};

export type Query = {
    __typename?: 'Query',
    currentContests: Array<Contest>,
    currentGuest: Guest,
    currentPayments: Array<Payment>,
    currentWedding: Wedding,
};

export enum Status {
    Init = 'Init',
    Run = 'Run',
    Failed = 'Failed',
    Finished = 'Finished'
}

export type Wedding = {
    __typename?: 'Wedding',
    id: Scalars['ID'],
    contests: Array<Contest>,
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
