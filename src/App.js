import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {

    const characters = [
      {
        name: 'Sarah',
        job: 'UX',
      },
      {
        name: 'Charlie',
        job: 'UI',
      },
      {
        name: 'Lee',
        job: 'Actor',
      },
      {
        name: 'Dennis',
        job: 'Barber',
      },
    ]

    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}

export default App