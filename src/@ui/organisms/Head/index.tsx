import React, { FC } from 'react'
import classNames from 'classnames'
import { navigate } from '@reach/router'
import styles from './styles.css'
import { Props } from './types'
import { Button, Wrapper } from '../../atoms'

export const Head: FC<Props> = ({ className, auth }) => (
  <header className={classNames(styles.head, className)}>
    <Wrapper>
      <nav
        style={{
          display: 'inline-grid',
          width: '100%',
          height: 'calc(100% - 20px)',
          gridTemplateColumns: '1fr auto',
          padding: '7px 0',
        }}
      >
        <div>1</div>
        <Button
          onClick={async () => {
            await auth.signOut()
            await navigate('/')
          }}
        >
          Выход
        </Button>
      </nav>
    </Wrapper>
  </header>
)
