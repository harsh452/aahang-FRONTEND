import { firestore } from "../firebase";

export const showCategory = (onSuccess,onError) => {
    return(dispatch,getState) => {
        firestore
        .collection('CATEGORIES')
        .orderBy('Index')
        .get()
        .then((querrySnapshot) =>{
            let category =[];
            if(!querrySnapshot.empty){
                querrySnapshot.forEach(doc => {
                    category.push(doc.data())
                  });
                  dispatch({type:"LOAD_CATEGORIES",payload:category})
             onSuccess();
                              }
             
        }).catch(error => {
            console.log(error);
        onError();
        })
    }
}

export default showCategory