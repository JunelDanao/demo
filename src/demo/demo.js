import React  from 'react';


const NameList= () => {
    const name= [ 'Bruno', 'Karen', 'James','Lebron']

    const nameList = name.map(name => <h2>{name}</h2>)
    console.log(nameList)
return  <div>
            {nameList}
        </div>


}
// const materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
//   ];
  
//    const listMatertial = materials.map(material => material.length);
//   console.log(materials.map);
//   // expected output: Array [8, 6, 7, 9]

//   return<div>{listMatertial}</div>
// }

export default NameList;


