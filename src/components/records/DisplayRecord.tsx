import { useState, useEffect } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import { deleteRecord, getRecord } from "../../api/firebaseAPI";
import { RecordType } from "../../domain/Record";
import { auth } from "../../firebase-config";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../../styles/loaders/waterfall-loader.css'
import NoRoute from "../error/NoRoute";

export default function DisplayRecord(){
    const [record, setRecord] = useState<RecordType>({} as RecordType);
    const [loading, setLoading] = useState<boolean>(true);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect((): void => {
        const fetchRecord = async(): Promise<void> => {
            if(id !== undefined){
                await getRecord(id).then((res) => {
                    setRecord(res);
                    setLoading(false);
                }).catch((err) => {console.log(err)});
            }
        }
        fetchRecord();
    }, [id])

    const handleDelete = async(): Promise<void> => {
        if(id === undefined){return;}
        await deleteRecord(id).then((res) => {
            console.log(res);
            navigate('/record');
        }).catch((err) => {console.log(err)});
    }

    if(loading){
        return (
            <div className="waterfall">
                <div/><div/><div/>
                <div/><div/><div/>
            </div>
        );
    }
    
    if(record.body === undefined){return (<NoRoute/>)}

    return(
        <div className='record-container' style={{justifyContent:'flex-start'}}>
            <div style={{height:'auto', padding:'0 25px 0 25px', width:'50%', backgroundColor:'white', borderRadius:'10px', margin:'10px 0 10px 0'}} className='shadow'>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{record.body}</ReactMarkdown>
            </div>
            {auth.currentUser && <button onClick={() => {handleDelete()}}>Delete</button>}
        </div>
    );
}