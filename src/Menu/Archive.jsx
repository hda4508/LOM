// src/Menu/Archive.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Archive.css';

/* ─────────────────────────────
   1) Scene.jsx에서 쓰인 quotes 배열을
      여기서도 간단히 다시 선언
      (공유 모듈로 빼도 OK)
───────────────────────────── */
const quotes = [
  { id: 1, text: '먼 그대여, 기억들은 이제 눈발이 되어 흩날립니다.', source: '소설 <러브레터>', year: '1994' },
  { id: 2, text: '나한테서 떨어졌으면, 숨 돌릴 틈이라도 좀 줬으면 바랄 게 없겠다.', source: '소설 <플립>', year: '2003' },
  { id: 3, text: '사랑은 말로 표현할 수 없는 감정이야.', source: '소설 <노트북>', year: '1996' },
  { id: 4, text: '네 이름으로 나를 불러 줘. 내 이름으로 너를 부를게', source: '소설 <콜 미 바이 유어 네임>', year: '2007' },
  { id: 5, text: '내 몸에 꽃을 그리면, 그땐 받아주겠어?', source: '소설 <채식주의자>', year: '2007' },
  { id: 6, text: '나의 내일은 너에게는 어제고, 나의 10년 후는 너에게는 10년 전이야.', source: '소설 <나는 내일, 어제의 너와 만난다>', year: '2014' },
  { id: 7, text: '불행 옆에 있을 때 행복은 더 뜻깊다.', source: '소설 <작은 아씨들>', year: '1868' },
  { id: 8, text: '죽음은 가까워지고 있지만, 그 죽음은 나에게서 멀어져 있지 않다.', source: '소설 <파과>', year: '2013' },
];

/* ─────────────────────────────
   2) Archive 컴포넌트
───────────────────────────── */
export default function Archive() {
  const [books, setBooks] = useState([]);
  const [quoteIds, setQuoteIds] = useState([]);

  /* ── 처음 로드할 때 localStorage에서 꺼내기 ── */
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('likedBooks')) || [];
    const savedIds   = JSON.parse(localStorage.getItem('likedQuotes')) || [];
    setBooks(savedBooks);
    setQuoteIds(savedIds);
  }, []);

  /* ── ♥ 해제(언라이크) 함수 ── */
  const unlikeBook = (id) => {
    const updated = books.filter((b) => b.id !== id);
    setBooks(updated);
    localStorage.setItem('likedBooks', JSON.stringify(updated));
  };

  const unlikeQuote = (id) => {
    const updatedIds = quoteIds.filter((q) => q !== id);
    setQuoteIds(updatedIds);
    localStorage.setItem('likedQuotes', JSON.stringify(updatedIds));
  };

  /* ── id 배열 → 실제 quote 객체 배열 매핑 ── */
  const likedQuotes = quotes.filter((q) => quoteIds.includes(q.id));

  return (
    <section className="archive-wrapper">
      <h2 className="archive-title">My Archive</h2>

      {/* === 좋아요한 책이 하나도 없으면 안내 문구 === */}
      {books.length === 0 && likedQuotes.length === 0 ? (
        <p className="empty-text">아직 좋아요한 콘텐츠가 없습니다.</p>
      ) : (
        <>
          {/* ───────── 책 카드 리스트 ───────── */}
          {books.length > 0 && (
            <>
              <h3 className="section-heading">Books</h3>
              <div className="archive-grid">
                {books.map((book) => (
                  <div key={book.id} className="archive-card">
                    <img src={book.image} alt={book.title} />
                    <div className="card-info">
                      <p className="card-title">{book.title}</p>
                      <p className="card-author">{book.author}</p>
                    </div>
                    <button
                      className="unlike-btn"
                      onClick={() => unlikeBook(book.id)}
                    >
                      ♥
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ───────── 명대사 카드 리스트 ───────── */}
          {likedQuotes.length > 0 && (
            <>
              <h3 className="section-heading">Scenes / Quotes</h3>
              <div className="archive-grid quotes">
                {likedQuotes.map((q) => (
                  <div key={q.id} className="quote-card">
                    <p className="quote-text">“{q.text}”</p>
                    <p className="quote-source">— {q.source}, {q.year}</p>
                    <button
                      className="unlike-btn"
                      onClick={() => unlikeQuote(q.id)}
                    >
                      ♥
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}
