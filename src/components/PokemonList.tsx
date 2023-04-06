import React, { useState  , useEffect} from 'react'

import "./pokemon.css";
import { Detail } from '../interface';

interface props {
    viewDetail:Detail,
    setDetail: React.Dispatch<React.SetStateAction<Detail>>,
    abilities:{
        name:string;
        ability:string;
    }[] | undefined;
    name :string,
    id:number,
    image:string,
}

const PokemonList:React.FC<props> = (props) => {
    const { name, id, image , abilities, viewDetail, setDetail } = props;
    const [isSelected , setSelected] = useState<boolean>(false);
    const closeDetail = () => {
        setDetail({ 
            id:0,
            isOpened: false,
        })
    }

    useEffect(() => {
        setSelected(id === viewDetail?.id);
    } , [viewDetail]);
  return (
    <div className="">
        {isSelected ? (
               <section className="pokemon-list-detailed">
                <div className="detail-container">
                    <p className='detail-close' onClick={closeDetail}>x</p>
                    <div className="detail-info">
                        <img src={image} alt={name} className='detail-img'/>
                        <p className="detail-name">{name}</p>
                    </div>
                    <div className="detail-skill">
                        <p className="detail-ability">Abilities : </p>
                        {abilities?.map((ab:any)=> {
                    return (
                        <div className=""> {ab.ability.name}</div>
                    )
                })}
                    </div>
                </div>
               </section>

        ): (
            <section className="pokemon-list-container">
            <p className="pokemon-name">{name}</p>
            <img src={image} alt={name}/> 
            
        </section>
        )}
      

    </div>
  )
}

export default PokemonList