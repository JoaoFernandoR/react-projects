import React, { useState } from 'react'

interface Props {
    item : {
        id: string;
        image: string;
        info: string;
        name: string;
        price: string;
    },
    delete: (id: string) => void
}

const TourList = (props: Props) => {

    const { id, image, info, name, price} = props.item

    const [showMore, setShowMore] = useState(false)

    

    return (
    <div className="info_container">
        <img src={image} alt=""/>
        <div className="info_box">
            <div className="price_box">
                <h3> {name} </h3>
                <h4 className="price"> {price} </h4>
            </div>
            <p> { (!showMore) ? info.substring(0,200) : info } 
            <span className="showmore" onClick={() => setShowMore(!showMore)} >
                { (!showMore ? 'Show More...' : 'Show Less')}
            </span>          
            </p>
            <div className="mybutton">
            <button type="button" onClick={() => props.delete(id)}> 
                Not Interested 
            </button>
            </div>
        </div>
    </div>
    )
}

export default TourList