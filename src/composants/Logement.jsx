/**
 * Fonction logement 
 * Utilise le hook useParams pour extraire l'ID du logement dans URL
 * recherche l'objet de données description et equipments correspondant à l'ID fourni dans le fichier data 
 * Si ID pas trouvé affiche page Error
 * Sinon retourne l'affichage d'un carroussel d'images passant les props en paramétre au composant Carousel,
 * affiche les infos rating et host en appellant le composant HostRate
 * affiche Tag et crée deux elements collapse en passant des props au composant Collapse
 */
import React  from 'react';
import { useParams} from 'react-router-dom';
import Carousel from './Carousel';
import HostRate from './HostRate';
import { data } from '../services/data';
import Error from './Error';
import Collapse from './Collapse';
import Tag from './Tag';

function Logement() { 
  const { id } = useParams();
  const logement = data.find(p=>p.id === id)
    if(!logement){
        return <Error/>
    }
    const { description, equipments } = logement;
     return (
          <>
               <div className="kasa-logement">
                    <div className="kasa-logement_body">
                         <div className="kasa-logement-body_carousel">
                         <Carousel data={data} />
                         </div>
                         <HostRate />
                         <div className="kasa-logement-body_content">
                              <Tag/> 
                              <div className="logement-collapse">                             
                              <Collapse title="Description" content={description} />
                              <Collapse title="Equipements" content={equipments}  />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Logement;

