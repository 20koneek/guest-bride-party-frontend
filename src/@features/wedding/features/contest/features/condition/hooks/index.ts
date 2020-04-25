import { useContestQuery } from '../../../hooks'

export const useConditionQuery = ({ contestId, conditionId }: { contestId: string, conditionId: string }) => {
    const { data, ...params } = useContestQuery(contestId)

    return {
        ...params,
        data: {
            condition: data?.currentContest.conditions.find(({ id }) => id === conditionId),
        },
    }
}
