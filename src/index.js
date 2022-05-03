import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// map ky andr ky function ky ps 3 parameter hota hen
// function(value,index,arr) - value - array ky index ki value
// function netCard(val) {
//   return (
//     <>
//       <Card
//         img_src={val.img_src}
//         title={val.title}
//         sname={val.sname}
//         link={val.link}
//       />
//     </>
//   );
// }

ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
)