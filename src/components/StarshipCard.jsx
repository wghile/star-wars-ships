export default function StarshipCard({ships}) {

  return (
    <div className='Card'>
        {ships.map((ship) => {
            return(
                <div key={ship.name}>
                    <h1 key={ship.name}>{ship.name}</h1>
                    <p id='model'><span className='attribute-name'>Model:</span> {ship.model}</p>
                    <p id='class'><span className='attribute-name'>Hyperdrive Class:</span> {ship.hyperdrive_rating}</p>
                </div>
            )
        })}
    </div>
  )
}
