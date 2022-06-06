import { RecordType } from "../domain/Record"
import { collection, getDocs, addDoc} from 'firebase/firestore'
import { db } from "../firebase-config"

export const addRecord = async(record: RecordType) => {
    await addDoc(collection(db, 'Records'), record).then((res: any) => {
        console.log(res)
    }).catch((err:any) => {console.log(err)})
}

export const getRecords = async(): Promise<RecordType[]> => {
    return await getDocs(collection(db, 'Records')).then((res) => {
        return res.docs.map((doc) => (doc.data() as RecordType));
    }).catch((err:any) => {console.log(err); throw err})
}