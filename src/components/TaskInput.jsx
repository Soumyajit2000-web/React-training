import React, { useState } from 'react'

function TaskInput(props) {
    const { setTasks, tasks } = props
    const [singleTask, setSingleTask] = useState("")

    function onAdd() {
        setTasks([...tasks, singleTask])
        setSingleTask("")
    }

  return (
    <div>
        <input
            value={singleTask}
            placeholder='Enter a tasks'
            onChange={(e)=>setSingleTask(e.target.value)}
        />
        <button onClick={onAdd}>Add</button>
    </div>
  )
}

export default TaskInput