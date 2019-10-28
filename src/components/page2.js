import React, { Component } from 'react';
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../shared/ibsheet-data'

export class Page2 extends Component {
  sheetId = 'sheet'
  sheetEl = 'sheetContainer'
  componentDidMount() {
    const { data, options } = SheetSampleData[1]
    loader.createSheet({
      id: this.sheetId,
      el: this.sheetEl,
      options,
      data
    })
  }
  componentWillUnmount() {
    loader.removeSheet(this.sheetId)
  }
  render() {
    return (
      <div>
        <p>page2 works!</p>
        <div id={this.sheetEl}></div>
      </div>
    )
  }
}

export default Page2
