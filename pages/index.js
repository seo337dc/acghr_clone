import Nav from '../components/Nav';
import styled from 'styled-components';

const Index = () => (
    <IndexLayOut>
        {/* <Nav />
        <h1>메인화면</h1> */}
        <Nav />
    </IndexLayOut>
);

const IndexLayOut = styled.div`
    height: 100%;
    min-width: 1400px;
    border: 1px solid black;
    display: flex;
`;

export default Index;
