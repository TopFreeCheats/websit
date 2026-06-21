const cheatsRaw = [
    { name: "Nursultan Client", displayName: "Nursultan Client", banner: "https://i.ytimg.com/vi/JbvxtOO-BTg/maxresdefault.jpg", icon: "https://i.pinimg.com/736x/84/b3/79/84b3792765a0c1d919a4b9718f132187.jpg", zipFile: "Nursultan_Client.zip", desc_ru: "Мощный бесплатный чит с визуалами премиум-уровня (ESP, Chams) и жесткими настройками под анархию.", fileType: ".exe", lastUpdate: "12.05.2026" },
    { name: "Catlavan Client", displayName: "Catlavan Client", banner: "https://i.ytimg.com/vi/8g3xpjXcKZY/maxresdefault.jpg", icon: "https://i.ytimg.com/vi/1aNQsM3EUrI/maxresdefault.jpg", zipFile: "Catlavan_Client.zip", desc_ru: "Легковесный и оптимизированный бесплатный чит для слабых ПК с минимальным просадом FPS и базовыми PvP-модулями.", fileType: ".exe", lastUpdate: "10.05.2026" },
    { name: "NightDLC Client", displayName: "NightDLC Client", banner: "https://i.ytimg.com/vi/3t2qq5ln9wo/maxresdefault.jpg", icon: "https://yandex-images.clstorage.net/QE5MO5105/8f18d9ju/VNHAOVXg_4joBjei1zHX5i_ZHW-pHHaI8SSi1OnCnoLkFSW0wmblgPhZAd0MC-gii8Rd3yjgN7qefL4flMotPnGFxQ2QlNvY2Eamhkbw89cvCclfaHlSaLXRgnTp8pjxBhJy0qCg13LPXsAoad79JiqwSRzLcWVZqZvJqccZ3miUkFBbFpMtPil1FDblsPWV_hh6rYs94hkXtsBzvIUooqYjU-MgcxfTLo0DavsuP5dNE5l8WHVECIrIm2hWSCz7xNECyXRxzs8IdkX0FMNHV335mL_KbjI4hJayg_3GC-HEwVGB4DKHg7-O0It7jf-W7_MIb1o1BxqZqUsIRJs8irVS42g0cuxuKEamZtTC1dUOiOqdKTyh-0Sm4jO8x4uR1hAwc3NTJwDv_OI4ueyMFUwCCQ-oJZQJ6hqaO4a6DEgEErNolyP8PTpFdcYGUTVm3KqLXwuuYMrUVBChzGf4QqTRUiIxUdWSTq1Q6ypOf2WPwMsOumcnuKkJuAnFS_6b9OIwyIagTF-KVPcGJ4N0JH0pG-9r_jPY1hWxk21H-YOk02KxAtKnAf0cUjqpLx0GvpG4DAjH1SspmqoqV7tMeEeRgJp0UX5dW9ZUphTip9U-2jl9-81DGpancxBuVZvj93IyMjJCxVMfbDHYuAwfhL7g6G2odzfpickaKbVaXVv2IkCo57GcDUhG1QZGE5ZnfUuZ_8v-IPpUNNIxH5QocldgodEws6Syze7TSWv9P6Ucw8l-W5R22DrIq2rlar0blmHQuSTxXA7K5gXltyMnlQ0KGy1aXXL41lYSca61yEPFghOTw3GGwBz-w9t5z65m_PIo7Ci0ZKpI6XtKhXmPaPfC0kuXQ149ShRXF5bgpDYdCnidWk_D2nbkYoI9lrqSJCJToeDgh1BevrGJWf-v5M0i-vy7JnYKyFtoWGdJ3os2gBLblODczEg0ZcRHsmemrLq4vwrMkzq2JOJBD-Q7U", zipFile: "Night_DLC.zip", desc_ru: "Приватный чит для жесткого PvP и анархии. Высокая оптимизация, KillAura, AutoTotem.", fileType: ".exe", lastUpdate: "15.05.2026" },
    { name: "Dimasik Client", displayName: "Dimasik Client", banner: "https://i.ytimg.com/vi/Nds9caAz40g/maxresdefault.jpg", icon: "https://yt3.googleusercontent.com/OBOj63_ZVyF_9w-QnVnTDzHEo2OFJY5oJcui6Xz7h27f9NzOlyzBDMfDBtw1amfDQnUJPV3t0g0=s900-c-k-c0x00ffffff-no-rj", zipFile: "Dimasik_Client.zip", desc_ru: "Русскоязычный клиент от блогера Dimasik. Яркий интерфейс, ESP, трейсеры, обход античитов СНГ.", fileType: ".jar", lastUpdate: "14.05.2026" },
    { name: "Celestial Client", displayName: "Celestial Client", banner: "https://i.ytimg.com/vi/SVbw7C1ZwKw/maxresdefault.jpg", icon: "https://i.ibb.co/Y79yCWCJ/celestial-logo.jpg", zipFile: "Celestial_Client.zip", desc_ru: "Премиальный приватный софт с уникальным дизайном интерфейса, автоматическим ливанием от проверок и NoClip.", fileType: ".exe", lastUpdate: "09.05.2026" },
    { name: "Monoton Client", displayName: "Monoton Client", banner: "https://i.ytimg.com/vi/YRpZyyd5NhI/maxresdefault.jpg", icon: "https://images.steamusercontent.com/ugc/9364292933957187456/62A3E3290BA57D7041A591EE1E6B41B4F56DEAD9/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", zipFile: "Monoton_Client.zip", desc_ru: "Стильный бесплатный софт с акцентом на полную кастомизацию HUD, шрифтов и улучшенной функцией Velocity.", fileType: ".exe", lastUpdate: "11.05.2026" },
    { name: "Minced Client", displayName: "Minced Client", banner: "https://i.ytimg.com/vi/idWwsz2rzDg/maxresdefault.jpg", icon: "https://i.ibb.co/xt4yKssB/mincedlogo.jpg", zipFile: "Minced_Client.zip", desc_ru: "Популярный бесплатный хелпер для анархических серверов с отличной оптимизацией, стабильной KillAura и удобным ClickGUI.", fileType: ".exe", lastUpdate: "13.05.2026" },
    { name: "Arbuz Client", displayName: "Arbuz Client", banner: "https://i.ytimg.com/vi/QyvrO8v3UpA/maxresdefault.jpg", icon: "https://cdn.payga.me/offers/2025/8/12/48251/356158/7d93b23f4283f20f29f571bb249457de.image.jpg", zipFile: "Arbuz_Client.zip", desc_ru: "Простой и эффективный бесплатный хелпер с интуитивным меню, идеально подходящий для новичков.", fileType: ".exe", lastUpdate: "08.05.2026" },
    { name: "WexSide Client", displayName: "WexSide Client", banner: "https://i.ytimg.com/vi/BLMjBV46-88/hqdefault.jpg", icon: "https://avatars.mds.yandex.net/i?id=19510db354426b788822fd46eeb8f9b26d3e6f4a-5233110-images-thumbs&n=13", zipFile: "Wexside_Client.zip", desc_ru: "Топовый приватный софт для обходов античитов Matrix и Vulcan с плавными анимациями и кастомным TargetHUD.", fileType: ".exe", lastUpdate: "14.05.2026" },
    { name: "Haruka Client", displayName: "Haruka Client", banner: "https://i.ytimg.com/vi/0Uh1aQlgqe4/maxresdefault.jpg", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQLjM3gNXxhUr1D6KivMcOfO-hxI9OtVvSw&s", zipFile: "Haruka_Client.zip", desc_ru: "Популярный бесплатный софт в яркой аниме-стилистике с пробивным Reach, авто-блокхитом и быстрым лутом.", fileType: ".jar", lastUpdate: "12.05.2026" },
    { name: "Venus Client", displayName: "Venus Client", banner: "https://i.ytimg.com/vi/GSp6EBmjccw/maxresdefault.jpg", icon: "https://i.ytimg.com/vi/XMa1jXEB4qg/sddefault.jpg", zipFile: "Venus_Client.zip", desc_ru: "Полнофункциональная премиум-версия софта Venus с максимальным спектром настроек хитбоксов и моментальным авто-реконнектом.", fileType: ".exe", lastUpdate: "15.05.2026" },
    { name: "Delta Client", displayName: "Delta Client", banner: "https://i.ytimg.com/vi/_7Rwjkl4ca4/maxresdefault.jpg", icon: "https://images.steamusercontent.com/ugc/10532112875691339063/E117C260184D692FD75FB5E870B171DEA5C0C495/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", zipFile: "Delta_Client.zip", desc_ru: "Приватный чит премиум-класса с уникальными алгоритмами наводки и автоматизацией большинства PvP-процессов.", fileType: ".exe", lastUpdate: "13.05.2026" },
    { name: "Expensive Upgrade", displayName: "Expensive Upgrade", banner: "https://i.ytimg.com/vi/ObC1smEWli0/maxresdefault.jpg", icon: "https://yt3.googleusercontent.com/rRcBK-ENrNG8cbSmtrwGx5xn0ZM2FSZMQJKj5FycKQz1o53dQPsSqPBrv9sROxvAFTJ5wA66WPA=s900-c-k-c0x00ffffff-no-rj", zipFile: "Expensive-Upgrade.zip", desc_ru: "Продвинутый приватный клиент для доминирования на ReallyWorld с уникальными PvP-функциями и моментальным PearlThrow.", fileType: ".exe", lastUpdate: "11.05.2026" },
    { name: "Excellent Upgrade", displayName: "Excellent Upgrade", banner: "https://i.ytimg.com/vi/koO0FQJ7XDc/maxresdefault.jpg", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOPEXHy5CCUm4RFJtm2dpNmMpW73YYXWlFg&s", zipFile: "Excellent_Upgrade.zip", desc_ru: "Элитный приватный клиент с уникальной системой маскировки пакетов для минимального шанса бана и продвинутым Scaffold.", fileType: ".exe", lastUpdate: "14.05.2026" },
    { name: "Liquid Bounce", displayName: "Liquid Bounce", banner: "https://i.ytimg.com/vi/itr89WPl4wo/maxresdefault.jpg", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzns_cj0NhOQXomaxsaoo1x6Ikp81JSRNs4g&s", zipFile: "Liquid_Bounce.zip", desc_ru: "Легендарный бесплатный чит-клиент на базе Forge с открытым исходным кодом, мощными обходами и поддержкой JavaScript-скриптов.", fileType: ".exe", lastUpdate: "10.05.2026" },
    { name: "Wurst Client", displayName: "Wurst Client", banner: "https://avatars.mds.yandex.net/i?id=cb3d7c928c8c96575feca49591391726_l-5257871-images-thumbs&n=13", icon: "https://i.ytimg.com/vi/SD7kXDA4dU0/maxresdefault.jpg", zipFile: "Wurst_Client.zip", desc_ru: "Один из старейших, самых известных и стабильных бесплатных чит-клиентов для Minecraft.", fileType: ".exe", lastUpdate: "09.05.2026" }
    { name: "Fix", displayName: "Fix launcher", banner: "", icon: "https://avatars.mds.yandex.net/i?id=da024be62223cfae9e2f1efee05e30f88ddec9c8-4568991-images-thumbs&n=13", zipFile: "Fix.zip", desc_ru: "Фиксит ошибки если не работает.", fileType: ".bat", lastUpdate: "21.06.2026" }
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
