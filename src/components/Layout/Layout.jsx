import AppBar from '../AppBar'
import Container from '../Container'

const Layout = ({ children }) => (
	<>
		<Container>
			<AppBar />
			{children}
		</Container>
	</>
);
export default Layout