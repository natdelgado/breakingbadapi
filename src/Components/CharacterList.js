import React from 'react';
import CharacterListItem from './CharacterListItem';

export default function CharacterList({items}){
    return(
        <section className="cards"> 
            {
                items.map((item) => {
                    return(
                        <CharacterListItem item={item} key={item.char_id}/>
                    )
                    
                })
            }
        </section>
    )
}