// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // 向下滚动
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else {
        // 向上滚动
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.focus-card, .thought-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 微信二维码弹窗
const wechatBtn = document.getElementById('wechatBtn');
const qrOverlay = document.getElementById('qrOverlay');
const qrClose = document.getElementById('qrClose');

if (wechatBtn && qrOverlay) {
    wechatBtn.addEventListener('click', () => {
        qrOverlay.classList.add('active');
    });

    qrClose.addEventListener('click', () => {
        qrOverlay.classList.remove('active');
    });

    qrOverlay.addEventListener('click', (e) => {
        if (e.target === qrOverlay) {
            qrOverlay.classList.remove('active');
        }
    });
}
