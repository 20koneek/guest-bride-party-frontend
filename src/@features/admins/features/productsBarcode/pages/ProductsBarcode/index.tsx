import React, { FC, memo, useEffect } from 'react'
import { HeadContent } from '@ui/molecules/HeaderContent'
import { Props } from './types'
import { useCreateProductByBarcodeMutation, useProductsBarcodePaginateQuery } from '../../hooks'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core'
import { AddCircleOutline, HourglassEmpty, Send } from '@material-ui/icons'
import { navigate } from '@reach/router'

const headCells = [
  { id: 'barcode', numeric: false, label: 'Штрих-код', width: 200 },
  { id: 'name', numeric: false, label: 'Название', width: 'auto' },
  { id: 'action', numeric: false, label: 'Создать товар', width: 150 },
]

const EnhancedTableHead = () => (
  <TableHead>
    <TableRow>
      {headCells.map(({ id, label, numeric, width }) => (
        <TableCell
          key={id}
          align={numeric ? 'right' : 'left'}
          style={{ width }}
        >
          {label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
)

export const ProductsBarcode: FC<Props> = memo<Props>(() => {
  const perPage = 10
  const { data, loading, error, refetch } = useProductsBarcodePaginateQuery(0, perPage)
  const [createProduct, product] = useCreateProductByBarcodeMutation()

  const emptyRows =
    (data?.productsBarcodePaginate.pageInfo.perPage ?? 0) -
    (data?.productsBarcodePaginate.productsBarcode.length ?? 0)

  useEffect(() => {
    if (product.data?.createProductByBarcode) {
      navigate(`/admins/products/${product.data.createProductByBarcode.id}`)
    }
  }, [product.loading])

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <HeadContent title='Штрихкоды товаров'>
      <>
        <TableContainer>
          <Table size='medium'>
            <EnhancedTableHead/>

            <TableBody>
              {data?.productsBarcodePaginate.productsBarcode.map(({ id, barcode, name, productId }) => (
                <TableRow
                  hover
                  role="checkbox"
                  key={id}
                >
                  <TableCell component="th" scope="row">{barcode}</TableCell>
                  <TableCell align="left">{name}</TableCell>
                  <TableCell align="right">
                    {productId ? (
                      <Send onClick={() => navigate(`/admins/products/${productId}`)}/>
                    ) : product.loading ? (
                      <HourglassEmpty/>
                    ) : (
                      <AddCircleOutline onClick={() => createProduct({ variables: { id } })}/>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 55 * emptyRows }}>
                  <TableCell colSpan={2}/>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data?.productsBarcodePaginate.pageInfo.totalCount ?? 0}
          rowsPerPage={data?.productsBarcodePaginate.pageInfo.perPage ?? 0}
          page={data?.productsBarcodePaginate.pageInfo.page ?? 0}
          onChangePage={async (d, page) => {
            await refetch({ page, perPage })
          }}
        />
      </>
    </HeadContent>
  )
})
