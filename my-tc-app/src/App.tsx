import React from 'react';
import './App.css';


interface PrintNameState {
  count: number
  fName: string
  lName: string
}


export interface Props {
  /** The user's name */
  name: string;
  /** Should the name be rendered in bold */
  priority?: boolean
  fun: (age: number) => number
  age: number
  obj?: PrintNameState
}


class Print extends React.Component<Props, PrintNameState>{
  render() {
    return null
  }
}

const PrintName: React.FC<Props> = (props) => {
  const [count, setCount] = React.useState<string | number>()

  setCount(props.fun(props.age))

  return (
    <div>
      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>{props.name}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrintName name='ashkan' priority={true} age={25} fun={(age) => 25} />
      </header>
    </div>
  );
}

export default App;




//// interface , class 

// class Index extends React.Component {
//   constructor(props: any) {
//     super(props)
//   }
// }


// function Index(name: string): Boolean {
//   let esm = 'ashkan'
//   return true
//   const index = (name: string): string => {
//     return name
//   }
//   index('ashkan')
// }

// const index = (name: string): string => {
//   return name
// }
// index('ashkan')
