document.addEventListener('DOMContentLoaded', () => {
    // 1. 打字機效果
    new Typed('#typed-text', {
        strings: ["歡迎來到我的個人空間", "熱愛遊戲與開發的日常", "ciallo (∠·ω )⌒★"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });

    // 2. 滑鼠跟隨
    const follower = document.querySelector('.cursor-follower');
    document.addEventListener('mousemove', (e) => {
        // 使用 requestAnimationFrame 或更平滑的位移
        follower.style.transform = `translate(${e.clientX - 7}px, ${e.clientY - 7}px)`;
    });

    // 3. 視差捲動效果
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        const pTexts = document.querySelectorAll('.parallax-text');
        
        pTexts.forEach(text => {
            let parentPos = text.closest('.parallax-window').offsetTop;
            let speed = 0.4;
            let yPos = (scrollValue - parentPos) * speed;
            
            // 讓文字在進入視窗時才開始位移
            text.style.transform = `translateY(${yPos}px)`;
            
            // 漸淡效果
            let opacity = 1 - Math.abs(yPos) / 500;
            text.style.opacity = Math.max(opacity, 0);
        });
    });

    // 4. Modal 控制
    const modal = document.getElementById("contactModal");
    const openBtn = document.getElementById("openContactModal");
    const closeBtn = document.querySelector(".close-btn");

    if (openBtn && modal) {
        openBtn.onclick = () => {
            modal.style.display = "flex";
            modal.style.alignItems = "center";
            modal.style.justifyContent = "center";
        };
        closeBtn.onclick = () => modal.style.display = "none";
        window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
    }
});

// 確保 scroll 監聽器依然簡潔
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const pTexts = document.querySelectorAll('.parallax-text');
    
    pTexts.forEach(text => {
        let parentPos = text.closest('.parallax-window').offsetTop;
        // 修正後的計算公式，讓文字在畫面中央時位移最自然
        let offset = (scrollValue - parentPos) * 0.4;
        text.style.transform = `translateY(${offset}px)`;
    });
});

// 確保 scroll 監聽器依然簡潔
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const pTexts = document.querySelectorAll('.parallax-text');
    
    pTexts.forEach(text => {
        let parentPos = text.closest('.parallax-window').offsetTop;
        // 修正後的計算公式，讓文字在畫面中央時位移最自然
        let offset = (scrollValue - parentPos) * 0.4;
        text.style.transform = `translateY(${offset}px)`;
    });
});
