import { useState, useEffect } from "react";
import './CabinetPage.css'

interface Board {
  id: string;
  title: string;
  data: any;
  createdAt: string;
  updatedAt: string
}

function CabinetPage(){
  const hellomsg = ['Привет! Доска уже здесь и ждет тебя.','Здравствуйте! Пора включить воображение.','О, снова ты! Давай начнем.','С возвращением! Твой кабинет открыт.','Приветствую! Доска сегодня добрая, пользуйся моментом.','Здравствуй! Сегодня доска особенно послушная.','Привет! Готовы стереть границы невозможного?','Здравствуй! Доска в ударе, даже ластик не спорит.','Снова вместе! Давай сделаем урок интересным.','Здравствуйте! Начнем с чистого листа.']
  const [boards, setBoards] = useState<Board[]>([])

  useEffect(() =>{
    fetch('/boards')
    .then(res => res.json())
    .then(data => setBoards(data))
    .catch(err => console.error(err))
  }, [])

  return(
    <div className="body">
      <header className="header">
        <div className="container header__inner">
            <a href="#" className="logo">
                <svg className="logo__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                TeachForum / Board
            </a>
            <button className="btn btn--primary openLoginBtn">Выйти</button>
        </div>
    </header>

    <main className="main">
      <div>{hellomessage}</div>
      <div className="pricing-grid">
        <div className="pricing-card">

        </div>
      </div>
    </main>
    </div>
  )
}

export default CabinetPage