import DogImage from "./dog_image";
import dog1 from '../assets/images/dog1.jpg';


const images = [
	{
		image: dog1,
		altText: 'Describe this dog!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'halu',
		attributionUrl: 'https://flic.kr/p/28XJnko'
	}
];

interface DogCardProps {
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
	dogIndex : number ;
}

const DogCard: React.FC<DogCardProps> = (props) => {
    return (
        <div className='card'>
            <h3 className='card__text card__header'>{props.name}</h3>
            <p className='card__text'>Species: {props.species}</p>
            <p className='card__text'>Favourite Food(s): {props.favFoods}</p>
            <p className='card__text'>Birth Year: {props.birthYear}</p>
			{props.dogIndex < images.length && (
			<DogImage 
				image={images[props.dogIndex].image}
				altText={images[props.dogIndex].altText}
				licenceType={images[props.dogIndex].licenceType}
				licenceUrl={images[props.dogIndex].licenceUrl}
				attributionName={images[props.dogIndex].attributionName}
				attributionUrl={images[props.dogIndex].attributionUrl}
			/>
			)}
        </div>
    );
}

export default DogCard;