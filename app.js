const zh = {
  Argentina: "阿根廷",
  Spain: "西班牙",
  France: "法国",
  Brazil: "巴西",
  Portugal: "葡萄牙",
  England: "英格兰",
  Germany: "德国",
  Netherlands: "荷兰",
  Belgium: "比利时",
  Colombia: "哥伦比亚",
  Mexico: "墨西哥",
  Uruguay: "乌拉圭",
  Switzerland: "瑞士",
  Denmark: "丹麦",
  Croatia: "克罗地亚",
  USA: "美国",
  Japan: "日本",
  Morocco: "摩洛哥",
  "Korea Republic": "韩国",
  Czechia: "捷克",
  Austria: "奥地利",
  Turkey: "土耳其",
  Canada: "加拿大",
  Ecuador: "厄瓜多尔",
  Senegal: "塞内加尔",
  Serbia: "塞尔维亚",
  Norway: "挪威",
  Sweden: "瑞典",
  Poland: "波兰",
  Scotland: "苏格兰",
  Cameroon: "喀麦隆",
  Ghana: "加纳",
  Australia: "澳大利亚",
  Iran: "伊朗",
  Paraguay: "巴拉圭",
  Algeria: "阿尔及利亚",
  Egypt: "埃及",
  Tunisia: "突尼斯",
  Chile: "智利",
  "Saudi Arabia": "沙特",
  Panama: "巴拿马",
  "South Africa": "南非",
  "New Zealand": "新西兰",
  Haiti: "海地",
  Qatar: "卡塔尔",
  "Bosnia and Herzegovina": "波黑",
  "Ivory Coast": "科特迪瓦",
  "Curaçao": "库拉索",
  "Cape Verde": "佛得角",
  Uzbekistan: "乌兹别克斯坦",
  Iraq: "伊拉克",
  Jordan: "约旦",
  "DR Congo": "民主刚果"
};

let model = null;
let selectedGame = null;

function nameOf(team) {
  return zh[team] || team;
}

function pct(value) {
  const n = Number(value || 0);
  return `${n.toFixed(n % 1 ? 1 : 0)}%`;
}

function signed(value) {
  const n = Number(value || 0);
  return `${n > 0 ? "+" : ""}${n.toFixed(2)}`;
}

async function loadModel() {
  try {
    const paths = location.hostname.endsWith("github.io")
      ? [
          "https://raw.githubusercontent.com/hancccccccc2-blip/worldcup/main/data/model.json",
          "./data/model.json",
          "./数据/model.json",
        ]
      : ["./data/model.json", "./数据/model.json"];
    model = await fetchFirstJson(paths);
  } catch (error) {
    model = await loadModelScriptFallback(error);
  }
  const finalRound = model.bracket[model.bracket.length - 1];
  selectedGame = finalRound.games[0];
  renderAll();
}

async function fetchFirstJson(paths) {
  let lastError = null;
  for (const path of paths) {
    try {
      const res = await fetch(`${path}?t=${Date.now()}`);
      if (!res.ok) throw new Error(`无法读取 ${path}`);
      return await res.json();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("无法读取模型数据");
}

function loadModelScriptFallback(originalError) {
  return new Promise((resolve, reject) => {
    if (window.__WORLD_CUP_MODEL__) {
      resolve(window.__WORLD_CUP_MODEL__);
      return;
    }
    const script = document.createElement("script");
    script.src = `./data/model.js?t=${Date.now()}`;
    script.onload = () => {
      if (window.__WORLD_CUP_MODEL__) {
        resolve(window.__WORLD_CUP_MODEL__);
      } else {
        reject(originalError);
      }
    };
    script.onerror = () => {
      const fallback = document.createElement("script");
      fallback.src = `./数据/model.js?t=${Date.now()}`;
      fallback.onload = () => {
        if (window.__WORLD_CUP_MODEL__) {
          resolve(window.__WORLD_CUP_MODEL__);
        } else {
          reject(originalError);
        }
      };
      fallback.onerror = () => reject(originalError);
      document.head.appendChild(fallback);
    };
    document.head.appendChild(script);
  });
}

function renderRanking() {
  const body = document.querySelector("#rankingBody");
  const sorted = [...model.ranking].sort((a, b) => b.champion - a.champion);
  const best = sorted[0];
  document.querySelector("#championPick").textContent = nameOf(best.team);
  document.querySelector("#championChance").textContent = `夺冠概率 ${pct(best.champion)}`;
  document.querySelector("#sourceStatus").textContent = `已抓取公开 CSV，模型生成时间 ${model.generated_at}`;
  body.innerHTML = sorted.map((row, index) => `
    <tr>
      <td>${index + 1}</td>
      <td><strong>${nameOf(row.team)}</strong><small>${row.team}</small></td>
      <td>${row.group || "-"}</td>
      <td>${row.elo}</td>
      <td>${signed(row.attack)}</td>
      <td>${signed(row.defense)}</td>
      <td>${pct(row.qualify)}</td>
      <td>${pct(row.r16)}</td>
      <td>${pct(row.qf)}</td>
      <td>${pct(row.sf)}</td>
      <td>${pct(row.final)}</td>
      <td class="${index === 0 ? "hot-cell" : index < 3 ? "champion-cell" : ""}">${pct(row.champion)}</td>
    </tr>
  `).join("");
}

function renderSchedule() {
  const root = document.querySelector("#scheduleList");
  const byDate = new Map();
  (model.group_stage || []).forEach(game => {
    if (!byDate.has(game.date)) byDate.set(game.date, []);
    byDate.get(game.date).push(game);
  });
  root.innerHTML = [...byDate.entries()].map(([date, games]) => `
    <div class="day-block">
      <h3>${date}</h3>
      <div class="match-grid">
        ${games.map(scheduleCard).join("")}
      </div>
    </div>
  `).join("");
  document.querySelectorAll(".schedule-game").forEach(node => {
    node.addEventListener("click", () => {
      selectedGame = model.group_stage.find(g => String(g.date + g.home + g.away) === node.dataset.key);
      renderMatchDetail();
      document.querySelector("#matchDetail").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderTickets() {
  const root = document.querySelector("#ticketList");
  if (!root) return;
  const tickets = model.daily_tickets || [];
  if (!tickets.length) {
    root.innerHTML = `<p class="empty-note">当前没有可生成出票建议的未开赛比赛。</p>`;
    return;
  }
  const [today, ...future] = tickets;
  root.innerHTML = `
    ${renderTicketFull(today)}
    ${future.length ? `
      <div class="future-ticket-list">
        <h3>后续4场组合</h3>
        ${future.map(renderTicketCompact).join("")}
      </div>
    ` : ""}
  `;
}

function renderTicketFull(ticket) {
  return `
    <article class="ticket ${ticket.status}">
      <div class="ticket-head">
        <div>
          <span>${ticket.date} · 第${ticket.group_no || 1}组</span>
          <strong>${ticket.summary}</strong>
        </div>
        <em>${ticket.status === "red" ? "不建议串" : "可小额参考"}</em>
      </div>
      <p class="ticket-reason">${ticket.reason}</p>
      <div class="ticket-columns">
        <div>
          <h3>胜平负4场票</h3>
          ${ticket.outcome_ticket.map(item => `
            <div class="ticket-row">
              <span>${translateText(item.match)}</span>
              <strong>${translateText(item.pick)}</strong>
              <small>${pct(item.prob)}</small>
              ${item.note ? `<p>${translateText(item.note)}</p>` : ""}
            </div>
          `).join("")}
        </div>
        <div class="score-ticket">
          <h3>比分小额串 <b>高风险</b></h3>
          <p>${ticket.score_ticket.summary}</p>
          ${ticket.score_ticket.items.map(item => `
            <div class="ticket-score-row">
              <span>${translateText(item.match)}</span>
              <div>${item.scores.map(score => `
                <mark class="${score.tag === "搏大" ? "big" : ""}">${score.score}${score.odds ? ` / ${score.odds}` : ""}<small>${score.tag}</small></mark>
              `).join("")}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderTicketCompact(ticket) {
  return `
    <article class="future-ticket ${ticket.status}">
      <div>
        <strong>${ticket.date} · 第${ticket.group_no || 1}组</strong>
        <span>${ticket.summary}</span>
      </div>
      <em>${ticket.status === "red" ? "不建议串" : "可参考"}</em>
    </article>
  `;
}

function availabilityItemsFor(teamA, teamB) {
  const teams = new Set([teamA, teamB]);
  return (model.availability?.items || []).filter(item => teams.has(item.team));
}

function renderAvailability() {
  const root = document.querySelector("#availabilityList");
  const items = model.availability?.items || [];
  root.innerHTML = items.map(item => `
    <article class="availability-item">
      <div>
        <strong>${nameOf(item.team)} · ${item.player}</strong>
        <span>${statusLabel(item.status)} / ${typeLabel(item.type)}</span>
      </div>
      <p>${item.impact_cn}</p>
      <a href="${item.url}" target="_blank" rel="noreferrer">${item.source}</a>
    </article>
  `).join("");
}

function statusLabel(status) {
  return {
    ruled_out: "已缺席",
    red_card: "红牌停赛",
    limited: "出场受限",
    miss_out: "未入名单"
  }[status] || status;
}

function typeLabel(type) {
  return {
    injury: "伤病",
    suspension: "停赛",
    absence: "缺席"
  }[type] || type;
}

function scheduleCard(g) {
  const top = (g.top_scores || []).slice(0, 3);
  const riskTags = renderRiskTags(g.risk_tags || []);
  const result = g.completed
    ? `<div class="result-pill ${g.prediction_hit ? "hit" : "miss"}">已结束 ${g.actual_score} · ${g.prediction_hit ? "方向命中" : "方向未中"}</div>`
    : "";
  return `<article class="schedule-game ${g.completed ? "completed" : ""}" data-key="${g.date}${g.home}${g.away}">
    <div class="match-meta"><span>${g.group} 组</span><small>${g.city || ""}</small></div>
    <div class="versus">
      <strong>${nameOf(g.home)}</strong>
      <span>VS</span>
      <strong>${nameOf(g.away)}</strong>
    </div>
    ${result}
    ${riskTags}
    <div class="triple-bar">
      <i style="width:${g.home_win}%">${pct(g.home_win)}</i>
      <b style="width:${g.draw}%">${pct(g.draw)}</b>
      <em style="width:${g.away_win}%">${pct(g.away_win)}</em>
    </div>
    <p>最可能比分：${top.map(x => `<mark>${x.score} ${pct(x.prob)}</mark>`).join("")}</p>
    ${g.completed && g.review ? `<p class="review-line">${g.review.reason}</p>` : ""}
  </article>`;
}

function renderRiskTags(tags) {
  if (!tags.length) return "";
  return `<div class="risk-tags">${tags.map(tag => `
    <span class="risk-tag ${tag.level}" title="${tag.text}">${tag.label}</span>
  `).join("")}</div>`;
}

function renderMarketObservation(obs) {
  const el = document.querySelector("#marketObservation");
  if (!el) return;
  if (!obs) {
    el.innerHTML = "";
    return;
  }
  const level = obs.risk_level || "blue";
  const source = obs.source ? `<span>来源：${obs.source}</span>` : "";
  const trend = obs.trend ? `<span>变化：${obs.trend}</span>` : "";
  const odds = [obs.home_win_odds, obs.draw_odds, obs.away_win_odds].every(v => v !== undefined && v !== null)
    ? `<span>赔率：${obs.home_win_odds} / ${obs.draw_odds} / ${obs.away_win_odds}</span>`
    : "";
  el.innerHTML = `
    <div class="market-card ${level}">
      <strong>${obs.label || (level === "red" ? "赔率异常红灯" : "赔率提醒")}</strong>
      <p>${obs.reason || "赔率或市场热度出现需要复核的变化。"}</p>
      <div>${[source, trend, odds].filter(Boolean).join("")}</div>
    </div>
  `;
}

function renderBracket() {
  const root = document.querySelector("#bracket");
  const best = [...model.ranking].sort((a, b) => b.champion - a.champion)[0];
  root.innerHTML = model.bracket.map(round => `
    <div class="round">
      <div class="round-title">${round.name}</div>
      ${round.games.map(gameCard).join("")}
    </div>
  `).join("") + `
    <div class="round champion-round">
      <div class="round-title">冠军</div>
      <div class="trophy">
        <div class="cup">🏆</div>
        <h2>${nameOf(best.team)}</h2>
        <p>夺冠概率 ${pct(best.champion)}</p>
        <small>按 3000 次模拟统计</small>
      </div>
    </div>
  `;
  document.querySelectorAll(".game").forEach(node => {
    node.addEventListener("click", () => {
      selectedGame = findGame(node.dataset.id);
      renderMatchDetail();
      document.querySelectorAll(".game").forEach(n => n.classList.toggle("active", n.dataset.id === node.dataset.id));
      document.querySelector("#matchDetail").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  const active = document.querySelector(`.game[data-id="${selectedGame.id}"]`);
  if (active) active.classList.add("active");
}

function findGame(id) {
  for (const round of model.bracket) {
    const game = round.games.find(g => String(g.id) === String(id));
    if (game) return game;
  }
  return model.bracket[0].games[0];
}

function gameCard(g) {
  const homeWin = g.winner === g.home;
  const awayWin = g.winner === g.away;
  return `<div class="game" data-id="${g.id}">
    <div class="meta"><span>#${g.id}</span><span>${g.date || ""}</span></div>
    ${g.path_note ? `<div class="path-note">${g.path_note}</div>` : ""}
    <div class="team-row"><strong class="${homeWin ? "winner" : ""}">★ ${nameOf(g.home)}</strong><span>${pct(g.home_win)}</span></div>
    <div class="team-row"><strong class="${awayWin ? "winner" : ""}">★ ${nameOf(g.away)}</strong><span>${pct(g.away_win)}</span></div>
  </div>`;
}

function modelKey(game) {
  return `${game.home}__${game.away}`;
}

function renderMatchDetail() {
  const game = selectedGame;
  const detail = game.matrix && game.top_scores
    ? game
    : (model.match_models[modelKey(game)] || {});
  document.querySelector("#matchTitle").textContent = `${nameOf(game.home)} vs ${nameOf(game.away)}`;
  document.querySelector("#matchBadge").textContent = `${nameOf(game.winner)}方向 ${pct(game.winner_prob)}`;
  document.querySelector("#matchResult").innerHTML = detail.completed
    ? `<strong>真实比分：${nameOf(game.home)} ${detail.actual_score} ${nameOf(game.away)}</strong><span class="${detail.prediction_hit ? "hit-text" : "miss-text"}">${detail.prediction_hit ? "赛前方向命中" : "赛前方向未中"}</span>`
    : `<span>未开赛：当前显示赛前预测。</span>`;
  document.querySelector("#postReview").innerHTML = detail.review
    ? `<strong>${detail.review.title}</strong><p>${translateText(detail.review.summary)}</p><p>${translateText(detail.review.reason)}</p>`
    : `<span>比赛结束后会在这里复盘：准在哪里，或者不准在哪里。</span>`;
  document.querySelector("#matchRiskTags").innerHTML = renderRiskTags(detail.risk_tags || []);
  renderMarketObservation(detail.market_observation);
  document.querySelector("#probBars").innerHTML = [
    [`${nameOf(game.home)}胜`, detail.home_win ?? game.home_win],
    ["平局", detail.draw ?? game.draw],
    [`${nameOf(game.away)}胜`, detail.away_win ?? game.away_win]
  ].map(([label, value], index) => `
    <div class="bar-line ${index === 1 ? "draw-line" : ""}">
      <span>${label}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.min(100, Number(value || 0))}%"></div></div>
      <strong>${pct(value)}</strong>
    </div>
  `).join("");

  document.querySelector("#scoreGrid").innerHTML = (detail.top_scores || []).map(item => `
    <div class="score-pill">${item.score}<small>${pct(item.prob)}</small></div>
  `).join("");
  document.querySelector("#bigScoreGrid").innerHTML = (detail.big_score_candidates || []).map(item => `
    <div class="score-pill big">${item.score}<small>${pct(item.prob)}</small></div>
  `).join("") || `<p class="empty-note">本场暂时没有明显大比分信号。</p>`;
  const signal = detail.big_score_signal || {};
  const levelText = signal.level === "high" ? "大比分信号偏强" : signal.level === "watch" ? "有大比分观察价值" : "大比分只适合娱乐";
  document.querySelector("#bigScoreNote").textContent =
    `${levelText}：4球及以上约 ${pct(signal.over_3_5 || 0)}，净胜3球以上约 ${pct(signal.margin_3_plus || 0)}。`;

  renderScoreMatrix(detail.matrix || [], detail.score_max ?? 8);
  const availability = availabilityItemsFor(game.home, game.away);
  document.querySelector("#matchAvailability").innerHTML = availability.length
    ? availability.map(item => `
      <div class="mini-impact">
        <strong>${nameOf(item.team)} · ${item.player}</strong>
        <span>${statusLabel(item.status)}：${item.impact_cn}</span>
      </div>
    `).join("")
    : `<p class="empty-note">当前公开确认信息未显示这两队有已计入模型的伤病或停赛。</p>`;
  document.querySelector("#aiRead").innerHTML = (detail.ai || []).map(row => `
    <div class="ai-row"><strong>${row.title}</strong><span>${translateText(row.text)}</span></div>
  `).join("");
}

function translateText(text) {
  let out = text || "";
  Object.entries(zh).forEach(([en, cn]) => {
    out = out.replaceAll(en, cn);
  });
  return out;
}

function renderScoreMatrix(matrix, scoreMax = 8) {
  const header = [`<div class="axis corner">进球</div>`];
  for (let away = 0; away <= scoreMax; away += 1) header.push(`<div class="axis">${away}</div>`);
  const cells = [...header];
  for (let home = 0; home <= scoreMax; home += 1) {
    cells.push(`<div class="axis">${home}</div>`);
    for (let away = 0; away <= scoreMax; away += 1) {
      const value = Number(matrix?.[home]?.[away] || 0);
      const hot = value >= 8 ? "hot" : value >= 4 ? "warm" : "";
      cells.push(`<div class="cell ${hot}">${value.toFixed(1)}</div>`);
    }
  }
  const cols = scoreMax + 2;
  document.querySelector("#scoreMatrix").style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  document.querySelector("#scoreMatrix").innerHTML = cells.join("");
}

function wireActions() {
  const rebuildButton = document.querySelector("#rebuildButton");
  if (rebuildButton) rebuildButton.addEventListener("click", rebuildModel);
}

async function rebuildModel() {
  const btn = document.querySelector("#rebuildButton");
  const status = document.querySelector("#sourceStatus");
  btn.disabled = true;
  btn.textContent = "正在抓取并计算...";
  status.textContent = "正在重新抓取公开 CSV，并运行预测模型。";
  try {
    const res = await fetch("./api/rebuild", { method: "POST" });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "重建失败");
    await loadModel();
    status.textContent = `重建完成：${data.message}`;
  } catch (error) {
    status.textContent = `静态打开时不能直接运行 Python；请使用本地服务打开。错误：${error.message}`;
  } finally {
    btn.disabled = false;
    btn.textContent = "重新抓取并计算";
  }
}

function renderAll() {
  renderTickets();
  renderSchedule();
  renderAvailability();
  renderRanking();
  renderBracket();
  renderMatchDetail();
}

wireActions();
loadModel().catch(error => {
  const message = error instanceof TypeError
    ? "数据读取失败：请用 http 链接打开页面，不要直接双击 index.html；如果是线上版，请确认 data/model.json 已上传。"
    : error.message;
  document.querySelector("#sourceStatus").textContent = message;
});
