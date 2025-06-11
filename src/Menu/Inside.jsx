// src/Menu/Inside.jsx
import React, { useRef, useState } from 'react';
import '../styles/Inside.css';
import inside1 from '../img/inside1.jpg';
import inside11 from '../img/inside11.jpg';
import inside111 from '../img/inside111.jpg';
import inside2 from '../img/inside2.jpg';
import inside22 from '../img/inside22.jpg';
import inside222 from '../img/inside222.jpg';
import inside3 from '../img/inside3.jpg';
import inside33 from '../img/inside33.jpg';
import inside333 from '../img/inside333.jpg';
import inside4 from '../img/inside4.jpg';
import inside44 from '../img/inside44.jpg';
import inside444 from '../img/inside444.jpg';
import inside5 from '../img/inside5.jpg';
import inside55 from '../img/inside55.jpg';
import inside555 from '../img/inside555.jpg';
import inside6 from '../img/inside6.jpg';
import inside66 from '../img/inside66.jpg';
import inside666 from '../img/inside666.jpg';

const cardData = [
  {
    id: 1,
    title: '〈파과〉 촬영 비하인드',
    subtitle: '고요한 컷을 만들기 위한 3일의 밤',
    images: [inside1, inside11, inside111],   // ✨ 여러 장
  },
  {
    id: 2,
    title: '〈러브레터〉 촬영 비하인드',
    subtitle: '침묵과 빛으로 감정을 설계하다.',
    images: [inside2, inside22, inside222],
  },
  {
    id: 3,
    title: '〈플립〉 촬영 비하인드',
    subtitle: '거울에 비친 인물, 어떻게 찍을 것인가.',
    images: [inside3,inside33,inside333],
  },
  {
    id: 4,
    title: '〈콜 미 바이 유어 네임〉 촬영 비하인드',
    subtitle: '한 문장을 말하기까지 배우는 세 번 울었다.',
    images: [inside4,inside44,inside444],
  },
  {
    id: 5,
    title: '〈우아한 거짓말〉 촬영 비하인드',
    subtitle: '붉은 노을을 따라잡기 위해, 6분의 기적을 기다렸다.',
    images: [inside5,inside55,inside555],
  },
  {
    id: 6,
    title: '〈노트북〉 촬영 비하인드',
    subtitle: '한여름 새벽 4시의 파도를 실내에서 찍는 방법.',
    images: [inside6,inside66,inside666],
  },
];

export default function Inside() {
  const scrollRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);   // 모달용 카드
  const [currentIdx, setCurrentIdx] = useState(0);          // 슬라이드 인덱스

  /* 가로 스크롤 화살표 (옵션용) */
  const handleScroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 320;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="inside-wrapper">
      {/* 카드 리스트 */}
      <div className="inside-scroll" ref={scrollRef}>
        {cardData.map((card) => (
          <div
            key={card.id}
            className="inside-card"
            onClick={() => {
              setSelectedCard(card);
              setCurrentIdx(0);
            }}
          >
            <div
              className="inside-thumb"
              style={{ backgroundImage: `url(${card.images[0]})` }}
            />
            <div className="inside-caption">
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
              <span className="arrow">↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 갤러리 */}
      {selectedCard && (
        <div className="gallery-backdrop" onClick={() => setSelectedCard(null)}>
          <div className="gallery-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-close"
              onClick={() => setSelectedCard(null)}
            >
              ✕
            </button>

            {/* 슬라이드 영역 */}
            <button
              className="gallery-btn prev"
              onClick={() =>
                setCurrentIdx(
                  (prev) =>
                    (prev - 1 + selectedCard.images.length) %
                    selectedCard.images.length
                )
              }
            >
              ‹
            </button>

            <img
              src={selectedCard.images[currentIdx]}
              alt="behind"
              className="gallery-img"
            />

            <button
              className="gallery-btn next"
              onClick={() =>
                setCurrentIdx(
                  (prev) => (prev + 1) % selectedCard.images.length
                )
              }
            >
              ›
            </button>

            <div className="gallery-caption">
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.subtitle}</p>
              <p>
                {currentIdx + 1} / {selectedCard.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
