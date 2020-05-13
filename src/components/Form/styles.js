import styled from 'styled-components'
import { TextField as MaterialTextField } from '@material-ui/core'
import { FormControl as MaterialFormControl } from '@material-ui/core'
import { Button as MaterialButton } from '@material-ui/core'
const Form = styled.form`
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	flex-flow: column wrap;
	justify-content: space-evenly;
	align-items: center;
`

const TextField = styled(MaterialTextField)`
	& * {
		outline: 0;

		color: #212121 !important;
	}
	border: 1px #222 !important;

	& * {
		::before {
		}
		::after {
			border: 1px #000 solid !important;
		}
	}
`

const WrapperControl = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: center;
`

const FormWrapper = styled.div`
	margin: 2rem 0;
	width: 100%;
	height: 50vh;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
	align-items: center;

	& div {
		width: 80%;
		& * {
			width: 100%;
		}
	}
`
const FormControl = styled(MaterialFormControl)`
	width: 100%;
	max-width: 135px;

	& legend {
		color: #333;
	}

	div label span {
		color: #212121;
	}
`
const ButtonBar = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: center;
`
const Button = styled(MaterialButton)`
	background: #aaa !important;
	width: 150px;
`
const Styles = {
	ButtonBar,
	Button,
	Form,
	TextField,
	FormControl,
	WrapperControl,
	FormWrapper,
}

export default Styles
