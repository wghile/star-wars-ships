export default function StarshipCard({ships}) {

  return (
    <div className='Card'>
        {ships.map((ship) => {
            return(
                <div key={ship.name}>
                    <h1 key={ship.name}>{ship.name}</h1>
                </div>
            )
        })}
    </div>
  )
}
