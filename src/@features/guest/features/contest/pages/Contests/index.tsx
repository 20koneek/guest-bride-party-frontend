import React, { FC } from 'react'
import { Props } from './types'
import * as carc from 'react-chartjs-2'

export const Contests: FC<Props> = ({ currentGuest }) => {
    const TagName = carc['Bubble']
    return (
        <div>
            <div>Contests</div>
            <TagName
                data={{
                    datasets: [{
                        data: [10, 20, 30],
                        backgroundColor: [
                            '#FF6384',
                            '#63FF84',
                            '#8463FF',
                        ],
                    }],
                    labels: [
                        'Red',
                        'Yellow',
                        'Blue',
                    ],
                }}
                width={100}
                height={100}
            />
        </div>
    )
}
