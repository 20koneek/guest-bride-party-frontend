export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Query = {
    __typename?: 'Query';
    currentContests: Array<Contest>;
    currentContest: Contest;
    currentGuest: Guest;
    currentPayments: Array<Payment>;
    currentWedding: Wedding;
    wedding: Wedding;
};


export type QueryCurrentContestArgs = {
    id: Scalars['String'];
};


export type QueryWeddingArgs = {
    id: Scalars['String'];
};

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
    card?: Maybe<GuestCard>;
};

export type GuestCard = {
    __typename?: 'GuestCard';
    id: Scalars['ID'];
    status: CardStatus;
};

export enum CardStatus {
    Init = 'Init',
    Skipped = 'Skipped',
    Confirmed = 'Confirmed',
    Failed = 'Failed'
}

export type Payment = {
    __typename?: 'Payment';
    id: Scalars['ID'];
    amount: Scalars['Int'];
    status: PaymentStatus;
    contestCondition: ContestCondition;
};

export enum PaymentStatus {
    Init = 'Init',
    Run = 'Run',
    Failed = 'Failed',
    Finished = 'Finished'
}

export type Wedding = {
    __typename?: 'Wedding';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    addCard: Scalars['String'];
    skipCard: Guest;
    updatePaymentStatus: Guest;
    createGuest: Guest;
    createPayment: Scalars['String'];
    createPost: Post;
};


export type MutationUpdatePaymentStatusArgs = {
    status: PaymentStatus;
    id: Scalars['String'];
};


export type MutationCreateGuestArgs = {
    input: GuestInput;
};


export type MutationCreatePaymentArgs = {
    input: PaymentInput;
};


export type MutationCreatePostArgs = {
    input: PostInput;
};

export type GuestInput = {
    name: Scalars['String'];
    weddingId: Scalars['String'];
};

export type PaymentInput = {
    amount: Scalars['Float'];
    conditionId: Scalars['String'];
};

export type PostInput = {
    message: Scalars['String'];
};

export type Post = {
    __typename?: 'Post';
    id: Scalars['ID'];
    message: Scalars['String'];
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
