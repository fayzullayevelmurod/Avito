import { AvitoPlus } from '../components/home/avito-plus';
import { AvitoServices } from '../components/home/avito-services';
import { ShortReview } from '../components/home/short-review';
import { Subscription } from '../components/home/subscription';
import { Welcome } from '../components/home/welcome';
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
			<AvitoPlus />
			<div className='container'>
				<Subscription />
			</div>
			<Footer />
		</>
	)
}
export default Home