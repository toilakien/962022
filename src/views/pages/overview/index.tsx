import React from 'react'
import { styled, Box } from '@mui/material'
import ItemBoxOverView from '../../../components/itemBoxOverview'
import Chart from '../../../components/chart'

const OverView = () => {
  const OverViewWrapper = styled(Box)({
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  })
  
  return (
    <OverViewWrapper>
      <ItemBoxOverView />
      <ItemBoxOverView />
      <ItemBoxOverView />
      <ItemBoxOverView />
      <Chart/>
    </OverViewWrapper>
  )
}

export default OverView