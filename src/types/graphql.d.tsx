export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
    DateTime: any;
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

export type Wedding = {
    __typename?: 'Wedding';
    id: Scalars['ID'];
    title: Scalars['String'];
    description: Scalars['String'];
    startDate: Scalars['DateTime'];
    endDate: Scalars['DateTime'];
    contests: Array<Contest>;
};


export type Contest = {
    __typename?: 'Contest';
    id: Scalars['ID'];
    name: Scalars['String'];
    conditions: Array<ContestCondition>;
};

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

export type Post = {
    __typename?: 'Post';
    id: Scalars['ID'];
    message: Scalars['String'];
};

export type ContestCondition = {
    __typename?: 'ContestCondition';
    id: Scalars['ID'];
    name: Scalars['String'];
    color: Color;
};

export type UserInfo = {
    __typename?: 'UserInfo';
    id: Scalars['ID'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    role: Role;
};

export enum Role {
    Admin = 'Admin',
    User = 'User'
}

export type Color = {
    __typename?: 'Color';
    id: Scalars['ID'];
    name: Scalars['String'];
    value: Scalars['String'];
    status: Color;
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

export type UserInfoInput = {
    firstName: Scalars['String'];
    lastName: Scalars['String'];
};

export type WeddingInput = {
    title: Scalars['String'];
    description: Scalars['String'];
    startDate: Scalars['DateTime'];
    endDate: Scalars['DateTime'];
};

export type ContestInput = {
    name: Scalars['String'];
};

export type ColorInput = {
    name: Scalars['String'];
    value: Scalars['String'];
};

export type ContestConditionInput = {
    name: Scalars['String'];
    contestId: Scalars['String'];
    colorId: Scalars['String'];
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
