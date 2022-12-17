import {Component} from 'react'

import {v4} from 'uuid'

import {BiUser} from 'react-icons/bi'

import ProfileCard from '../ProfileCard'

import DoctorsData from '../DoctorsData'

import './index.css'

const availabilityList = [
  {id: 1, count: '1000+', status: 'Total Registered Students'},
  {id: 2, count: 6, status: 'Request Pending'},
  {id: 3, count: '500+', status: 'CA'},
  {id: 4, count: '500+', status: 'Lawyers'},
  {id: 5, count: '100+', status: 'Doctors'},
  {id: 6, count: '100+', status: 'Doctors'},
]

const initialDoctorList = [
  {
    id: v4(),
    name: 'Akash Kumar',
    batchNo: '00765454',
    location: 'Hyderabad',
    experience: '2 yrs',
    contactNo: 9988776655,
    designation: 'Lawyer',
  },
  {
    id: v4(),
    name: 'Manohar H',
    batchNo: '00765454',
    location: 'Vijayavada',
    experience: '1 yrs',
    contactNo: 9988776655,
    designation: 'Doctor',
  },
  {
    id: v4(),
    name: 'Raghavender',
    batchNo: '00765454',
    location: 'Bangalore',
    experience: '5 yrs',
    contactNo: 9988776655,
    designation: 'Doctor',
  },
  {
    id: v4(),
    name: 'Udith Kumar',
    batchNo: '00765454',
    location: 'Hyderabad',
    experience: '2 yrs',
    contactNo: 9988776655,
    designation: 'Doctor',
  },
  {
    id: v4(),
    name: 'Udith Kumar',
    batchNo: '00765454',
    location: 'Pune',
    experience: '1 yrs',
    contactNo: 9988776655,
    designation: 'Lawyer',
  },
  {
    id: v4(),
    name: 'Akash Kumar',
    batchNo: '00765454',
    location: 'Bangalore',
    experience: '5 yrs',
    contactNo: 9988776655,
    designation: 'Doctor',
  },
  {
    id: v4(),
    name: 'Manohar H',
    batchNo: '00765454',
    location: 'Hyderabad',
    experience: '5 yrs',
    contactNo: 9988776655,
    designation: 'Lawyer',
  },
  {
    id: v4(),
    name: 'Raghavender',
    batchNo: '00765454',
    location: 'Delhi',
    experience: '2 yrs',
    contactNo: 9988776655,
    designation: 'Doctor',
  },
  {
    id: v4(),
    name: 'Abhishek K',
    batchNo: '00765454',
    location: 'Bangalore',
    experience: '1 yrs',
    contactNo: 9988776655,
    designation: 'Doctor',
  },
  {
    id: v4(),
    name: 'Udith Kumar',
    batchNo: '00765454',
    location: 'Hyderabad',
    experience: '5 yrs',
    contactNo: 9988776655,
    designation: 'Lawyer',
  },
  {
    id: v4(),
    name: 'Raghavender',
    batchNo: '00765454',
    location: 'Bangalore',
    experience: '1 yrs',
    contactNo: 9988776655,
    designation: 'Doctor',
  },
  {
    id: v4(),
    name: 'Abhishek K',
    batchNo: '00765454',
    location: 'Hyderabad',
    experience: '5 yrs',
    contactNo: 9988776655,
    designation: 'Lawyer',
  },
]

class Home extends Component {
  state = {
    doctorList: initialDoctorList,
    designation: '',
    batchNo: '',
    name: '',
    showSearchList: false,
    newList: [],
  }

  getBatchNo = event => {
    this.setState({batchNo: event.target.value})
  }

  getName = event => {
    this.setState({name: event.target.value})
  }

  getDesignation = event => {
    this.setState({designation: event.target.value})
  }

  getSearchedInput = event => {
    event.preventDefault()
    const {doctorList, name, designation, batchNo, showSearchList} = this.state
    doctorList.map(each => {
      if (
        each.name === name ||
        each.batchNo === batchNo ||
        each.designation === designation
      ) {
        return this.setState(prevState => ({
          newList: [...prevState.newList, each],
        }))
      }
      return each
    })
    this.setState({showSearchList: !showSearchList})
  }

  getHome = bool => {
    this.setState({showSearchList: bool})
  }

  render() {
    const {designation, newList, batchNo, name, showSearchList} = this.state
    return (
      <div className="home-bg-container">
        <ProfileCard getHome={this.getHome} />
        {showSearchList ? (
          <>
            <DoctorsData list={newList} />
          </>
        ) : (
          <div className="dashboard-container">
            <h1 className="heading">Dashboard</h1>
            <form
              className="search-container-list"
              onSubmit={this.getSearchedInput}
            >
              <input
                type="text"
                value={batchNo}
                className="input-bar"
                placeholder="Batch No."
                onChange={this.getBatchNo}
              />
              <input
                type="text"
                value={name}
                className="input-bar"
                placeholder="Name"
                onChange={this.getName}
              />
              <input
                type="text"
                className="input-bar"
                placeholder="Designation"
                value={designation}
                onChange={this.getDesignation}
              />
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>
            <ul className="designation-list">
              {availabilityList.map(each => (
                <li className="designation-item" key={each.id}>
                  <div className="profile-img-container">
                    <BiUser size={30} color="#78e3ac" />
                  </div>
                  <div className="count-profession-container">
                    <h2 className="count">{each.count}</h2>
                    <p className="profession">{each.status}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
