import React, { useState, useEffect } from 'react';
import '../styles/Scene.css';
import Scene1 from '../img/Scene1.jpg';
import Scene2 from '../img/Scene2.jpg';
import Scene3 from '../img/Scene3.jpg';
import Scene4 from '../img/Scene4.jpg';
import Scene5 from '../img/Scene5.jpg';
import Scene6 from '../img/Scene6.jpg';
import Scene7 from '../img/Scene7.jpg';
import Scene8 from '../img/Scene8.jpg';

const quotes = [
  { id: 1, text: '먼 그대여, 기억들은 이제 눈발이 되어 흩날립니다.', source: '소설 <러브레터>', year: '1994', image: Scene1 },
  { id: 2, text: '나한테서 떨어졌으면, 숨 돌릴 틈이라도 좀 줬으면 바랄 게 없겠다.', source: '소설 <플립>', year: '2003', image: Scene2 },
  { id: 3, text: '사랑은 말로 표현할 수 없는 감정이야.', source: '소설 <노트북>', year: '1996', image: Scene3 },
  { id: 4, text: '네 이름으로 나를 불러 줘. 내 이름으로 너를 부를게', source: '소설 <콜 미 바이 유어 네임>', year: '2007', image: Scene4 },
  { id: 5, text: '내 몸에 꽃을 그리면, 그땐 받아주겠어?', source: '소설 <채식주의자>', year: '2007', image: Scene5 },
  { id: 6, text: '나의 내일은 너에게는 어제고, 나의 10년 후는 너에게는 10년 전이야.', source: '소설 <나는 내일, 어제의 너와 만난다>', year: '2014', image: Scene6 },
  { id: 7, text: '불행 옆에 있을 때 행복은 더 뜻깊다.', source: '소설 <작은 아씨들>', year: '1868', image: Scene7 },
  { id: 8, text: '죽음은 가까워지고 있지만, 그 죽음은 나에게서 멀어져 있지 않다.', source: '소설 <파과>', year: '2013', image: Scene8 },
];

function Scene() {
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem('likedQuotes');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    localStorage.setItem('likedQuotes', JSON.stringify(liked));
  }, [liked]);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  return (
    <main className="scene-container">
      {quotes.map((q) => (
        <div
          className="quote-card"
          key={q.id}
          style={{ backgroundImage: `url(${q.image})` }}
          onClick={() => setSelectedImage(q.image)}
        >
          <button
            className="quote-like"
            onClick={(e) => {
              e.stopPropagation();
              toggleLike(q.id);
            }}
          >
            {liked.includes(q.id) ? '❤️' : '🤍'}
          </button>
          <p className="quote-text">“{q.text}”</p>
          <p className="quote-source">— {q.source}, {q.year}</p>
        </div>
      ))}

      {/* 이미지 갤러리 모달 */}
      {selectedImage && (
        <div className="gallery-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="gallery-image-wrapper" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full view" />
            <button className="gallery-close" onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Scene;
