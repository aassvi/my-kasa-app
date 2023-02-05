
import './styles/_home.scss';
import {Routes , Route} from 'react-router-dom';
import Home from './composants/Home';
import Apropos from './composants/Apropos';
import Error from './composants/Error';
import Footer from './composants/Footer';
import Header from './composants/Header';
import Logement from './composants/Logement';


function App() {
    return (
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/Logement/:id" element={<Logement />} />
            <Route path="/*" element={<Error />} />
        </Routes>
        <Footer/>
       
        </>
    )
}

export default App;
