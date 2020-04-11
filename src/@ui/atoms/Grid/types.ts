export interface CellSize {
    width: number
    height: number
}

export interface Props extends UseStyle {
  cell: CellSize | number
}
