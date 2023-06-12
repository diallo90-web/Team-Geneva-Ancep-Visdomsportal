import MediumBtn from '../shared/mediumbutton/MediumBtn';
import "./Text.css"

const title = "Miljøforkjemper"
const description = "Arne Næss' arbeid innen dypøkologi og miljøvern kan inspirere og øke bevisstheten om viktigheten av å ta vare på naturen og miljøet. Dette kan bidra til å motivere og oppmuntre unge mennesker til å handle ansvarlig og engasjere seg i bærekraftige handlinger."

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