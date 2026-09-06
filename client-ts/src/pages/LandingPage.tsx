import { useState } from "react";
import './LandingPage.css'

function App(){
  return(
    <div className="body">
          <header className="header">
        <div className="container header__inner">
            <a href="#" className="logo">
                <svg className="logo__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                TeachForum / Board
            </a>
            <nav className="nav">
                <a href="#features" className="nav__link">Возможности</a>
                <a href="#how" className="nav__link">Как работает</a>
                <a href="#pricing" className="nav__link">Тарифы</a>
                <a href="#reviews" className="nav__link">Отзывы</a>
                <a href="#faq" className="nav__link">FAQ</a>
            </nav>
            <button className="btn btn--primary openLoginBtn">Войти</button>
        </div>
    </header>

    <main>
      <section className="hero">
            <div className="container">
                <h1 className="hero__title">Пространство для визуального мышления</h1>
                <p className="hero__subtitle">Перетаскивайте, рисуйте, комментируйте - всё как в жизни, только в онлайне</p>
                <button className="btn btn--white btn--lg" id="heroLoginBtn">Попробовать бесплатно</button>
                <div className="hero__illustration">
                    <div className="hero__mockup">
                        <div className="mockup__dots"><span></span><span></span><span></span><span></span></div>
                        <div className="mockup__line"></div>
                        <div className="mockup__line short"></div>
                        <div className="mockup__line short"></div>
                        <div className="mockup__line very-short"></div>
                        <div className="mockup__card"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}

export default App