export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export enum CardStatus {
    NotSet = 'NotSet',
    Confirmed = 'Confirmed',
    Failed = 'Failed',
    Skipped = 'Skipped'
}

export type Contest = {
    __typename?: 'Contest';
    id: Scalars['ID'];
    name: Scalars['String'];
    conditions: Array<ContestCondition>;
};

export type ContestCondition = {
    __typename?: 'ContestCondition';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type Guest = {
    __typename?: 'Guest';
    id: Scalars['ID'];
    name: Scalars['String'];
    cardStatus: CardStatus;
};

export type GuestInput = {
    name: Scalars['String'];
    weddingId: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    addCard: Scalars['String'];
    skipCard: Guest;
    updateCard: Guest;
    createGuest: Guest;
    createPayment: Payment;
    updatePaymentStatus: Payment;
    createWedding: Wedding;
};


export type MutationUpdateCardArgs = {
    status: CardStatus;
    id: Scalars['String'];
};


export type MutationCreateGuestArgs = {
    input: GuestInput;
};


export type MutationCreatePaymentArgs = {
    input: PaymentInput;
};


export type MutationUpdatePaymentStatusArgs = {
    status: Status;
    id: Scalars['String'];
};

export type Payment = {
    __typename?: 'Payment';
    id: Scalars['ID'];
    amount: Scalars['Int'];
    status: Status;
    contestCondition: ContestCondition;
};

export type PaymentInput = {
    amount: Scalars['Float'];
    contestConditionId: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    currentContests: Array<Contest>;
    currentGuest: Guest;
    currentPayments: Array<Payment>;
    currentWedding: Wedding;
};

export enum Status {
    Init = 'Init',
    Run = 'Run',
    Failed = 'Failed',
    Finished = 'Finished'
}

export type Wedding = {
    __typename?: 'Wedding';
    id: Scalars['ID'];
    name: Scalars['String'];
    contests: Array<Contest>;
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
