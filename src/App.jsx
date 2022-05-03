import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

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

const App = () =>(
  <>
    <h1 className='heading_style'> List of top 5 Netflix series of 2022 </h1>


    {Sdata.map((val) => {
      return (
        <Card
        // har aik card kalya aik unique property honi chyee uska nam key hona chyee jb ap map method ka use kro jb
          key={val.id}
          img_src={val.img_src}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      )
    })
    }
  </>
)

export default App;