import React, { FC } from 'react'
import { lowerCase, snakeCase } from 'lodash'
import { Plane as PlaneType } from '../data/planes'
import styled from 'styled-components'

const StyledImg = styled.img({
  width: 640
})

export const Plane: FC<{ plane: PlaneType }> = ({ plane }) => {

  const src = `/img/${snakeCase(lowerCase(plane.name))}.png`

  return (
    <div>
      <StyledImg src={src} />
      <h2>{plane.name}</h2>
    </div>
  )

}