import { useState } from "react";
import { motion } from 'framer-motion';
import './LandingPage.css'

function LandingPage(){

  const[faqItems, setFaqItems] = useState([
  {
    question: "Как работает интерактивная доска?",
    answer: "Вы можете рисовать прямо в браузере, добавлять готовые фигуры (круги, квадраты, стрелки) и сохранять результат. Всё происходит в реальном времени, без задержек.",
    show: false
  },
  {
    question: "Можно ли экспортировать нарисованное?",
    answer: "Да, экспорт доступен в PDF и PNG. Вы можете отправить файл ученику или распечатать для офлайн-занятий.",
    show: false
  },
  {
    question: "Есть ли готовые шаблоны фигур?",
    answer: "Конечно! В библиотеке более 20 базовых фигур: линии, прямоугольники, эллипсы, треугольники, стрелки и даже сетки для графиков.",
    show: false
  },
  {
    question: "Сколько это стоит?",
    answer: "Полный доступ ко всем функциям - до 149 ₽ в месяц, без скрытых платежей. Если у вас есть подписка на платформу teachforum, то доска идёт в подарок",
    show: false
  },
  {
    question: "Подходит ли доска для групповых занятий?",
    answer: "Да, вы можете пригласить несколько учеников одновременно. Все видят изменения в реальном времени, а вы управляете доступом.",
    show: false
  },
  {
    question: "Нужно ли устанавливать программу?",
    answer: "Нет, всё работает прямо в браузере. Достаточно открыть ссылку и начать занятие - без загрузки и установки.",
    show: false
  }
])

function showFaq (index: number) {
  setFaqItems(prev =>
    prev.map((item, i) =>
      i == index ? {...item, show: !item.show} : item
    )
  )
}

const [toggleModal, setToggleModal] = useState(false)
function showModal(){
  setToggleModal(!toggleModal)
}

const [type, setType] = useState<string>('password')
function toggleVisibilityPassword (){
  setType(type === 'text' ? 'password' : 'text')
}

  return(
    <div className="body">
          <header className="header">
        <div className="container header__inner">
            <a href="" className="logo">{/* ссылка */}
                <svg className="logo__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                TeachForum / Board
            </a>
            <nav className="nav">
                <a href="#features" className="nav__link">Возможности</a>
                <a href="#tariff" className="nav__link">Тарифы</a>
                <a href="#reviews" className="nav__link">Отзывы</a>
                <a href="#faq" className="nav__link">FAQ</a>
            </nav>
            <button className="btn btn--primary openLoginBtn" onClick={() => showModal()}>Войти</button>
        </div>
    </header>

    <main>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Пространство для визуального мышления</h1>
          <p className="hero__subtitle">Перетаскивайте, рисуйте, комментируйте - всё как в жизни, только в онлайне</p>
          <button className="btn btn--white btn--lg" onClick={showModal}>Попробовать бесплатно</button>
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

          <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
            <section className="section" id="features">
              <div className="container">
                  <h2 className="section__title">Что внутри</h2>
                  <div className="features-grid">
                      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
                        <div className="feature-card" data-animate>
                            <div className="feature-card__icon">🎨</div>
                            <h3 className="feature-card__title">Рисуйте от руки</h3>
                            <p className="feature-card__text">Перья, маркеры и кисти с настраиваемой толщиной. Рисуйте интуитивно.</p>
                        </div>
                      </motion.div>
                      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
                        <div className="feature-card" data-animate>
                            <div className="feature-card__icon">♾️</div>
                            <h3 className="feature-card__title">Бесконечный холст</h3>
                            <p className="feature-card__text">Увеличивайте, уменьшайте, двигайте - места хватит для любых масштабов</p>
                        </div>
                      </motion.div>
                      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
                        <div className="feature-card" data-animate>
                            <div className="feature-card__icon">📤</div>
                            <h3 className="feature-card__title">Мгновенный экспорт</h3>
                            <p className="feature-card__text">Выгружайте в PNG, PDF или - для отчётов, рассылок и печати.</p>
                        </div>
                      </motion.div>
                  </div>
              </div>
          </section>
          </motion.div>

        <section className="section" id="tariff">
            <div className="container">
                <h2 className="section__title">Тариф</h2>
                <p className="pricing-subtitle">Пробный период - 7 дней бесплатно</p>

                <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
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
                          <a href=""><button className="btn btn--outline btn--full">Начать бесплатно</button></a>{/* ссылка */}
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
                          <a href=""><button className="btn btn--white btn--full">Выбрать</button></a>{/* ссылка */}
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
                          <a href="" target="_blank"><button className="btn btn--outline btn--full">Выбрать</button></a>{/* ссылка */}
                      </div>
                  </div>
                </motion.div>
            </div>
        </section>

        
<section className="section section--alt" id="reviews">
  <div className="container">
    <h2 className="section__title">Отзывы</h2>
    <div className="reviews-carousel">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
        <div className="reviews-track">
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
      </motion.div>
    </div>
  </div>
</section>

<section className="section" id="faq">
            <div className="container">
                <h2 className="section__title">Часто спрашивают</h2>
                {faqItems.map((faq, index) => (
                  <div key={index} className="faq-list">
                    <div className="faq-item">
                      <button className="faq-question" onClick={() => showFaq(index)} aria-expanded={faq.show}>{faq.question}</button>
                      {faq.show && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                  </div>
                ))}
            </div>
        </section>

                <section className="cta section">
            <div className="container" style={{textAlign: 'center'}}>
                <h2>Готовы начать?</h2>
                <p style={{marginBottom: '24px'}}>Присоединяйтесь к преподавателям, которые уже рисуют на своих занятиях через доску TeachForum.</p>
                <button className="btn btn--primary btn--lg">Войти в систему</button>
            </div>
        </section>
    </main>

    <footer className="footer">
        <div className="container">
            <p className="footer__text">© 2026 TeachForum · <a href="" className="footer__link">teachforum@mail.ru</a>{/* ссылка */} · <a href="" className="footer__link">Политика конфиденциальности</a>{/* ссылка */}</p>
        </div>
    </footer>
<div className="modal-overlay" style={{display: toggleModal ? 'flex' : 'none'}}>
  <div className="modal">
    <button className="modal__close" onClick={() => showModal()}>&times;</button>
    <h2 className="modal__title">Вход в TeachForum</h2>
    <div style={{ color: 'red', display: 'none', marginBottom: '12px' }}></div>
    <form className="login-form" action="" method="POST">
      <input type="hidden" name="role" value="teacher" />
      <div className="form-group">
        <label htmlFor="username" className="form-label">Логин или Email</label>
        <input type="text" name="login" className="form-input" placeholder="Введите логин или email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">Пароль</label>
        <div className="password-wrapper">
          <input type={type} name="password" className="form-input" placeholder="Введите пароль" required />
          <button type="button" className="password-toggle" aria-label="Показать пароль" onClick={toggleVisibilityPassword}>{type === 'password' ? '👁️' : '🙈'}</button>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <input type="checkbox" name="remember_me" value="1" defaultChecked />
        <label htmlFor="rememberMe" style={{ fontSize: '14px', color: 'var(--text-secondary)', cursor: 'pointer' }}>Запомнить меня</label>
      </div>
      <button type="submit" className="btn btn--primary btn--full">Войти</button>
      <div style={{ textAlign: 'center', marginTop: '12px' }}>
        <a href="" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Забыли пароль?</a>{/* ссылка */}
      </div>
      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Нет аккаунта?</span>
        <a href="" style={{ fontSize: '14px', color: 'var(--primary)', marginLeft: '4px' }}>Зарегистрироваться</a>{/* ссылка */}
      </div>
      <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px' }}>
        Нажимая «Войти», вы соглашаетесь с нашей <a href="" target="_blank">политикой конфиденциальности</a>{/* ссылка */}
      </p>
    </form>
  </div>
</div>
    </div>
  )
}

export default LandingPage