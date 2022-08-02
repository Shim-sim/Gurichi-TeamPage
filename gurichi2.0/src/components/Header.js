import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
	/* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;
		
		
		/* 색상 */
    background: #dfdedf;
    color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    /* 폰트 */
    font-size: 2.5rem;
		font-family: 'Baloo', cursive
`;

// const Button = styled.button`
// 	position: fixed;
// 	top: 3%;
// 	color: red;
// 	z-index: 6;
// `



const Header = ({ onSetInsertToggle }) => (
	<>
		<Wrapper>
			<Link to="/">Gurichi</Link>
		</Wrapper>
		<Link to="/">
		<div className="main_img">
			<img src="logo_transparent.png" alt="logo"/>
		</div>
		</Link>
	</>
)

export default Header


