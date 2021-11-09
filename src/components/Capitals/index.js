import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCountryAndCapital => eachCountryAndCapital.id === activeCapitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry()

    return (
      <div className="capitals-main-container">
        <div className="content-card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="dropdown-container">
            <select
              className="capitals-dropdown"
              value={activeCapitalId}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  key={eachItem.id}
                  value={eachItem.id}
                  className="dropdown-item"
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question-description">is capital of which country</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
