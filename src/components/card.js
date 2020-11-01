import React, {Component} from 'react'
import './cards.css'

class Card extends Component{

render() {
    const{ fullName, description, image} = this.props
    console.log(this.props)
    return (
        <div className='pers1'>
        <img className="myImg" src={image} alt='myimg'></img>
        <div className="char">
        <h3 className="myh3">{fullName}</h3>
        <p className="mpar">{description}</p>
        </div>
        </div>
    )
}
}
export default Card