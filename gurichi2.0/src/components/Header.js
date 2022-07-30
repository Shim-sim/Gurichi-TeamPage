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
    background: #727272;
    color: white;
    border-bottom: 1px solid #727272;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    /* 폰트 */
    font-size: 2.5rem;
		font-family: 'Baloo', cursive
`;



const Header = () => (
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


