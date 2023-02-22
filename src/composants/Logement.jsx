import React  from 'react';
import { useParams} from 'react-router-dom';
import Carousel from './Carousel';
import Header from './Header';
import HostRate from './HostRate';
import { data } from '../services/data';
import Error from './Error';
import Collapse from './Collapse';
import Tag from './Tag';
import Footer from './Footer';


function Logement() { 
  const { id } = useParams();


  
  const appart = data.find(p=>p.id === id)
    if(!appart){
        return <Error/>
    }
    const { description, equipments } = appart;
     return (
               
               <>
               <Header />
               <div className='kasa-page'>
               <div className="kasa-logement">
                    <div className="kasa-logement-body">
                         <div className="kasa-logement-body-carousel">
                         <Carousel />
                         </div>
                         <HostRate />
                         <div className="kasa-logement-body-content">
                              <Tag/> 
                              <div className="logement-collapse">                             
                              <Collapse title="Description" content={description} className="collapse-custom1"/>
                              <Collapse title="Equipements" content={equipments} className="collapse-custom2" />
                              </div>
                         </div>
                    </div>
               </div>
               </div>
               <Footer />
               </>
     );
}

export default Logement;

