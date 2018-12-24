import React, {Component} from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  // 다음단계로 진행
  nextStep = () => {
    const {step} = this.state
    this.setState({
      step: step + 1
    })
  }

  // 이전단계로 진행
  prevStep = () => {
    const {step} = this.state
    this.setState({
      step: step - 1
    })
  }

  // 입력값 변화 다루기
  handleChange = (input) => (e) => {
    this.setState({[input]: e.target.value})
  }

  render() {
    const {step} = this.state
    const {firstName, lastName, email, occupation, city, bio} = this.state
    const values = {firstName, lastName, email, occupation, city, bio}

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return <h1>FormPersonalDetails</h1>
      case 3:
        return <h1>Confirm</h1>
      case 4:
        return <h1>Success</h1>
      default:
        return
    }
  }
}

export default UserForm
