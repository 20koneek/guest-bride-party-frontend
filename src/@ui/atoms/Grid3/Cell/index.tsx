// import * as React from 'react'
// import { CellTypes } from './Cell.types'
//
// const span = (amount: number): string => (amount > 1 ? `span ${amount}` : '')
//
// const Cell: React.FC<CellTypes.Props> = ({ children, index, rowSpan = 1, columnSpan = 1 }) => (
//   <div style={index === 0
//     ? {
//       gridRow: `1 / ${rowSpan + 1}`,
//       gridColumn: `1 / ${columnSpan + 1}`,
//     } : {
//       gridRow: span(rowSpan),
//       gridColumn: span(columnSpan),
//     }}
//   >
//     {children}
//   </div>
// )
//
// export default Cell
