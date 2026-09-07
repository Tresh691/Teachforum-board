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

          <section id="features" className="section">
            <div className="container">
                <h2 className="section__title">Что внутри</h2>
                <div className="features-grid">
                    <div className="feature-card" data-animate>
                        <div className="feature-card__icon">🎨</div>
                        <h3 className="feature-card__title">Рисуйте от руки</h3>
                        <p className="feature-card__text">Перья, маркеры и кисти с настраиваемой толщиной. Скетчите интуитивно, как на бумаге.</p>
                    </div>
                    <div className="feature-card" data-animate>
                        <div className="feature-card__icon">♾️</div>
                        <h3 className="feature-card__title">Бесконечный холст</h3>
                        <p className="feature-card__text">Увеличивайте, уменьшайте, двигайте - места хватит для любых масштабов</p>
                    </div>
                    <div className="feature-card" data-animate>
                        <div className="feature-card__icon">📤</div>
                        <h3 className="feature-card__title">Мгновенный экспорт</h3>
                        <p className="feature-card__text">Выгружайте в PNG, PDF или - для отчётов, рассылок и печати.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing" className="section">
            <div className="container">
                <h2 className="section__title">Тариф</h2>
                <p className="pricing-subtitle">Пробный период - 7 дней бесплатно</p>

                <div className="pricing-grid">
                    <div className="pricing-card" data-animate>
                        <h3>Месяц</h3>
                        <div className="price">199 ₽</div>
                        <p className='pricing-text'>в месяц</p>
                        <ul>
                            <li>Пространство для творчества</li>
                            <li>Фигуры, схемы и многое другое</li>
                            <li>Экспорт досок в PDF</li>
                            <li>Выгодная цена</li>
                        </ul>
                        <a href="contact.html"><button className="btn btn--outline btn--full">Начать бесплатно</button></a>
                    </div>
                    <div className="pricing-card pricing-card--popular" data-animate>
                        <span className="popular-badge">Выгодно</span>
                        <h3>Бессрочно</h3>
                        <div className="price">0 ₽</div>
                        <p className='pricing-text'>навсегда</p>
                        <ul>
                            <li>С подпиской на платформу</li>
                            <li>Интерактивная доска бесплатная</li>
                            <li>Точно такая же доска</li>
                            <li>Бесплатно</li>
                        </ul>
                        <a href="https://teachforum.ru/"><button className="btn btn--white btn--full">Выбрать</button></a>
                    </div>
                    <div className="pricing-card" data-animate>
                        <h3>Полгода</h3>
                        <div className="price">149 ₽</div>
                        <p className='pricing-text'>в месяц</p>
                        <ul>
                            <li>Пространство для творчества</li>
                            <li>Фигуры, схемы и многое другое</li>
                            <li>Экспорт досок в PDF</li>
                            <li>Скидка 25%</li>
                        </ul>
                        <a href="contact.html" target="_blank"><button className="btn btn--outline btn--full">Выбрать</button></a>
                    </div>
                </div>
            </div>
        </section>

        
<section id="reviews" className="section section--alt">
  <div className="container">
    <h2 className="section__title">Отзывы</h2>
    <div className="reviews-carousel" id="reviewsCarousel">
      <div className="reviews-track" id="reviewsTrack">
        {/* 15 отзывов об интерактивной доске */}
        <div className="review-card">
          <div className="review-card__stars">★★★★★</div>
          <p>"Интерактивная доска просто супер! Рисую графики и схемы прямо во время занятия, ученики в восторге."</p>
          <div className="review-card__author-block">
            <div className="review-card__avatar" style={{ background: 'linear-gradient(135deg, #0D7C3D, #A3E635)' }}>Н</div>
            <div className="review-card__author-info">
              <div className="review-card__author">Наталья К.</div>
              <small>Репетитор математики</small>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="review-card__stars">★★★★★</div>
          <p>"Готовые фигуры экономят кучу времени, больше не нужно рисовать всё вручную."</p>
          <div className="review-card__author-block">
            <div className="review-card__avatar" style={{ background: 'linear-gradient(135deg, #A3E635, #0D7C3D)' }}>С</div>
            <div className="review-card__author-info">
              <div className="review-card__author">Сергей Л.</div>
              <small>Преподаватель английского</small>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="review-card__stars">★★★★★</div>
          <p>"Экспорт занятий в PDF - гениально, родители всегда могут посмотреть, что мы прошли."</p>
          <div className="review-card__author-block">
            <div className="review-card__avatar" style={{ background: 'linear-gradient(135deg, #0D7C3D, #A3E635)' }}>Е</div>
            <div className="review-card__author-info">
              <div className="review-card__author">Елена В.</div>
              <small>Репетитор физики</small>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </main>
    </div>
  )
}

export default App