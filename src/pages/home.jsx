import { AvitoServices } from '../components/home/avito-services';
import { ShortReview } from '../components/home/short-review';
import { Welcome } from '../components/welcome';
import { Footer, Header } from '../layout';

const Home = () => {
	return (
		<>
			<Header />
			<div className='container'>
				<Welcome />
				<ShortReview />
				<AvitoServices />
			</div>
			<Footer />
		</>
	)
}
export default Home