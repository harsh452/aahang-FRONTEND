import { firestore } from "../firebase";

export const showBanners = (pagedata,onSuccess,onError) => {
    return(dispatch,getState) => {
        firestore
        .collection('CATEGORIES')
        .doc(pagedata)
        .collection('PROMOTION')
        .orderBy('order')
        .get()
        .then((querrSnapshot) =>{
            let banners = [];
            if(!querrSnapshot.empty){
                querrSnapshot.forEach((doc) =>{
                    banners.push(doc.data());
                })
            }
            dispatch({type:"LOAD_BANNER",payload:banners,pagedata})
            onSuccess();
        }).catch(error => {
            console.log(error);
        onError();
        })
    }
}

export default showBanners