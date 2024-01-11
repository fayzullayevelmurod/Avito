import { YourAccounts } from "../components/account/your-accounts"
import { Footer } from "../layout"
import { AccountHeader } from "../layout/account-header"
import { Box } from '@chakra-ui/react'

export const Account = () => {
	return (
		<Box>
			<AccountHeader />
			<Box className="main" bgColor='#fafafa'>
				<div className="container">
					<YourAccounts />
				</div>
			</Box>
			<Footer />
		</Box>
	)
}