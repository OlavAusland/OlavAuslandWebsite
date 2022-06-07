import { RecordType } from "../domain/Record"
import { collection, getDocs, addDoc, doc, getDoc} from 'firebase/firestore'
import { db } from "../firebase-config"

export const addRecord = async(record: RecordType) => {
    await addDoc(collection(db, 'Records'), record).then((res: any) => {
        console.log(res)
    }).catch((err:any) => {console.log(err)})
}

export const getRecords = async(): Promise<RecordType[]> => {
    return await getDocs(collection(db, 'Records')).then((res) => {
        return res.docs.map((doc) => ({...doc.data(), id:doc.id} as RecordType));
    }).catch((err:any) => {console.log(err); throw err})
}

export const getRecord = async(id: string): Promise<RecordType> => {
    return await getDoc(doc(collection(db, 'Records'), id)).then((res) => {
        return {...res.data(), id:res.id} as RecordType;
    }).catch((err:any) => {console.log(err); throw err});
}