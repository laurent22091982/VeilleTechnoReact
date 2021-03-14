import React from 'react';

const Calcul = (props) => {
    console.log(props)
    
    const maVariable1 = parseInt(props.chiffre1);
    const maVariable2 = parseInt(props.chiffre2);
    
    const resultat = props.typeCalcul === "Addition" ? (maVariable1 + maVariable2) : (maVariable1 * maVariable2);
        
    console.log(resultat)
        return (
            <div style={ {backgroundColor : 'pink', width: '400px', padding:'10px', margin:'5px auto' } }>
                
                {resultat}
            </div>
        )

    
}

export default Calcul;