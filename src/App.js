import './App.css';
import Category from './components/Category';
import Search from './components/Search';
import Pages from './pages/Pages';
import { BrowserRouter,Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Nav>
        <GiKnifeFork></GiKnifeFork>
        <Logo to={"/"}>RecipeHouse</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}
const Logo=styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
  font-family:'Lobster Two',cursive;
`;
const Nav=styled.div`
  padding:2rem 0rem 3rem;
  display:flex;
  justify-content:center;
  align-items:center;
  
  svg{
    fonst-size:2rem;
  }
`;
export default App;
