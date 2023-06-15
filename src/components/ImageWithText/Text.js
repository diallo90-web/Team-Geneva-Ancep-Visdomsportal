import MediumBtn from '../shared/mediumbutton/MediumBtn';
import "./Text.css"
import { useNavigate } from 'react-router-dom';


const Text = ({title, description, btnText, books}) =>{
    const navigation = useNavigate()
    return(
        
        <div className='text-container'>
            <h1 className='text-container__h1'>{title}</h1>
            <p className='text-container__p'> {description}</p>
            <MediumBtn event={books? () => navigation('Navigasjon/Verk/Boker'): ()=> navigation('Navigasjon/Verk/Tekster')} content={btnText}/>
        </div>
    
    )
}

export default Text;