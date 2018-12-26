import React from 'react'

const index = ({arrays}) => {
  const ListArrays = arrays.map((array) => {
    return (
      <div key={array.id}>
        <p>네비게이션 인덱스</p>
        <p>{array.name}</p>
        <p>{array.age}</p>
        <p>{array.bet}</p>
        <p>{array.id}</p>
        <p>---------------함수형 컴포넌트---------------</p>
      </div>
    )
  })
  return <div>{ListArrays}</div>
}

export default index
