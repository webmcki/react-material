import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
  continue = (e) => {
    e.preventDefault()
    // 이자리에 데이터 처리코드 ex)firestore, axios//
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="완료" />
          <h1>입력해주셔서 고맙습니다</h1>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success
