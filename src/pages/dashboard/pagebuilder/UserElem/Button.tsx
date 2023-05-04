import React from 'react'
import {Button as MaterialButton} from "@material-ui/core"
const Button = ({size, variant, color, childrend} : {size: string, variant: string, color: string, childrend: string}) => {
  return (
  <MaterialButton size={size} variant={variant} color={color}>
    {childrend}
  </MaterialButton>
  )
}

export default Button
