import { useEffect, useState } from 'react';
import { auth } from '../firebase-config';
import { RecordType } from '../domain/Record';
import { addRecord, getRecords } from '../api/firebaseAPI';
import '../styles/record.css'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../styles/loaders/cube-loader.css'


export default function Record(){
    const numRecords = 4;
    const [page, setPage] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [record, setRecord] = useState<RecordType>({} as RecordType)
    const [records, setRecords] = useState<RecordType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const handleSubmit = async(event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {title: {value: string}};
        record.createdAt = Date.now().toLocaleString();
        record.title = target.title.value;
        await addRecord(record).then((res) => {console.log('Successfully added record')}).catch((err) => {console.log(err)});
        setIsModalOpen(false);
    }

    useEffect(() => {
        const fetchRecords = async() => {
            getRecords().then((res) => {
                setRecords(res);
                setLoading(false);
            }).catch((err) => {console.log(err)});
        }
        fetchRecords();
    }, []);

    if(loading){
        return (
            <div className='record-container'>
                <div className='cube'>
                    <div/><div/><div/>
                    <div/><div/><div/>
                </div>
            </div>
        );
    }
    
    if(isModalOpen) {
        return(
            <div className='record-container'>                
                <form className='record-modal shadow' onSubmit={(event: React.SyntheticEvent) => {handleSubmit(event)}}>
                    <h1>Add New Record</h1>
                    <hr style={{borderBottomWidth:1, width:'90%'}}/>
                    <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center'}}>
                        <h1>Title:</h1><input type='title' name='title'/>
                    </div>
                    <textarea onChange={(event) => {setRecord(prev => ({...prev, body:event.target.value}))}}/>
                    <div style={{display:'flex', flexDirection:'row', width:'90%'}}>
                        <button className='record-modal-button' type='submit'>Save</button>
                        <button className='record-modal-button' onClick={() => {setIsModalOpen(false)}}>Exit</button>
                    </div>
                    <div style={{display:'flex', width:'100%', flexDirection:'column'}}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{record.body}</ReactMarkdown>
                    </div>
                </form>
            </div>
        );
    }

    return (    
        <div className='record-container'>
            {auth.currentUser &&
                <div>
                    <button className='record-button shadow' onClick={() => {setIsModalOpen(true)}}>Add Record</button>
                </div>
            }
            <div className='record-card-container'>
                {records.slice(numRecords*(page-1), numRecords*page+numRecords).map((record: RecordType, i: number) => (
                    <div className='record-card shadow' key={i}>
                        <h1>{record.title}</h1>
                        <hr style={{borderBottomWidth:'1px', width:'90%'}}/>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{record.body}</ReactMarkdown>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={() => {if(page > 1){setPage(prev => (prev -1))}}} style={{margin:0, padding:0}}>⬅️</button>
                {Array.from(Array(Math.ceil(records.length/numRecords)).keys()).slice(page, page + 5).map((i) => (<button onClick={() => {setPage(i)}}>{i}</button>))}
                <button onClick={() => {if(page < Math.ceil(records.length/numRecords) - 1){setPage(prev => (prev +1))}}} style={{margin:0, padding:0}}>➡️</button>
            </div>
        </div>
    );
}