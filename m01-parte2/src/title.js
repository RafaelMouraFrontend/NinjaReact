'use strict'

import React from 'react'

const Title = (props) => (
  <h1>Olá {`${props.name.first} ${props.name.last}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido'
}

export default Title
