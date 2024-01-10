import { YourAccounts } from "../components/account/your-accounts"
import { Footer } from "../layout"
import { AccountHeader } from "../layout/account-header"
import {Box} from '@chakra-ui/react'

const Account = () => {
	return (
		<>
			<AccountHeader />
			<Box bgColor='#fafafa'>
				<div className="container">
					<YourAccounts />
				</div>
			</Box>
			<Footer />
		</>
	)
}

export default Account