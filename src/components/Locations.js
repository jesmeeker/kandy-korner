import { useEffect, useState } from "react"


export const Locations = () => {
    const [locations, setLocations] = useState([])


	useEffect(() => {
		fetch('http://localhost:8088/locations')
		  .then((res) => res.json())
		  .then((locationsArray) => {
			setLocations(locationsArray)
		  })
		},
		[locations]
	)

    return (
        <>
        <h2>Locations</h2>
        
        <article className="locations">
            {
                locations.map(
                    (location) => {
                        return <section className="location" key={`location--${location.id}`}>
                                    <h3>{location.name}</h3>
                                    <div>{location.streetAddress} </div>
                                    <div>{location.city}, {location.state} {location.zip}</div>
                                    <div>Square Feet: {location.squareFeet}</div>
                        </section>
                    }
                )
                }
            </article>
        </>
    )        
}