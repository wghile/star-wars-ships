export default function StarshipCard({ships}) {

    console.log(ships)

  return (
    <div className='Card'>
        {ships.map((ship) => {
            return(
                <div>
                    <h1 key={ship.name}>{ship.name}</h1>
                </div>
            )
        })}
    </div>
  )
}
