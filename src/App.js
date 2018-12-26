import React, {Component} from 'react'
import './App.css'
//import UserForm from './cpnts/UserForm/UserForm'
import NavBar from './cpnts/NavBar/'
import FolderList from './cpnts/UiTest/FolderList'

class App extends Component {
  state = {
    arrays: [
      {name: '이름1', age: 11, bet: 'white', id: 1},
      {name: '이름2', age: 21, bet: 'blue', id: 2},
      {name: '이름3', age: 41, bet: 'red', id: 3}
    ]
  }
  // state = {
  //   이름: '별이',
  //   나이: 5
  // }
  // 핸들클릭 = (e) => {
  //   console.log(e.target)
  // }
  // 마우스오버 = (e) => {
  //   console.log(e.target, e.pageX, e.pageY)
  // }
  // 사용자함수1 = (e) => {
  //   console.log(this.state)
  // }
  // 사용자함수2 = (e) => {
  //   this.setState({
  //     이름: '황별',
  //     나이: 77
  //   })
  //   console.log(this.state)
  // }

  render() {
    return (
      <div className="App">
        <FolderList />
        <h1>차근차근 해보자</h1>
        <NavBar arrays={this.state.arrays} />
        {/* 안녕 {this.state.이름}! 너의 나이는 {this.state.나이} 이구나!
        <p />
        <button onClick={this.핸들클릭}>클릭</button>
        <p>
          <button onMouseOver={this.마우스오버}>클릭</button>
        </p>
        <p>
          <button onClick={this.사용자함수1}>
            사용자 함수 호출 값을 변경전
          </button>
          <button onClick={this.사용자함수2}>
            사용자 함수 호출 값을 변경후
          </button>
        </p> */}
      </div>
    )
  }
}

export default App
