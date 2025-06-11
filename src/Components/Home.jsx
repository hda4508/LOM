// src/components/Home.jsx
import React from "react";
import ScrollIndicator from "./ScrollIndicator"; // 이미 있는 컴포넌트 사용
import "../styles/Index.css";                    // 기존 스타일 그대로 사용

export default function Home() {
    return (
        <main className="home">
            {/* ===== 왼쪽 영역 ===== */}
            <section className="hero-left">


                <h1 className="hero-headline">
                    <span>From written</span>
                    <br />
                    <span>Words to</span>
                    <br />
                    <span className="accent">Moving pictures.</span>
                </h1>
            </section>
            <br />
            <div className="scroll-wrap">
                <ScrollIndicator />
            </div>

            {/* ===== 오른쪽 영역 ===== */}
            <section className="hero-right">
                <div className="year">2025.</div>

                <article className="intro-box">
                    <h2>Moving pictures.</h2>
                    <p>
                        When literature meets cinema. Stories once confined to ink begin to
                        breathe in light. A single sentence becomes a living frame, a quiet
                        thought turns into a glance, and silence…
                    </p>
                </article>
            </section>
        </main>
    );
}
