import gql from 'graphql-tag'

export const createCheckMutation = gql`
  mutation SignIn($scanCheck: ScanCheckInput!) {
    createCheck(scanCheck: $scanCheck)
  }
`

export const checksWithItemsQuery = gql`
  query Checks {
    checks {
      id
      user
      dateTime
      totalSum
    }
  }
`

export const checkWithItemsQuery = gql`
  query Check($id: String!) {
    check(id: $id) {
      id
      user
      dateTime
      totalSum
      items {
        id
        name
        quantity
        sum
        price
      }
    }
  }
`
// export const checksWsithItemsQuery = gql`
//   query Checks {
//     checks {
//       id
//       userInn
//       user
//       kktRegId
//       dateTime
//       shiftNumber
//       nds18
//       nds10
//       totalSum
//       retailPlaceAddress
//       fiscalDriveNumber
//       fiscalSign
//       fiscalDocumentNumber
//       items {
//         id
//         name
//         quantity
//         sum
//         price
//       }
//     }
//   }
// `
