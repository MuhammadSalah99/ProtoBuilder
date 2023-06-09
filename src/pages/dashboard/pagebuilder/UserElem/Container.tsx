import React from 'react'
import { Paper } from '@material-ui/core'
const Container = ({background, padding = 0, children}: {background: string, padding: number, children: any}) => {
  return (
    <Paper style={{margin: "5px 0", background, padding: `${padding}px`}}>
        {children}
    </Paper>
  )
}

export default Container
