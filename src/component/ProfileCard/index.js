import {Component} from 'react'
import {MdArrowDropDown, MdArrowDropUp} from 'react-icons/md'
import {BiHome} from 'react-icons/bi'
import './index.css'

class ProfileCard extends Component {
  state = {showDetails: false, showDashDrop: false}

  showDetails = () => {
    const {showDetails} = this.state
    this.setState({showDetails: !showDetails})
  }

  getDashBoard = () => {
    const {showDashDrop} = this.state
    const {getHome} = this.props
    getHome(false)
    this.setState({showDashDrop: !showDashDrop})
  }

  render() {
    const {showDetails, showDashDrop} = this.state

    const name = 'Ashish Kumar'

    return (
      <div className="profile-bg-container">
        <div className="log-container">
          <img
            src="https://res.cloudinary.com/sai-muali/image/upload/v1671277114/newlogo_hsuofm.jpg"
            className="circle-logo"
            alt="circle logo"
          />
          <img
            src="https://res.cloudinary.com/sai-muali/image/upload/v1671177933/naava_m4dkph.jpg"
            className="naava-logo"
            alt="naava logo"
          />
        </div>
        <hr className="separator" />
        <div className="profile-container">
          <div className="circle">{name[0]}</div>
          {showDetails ? (
            <>
              <div>
                <h1 className="admin-name">{name}</h1>
                <p className="admin">Admin</p>
              </div>
              <MdArrowDropUp
                size={20}
                className="icons"
                color="#ffffff"
                onClick={this.showDetails}
              />
            </>
          ) : (
            <div className="drop-down">
              <h1 className="admin-name">{name}</h1>
              <MdArrowDropDown
                size={20}
                className="icon"
                color="#ffffff"
                onClick={this.showDetails}
              />
            </div>
          )}
        </div>

        <hr className="separator" />
        <ul className="category-list">
          <div className="dashboard-contain">
            {showDashDrop ? (
              <>
                <BiHome size={35} className="home-icon" />
                <li
                  className="category-dashboard-item"
                  onClick={this.getDashBoard}
                >
                  Dashboard
                </li>
              </>
            ) : (
              <>
                <li className="category-item" onClick={this.getDashBoard}>
                  Dashboard
                </li>
              </>
            )}
          </div>

          <li className="category-item">Approvals</li>
          <li className="category-item">Contact Us</li>
          <li className="category-item">Members</li>
        </ul>
      </div>
    )
  }
}
export default ProfileCard
