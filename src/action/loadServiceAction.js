import { firestore } from "../firebase";

export const showProviders = (data,onSuccess,onError) => {
    return(dispatch,getState) => {
        firestore
        .collection('SERVICE PROVIDER')
        .where("Sub_Category","==",data)
        .get()
        .then((querrySnapshot) =>{
            let providers = [];
            if(!querrySnapshot.empty){
                querrySnapshot.forEach((doc)=>{
                    providers.push(doc.data())
})
dispatch({type:'LOAD_PROVIDER',payload:providers,data});
onSuccess();
                              }
             
        }).catch(error => {
            console.log(error);
        onError();
        })
    }
}

export default showProviders