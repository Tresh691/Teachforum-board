import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [boardId, setBoardId] = useState<String | null>(null)
  async function addNewBoard(){
    try{
      const res = await fetch('/boards/board',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: "Моя доска",
          data: {}
        })
      })
      if (!res.ok) throw new Error('Ошибка при добавлении доски')
      const data = await res.json()
      setBoardId(data.id)
      setCount(count+1)
    }catch(err){
      console.error(err)
    }
  }
  return(
    <div>
      <h1>Моя доска</h1>
      <button onClick={() => addNewBoard()}>Создать доску</button>
      <h2>Cоздано досок: {count}</h2>
    </div>
  )
}
export default App
