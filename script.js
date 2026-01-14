document.addEventListener('DOMContentLoaded', () => {
    // 1. 打字機
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
        //更平滑的位移
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

document.addEventListener('DOMContentLoaded', () => {
    // ...打字機與視差效果程式碼 ...

    // --- 點擊計數邏輯 ---
    const clickBtn = document.getElementById('openContactModal'); // 紀錄「聯絡我」按鈕被點幾次
    const displayCount = document.getElementById('clickCountDisplay'); // 用來顯示次數的 HTML 元素

    if (window.db) {
        const { ref, runTransaction, onValue } = window.dbRefs;
        const clickRef = ref(window.db, 'stats/clickCount');

        // A. 即時監聽資料庫，顯示目前的點擊次數
        onValue(clickRef, (snapshot) => {
            const data = snapshot.val() || 0;
            if (displayCount) displayCount.innerText = `已被點擊 ${data} 次`;
        });

        // B. 點擊時，增加資料庫數值
        clickBtn.addEventListener('click', () => {
            runTransaction(clickRef, (currentValue) => {
                return (currentValue || 0) + 1;
            });
        });
    }
});