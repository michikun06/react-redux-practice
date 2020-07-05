import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 21 },
    { name: "Hanako", age: 4 },
    { name: "Yuki" }
  ]

  return (
    < div >
      {
        profiles.map((data, index) => {
          return <User name={data.name} age={data.age} key={index} />
        })
      }
    </div >
  )
}


const User = props => {
  return <div>Hi!,I am {props.name} and {props.age} years old!</div>
}


// Userコンポーネントの型（number or string）をチェックできる
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
