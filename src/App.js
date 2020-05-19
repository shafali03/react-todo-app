import React, { Component } from 'react'
import Table from './Table'


class App extends Component {
  state = {
    characters: [
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
    ],
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }



  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}

export default App