import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 21 },
    { name: "Hanako", age: 4 },
    { name: "Yuki", age: 62 },
    { age: 21 }
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

User.defaultProps = {
  name: "unknown",
  age: 100
}

export default App;
