import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import type { Board } from "../types"
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

function BoardPage(){
  const [board, setBoard] = useState<Board | null>(null)
  const { id } = useParams()

  useEffect(() =>{
    fetch(`/boards/${id}`)
    .then(res => res.json())
    .then(data => setBoard(data))
    .catch(err => console.error(err));
  }, [])

  if(!board) return(<div>Загрузка</div>)

  function handleChange(elements: any, appState: any, files: any){
    console.log(elements.length)
  }

return(
  <div>Доска {board?.title}
    <div style={{width: '100%', height:'600px'}}>
      <Excalidraw langCode="ru-RU"  onChange={handleChange} initialData={{elements: board?.data?.element || []}}/>
    </div>
  </div>
)
}

export default BoardPage