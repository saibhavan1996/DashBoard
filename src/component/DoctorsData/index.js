import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'

import './index.css'

import DataCard from '../DataCard'

class DoctorData extends Component {
  state = {userInput: '', number: ''}

  getUserEnteredInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onChangeNumber = event => {
    this.setState({number: event.target.value})
  }

  render() {
    const {userInput, number} = this.state
    console.log(number)

    const {list} = this.props

    const slicedList = list.slice(number)

    const filteredList = slicedList.filter(each =>
      each.name.toLowerCase().includes(userInput.toLowerCase()),
    )

    return (
      <div className="dashboard-container">
        <h1 className="heading">Doctors</h1>
        <div className="search-container-list">
          <div className="entry-input-container">
            <p className="show">Show</p>
            <input
              type="number"
              className="page-controller"
              onChange={this.onChangeNumber}
              value={number}
            />
            <p className="show">entries</p>
          </div>
          <div className="searchInput">
            <div className="search-input-container">
              <input
                type="search"
                className="search-bar"
                placeholder="Search"
                value={userInput}
                onChange={this.getUserEnteredInput}
              />
              <BsSearch className="search-icon" />
            </div>
            <button type="button" className="add-btn">
              + Add New
            </button>
          </div>
        </div>
        <table className="doctor-details-list">
          {filteredList.length === 0 ? (
            <div className="no-list-container">
              <img
                src="https://res.cloudinary.com/sai-muali/image/upload/v1671264150/Group_7394_1_uxdv8x.png"
                alt="no list view"
                className="no-list-image"
              />
              <p className="no-list">
                Your search for {userInput} did not find any matches.
              </p>
            </div>
          ) : (
            <>
              <thead className="details-head-container">
                <th className="name">Name</th>
                <th className="name">Batch No</th>
                <th className="name">Location</th>
                <th className="name">Experience</th>
                <th className="name">Contact No.</th>
              </thead>
              <hr className="list-separator" />
              {filteredList.map(each => (
                <DataCard key={each.id} data={each} />
              ))}
            </>
          )}
        </table>
      </div>
    )
  }
}
export default DoctorData
