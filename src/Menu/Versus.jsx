// src/Menu/Versus.jsx
import React, { useState } from 'react';
import '../styles/Versus.css';
import { useNavigate } from 'react-router-dom';
import versus1 from '../img/versus1.jpg';
import versus2 from '../img/versus2.jpg';
import versus3 from '../img/versus3.jpg';
import versus4 from '../img/versus4.jpg';

const versusData = [
  {
    id: 1,
    title: '파과',
    image: versus1,
    novel: '감정을 배제한 냉정한 킬러인 조각, 서술 위주의 묵직한 분위기로 전개가 된다. 과거 회상을 암시적으로 표현하고, 긴장감을 심리적 압박으로 표현하였다.',
    film: '감정과 인간적인 면이 강조가 되며, 액션과 감정선을 강조하여 빠른 전개가 이루어진다. 과거 회상을 플래시백을 통해 자세히 설명을 하였으며, 조직과의 대립과 전투 장면으로 긴장감을 조성하였다.',
    link: 'https://youtu.be/en72qvufSIE?si=p_-iMOYGhkF3aBWg',
  },
  {
    id: 2,
    title: '노트북',
    image: versus2,
    novel: '광범위한 캐릭터 배경과 내면의 생각을 제공하여 독자들이 캐릭터의 감정과 동기를 더 깊게 탐구할 수 있게 하였다.',
    film: '스토리텔링에 시각적 요소를 추가하여 소설에 묘사된 설정, 캐릭터 및 사건에 대한 영화적 해석을 제공하였다.',
    link: 'https://youtu.be/dyuvMHc-vYc?si=s1PSkft23Dgb4G2i',
  },
  {
    id: 3,
    title: '채식주의자',
    image: versus3,
    novel: '주인공의 내면을 매우 섬세하게 묘사하고, 그녀의 변화 과정을 상세히 설명한다.',
    film: '복잡한 내면의 심리가 영화에서는 축약되거나 시각적 연출로 대체되면서 심리적인 디테일이 다소 약해졌다.',
    link: 'https://youtu.be/5g1Sa7yed5o?si=tv8se6iVDJpbvXak',
  },
  {
    id: 4,
    title: '우아한 거짓말',
    image: versus4,
    novel: '독자가 각 인물의 내면을 깊이 탐구할 수 있다.',
    film: '관객이 인물의 감정을 함께 느끼게 만드는 것에 중점을 둔다.',
    link: 'https://youtu.be/daPCkQRzBzw?si=H9impjQwOhwy1Tb4',
  },
];

export default function Versus() {
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState('');
  const [commentData, setCommentData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (comment.trim()) {
      setCommentData(prev => {
        const current = prev[selected.id] || [];
        const updated = [...current, comment.trim()].slice(-3); // 최대 3개 유지
        return { ...prev, [selected.id]: updated };
      });
      setComment('');
    }
  };

  return (
    <div className="versus-container">
      {versusData.map((item) => (
        <section key={item.id} className="versus-wrapper" onClick={() => setSelected(item)}>
          <div className="versus-image">
            <img src={item.image} alt={`${item.title} 포스터`} />
            <div className="versus-left"><h3>{item.title}</h3></div>
          </div>
          <div className="versus-right">
            <div className="versus-content">
              <div className="versus-label">원작 소설</div>
              <div className="versus-text"><p>{item.novel}</p></div>
              <hr />
              <div className="versus-label">영화</div>
              <div className="versus-text"><p>{item.film}</p></div>
            </div>
          </div>
        </section>
      ))}

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-versus" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>

            <div className="modal-image-wrapper">
              {(commentData[selected.id] || []).map((text, idx) => (
                <div className="comment-bubble" key={idx} style={{ top: `${20 + idx * 50}px` }}>
                  {text}
                </div>
              ))}
              <img src={selected.image} alt="poster" className="modal-image" />
            </div>

            <h3>{selected.title}</h3>

            <div className="modal-buttons">
              <button onClick={() => { setSelected(null); navigate('/page'); }}>원작 소설 보기</button>
              <button onClick={() => window.open(selected.link, '_blank', 'noopener,noreferrer')}>
                해당 관련 영상 보기
              </button>
            </div>

            <div className="modal-comment">
              <textarea
                placeholder="감상평을 남겨보세요"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button onClick={handleSubmit}>등록</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
