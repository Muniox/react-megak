import { FC, FormEvent, useState} from "react"
import { CreateGiftReq, GiftEntity } from "types";
import { Spinner } from "../common/Spinner/Spinner";

export const AddGift: FC = () => {
    const [form, setForm] = useState<CreateGiftReq>({
        name: '',
        count: 0
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null) 

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    };

    const sendForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        
        try {
            const res = await fetch('http://localhost:3000/gift', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });
            const data: GiftEntity = await res.json();

            setResultInfo(`${data.name} added with ID ${data.id}`);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    };

    if (loading) {
        return <Spinner/>
    }

    if (resultInfo !== null) {
        return <div>
            <p><strong>{resultInfo}</strong></p>
            <button onClick={() => setResultInfo(null)}>Add another one</button>
        </div>
        
    }

    return <form onSubmit={sendForm}>
        <h2>Add Gift</h2>
        <div>
            <label htmlFor="gift-name">Name: </label>
            <input 
                type="text" 
                id="gift-name" 
                value={form.name} 
                onChange={
                    e => updateForm('name', e.target.value)
                }
            />
        </div>
        
        <div>
            <label htmlFor="gift-count">Count: </label>
            <input 
                type="number" 
                id="gift-count"
                value={form.count}
                onChange={e => updateForm('count', Number(e.target.value))}
            />
        </div>
        <button type="submit">Add</button>
    </form>
}