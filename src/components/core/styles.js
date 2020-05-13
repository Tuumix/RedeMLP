import styled from 'styled-components'
import { Paper } from '@material-ui/core'
const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	background: #333;
`

const Container = styled(Paper)`
	background: #eee !important;
	width: 100%;
	max-width: 1200px;
	height: 100%;
	max-height: 85vh;
`

const Styles = {
	Wrapper,
	Container,
}

export default Styles
