import React, { FC } from 'react'

export const Rub: FC = ({ children }) => (
    <>&#8381; {(Number(children) / 100)?.toLocaleString()}</>
)
