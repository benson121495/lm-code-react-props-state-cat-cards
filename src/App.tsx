import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import CatCard from './components/cat_card'
import Cat from './data/cat';
import catData from './data/cat-data';
import DogCard from './components/dog_card'
import Dog from './data/dog';
import dogData from './data/dog-data';


function App(): JSX.Element {

	// JavaScript/TypeScript code can be inserted here!
	
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const [ dogs, setDogs ] = useState<Array<Dog>>(dogData);

	console.log("Our pretties 😻: ", cats);
	const catCount = cats.length;
	const dogCount = dogs.length;
	console.log(catCount);

	return (
		<>
			<Navbar />
			<Header catCount={catCount } dogCount ={dogCount}></Header>

			<main>
				<div className='cards__wrapper'>{cats.map((cat, index) => (
					<CatCard
						key={cat.id}
						name={cat.name}
						species={cat.species}
						favFoods={cat.favFoods}
						birthYear={cat.birthYear}
						catIndex={index}
					/>
				))}
				</div>
				<div className='cards__wrapper'>{dogs.map((dog, index) => (
					<DogCard
						key={dog.id}
						name={dog.name}
						species={dog.species}
						favFoods={dog.favFoods}
						birthYear={dog.birthYear}
						dogIndex={index}
					/>
				))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
