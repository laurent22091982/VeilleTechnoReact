import React from 'react';

const Calcul = (props) => {
    console.log(props)
    
    const maVariable1 = parseInt(props.chiffre1);
    const maVariable2 = parseInt(props.chiffre2);
    
    const resultat = props.typeCalcul === "Addition" ? (maVariable1 + maVariable2) : (maVariable1 * maVariable2);
        
    console.log(resultat)
    if (props.typeCalcul){
        return (
            <div style={ {backgroundColor : 'pink', width: '400px', padding:'10px', margin:'5px auto' } }>
                
                {resultat}
            </div>
        )
    } else{
        return <p>Veuillez choisir un chiffre</p>
    }
    
}

export default Calcul;