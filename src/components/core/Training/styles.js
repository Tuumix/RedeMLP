import styled from 'styled-components'

const FileButton = styled.div`
	cursor: pointer;
	width: 100%;
	max-width: 250px;
	height: auto;
	border: ${(props) => (props.enable ? '2px solid #0f2' : '2px solid #333')};
	box-shadow: ${(props) =>
		props.enable ? '2px solid #0f2' : '2px solid #333'};
	border-radius: 4px;
	color: ${(props) => (props.enable ? '#0f2' : '#333')};

	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
`
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
`

const Styles = {
	FileButton,
	Wrapper,
}

export default Styles
