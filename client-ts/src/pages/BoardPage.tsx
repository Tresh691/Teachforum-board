import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import type { Board } from "../types"
import { Excalidraw } from "@excalidraw/excalidraw";
import { useRef } from "react";
import "@excalidraw/excalidraw/index.css";

function BoardPage(){
  const [board, setBoard] = useState<Board | null>(null)
  const { id } = useParams()
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() =>{
    fetch(`/boards/${id}`)
    .then(res => res.json())
    .then(data => setBoard(data))
    .catch(err => console.error(err));
  }, [])

  function handleChange(elements: any){
    if (saveTimer.current){
      clearTimeout(saveTimer.current)
    }
    saveTimer.current = window.setTimeout(async () => {
      try{
        const res = await fetch(`/boards/${id}`,{
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({data: { elements }})
        })
        if (!res.ok) throw new Error('Ошибка при обновлении')
      } catch{
        console.error('Ошибка при обновлении')
      }
    }, 500)
  }

  if(!board) return(<div>Загрузка</div>)

return(
  <div>Доска {board?.title}
    <div style={{width: '100%', height:'600px'}}>
      <Excalidraw langCode="ru-RU"  onChange={handleChange} initialData={{elements: board?.data?.elements || []}}/>
    </div>
  </div>
)
}

export default BoardPage