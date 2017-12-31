import _ from 'lodash'
import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export default function(props) {
  return (
    <div>
      <Sparklines data={props.data} height={120} width={180}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <span>Average: {average(props.data)} {props.units}</span>
    </div>
  )
}

const average = (data) => _.round(data.reduce((sum, num) => sum + num, 0) / data.length)