import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3]);

    const addNums = () => {
        setNums([...nums, nums.length + 1
        ])
    }

    const removeNums = () => {
        setNums(
            nums.filter((item, idx) => 
                idx !== nums.length - 1
            )
        )
    }


    const buggyPushNums = () => {
        nums.push(nums.length + 1)
        console.log(nums)
        setNums(nums)
    }
  return (
    <div>
        <button onClick={addNums}>Add item</button>
        <button onClick={removeNums}>Remove item</button>
        <button onClick={buggyPushNums}>Push item</button>
        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays