import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 2.5rem;
		font-size:2.0rem;
		color: #0c3b4e;
`;


const EmptyPage = () => {
	return (
		<Wrapper>
			<h2>잘못된 접근입니다.</h2>
			<Link to="/">홈으로 돌아가기</Link>
		</Wrapper>
	)
}

export default EmptyPage