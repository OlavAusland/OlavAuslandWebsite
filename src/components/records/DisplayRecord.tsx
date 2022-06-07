import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecord } from "../../api/firebaseAPI";
import { RecordType } from "../../domain/Record";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../../styles/loaders/waterfall-loader.css'
import NoRoute from "../error/NoRoute";

export default function DisplayRecord(){
    const [record, setRecord] = useState<RecordType>({} as RecordType);
    const [loading, setLoading] = useState<boolean>(true);
    const { id } = useParams();

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
            <div style={{height:'auto', width:'50%', backgroundColor:'white', borderRadius:'10px', margin:'10px 0 10px 0'}} className='shadow'>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{record.body}</ReactMarkdown>
            </div>
        </div>
    );
}