import './App.css';
import Hero from './components/Hero/Hero';
import TravelBlog from './components/TravelBlog/TravelBlog';

import TravelData from './TravelData';

function App() {
	const locations = TravelData.map((location) => (
		<TravelBlog
			key={location.id}
			placeHeading={location.placeHeading}
			placeImg1={location.placeImg1}
			placeImg2={location.placeImg2}
			placeImg3={location.placeImg3}
			placeDescription={location.placeDescription}
		/>
	));

	return (
		<div className="App">
			<Hero />
			<section className="travel-blog">{locations}</section>
		</div>
	);
}

export default App;
