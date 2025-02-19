import React, {useState} from 'react'

function ControlledFormHook() {

    const [name, setName] = useState(' ');
    const [category, setCategory] = useState('Website');
    const [comments, setComments] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Your name: </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name='name' id='name'
                    type='text'
                />
            </div>
            <div>
                <label htmlFor='category'>Query category: </label>
                <select 
                onChange={(e) => setCategory(e.target.value)} 
                value={category}
                name='category' 
                id='category'
                >
                    <option value="website">Website issue</option>
                    <option value="order">Order issue</option>
                    <option value="general">General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='comments'>Comments: </label>
                <textarea
                    onChange={(e) => setComments(e.target.value)}
                    value={comments}
                    name='comments' id='comments'
                />
            </div>
            <input type='submit' />
        </form>
    </div>
)
}

export default ControlledFormHook