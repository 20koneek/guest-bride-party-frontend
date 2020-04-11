import React, { FC } from 'react'

export const Rub: FC = ({ children }) => (
    <>&#8381; {children?.toLocaleString()}</>
)
