import React from 'react'

const CharacterItem = ({ item }) => {
  //{ item.appearance.map( (ses) => (<p key={item.char_id}>{ses}</p>) ) }

  var arr = [item.appearance]
  if(arr.length === 0){
    arr = ['']
  }

  var occ = [item.occupation]
  if(occ.length === 0){
    occ = ['']
  }

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong className="strong">Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong className="strong">Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong className="strong">Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong className="strong">Status:</strong> {item.status}
            </li>
            <li> 
              <strong className="strong">Occupation:</strong> {occ.join(',')}
            </li>
            <li> 
              <strong className="strong">Season:</strong> {arr.join(',')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem