import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 60px; /* 헤더 높이 */
`;

const Layout = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

Layout.Main = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    width: 300px;
    position: relative;
    display: flex;
    justify-content: center;
		font-size: 1.5rem;
		font-weight: 600;
`;

export default Layout;