import MediumBtn from '../shared/mediumbutton/MediumBtn';
import "./Text.css"


const Text = ({title, description, btnText}) =>{
    return(
        
        <div className='text-container'>
            <h1 className='text-container__h1'>{title}</h1>
            <p className='text-container__p'> {description}</p>
            <MediumBtn content={btnText}/>
        </div>
    
    )
}

export default Text;