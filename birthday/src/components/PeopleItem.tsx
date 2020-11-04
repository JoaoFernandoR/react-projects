import React from 'react'

interface Props {
    item : {
        id : number;
        image: string;
        age : Number;
        name : string
    }
}

const PeopleItem = (props: Props) => {

    const { item } = props

    return (
    <div className="image_container">
        <img src={item.image} alt="name"/>
        <div className="info">
        <h3> {item.name} </h3>
        <p> {item.age} years </p>
        </div>
    </div>
    )
}

export default PeopleItem