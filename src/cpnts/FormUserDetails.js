import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
  render() {
    const {values, handleChange} = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="이름을 입력 하소"
            floatingLabelText="성"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
