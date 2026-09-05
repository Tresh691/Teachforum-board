import { useState } from 'react'
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
import './App.css'
import { languages } from "@excalidraw/excalidraw";
console.log(languages);

function App() {
  const [count, setCount] = useState<number>(0)
  const [boardId, setBoardId] = useState<string | null>(null)
  const [inputBoardId, setInputBoardId] = useState<string>('')
  const [searchBoard, setSearchBoard] = useState<any>(null)
  async function addNewBoard(){
    try{
      const res = await fetch('/boards',{
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

  async function loadBoardsById(boardId: string){
    try{
      const res = await fetch(`/boards/${boardId}`)
      if(!res.ok) throw new Error('Ошибка при загрузки доски')
      const data = await res.json()
      setSearchBoard(data)
      setInputBoardId('')
    } catch(err){
      console.error(err)
    }
  }

  
  return(
    <div>
      <h1>Моя доска</h1>
      <button onClick={() => addNewBoard()}>Создать доску</button>
      <h2>Cоздано досок: {count}</h2>
      <p>id последней доски: {boardId}</p>
      <input type="text" placeholder='Введите id доски' value={inputBoardId} onChange={(e) => setInputBoardId(e.target.value)} />
      <button onClick={() => loadBoardsById(inputBoardId)}>Найти доску</button>
      { searchBoard && <h3>Найденая доска:{searchBoard.title}</h3>}
      <div style={{ width: "800px", height: "500px", border: "1px solid #ccc" }}>
        <Excalidraw langCode="ru-RU" />
      </div>
    </div>
  )
}
export default App