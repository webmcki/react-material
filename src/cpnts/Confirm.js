import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
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
    const {
      values: {firstName, lastName, email, occupation, city, bio}
    } = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="지금까지 입력한 내용" />
          <List>
            <ListItem primaryText="성" secondaryText={firstName} />
            <ListItem primaryText="이름" secondaryText={lastName} />
            <ListItem primaryText="이메일" secondaryText={email} />
            <ListItem primaryText="직업" secondaryText={occupation} />
            <ListItem primaryText="도시" secondaryText={city} />
            <ListItem primaryText="바이오" secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label="이전"
            primary={false}
            style={style.button}
            onClick={this.back}
          />
          <RaisedButton
            label="확인"
            primary={true}
            style={style.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const style = {
  button: {
    margin: 15
  }
}

export default Confirm
