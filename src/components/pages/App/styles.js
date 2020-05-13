import styled from 'styled-components'

const Container = styled.div`
	height: 100vh;
	width: 100%;
	background: #333;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: row nowrap;
`
const Main = styled.div`
	height: 100%;
	width: 100%;
	max-width: 11fr;
	background: #ddd;
`

const Aside = styled.div`
	height: 100%;
	max-height: 100vh;

	width: 100%;
	max-width: 500px;

	background: #eee;
`

const Styles = {
	Aside,
	Main,
	Container,
}
export default Styles
