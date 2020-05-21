import React, { Component } from 'react'

class Form extends Component {

  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState
}

handleChange = event => {
  const { name, value } = event.target

  this.state({
    [name]: value,
  })
}