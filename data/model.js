window.__WORLD_CUP_MODEL__ = {
  "generated_at": "2026-06-20",
  "source": {
    "results.csv": "https://raw.githubusercontent.com/martj42/international_results/master/results.csv",
    "goalscorers.csv": "https://raw.githubusercontent.com/martj42/international_results/master/goalscorers.csv",
    "shootouts.csv": "https://raw.githubusercontent.com/martj42/international_results/master/shootouts.csv",
    "former_names.csv": "https://raw.githubusercontent.com/martj42/international_results/master/former_names.csv"
  },
  "groups": {
    "A": [
      "Mexico",
      "South Africa",
      "Korea Republic",
      "Czechia"
    ],
    "B": [
      "Canada",
      "Qatar",
      "Switzerland",
      "Bosnia and Herzegovina"
    ],
    "C": [
      "Brazil",
      "Morocco",
      "Haiti",
      "Scotland"
    ],
    "D": [
      "USA",
      "Paraguay",
      "Australia",
      "Turkey"
    ],
    "E": [
      "Germany",
      "Curaçao",
      "Ivory Coast",
      "Ecuador"
    ],
    "F": [
      "Netherlands",
      "Japan",
      "Tunisia",
      "Sweden"
    ],
    "G": [
      "Belgium",
      "Egypt",
      "Iran",
      "New Zealand"
    ],
    "H": [
      "Spain",
      "Cape Verde",
      "Saudi Arabia",
      "Uruguay"
    ],
    "I": [
      "France",
      "Senegal",
      "Norway",
      "Iraq"
    ],
    "J": [
      "Argentina",
      "Algeria",
      "Austria",
      "Jordan"
    ],
    "K": [
      "Portugal",
      "Colombia",
      "Uzbekistan",
      "DR Congo"
    ],
    "L": [
      "England",
      "Croatia",
      "Ghana",
      "Panama"
    ]
  },
  "adjustments": {
    "teams": {
      "Mexico": {
        "elo_delta": 25,
        "attack_delta": 0,
        "defense_delta": 0.03,
        "note": "主办国揭幕战主场加成；具体伤病赛前再更新。"
      },
      "Korea Republic": {
        "elo_delta": 0,
        "attack_delta": 0,
        "defense_delta": -0.03,
        "note": "后防有伤病信息时，可在这里下调防守参数。"
      }
    },
    "matches": {
      "USA__Australia": {
        "date": "2026-06-19",
        "home": "USA",
        "away": "Australia",
        "home_score": 2,
        "away_score": 0,
        "source": "赛后人工录入，待补官方开奖页来源",
        "note": "昨日复盘：模型偏澳大利亚，实际美国2-0赢球。",
        "predicted_scores": [
          "1-1",
          "0-1",
          "1-0",
          "2-3"
        ]
      },
      "Scotland__Morocco": {
        "date": "2026-06-19",
        "home": "Scotland",
        "away": "Morocco",
        "home_score": 0,
        "away_score": 1,
        "source": "赛后人工录入，待补官方开奖页来源",
        "note": "昨日复盘：方向命中摩洛哥，但比分只命中0-1这一项。",
        "predicted_scores": [
          "1-1",
          "0-1",
          "1-2",
          "2-3"
        ]
      },
      "Brazil__Haiti": {
        "date": "2026-06-19",
        "home": "Brazil",
        "away": "Haiti",
        "home_score": 3,
        "away_score": 0,
        "source": "赛后人工录入，待补官方开奖页来源",
        "note": "昨日复盘：方向命中巴西，但比分给了2-0、1-0、2-1、4-0，完美漏掉3-0。",
        "predicted_scores": [
          "2-0",
          "1-0",
          "2-1",
          "4-0"
        ]
      },
      "Turkey__Paraguay": {
        "date": "2026-06-19",
        "home": "Turkey",
        "away": "Paraguay",
        "home_score": 0,
        "away_score": 1,
        "source": "赛后人工录入，待补官方开奖页来源",
        "note": "昨日复盘：模型偏土耳其，实际巴拉圭0-1赢球。",
        "predicted_scores": [
          "1-1",
          "1-0",
          "0-1",
          "3-2"
        ]
      }
    }
  },
  "availability": {
    "updated_at": "2026-06-15",
    "items": [
      {
        "team": "Korea Republic",
        "player": "Cho Yu-min",
        "type": "injury",
        "status": "ruled_out",
        "detail": "右脚足底筋膜部分撕裂，预计缺席世界杯；Cho Wi-je 替补入队。",
        "impact_cn": "韩国少一名中卫轮换，后防稳定性和定位球防守下调。",
        "elo_delta": -8,
        "attack_delta": 0,
        "defense_delta": -0.04,
        "source": "Yonhap",
        "url": "https://en.yna.co.kr/view/AEN20260601000900315"
      },
      {
        "team": "Mexico",
        "player": "Cesar Montes",
        "type": "suspension",
        "status": "red_card",
        "detail": "对南非揭幕战染红，下一场需按官方停赛名单确认。",
        "impact_cn": "墨西哥中卫位置有停赛风险，下一场防守完整度下调。",
        "elo_delta": -6,
        "attack_delta": 0,
        "defense_delta": -0.03,
        "source": "The Guardian",
        "url": "https://www.theguardian.com/football/2026/jun/11/mexico-south-africa-world-cup-2026-group-a-match-report"
      },
      {
        "team": "South Africa",
        "player": "Sphephelo Sithole",
        "type": "suspension",
        "status": "red_card",
        "detail": "对墨西哥揭幕战染红，下一场需按官方停赛名单确认。",
        "impact_cn": "南非中场拦截和出球稳定性下调。",
        "elo_delta": -5,
        "attack_delta": -0.01,
        "defense_delta": -0.02,
        "source": "The Guardian",
        "url": "https://www.theguardian.com/football/2026/jun/11/mexico-south-africa-world-cup-2026-group-a-match-report"
      },
      {
        "team": "South Africa",
        "player": "Themba Zwane",
        "type": "suspension",
        "status": "red_card",
        "detail": "对墨西哥揭幕战染红，下一场需按官方停赛名单确认。",
        "impact_cn": "南非前场创造力受影响，进攻参数下调。",
        "elo_delta": -6,
        "attack_delta": -0.03,
        "defense_delta": 0,
        "source": "The Guardian",
        "url": "https://www.theguardian.com/football/2026/jun/11/mexico-south-africa-world-cup-2026-group-a-match-report"
      },
      {
        "team": "Japan",
        "player": "Wataru Endo",
        "type": "injury",
        "status": "ruled_out",
        "detail": "日本队长因脚伤退出世界杯。",
        "impact_cn": "日本中场屏障和防守保护下降，防守参数明显下调。",
        "elo_delta": -12,
        "attack_delta": -0.01,
        "defense_delta": -0.06,
        "source": "FIFA",
        "url": "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/japan-captain-endo-ruled-out-injury"
      },
      {
        "team": "Canada",
        "player": "Marcelo Flores",
        "type": "injury",
        "status": "ruled_out",
        "detail": "ACL 伤势，无缘世界杯。",
        "impact_cn": "加拿大边路轮换少一个选择，进攻深度小幅下调。",
        "elo_delta": -4,
        "attack_delta": -0.02,
        "defense_delta": 0,
        "source": "FIFA",
        "url": "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/canada-squad-announcement"
      },
      {
        "team": "USA",
        "player": "Patrick Agyemang",
        "type": "injury",
        "status": "ruled_out",
        "detail": "跟腱伤势，无缘世界杯。",
        "impact_cn": "美国锋线替补火力下降，进攻参数小幅下调。",
        "elo_delta": -4,
        "attack_delta": -0.02,
        "defense_delta": 0,
        "source": "FIFA",
        "url": "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/agyemang-world-cup-injury"
      },
      {
        "team": "Brazil",
        "player": "Neymar",
        "type": "injury",
        "status": "limited",
        "detail": "二级小腿伤势，预计缺席两到三周。",
        "impact_cn": "巴西前场创造力和定位球变化减少，进攻参数下调。",
        "elo_delta": -12,
        "attack_delta": -0.05,
        "defense_delta": 0,
        "source": "FIFA",
        "url": "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/brazil-neymar-injury"
      },
      {
        "team": "Netherlands",
        "player": "Xavi Simons",
        "type": "injury",
        "status": "ruled_out",
        "detail": "ACL 伤势，无缘世界杯。",
        "impact_cn": "荷兰前场推进和创造力下降，进攻参数下调。",
        "elo_delta": -10,
        "attack_delta": -0.04,
        "defense_delta": 0,
        "source": "FIFA",
        "url": "https://www.fifa.com/en/articles/xavi-simons-netherlands-injured-ruled-out"
      },
      {
        "team": "Germany",
        "player": "Serge Gnabry",
        "type": "injury",
        "status": "ruled_out",
        "detail": "大腿伤势，无缘世界杯。",
        "impact_cn": "德国边路终结和前场轮换受影响，进攻参数下调。",
        "elo_delta": -8,
        "attack_delta": -0.04,
        "defense_delta": 0,
        "source": "FIFA",
        "url": "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/serge-gnabry-miss-world-cup"
      },
      {
        "team": "Australia",
        "player": "Martin Boyle / Kye Rowles",
        "type": "absence",
        "status": "miss_out",
        "detail": "澳大利亚名单信息显示 Boyle 和 Rowles 缺席。",
        "impact_cn": "澳大利亚锋线和后防轮换同时变薄，攻防各小幅下调。",
        "elo_delta": -6,
        "attack_delta": -0.02,
        "defense_delta": -0.02,
        "source": "FIFA",
        "url": "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/australia-squad-announcement-world-cup-tony-popovic"
      }
    ]
  },
  "market": {
    "updated_at": "2026-06-20T08:11:46.124Z",
    "note": "自动抓取自中国体育彩票官网计算器；如果官网拦截或停售，以抓取结果为空为准。",
    "matches": {
      "Portugal__DR Congo": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-18",
        "kickoff_bj": "2026-06-18 01:00",
        "home_win_odds": 1.13,
        "draw_odds": 5.86,
        "away_win_odds": 13.5,
        "trend": "主胜赔率很低，市场明显支持葡萄牙；让2球后风险明显抬升。",
        "risk_level": "amber",
        "label": "让球风险提醒",
        "reason": "葡萄牙胜方向清楚，但深让球不适合当稳项，比分更适合小额娱乐。",
        "correct_score_odds": {
          "1-0": 6.75,
          "2-0": 5.8,
          "2-1": 9,
          "3-0": 5.25,
          "3-1": 7.75,
          "4-0": 10,
          "5-0": 23,
          "0-0": 15,
          "1-1": 11
        },
        "match_id": 2040182,
        "match_num": "周三021",
        "league": "世界杯",
        "home_cn": "葡萄牙",
        "away_cn": "刚果(金)",
        "total_goals_odds": {
          "0": 16,
          "1": 5.7,
          "2": 4,
          "3": 3.65,
          "4": 4.3,
          "5": 7.75,
          "6": 14,
          "7": 17
        },
        "remark": "比赛将在美国-得克萨斯州休斯敦举行"
      },
      "England__Croatia": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-18",
        "kickoff_bj": "2026-06-18 04:00",
        "home_win_odds": 1.53,
        "draw_odds": 3.5,
        "away_win_odds": 5.27,
        "trend": "英格兰方向占优，但克罗地亚不属于弱队，平局赔付不算极高。",
        "risk_level": "amber",
        "label": "防平提醒",
        "reason": "英格兰更值得支持，但这场不能只看名气，平局和小比分要防。",
        "correct_score_odds": {
          "1-0": 6.2,
          "2-0": 7.5,
          "2-1": 5.7,
          "3-0": 13.5,
          "3-1": 11.5,
          "1-1": 5.8,
          "0-0": 10,
          "2-2": 12.5
        },
        "match_id": 2040183,
        "match_num": "周三022",
        "league": "世界杯",
        "home_cn": "英格兰",
        "away_cn": "克罗地亚",
        "total_goals_odds": {
          "0": 10,
          "1": 4.5,
          "2": 3.4,
          "3": 3.2,
          "4": 5.95,
          "5": 12,
          "6": 23,
          "7": 33
        },
        "remark": "比赛将在美国-得克萨斯州阿灵顿举行"
      },
      "Ghana__Panama": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-18",
        "kickoff_bj": "2026-06-18 07:00",
        "home_win_odds": 2.04,
        "draw_odds": 3.03,
        "away_win_odds": 3.23,
        "trend": "三项赔率接近，市场没有给出清晰方向。",
        "risk_level": "red",
        "label": "赔率异常红灯",
        "reason": "加纳略占优，但赔率接近，平局和反向结果都有空间，不建议放进4场串关。",
        "correct_score_odds": {
          "1-0": 6.3,
          "2-0": 8.75,
          "2-1": 6.75,
          "3-0": 20,
          "3-1": 18,
          "1-1": 5,
          "0-0": 8.25,
          "0-1": 8.8,
          "1-2": 11
        },
        "match_id": 2040184,
        "match_num": "周三023",
        "league": "世界杯",
        "home_cn": "加纳",
        "away_cn": "巴拿马",
        "total_goals_odds": {
          "0": 8.25,
          "1": 3.8,
          "2": 3,
          "3": 3.7,
          "4": 6.8,
          "5": 16.5,
          "6": 30,
          "7": 40
        },
        "remark": "比赛将在加拿大-多伦多举行"
      },
      "Uzbekistan__Colombia": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-18",
        "kickoff_bj": "2026-06-18 10:00",
        "home_win_odds": 9.65,
        "draw_odds": 4.85,
        "away_win_odds": 1.22,
        "trend": "市场明显支持哥伦比亚，乌兹别克方向回报高但难度大。",
        "risk_level": "amber",
        "label": "热门方向提醒",
        "reason": "哥伦比亚胜方向清楚，但赔率过低，比分玩法不要追太散。",
        "correct_score_odds": {
          "0-1": 5.6,
          "0-2": 5.2,
          "1-2": 8.5,
          "0-3": 8,
          "1-3": 12,
          "1-0": 20,
          "1-1": 9
        },
        "match_id": 2040185,
        "match_num": "周三024",
        "league": "世界杯",
        "home_cn": "乌兹别克斯坦",
        "away_cn": "哥伦比亚",
        "total_goals_odds": {
          "0": 12,
          "1": 5,
          "2": 3.55,
          "3": 3.1,
          "4": 4.8,
          "5": 12.5,
          "6": 23,
          "7": 29
        },
        "remark": "比赛将在墨西哥-墨西哥城举行"
      },
      "Czechia__South Africa": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-19",
        "kickoff_bj": "2026-06-19 00:00",
        "match_id": 2040235,
        "match_num": "周四025",
        "league": "世界杯",
        "home_cn": "捷克",
        "away_cn": "南非",
        "total_goals_odds": {
          "0": 9.6,
          "1": 4.4,
          "2": 3.1,
          "3": 3.5,
          "4": 6.2,
          "5": 12.5,
          "6": 23,
          "7": 34
        },
        "remark": "比赛将在美国-佐治亚州亚特兰大举行"
      },
      "Mexico__Korea Republic": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-19",
        "kickoff_bj": "2026-06-19 09:00",
        "match_id": 2040238,
        "match_num": "周四028",
        "league": "世界杯",
        "home_cn": "墨西哥",
        "away_cn": "韩国",
        "total_goals_odds": {
          "0": 8.8,
          "1": 4.35,
          "2": 3.1,
          "3": 3.8,
          "4": 5.9,
          "5": 12,
          "6": 23,
          "7": 35
        },
        "remark": "比赛将在墨西哥-萨波潘举行"
      },
      "Uruguay__Cape Verde": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-22",
        "kickoff_bj": "2026-06-22 06:00",
        "match_id": 2040249,
        "match_num": "周日039",
        "league": "世界杯",
        "home_cn": "乌拉圭",
        "away_cn": "佛得角",
        "total_goals_odds": {
          "0": 8.5,
          "1": 3.9,
          "2": 3.1,
          "3": 3.75,
          "4": 6.5,
          "5": 14,
          "6": 26,
          "7": 36
        },
        "remark": "比赛将在美国-佛罗里达州迈阿密加登斯举行"
      },
      "USA__Australia": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-20",
        "kickoff_bj": "2026-06-20 03:00",
        "match_id": 2040239,
        "match_num": "周五029",
        "league": "世界杯",
        "home_cn": "美国",
        "away_cn": "澳大利亚",
        "total_goals_odds": {
          "0": 12.5,
          "1": 5.2,
          "2": 3.65,
          "3": 3.3,
          "4": 5.1,
          "5": 9,
          "6": 17,
          "7": 26
        },
        "remark": "比赛将在美国-华盛顿州西雅图举行"
      },
      "Scotland__Morocco": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-20",
        "kickoff_bj": "2026-06-20 06:00",
        "match_id": 2040240,
        "match_num": "周五030",
        "league": "世界杯",
        "home_cn": "苏格兰",
        "away_cn": "摩洛哥",
        "total_goals_odds": {
          "0": 10,
          "1": 4.4,
          "2": 3.15,
          "3": 3.45,
          "4": 6.25,
          "5": 12.5,
          "6": 21,
          "7": 32
        },
        "remark": "比赛将在美国-马萨诸塞州福克斯伯勒举行"
      },
      "Brazil__Haiti": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-20",
        "kickoff_bj": "2026-06-20 08:30",
        "match_id": 2040241,
        "match_num": "周五031",
        "league": "世界杯",
        "home_cn": "巴西",
        "away_cn": "海地",
        "total_goals_odds": {
          "0": 38,
          "1": 9.9,
          "2": 5.45,
          "3": 4.2,
          "4": 3.9,
          "5": 5.1,
          "6": 8,
          "7": 7.8
        },
        "remark": "比赛将在美国-宾夕法尼亚州费城举行"
      },
      "Turkey__Paraguay": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-20",
        "kickoff_bj": "2026-06-20 11:00",
        "match_id": 2040242,
        "match_num": "周五032",
        "league": "世界杯",
        "home_cn": "土耳其",
        "away_cn": "巴拉圭",
        "total_goals_odds": {
          "0": 10,
          "1": 4.5,
          "2": 3.25,
          "3": 3.55,
          "4": 5.9,
          "5": 11,
          "6": 22,
          "7": 28
        },
        "remark": "比赛将在美国-加利福尼亚州圣克拉拉举行"
      },
      "Netherlands__Sweden": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-21",
        "kickoff_bj": "2026-06-21 01:00",
        "match_id": 2040243,
        "match_num": "周六033",
        "league": "世界杯",
        "home_cn": "荷兰",
        "away_cn": "瑞典",
        "total_goals_odds": {
          "0": 16,
          "1": 6.25,
          "2": 3.7,
          "3": 3.3,
          "4": 4.85,
          "5": 7.8,
          "6": 14,
          "7": 19
        },
        "remark": "比赛将在美国-得克萨斯州休斯敦举行"
      },
      "Germany__Cote d'Ivoire": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-21",
        "kickoff_bj": "2026-06-21 04:00",
        "match_id": 2040244,
        "match_num": "周六034",
        "league": "世界杯",
        "home_cn": "德国",
        "away_cn": "科特迪瓦",
        "total_goals_odds": {
          "0": 17,
          "1": 6.5,
          "2": 3.8,
          "3": 3.4,
          "4": 4.6,
          "5": 7.5,
          "6": 13,
          "7": 18
        },
        "remark": "比赛将在加拿大-多伦多举行"
      },
      "Ecuador__Curacao": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-21",
        "kickoff_bj": "2026-06-21 08:00",
        "match_id": 2040245,
        "match_num": "周六035",
        "league": "世界杯",
        "home_cn": "厄瓜多尔",
        "away_cn": "库拉索",
        "total_goals_odds": {
          "0": 21,
          "1": 6.8,
          "2": 4.2,
          "3": 3.65,
          "4": 4.5,
          "5": 6.55,
          "6": 10.5,
          "7": 13
        },
        "remark": "比赛将在美国-密苏里州堪萨斯城举行"
      },
      "Tunisia__Japan": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-21",
        "kickoff_bj": "2026-06-21 12:00",
        "match_id": 2040246,
        "match_num": "周六036",
        "league": "世界杯",
        "home_cn": "突尼斯",
        "away_cn": "日本",
        "total_goals_odds": {
          "0": 11,
          "1": 4.4,
          "2": 3.3,
          "3": 3.6,
          "4": 5.8,
          "5": 10.5,
          "6": 19,
          "7": 29
        },
        "remark": "比赛将在墨西哥-瓜达卢佩举行"
      },
      "Spain__Saudi Arabia": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-22",
        "kickoff_bj": "2026-06-22 00:00",
        "match_id": 2040247,
        "match_num": "周日037",
        "league": "世界杯",
        "home_cn": "西班牙",
        "away_cn": "沙特阿拉伯",
        "total_goals_odds": {
          "0": 26,
          "1": 7.75,
          "2": 4.5,
          "3": 3.6,
          "4": 4.2,
          "5": 6.3,
          "6": 9.7,
          "7": 11.5
        },
        "remark": "比赛将在美国-佐治亚州亚特兰大举行"
      },
      "Belgium__Iran": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-22",
        "kickoff_bj": "2026-06-22 03:00",
        "match_id": 2040248,
        "match_num": "周日038",
        "league": "世界杯",
        "home_cn": "比利时",
        "away_cn": "伊朗",
        "total_goals_odds": {
          "0": 13,
          "1": 5.4,
          "2": 3.65,
          "3": 3.4,
          "4": 4.9,
          "5": 9,
          "6": 15,
          "7": 24
        },
        "remark": "比赛将在美国-加利福尼亚州英格尔伍德举行"
      },
      "New Zealand__Egypt": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-22",
        "kickoff_bj": "2026-06-22 09:00",
        "match_id": 2040250,
        "match_num": "周日040",
        "league": "世界杯",
        "home_cn": "新西兰",
        "away_cn": "埃及",
        "total_goals_odds": {
          "0": 10,
          "1": 4.3,
          "2": 3.2,
          "3": 3.6,
          "4": 6,
          "5": 12,
          "6": 21,
          "7": 30
        },
        "remark": "比赛将在加拿大-温哥华举行"
      }
    }
  },
  "group_stage": [
    {
      "date": "2026-06-11",
      "group": "A",
      "city": "Mexico City",
      "country": "Mexico",
      "home": "Mexico",
      "away": "South Africa",
      "home_score": 2,
      "away_score": 0,
      "lambda_home": 1.73,
      "lambda_away": 0.83,
      "home_win": 58.8,
      "draw": 23.5,
      "away_win": 17.7,
      "matrix": [
        [
          7.8,
          6.4,
          2.7,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          13.4,
          11.1,
          4.6,
          1.3,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.6,
          9.6,
          4.0,
          1.1,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          6.7,
          5.5,
          2.3,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.9,
          2.4,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.0,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 13.4
        },
        {
          "score": "2-0",
          "prob": 11.6
        },
        {
          "score": "1-1",
          "prob": 11.1
        },
        {
          "score": "2-1",
          "prob": 9.6
        },
        {
          "score": "0-0",
          "prob": 7.8
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 6.7
        },
        {
          "score": "3-1",
          "prob": 5.5
        },
        {
          "score": "2-2",
          "prob": 4.0
        },
        {
          "score": "4-0",
          "prob": 2.9
        },
        {
          "score": "4-1",
          "prob": 2.4
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 2.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-0",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.3,
        "margin_3_plus": 16.1,
        "level": "watch"
      },
      "winner": "Mexico",
      "winner_prob": 58.8,
      "completed": true,
      "actual_score": "2-0",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Mexico，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Mexico Elo 1919 vs South Africa 1632，差距 287 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Mexico 1.73 : 0.83 South Africa，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 13.4%, 2-0 11.6%, 1-1 11.1%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Mexico，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-11",
      "group": "A",
      "city": "Zapopan",
      "country": "Mexico",
      "home": "Korea Republic",
      "away": "Czechia",
      "home_score": 2,
      "away_score": 1,
      "lambda_home": 1.35,
      "lambda_away": 1.2,
      "home_win": 40.2,
      "draw": 26.7,
      "away_win": 33.1,
      "matrix": [
        [
          7.9,
          9.4,
          5.6,
          2.2,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          10.6,
          12.7,
          7.6,
          3.0,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          7.1,
          8.5,
          5.1,
          2.0,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.2,
          3.8,
          2.3,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.1,
          1.3,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.7
        },
        {
          "score": "1-0",
          "prob": 10.6
        },
        {
          "score": "0-1",
          "prob": 9.4
        },
        {
          "score": "2-1",
          "prob": 8.5
        },
        {
          "score": "0-0",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.1
        },
        {
          "score": "3-1",
          "prob": 3.8
        },
        {
          "score": "3-0",
          "prob": 3.2
        },
        {
          "score": "1-3",
          "prob": 3.0
        },
        {
          "score": "3-2",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 0.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-4",
          "prob": 0.7,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.9,
        "margin_3_plus": 10.9,
        "level": "watch"
      },
      "winner": "Korea Republic",
      "winner_prob": 40.2,
      "completed": true,
      "actual_score": "2-1",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Korea Republic，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Korea Republic Elo 1829 vs Czechia 1776，差距 53 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Korea Republic 1.35 : 1.2 Czechia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.7%, 1-0 10.6%, 0-1 9.4%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Korea Republic，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-12",
      "group": "B",
      "city": "Toronto",
      "country": "Canada",
      "home": "Canada",
      "away": "Bosnia and Herzegovina",
      "home_score": 1,
      "away_score": 1,
      "lambda_home": 1.48,
      "lambda_away": 0.95,
      "home_win": 49.6,
      "draw": 26.3,
      "away_win": 24.2,
      "matrix": [
        [
          8.8,
          8.3,
          4.0,
          1.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          13.0,
          12.4,
          5.9,
          1.9,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          9.7,
          9.2,
          4.3,
          1.4,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.8,
          4.5,
          2.1,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.8,
          1.7,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 13.0
        },
        {
          "score": "1-1",
          "prob": 12.4
        },
        {
          "score": "2-0",
          "prob": 9.7
        },
        {
          "score": "2-1",
          "prob": 9.2
        },
        {
          "score": "0-0",
          "prob": 8.8
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 4.8
        },
        {
          "score": "3-1",
          "prob": 4.5
        },
        {
          "score": "2-2",
          "prob": 4.3
        },
        {
          "score": "3-2",
          "prob": 2.1
        },
        {
          "score": "1-3",
          "prob": 1.9
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 1.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.5,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.7,
        "margin_3_plus": 12.1,
        "level": "watch"
      },
      "winner": "Canada",
      "winner_prob": 49.6,
      "completed": true,
      "actual_score": "1-1",
      "predicted_direction": "home",
      "actual_direction": "draw",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Canada（约 49.6%），实际是 平局（赛前约 26.3%）。",
        "reason": "平局风险被低估。模型给出了胜负倾向，但实际比赛进入拉扯，强势方没有把优势转成胜利。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际打成平局，赛前模型低估了不胜风险。"
        },
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Canada Elo 1835 vs Bosnia and Herzegovina 1626，差距 209 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Canada 1.48 : 0.95 Bosnia and Herzegovina，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 13.0%, 1-1 12.4%, 2-0 9.7%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Canada，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-12",
      "group": "D",
      "city": "Inglewood",
      "country": "United States",
      "home": "USA",
      "away": "Paraguay",
      "home_score": 4,
      "away_score": 1,
      "lambda_home": 1.21,
      "lambda_away": 1.21,
      "home_win": 36.4,
      "draw": 27.5,
      "away_win": 36.1,
      "matrix": [
        [
          8.9,
          10.7,
          6.5,
          2.6,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          10.8,
          13.0,
          7.9,
          3.2,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          6.5,
          7.9,
          4.8,
          1.9,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          2.6,
          3.2,
          1.9,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.8,
          1.0,
          0.6,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 13.0
        },
        {
          "score": "1-0",
          "prob": 10.8
        },
        {
          "score": "0-1",
          "prob": 10.7
        },
        {
          "score": "0-0",
          "prob": 8.9
        },
        {
          "score": "1-2",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.8
        },
        {
          "score": "1-3",
          "prob": 3.2
        },
        {
          "score": "3-1",
          "prob": 3.2
        },
        {
          "score": "0-3",
          "prob": 2.6
        },
        {
          "score": "3-0",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-1",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-4",
          "prob": 0.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-0",
          "prob": 0.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.3,
        "margin_3_plus": 9.8,
        "level": "watch"
      },
      "winner": "USA",
      "winner_prob": 36.4,
      "completed": true,
      "actual_score": "4-1",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 USA，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "USA Elo 1796 vs Paraguay 1822，差距 26 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 USA 1.21 : 1.21 Paraguay，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 13.0%, 1-0 10.8%, 0-1 10.7%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 USA，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-13",
      "group": "B",
      "city": "Santa Clara",
      "country": "United States",
      "home": "Qatar",
      "away": "Switzerland",
      "home_score": 1,
      "away_score": 1,
      "lambda_home": 0.88,
      "lambda_away": 1.73,
      "home_win": 18.9,
      "draw": 23.6,
      "away_win": 57.5,
      "matrix": [
        [
          7.3,
          12.7,
          11.0,
          6.4,
          2.8,
          1.0,
          0.3,
          0.1,
          0.0
        ],
        [
          6.4,
          11.2,
          9.7,
          5.6,
          2.4,
          0.8,
          0.2,
          0.1,
          0.0
        ],
        [
          2.8,
          4.9,
          4.3,
          2.5,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          0.8,
          1.4,
          1.3,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.3,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 12.7
        },
        {
          "score": "1-1",
          "prob": 11.2
        },
        {
          "score": "0-2",
          "prob": 11.0
        },
        {
          "score": "1-2",
          "prob": 9.7
        },
        {
          "score": "0-0",
          "prob": 7.3
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 6.4
        },
        {
          "score": "1-3",
          "prob": 5.6
        },
        {
          "score": "2-2",
          "prob": 4.3
        },
        {
          "score": "0-4",
          "prob": 2.8
        },
        {
          "score": "2-3",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "0-4",
          "prob": 2.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-5",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "1-5",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.7,
        "margin_3_plus": 16.0,
        "level": "watch"
      },
      "winner": "Switzerland",
      "winner_prob": 57.5,
      "completed": true,
      "actual_score": "1-1",
      "predicted_direction": "away",
      "actual_direction": "draw",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Switzerland（约 57.5%），实际是 平局（赛前约 23.6%）。",
        "reason": "平局风险被低估。模型给出了胜负倾向，但实际比赛进入拉扯，强势方没有把优势转成胜利。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际打成平局，赛前模型低估了不胜风险。"
        },
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Qatar Elo 1565 vs Switzerland 1884，差距 319 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Qatar 0.88 : 1.73 Switzerland，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 12.7%, 1-1 11.2%, 0-2 11.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Switzerland，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-13",
      "group": "C",
      "city": "East Rutherford",
      "country": "United States",
      "home": "Brazil",
      "away": "Morocco",
      "home_score": 1,
      "away_score": 1,
      "lambda_home": 1.44,
      "lambda_away": 1.07,
      "home_win": 45.4,
      "draw": 26.4,
      "away_win": 28.2,
      "matrix": [
        [
          8.1,
          8.7,
          4.7,
          1.7,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.7,
          12.5,
          6.7,
          2.4,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          8.4,
          9.0,
          4.8,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.0,
          4.3,
          2.3,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.4,
          1.5,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.5
        },
        {
          "score": "1-0",
          "prob": 11.7
        },
        {
          "score": "2-1",
          "prob": 9.0
        },
        {
          "score": "0-1",
          "prob": 8.7
        },
        {
          "score": "2-0",
          "prob": 8.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.8
        },
        {
          "score": "3-1",
          "prob": 4.3
        },
        {
          "score": "3-0",
          "prob": 4.0
        },
        {
          "score": "1-3",
          "prob": 2.4
        },
        {
          "score": "3-2",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.4,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 0.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-4",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.8,
        "margin_3_plus": 11.2,
        "level": "watch"
      },
      "winner": "Brazil",
      "winner_prob": 45.4,
      "completed": true,
      "actual_score": "1-1",
      "predicted_direction": "home",
      "actual_direction": "draw",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Brazil（约 45.4%），实际是 平局（赛前约 26.4%）。",
        "reason": "平局风险被低估。模型给出了胜负倾向，但实际比赛进入拉扯，强势方没有把优势转成胜利。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际打成平局，赛前模型低估了不胜风险。"
        },
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Brazil Elo 2000 vs Morocco 1924，差距 76 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Brazil 1.44 : 1.07 Morocco，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.5%, 1-0 11.7%, 2-1 9.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Brazil，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-13",
      "group": "C",
      "city": "Foxborough",
      "country": "United States",
      "home": "Haiti",
      "away": "Scotland",
      "home_score": 0,
      "away_score": 1,
      "lambda_home": 1.1,
      "lambda_away": 1.49,
      "home_win": 28.1,
      "draw": 25.8,
      "away_win": 46.1,
      "matrix": [
        [
          7.5,
          11.1,
          8.3,
          4.1,
          1.5,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          8.2,
          12.3,
          9.2,
          4.6,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          4.5,
          6.8,
          5.1,
          2.5,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          1.7,
          2.5,
          1.9,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.7,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.3
        },
        {
          "score": "0-1",
          "prob": 11.1
        },
        {
          "score": "1-2",
          "prob": 9.2
        },
        {
          "score": "0-2",
          "prob": 8.3
        },
        {
          "score": "1-0",
          "prob": 8.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.1
        },
        {
          "score": "1-3",
          "prob": 4.6
        },
        {
          "score": "0-3",
          "prob": 4.1
        },
        {
          "score": "2-3",
          "prob": 2.5
        },
        {
          "score": "3-1",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.5,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "1-5",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.2,
        "margin_3_plus": 12.2,
        "level": "watch"
      },
      "winner": "Scotland",
      "winner_prob": 46.1,
      "completed": true,
      "actual_score": "0-1",
      "predicted_direction": "away",
      "actual_direction": "away",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Scotland，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Haiti Elo 1638 vs Scotland 1760，差距 122 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Haiti 1.1 : 1.49 Scotland，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.3%, 0-1 11.1%, 1-2 9.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Scotland，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-13",
      "group": "D",
      "city": "Vancouver",
      "country": "Canada",
      "home": "Australia",
      "away": "Turkey",
      "home_score": 2,
      "away_score": 0,
      "lambda_home": 1.3,
      "lambda_away": 1.26,
      "home_win": 37.6,
      "draw": 26.7,
      "away_win": 35.8,
      "matrix": [
        [
          7.8,
          9.8,
          6.2,
          2.6,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          10.1,
          12.7,
          8.0,
          3.3,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.5,
          8.2,
          5.2,
          2.2,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.8,
          3.6,
          2.2,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.9,
          1.2,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.7
        },
        {
          "score": "1-0",
          "prob": 10.1
        },
        {
          "score": "0-1",
          "prob": 9.8
        },
        {
          "score": "2-1",
          "prob": 8.2
        },
        {
          "score": "1-2",
          "prob": 8.0
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.2
        },
        {
          "score": "3-1",
          "prob": 3.6
        },
        {
          "score": "1-3",
          "prob": 3.3
        },
        {
          "score": "3-0",
          "prob": 2.8
        },
        {
          "score": "0-3",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "1-4",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-0",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "0-4",
          "prob": 0.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.4,
        "margin_3_plus": 11.1,
        "level": "watch"
      },
      "winner": "Australia",
      "winner_prob": 37.6,
      "completed": true,
      "actual_score": "2-0",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Australia，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Australia Elo 1817 vs Turkey 1881，差距 63 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Australia 1.3 : 1.26 Turkey，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.7%, 1-0 10.1%, 0-1 9.8%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Australia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-14",
      "group": "E",
      "city": "Houston",
      "country": "United States",
      "home": "Germany",
      "away": "Curaçao",
      "home_score": 7,
      "away_score": 1,
      "lambda_home": 2.37,
      "lambda_away": 0.79,
      "home_win": 72.6,
      "draw": 16.7,
      "away_win": 10.6,
      "matrix": [
        [
          4.3,
          3.3,
          1.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          10.1,
          7.9,
          3.1,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.0,
          9.4,
          3.7,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          9.5,
          7.4,
          2.9,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          5.6,
          4.4,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.7,
          2.1,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.1,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "2-0",
          "prob": 12.0
        },
        {
          "score": "1-0",
          "prob": 10.1
        },
        {
          "score": "3-0",
          "prob": 9.5
        },
        {
          "score": "2-1",
          "prob": 9.4
        },
        {
          "score": "1-1",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 9.5
        },
        {
          "score": "3-1",
          "prob": 7.4
        },
        {
          "score": "4-0",
          "prob": 5.6
        },
        {
          "score": "4-1",
          "prob": 4.4
        },
        {
          "score": "2-2",
          "prob": 3.7
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 5.6,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 4.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "5-0",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 2.1,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 1.7,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "6-0",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 6
        },
        {
          "score": "2-3",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 1
        }
      ],
      "big_score_signal": {
        "over_3_5": 38.7,
        "margin_3_plus": 29.0,
        "level": "high"
      },
      "winner": "Germany",
      "winner_prob": 72.6,
      "completed": true,
      "actual_score": "7-1",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Germany，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Germany Elo 1953 vs Curaçao 1532，差距 421 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Germany 2.37 : 0.79 Curaçao，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：2-0 12.0%, 1-0 10.1%, 3-0 9.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Germany，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-14",
      "group": "E",
      "city": "Philadelphia",
      "country": "United States",
      "home": "Ivory Coast",
      "away": "Ecuador",
      "home_score": 1,
      "away_score": 0,
      "lambda_home": 1.11,
      "lambda_away": 1.3,
      "home_win": 31.8,
      "draw": 27.4,
      "away_win": 40.7,
      "matrix": [
        [
          8.9,
          11.6,
          7.5,
          3.3,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          10.0,
          13.0,
          8.4,
          3.6,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          5.6,
          7.2,
          4.7,
          2.0,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.1,
          2.7,
          1.7,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.7,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 13.0
        },
        {
          "score": "0-1",
          "prob": 11.6
        },
        {
          "score": "1-0",
          "prob": 10.0
        },
        {
          "score": "0-0",
          "prob": 8.9
        },
        {
          "score": "1-2",
          "prob": 8.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.7
        },
        {
          "score": "1-3",
          "prob": 3.6
        },
        {
          "score": "0-3",
          "prob": 3.3
        },
        {
          "score": "3-1",
          "prob": 2.7
        },
        {
          "score": "3-0",
          "prob": 2.1
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "2-4",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "4-1",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 0.6,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.3,
        "margin_3_plus": 10.4,
        "level": "watch"
      },
      "winner": "Ecuador",
      "winner_prob": 40.7,
      "completed": true,
      "actual_score": "1-0",
      "predicted_direction": "away",
      "actual_direction": "home",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Ecuador（约 40.7%），实际是 Ivory Coast（赛前约 31.8%）。",
        "reason": "胜负方向判断偏差。双方差距没有模型估计得那么稳定，实际比赛执行效率改变了结果。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际胜负方向和赛前倾向相反，需要复盘临场因素。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Ivory Coast Elo 1787 vs Ecuador 1932，差距 145 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Ivory Coast 1.11 : 1.3 Ecuador，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 13.0%, 0-1 11.6%, 1-0 10.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Ecuador，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-14",
      "group": "F",
      "city": "Arlington",
      "country": "United States",
      "home": "Netherlands",
      "away": "Japan",
      "home_score": 2,
      "away_score": 2,
      "lambda_home": 1.4,
      "lambda_away": 1.29,
      "home_win": 39.5,
      "draw": 25.8,
      "away_win": 34.7,
      "matrix": [
        [
          6.8,
          8.8,
          5.7,
          2.4,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          9.5,
          12.3,
          7.9,
          3.4,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.6,
          8.6,
          5.5,
          2.4,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          3.1,
          4.0,
          2.6,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.1,
          1.4,
          0.9,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.4,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.3
        },
        {
          "score": "1-0",
          "prob": 9.5
        },
        {
          "score": "0-1",
          "prob": 8.8
        },
        {
          "score": "2-1",
          "prob": 8.6
        },
        {
          "score": "1-2",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.5
        },
        {
          "score": "3-1",
          "prob": 4.0
        },
        {
          "score": "1-3",
          "prob": 3.4
        },
        {
          "score": "3-0",
          "prob": 3.1
        },
        {
          "score": "3-2",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.3,
        "margin_3_plus": 12.0,
        "level": "high"
      },
      "winner": "Netherlands",
      "winner_prob": 39.5,
      "completed": true,
      "actual_score": "2-2",
      "predicted_direction": "home",
      "actual_direction": "draw",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Netherlands（约 39.5%），实际是 平局（赛前约 25.8%）。",
        "reason": "平局风险被低估。模型给出了胜负倾向，但实际比赛进入拉扯，强势方没有把优势转成胜利。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际打成平局，赛前模型低估了不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Netherlands Elo 1935 vs Japan 1924，差距 12 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Netherlands 1.4 : 1.29 Japan，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.3%, 1-0 9.5%, 0-1 8.8%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Netherlands，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-14",
      "group": "F",
      "city": "Guadalupe",
      "country": "Mexico",
      "home": "Sweden",
      "away": "Tunisia",
      "home_score": 5,
      "away_score": 1,
      "lambda_home": 1.38,
      "lambda_away": 1.16,
      "home_win": 42.0,
      "draw": 26.5,
      "away_win": 31.4,
      "matrix": [
        [
          7.9,
          9.1,
          5.3,
          2.0,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.9,
          12.6,
          7.3,
          2.8,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          7.5,
          8.7,
          5.1,
          2.0,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.5,
          4.0,
          2.3,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.2,
          1.4,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.6
        },
        {
          "score": "1-0",
          "prob": 10.9
        },
        {
          "score": "0-1",
          "prob": 9.1
        },
        {
          "score": "2-1",
          "prob": 8.7
        },
        {
          "score": "0-0",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.1
        },
        {
          "score": "3-1",
          "prob": 4.0
        },
        {
          "score": "3-0",
          "prob": 3.5
        },
        {
          "score": "1-3",
          "prob": 2.8
        },
        {
          "score": "3-2",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-2",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "1-4",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-4",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.0,
        "margin_3_plus": 11.1,
        "level": "watch"
      },
      "winner": "Sweden",
      "winner_prob": 42.0,
      "completed": true,
      "actual_score": "5-1",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Sweden，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Sweden Elo 1754 vs Tunisia 1714，差距 41 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Sweden 1.38 : 1.16 Tunisia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.6%, 1-0 10.9%, 0-1 9.1%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Sweden，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-15",
      "group": "G",
      "city": "Seattle",
      "country": "United States",
      "home": "Belgium",
      "away": "Egypt",
      "home_score": 1,
      "away_score": 1,
      "lambda_home": 1.52,
      "lambda_away": 1.09,
      "home_win": 47.2,
      "draw": 25.6,
      "away_win": 27.2,
      "matrix": [
        [
          7.3,
          8.0,
          4.4,
          1.6,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.1,
          12.2,
          6.6,
          2.4,
          0.7,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          8.5,
          9.3,
          5.1,
          1.8,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.3,
          4.7,
          2.6,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.6,
          1.8,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.2
        },
        {
          "score": "1-0",
          "prob": 11.1
        },
        {
          "score": "2-1",
          "prob": 9.3
        },
        {
          "score": "2-0",
          "prob": 8.5
        },
        {
          "score": "0-1",
          "prob": 8.0
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.1
        },
        {
          "score": "3-1",
          "prob": 4.7
        },
        {
          "score": "3-0",
          "prob": 4.3
        },
        {
          "score": "3-2",
          "prob": 2.6
        },
        {
          "score": "1-3",
          "prob": 2.4
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 1.6,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "5-1",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.4,
        "margin_3_plus": 12.3,
        "level": "watch"
      },
      "winner": "Belgium",
      "winner_prob": 47.2,
      "completed": true,
      "actual_score": "1-1",
      "predicted_direction": "home",
      "actual_direction": "draw",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Belgium（约 47.2%），实际是 平局（赛前约 25.6%）。",
        "reason": "平局风险被低估。模型给出了胜负倾向，但实际比赛进入拉扯，强势方没有把优势转成胜利。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际打成平局，赛前模型低估了不胜风险。"
        },
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Belgium Elo 1929 vs Egypt 1771，差距 158 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Belgium 1.52 : 1.09 Egypt，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.2%, 1-0 11.1%, 2-1 9.3%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Belgium，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-15",
      "group": "G",
      "city": "Inglewood",
      "country": "United States",
      "home": "Iran",
      "away": "New Zealand",
      "home_score": 2,
      "away_score": 2,
      "lambda_home": 1.74,
      "lambda_away": 0.97,
      "home_win": 55.4,
      "draw": 23.6,
      "away_win": 20.9,
      "matrix": [
        [
          6.7,
          6.5,
          3.1,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.6,
          11.2,
          5.5,
          1.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.1,
          9.8,
          4.7,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          5.8,
          5.7,
          2.7,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.5,
          2.5,
          1.2,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.9,
          0.9,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 11.6
        },
        {
          "score": "1-1",
          "prob": 11.2
        },
        {
          "score": "2-0",
          "prob": 10.1
        },
        {
          "score": "2-1",
          "prob": 9.8
        },
        {
          "score": "0-0",
          "prob": 6.7
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 5.8
        },
        {
          "score": "3-1",
          "prob": 5.7
        },
        {
          "score": "2-2",
          "prob": 4.7
        },
        {
          "score": "3-2",
          "prob": 2.7
        },
        {
          "score": "4-0",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 2.5,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-1",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-0",
          "prob": 0.9,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.5,
        "margin_3_plus": 15.6,
        "level": "high"
      },
      "winner": "Iran",
      "winner_prob": 55.4,
      "completed": true,
      "actual_score": "2-2",
      "predicted_direction": "home",
      "actual_direction": "draw",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Iran（约 55.4%），实际是 平局（赛前约 23.6%）。",
        "reason": "平局风险被低估。模型给出了胜负倾向，但实际比赛进入拉扯，强势方没有把优势转成胜利。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际打成平局，赛前模型低估了不胜风险。"
        },
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Iran Elo 1856 vs New Zealand 1648，差距 208 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Iran 1.74 : 0.97 New Zealand，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 11.6%, 1-1 11.2%, 2-0 10.1%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Iran，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-15",
      "group": "H",
      "city": "Atlanta",
      "country": "United States",
      "home": "Spain",
      "away": "Cape Verde",
      "home_score": 0,
      "away_score": 0,
      "lambda_home": 2.29,
      "lambda_away": 0.63,
      "home_win": 74.9,
      "draw": 16.4,
      "away_win": 8.5,
      "matrix": [
        [
          5.4,
          3.4,
          1.1,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.3,
          7.8,
          2.4,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          14.1,
          8.9,
          2.8,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          10.8,
          6.8,
          2.1,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          6.2,
          3.9,
          1.2,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.8,
          1.8,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.1,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "2-0",
          "prob": 14.1
        },
        {
          "score": "1-0",
          "prob": 12.3
        },
        {
          "score": "3-0",
          "prob": 10.8
        },
        {
          "score": "2-1",
          "prob": 8.9
        },
        {
          "score": "1-1",
          "prob": 7.8
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 10.8
        },
        {
          "score": "3-1",
          "prob": 6.8
        },
        {
          "score": "4-0",
          "prob": 6.2
        },
        {
          "score": "4-1",
          "prob": 3.9
        },
        {
          "score": "2-2",
          "prob": 2.8
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 6.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 3.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "5-0",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "3-2",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "5-1",
          "prob": 1.8,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "6-0",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 6
        },
        {
          "score": "6-1",
          "prob": 0.7,
          "total_goals": 7,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 33.3,
        "margin_3_plus": 29.3,
        "level": "high"
      },
      "winner": "Spain",
      "winner_prob": 74.9,
      "completed": true,
      "actual_score": "0-0",
      "predicted_direction": "home",
      "actual_direction": "draw",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Spain（约 74.9%），实际是 平局（赛前约 16.4%）。",
        "reason": "平局风险被低估。模型给出了胜负倾向，但实际比赛进入拉扯，强势方没有把优势转成胜利。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际打成平局，赛前模型低估了不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Spain Elo 2093 vs Cape Verde 1625，差距 469 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Spain 2.29 : 0.63 Cape Verde，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：2-0 14.1%, 1-0 12.3%, 3-0 10.8%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Spain，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-15",
      "group": "H",
      "city": "Miami Gardens",
      "country": "United States",
      "home": "Saudi Arabia",
      "away": "Uruguay",
      "home_score": 1,
      "away_score": 1,
      "lambda_home": 0.94,
      "lambda_away": 1.59,
      "home_win": 22.4,
      "draw": 25.2,
      "away_win": 52.4,
      "matrix": [
        [
          8.0,
          12.6,
          10.0,
          5.3,
          2.1,
          0.7,
          0.2,
          0.0,
          0.0
        ],
        [
          7.5,
          11.9,
          9.5,
          5.0,
          2.0,
          0.6,
          0.2,
          0.0,
          0.0
        ],
        [
          3.5,
          5.6,
          4.5,
          2.4,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          1.1,
          1.8,
          1.4,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.4,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 12.6
        },
        {
          "score": "1-1",
          "prob": 11.9
        },
        {
          "score": "0-2",
          "prob": 10.0
        },
        {
          "score": "1-2",
          "prob": 9.5
        },
        {
          "score": "0-0",
          "prob": 8.0
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 5.3
        },
        {
          "score": "1-3",
          "prob": 5.0
        },
        {
          "score": "2-2",
          "prob": 4.5
        },
        {
          "score": "2-3",
          "prob": 2.4
        },
        {
          "score": "0-4",
          "prob": 2.1
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-4",
          "prob": 2.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-5",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "1-5",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.8,
        "margin_3_plus": 13.5,
        "level": "watch"
      },
      "winner": "Uruguay",
      "winner_prob": 52.4,
      "completed": true,
      "actual_score": "1-1",
      "predicted_direction": "away",
      "actual_direction": "draw",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Uruguay（约 52.4%），实际是 平局（赛前约 25.2%）。",
        "reason": "平局风险被低估。模型给出了胜负倾向，但实际比赛进入拉扯，强势方没有把优势转成胜利。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际打成平局，赛前模型低估了不胜风险。"
        },
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Saudi Arabia Elo 1661 vs Uruguay 1901，差距 239 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Saudi Arabia 0.94 : 1.59 Uruguay，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 12.6%, 1-1 11.9%, 0-2 10.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Uruguay，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-16",
      "group": "I",
      "city": "East Rutherford",
      "country": "United States",
      "home": "France",
      "away": "Senegal",
      "home_score": 3,
      "away_score": 1,
      "lambda_home": 1.55,
      "lambda_away": 0.98,
      "home_win": 50.4,
      "draw": 25.5,
      "away_win": 24.0,
      "matrix": [
        [
          8.0,
          7.8,
          3.8,
          1.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          12.3,
          12.1,
          6.0,
          1.9,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          9.5,
          9.4,
          4.6,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.9,
          4.8,
          2.4,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.9,
          1.9,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.3
        },
        {
          "score": "1-1",
          "prob": 12.1
        },
        {
          "score": "2-0",
          "prob": 9.5
        },
        {
          "score": "2-1",
          "prob": 9.4
        },
        {
          "score": "0-0",
          "prob": 8.0
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 4.9
        },
        {
          "score": "3-1",
          "prob": 4.8
        },
        {
          "score": "2-2",
          "prob": 4.6
        },
        {
          "score": "3-2",
          "prob": 2.4
        },
        {
          "score": "1-3",
          "prob": 1.9
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.6,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.8,
        "margin_3_plus": 13.0,
        "level": "watch"
      },
      "winner": "France",
      "winner_prob": 50.4,
      "completed": true,
      "actual_score": "3-1",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 France，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "France Elo 2031 vs Senegal 1853，差距 178 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 France 1.55 : 0.98 Senegal，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.3%, 1-1 12.1%, 2-0 9.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 France，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-16",
      "group": "I",
      "city": "Foxborough",
      "country": "United States",
      "home": "Iraq",
      "away": "Norway",
      "home_score": 1,
      "away_score": 4,
      "lambda_home": 1.09,
      "lambda_away": 1.42,
      "home_win": 28.9,
      "draw": 26.5,
      "away_win": 44.5,
      "matrix": [
        [
          8.2,
          11.6,
          8.2,
          3.9,
          1.4,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          8.9,
          12.6,
          8.9,
          4.2,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          4.8,
          6.8,
          4.8,
          2.3,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          1.8,
          2.5,
          1.8,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.7,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.6
        },
        {
          "score": "0-1",
          "prob": 11.6
        },
        {
          "score": "1-0",
          "prob": 8.9
        },
        {
          "score": "1-2",
          "prob": 8.9
        },
        {
          "score": "0-0",
          "prob": 8.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.8
        },
        {
          "score": "1-3",
          "prob": 4.2
        },
        {
          "score": "0-3",
          "prob": 3.9
        },
        {
          "score": "3-1",
          "prob": 2.5
        },
        {
          "score": "2-3",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.4,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.1,
        "margin_3_plus": 11.4,
        "level": "watch"
      },
      "winner": "Norway",
      "winner_prob": 44.5,
      "completed": true,
      "actual_score": "1-4",
      "predicted_direction": "away",
      "actual_direction": "away",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Norway，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Iraq Elo 1705 vs Norway 1862，差距 157 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Iraq 1.09 : 1.42 Norway，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.6%, 0-1 11.6%, 1-0 8.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Norway，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-16",
      "group": "J",
      "city": "Kansas City",
      "country": "United States",
      "home": "Argentina",
      "away": "Algeria",
      "home_score": 3,
      "away_score": 0,
      "lambda_home": 1.7,
      "lambda_away": 0.92,
      "home_win": 55.7,
      "draw": 24.0,
      "away_win": 20.3,
      "matrix": [
        [
          7.3,
          6.7,
          3.1,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.4,
          11.4,
          5.2,
          1.6,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.5,
          9.7,
          4.4,
          1.4,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          6.0,
          5.5,
          2.5,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.5,
          2.3,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.9,
          0.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.4
        },
        {
          "score": "1-1",
          "prob": 11.4
        },
        {
          "score": "2-0",
          "prob": 10.5
        },
        {
          "score": "2-1",
          "prob": 9.7
        },
        {
          "score": "0-0",
          "prob": 7.3
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 6.0
        },
        {
          "score": "3-1",
          "prob": 5.5
        },
        {
          "score": "2-2",
          "prob": 4.4
        },
        {
          "score": "3-2",
          "prob": 2.5
        },
        {
          "score": "4-0",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 2.5,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-0",
          "prob": 0.9,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.7,
        "margin_3_plus": 15.3,
        "level": "watch"
      },
      "winner": "Argentina",
      "winner_prob": 55.7,
      "completed": true,
      "actual_score": "3-0",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Argentina，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Argentina Elo 2102 vs Algeria 1861，差距 241 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Argentina 1.7 : 0.92 Algeria，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.4%, 1-1 11.4%, 2-0 10.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Argentina，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-16",
      "group": "J",
      "city": "Santa Clara",
      "country": "United States",
      "home": "Austria",
      "away": "Jordan",
      "home_score": 3,
      "away_score": 1,
      "lambda_home": 1.54,
      "lambda_away": 1.01,
      "home_win": 49.7,
      "draw": 25.6,
      "away_win": 24.7,
      "matrix": [
        [
          7.9,
          7.9,
          4.0,
          1.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          12.1,
          12.2,
          6.1,
          2.0,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          9.3,
          9.3,
          4.7,
          1.6,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.8,
          4.8,
          2.4,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.8,
          1.8,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.2
        },
        {
          "score": "1-0",
          "prob": 12.1
        },
        {
          "score": "2-0",
          "prob": 9.3
        },
        {
          "score": "2-1",
          "prob": 9.3
        },
        {
          "score": "0-0",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 4.8
        },
        {
          "score": "3-1",
          "prob": 4.8
        },
        {
          "score": "2-2",
          "prob": 4.7
        },
        {
          "score": "3-2",
          "prob": 2.4
        },
        {
          "score": "1-3",
          "prob": 2.0
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 1.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.6,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.8,
        "margin_3_plus": 12.6,
        "level": "watch"
      },
      "winner": "Austria",
      "winner_prob": 49.7,
      "completed": true,
      "actual_score": "3-1",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Austria，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Austria Elo 1858 vs Jordan 1698，差距 160 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Austria 1.54 : 1.01 Jordan，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.2%, 1-0 12.1%, 2-0 9.3%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Austria，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-17",
      "group": "K",
      "city": "Houston",
      "country": "United States",
      "home": "Portugal",
      "away": "DR Congo",
      "home_score": 1,
      "away_score": 1,
      "lambda_home": 1.81,
      "lambda_away": 0.86,
      "home_win": 59.9,
      "draw": 22.7,
      "away_win": 17.4,
      "matrix": [
        [
          6.9,
          6.0,
          2.6,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.6,
          10.8,
          4.6,
          1.3,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.4,
          9.8,
          4.2,
          1.2,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          6.9,
          5.9,
          2.5,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          3.1,
          2.7,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.1,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.6
        },
        {
          "score": "2-0",
          "prob": 11.4
        },
        {
          "score": "1-1",
          "prob": 10.8
        },
        {
          "score": "2-1",
          "prob": 9.8
        },
        {
          "score": "0-0",
          "prob": 6.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 6.9
        },
        {
          "score": "3-1",
          "prob": 5.9
        },
        {
          "score": "2-2",
          "prob": 4.2
        },
        {
          "score": "4-0",
          "prob": 3.1
        },
        {
          "score": "4-1",
          "prob": 2.7
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 3.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-0",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.6,
        "margin_3_plus": 17.3,
        "level": "watch"
      },
      "winner": "Portugal",
      "winner_prob": 59.9,
      "completed": true,
      "actual_score": "1-1",
      "predicted_direction": "home",
      "actual_direction": "draw",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Portugal（约 59.9%），实际是 平局（赛前约 22.7%）。",
        "reason": "平局风险被低估。模型给出了胜负倾向，但实际比赛进入拉扯，强势方没有把优势转成胜利。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际打成平局，赛前模型低估了不胜风险。"
        },
        {
          "level": "amber",
          "label": "让球风险提醒",
          "text": "葡萄牙胜方向清楚，但深让球不适合当稳项，比分更适合小额娱乐。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-18",
        "kickoff_bj": "2026-06-18 01:00",
        "home_win_odds": 1.13,
        "draw_odds": 5.86,
        "away_win_odds": 13.5,
        "trend": "主胜赔率很低，市场明显支持葡萄牙；让2球后风险明显抬升。",
        "risk_level": "amber",
        "label": "让球风险提醒",
        "reason": "葡萄牙胜方向清楚，但深让球不适合当稳项，比分更适合小额娱乐。",
        "correct_score_odds": {
          "1-0": 6.75,
          "2-0": 5.8,
          "2-1": 9,
          "3-0": 5.25,
          "3-1": 7.75,
          "4-0": 10,
          "5-0": 23,
          "0-0": 15,
          "1-1": 11
        },
        "match_id": 2040182,
        "match_num": "周三021",
        "league": "世界杯",
        "home_cn": "葡萄牙",
        "away_cn": "刚果(金)",
        "total_goals_odds": {
          "0": 16,
          "1": 5.7,
          "2": 4,
          "3": 3.65,
          "4": 4.3,
          "5": 7.75,
          "6": 14,
          "7": 17
        },
        "remark": "比赛将在美国-得克萨斯州休斯敦举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Portugal Elo 1987 vs DR Congo 1685，差距 303 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Portugal 1.81 : 0.86 DR Congo，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.6%, 2-0 11.4%, 1-1 10.8%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Portugal，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-17",
      "group": "K",
      "city": "Mexico City",
      "country": "Mexico",
      "home": "Uzbekistan",
      "away": "Colombia",
      "home_score": 1,
      "away_score": 3,
      "lambda_home": 0.99,
      "lambda_away": 1.47,
      "home_win": 25.5,
      "draw": 26.3,
      "away_win": 48.3,
      "matrix": [
        [
          8.5,
          12.5,
          9.2,
          4.5,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          8.4,
          12.4,
          9.1,
          4.5,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          4.2,
          6.2,
          4.5,
          2.2,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          1.4,
          2.0,
          1.5,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.5,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 12.5
        },
        {
          "score": "1-1",
          "prob": 12.4
        },
        {
          "score": "0-2",
          "prob": 9.2
        },
        {
          "score": "1-2",
          "prob": 9.1
        },
        {
          "score": "0-0",
          "prob": 8.5
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 4.5
        },
        {
          "score": "1-3",
          "prob": 4.5
        },
        {
          "score": "2-2",
          "prob": 4.5
        },
        {
          "score": "2-3",
          "prob": 2.2
        },
        {
          "score": "3-1",
          "prob": 2.0
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-2",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-5",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "0-5",
          "prob": 0.5,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.3,
        "margin_3_plus": 11.9,
        "level": "watch"
      },
      "winner": "Colombia",
      "winner_prob": 48.3,
      "completed": true,
      "actual_score": "1-3",
      "predicted_direction": "away",
      "actual_direction": "away",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Colombia，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "amber",
          "label": "热门方向提醒",
          "text": "哥伦比亚胜方向清楚，但赔率过低，比分玩法不要追太散。"
        },
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-18",
        "kickoff_bj": "2026-06-18 10:00",
        "home_win_odds": 9.65,
        "draw_odds": 4.85,
        "away_win_odds": 1.22,
        "trend": "市场明显支持哥伦比亚，乌兹别克方向回报高但难度大。",
        "risk_level": "amber",
        "label": "热门方向提醒",
        "reason": "哥伦比亚胜方向清楚，但赔率过低，比分玩法不要追太散。",
        "correct_score_odds": {
          "0-1": 5.6,
          "0-2": 5.2,
          "1-2": 8.5,
          "0-3": 8,
          "1-3": 12,
          "1-0": 20,
          "1-1": 9
        },
        "match_id": 2040185,
        "match_num": "周三024",
        "league": "世界杯",
        "home_cn": "乌兹别克斯坦",
        "away_cn": "哥伦比亚",
        "total_goals_odds": {
          "0": 12,
          "1": 5,
          "2": 3.55,
          "3": 3.1,
          "4": 4.8,
          "5": 12.5,
          "6": 23,
          "7": 29
        },
        "remark": "比赛将在墨西哥-墨西哥城举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Uzbekistan Elo 1759 vs Colombia 1986，差距 227 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Uzbekistan 0.99 : 1.47 Colombia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 12.5%, 1-1 12.4%, 0-2 9.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Colombia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-17",
      "group": "L",
      "city": "Arlington",
      "country": "United States",
      "home": "England",
      "away": "Croatia",
      "home_score": 4,
      "away_score": 2,
      "lambda_home": 1.48,
      "lambda_away": 1.16,
      "home_win": 44.5,
      "draw": 25.8,
      "away_win": 29.8,
      "matrix": [
        [
          7.1,
          8.3,
          4.8,
          1.9,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.5,
          12.2,
          7.1,
          2.8,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          7.8,
          9.1,
          5.3,
          2.0,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.8,
          4.5,
          2.6,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.4,
          1.7,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.2
        },
        {
          "score": "1-0",
          "prob": 10.5
        },
        {
          "score": "2-1",
          "prob": 9.1
        },
        {
          "score": "0-1",
          "prob": 8.3
        },
        {
          "score": "2-0",
          "prob": 7.8
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.3
        },
        {
          "score": "3-1",
          "prob": 4.5
        },
        {
          "score": "3-0",
          "prob": 3.8
        },
        {
          "score": "1-3",
          "prob": 2.8
        },
        {
          "score": "3-2",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.4,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-4",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.1,
        "margin_3_plus": 12.0,
        "level": "watch"
      },
      "winner": "England",
      "winner_prob": 44.5,
      "completed": true,
      "actual_score": "4-2",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 England，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "英格兰更值得支持，但这场不能只看名气，平局和小比分要防。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-18",
        "kickoff_bj": "2026-06-18 04:00",
        "home_win_odds": 1.53,
        "draw_odds": 3.5,
        "away_win_odds": 5.27,
        "trend": "英格兰方向占优，但克罗地亚不属于弱队，平局赔付不算极高。",
        "risk_level": "amber",
        "label": "防平提醒",
        "reason": "英格兰更值得支持，但这场不能只看名气，平局和小比分要防。",
        "correct_score_odds": {
          "1-0": 6.2,
          "2-0": 7.5,
          "2-1": 5.7,
          "3-0": 13.5,
          "3-1": 11.5,
          "1-1": 5.8,
          "0-0": 10,
          "2-2": 12.5
        },
        "match_id": 2040183,
        "match_num": "周三022",
        "league": "世界杯",
        "home_cn": "英格兰",
        "away_cn": "克罗地亚",
        "total_goals_odds": {
          "0": 10,
          "1": 4.5,
          "2": 3.4,
          "3": 3.2,
          "4": 5.95,
          "5": 12,
          "6": 23,
          "7": 33
        },
        "remark": "比赛将在美国-得克萨斯州阿灵顿举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "England Elo 1976 vs Croatia 1914，差距 63 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 England 1.48 : 1.16 Croatia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.2%, 1-0 10.5%, 2-1 9.1%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 England，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-17",
      "group": "L",
      "city": "Toronto",
      "country": "Canada",
      "home": "Ghana",
      "away": "Panama",
      "home_score": 1,
      "away_score": 0,
      "lambda_home": 1.08,
      "lambda_away": 1.35,
      "home_win": 29.8,
      "draw": 27.2,
      "away_win": 43.0,
      "matrix": [
        [
          8.9,
          11.9,
          8.1,
          3.6,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          9.5,
          12.8,
          8.7,
          3.9,
          1.3,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          5.1,
          6.9,
          4.7,
          2.1,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          1.8,
          2.5,
          1.7,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.7,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.8
        },
        {
          "score": "0-1",
          "prob": 11.9
        },
        {
          "score": "1-0",
          "prob": 9.5
        },
        {
          "score": "0-0",
          "prob": 8.9
        },
        {
          "score": "1-2",
          "prob": 8.7
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.7
        },
        {
          "score": "1-3",
          "prob": 3.9
        },
        {
          "score": "0-3",
          "prob": 3.6
        },
        {
          "score": "3-1",
          "prob": 2.5
        },
        {
          "score": "2-3",
          "prob": 2.1
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 0.5,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.5,
        "margin_3_plus": 10.5,
        "level": "watch"
      },
      "winner": "Panama",
      "winner_prob": 43.0,
      "completed": true,
      "actual_score": "1-0",
      "predicted_direction": "away",
      "actual_direction": "home",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Panama（约 43.0%），实际是 Ghana（赛前约 29.8%）。",
        "reason": "胜负方向判断偏差。双方差距没有模型估计得那么稳定，实际比赛执行效率改变了结果。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际胜负方向和赛前倾向相反，需要复盘临场因素。"
        },
        {
          "level": "red",
          "label": "赔率异常红灯",
          "text": "加纳略占优，但赔率接近，平局和反向结果都有空间，不建议放进4场串关。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-18",
        "kickoff_bj": "2026-06-18 07:00",
        "home_win_odds": 2.04,
        "draw_odds": 3.03,
        "away_win_odds": 3.23,
        "trend": "三项赔率接近，市场没有给出清晰方向。",
        "risk_level": "red",
        "label": "赔率异常红灯",
        "reason": "加纳略占优，但赔率接近，平局和反向结果都有空间，不建议放进4场串关。",
        "correct_score_odds": {
          "1-0": 6.3,
          "2-0": 8.75,
          "2-1": 6.75,
          "3-0": 20,
          "3-1": 18,
          "1-1": 5,
          "0-0": 8.25,
          "0-1": 8.8,
          "1-2": 11
        },
        "match_id": 2040184,
        "match_num": "周三023",
        "league": "世界杯",
        "home_cn": "加纳",
        "away_cn": "巴拿马",
        "total_goals_odds": {
          "0": 8.25,
          "1": 3.8,
          "2": 3,
          "3": 3.7,
          "4": 6.8,
          "5": 16.5,
          "6": 30,
          "7": 40
        },
        "remark": "比赛将在加拿大-多伦多举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Ghana Elo 1595 vs Panama 1758，差距 163 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Ghana 1.08 : 1.35 Panama，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.8%, 0-1 11.9%, 1-0 9.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Panama，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-18",
      "group": "A",
      "city": "Atlanta",
      "country": "United States",
      "home": "Czechia",
      "away": "South Africa",
      "home_score": 1,
      "away_score": 1,
      "lambda_home": 1.47,
      "lambda_away": 0.97,
      "home_win": 48.7,
      "draw": 26.3,
      "away_win": 25.0,
      "matrix": [
        [
          8.7,
          8.4,
          4.1,
          1.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          12.8,
          12.4,
          6.0,
          2.0,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          9.4,
          9.1,
          4.4,
          1.4,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.6,
          4.5,
          2.2,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.7,
          1.6,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.8
        },
        {
          "score": "1-1",
          "prob": 12.4
        },
        {
          "score": "2-0",
          "prob": 9.4
        },
        {
          "score": "2-1",
          "prob": 9.1
        },
        {
          "score": "0-0",
          "prob": 8.7
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 4.6
        },
        {
          "score": "3-1",
          "prob": 4.5
        },
        {
          "score": "2-2",
          "prob": 4.4
        },
        {
          "score": "3-2",
          "prob": 2.2
        },
        {
          "score": "1-3",
          "prob": 2.0
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 1.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 1.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.5,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.0,
        "margin_3_plus": 11.8,
        "level": "watch"
      },
      "winner": "Czechia",
      "winner_prob": 48.7,
      "completed": true,
      "actual_score": "1-1",
      "predicted_direction": "home",
      "actual_direction": "draw",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Czechia（约 48.7%），实际是 平局（赛前约 26.3%）。",
        "reason": "平局风险被低估。模型给出了胜负倾向，但实际比赛进入拉扯，强势方没有把优势转成胜利。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际打成平局，赛前模型低估了不胜风险。"
        },
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-19",
        "kickoff_bj": "2026-06-19 00:00",
        "match_id": 2040235,
        "match_num": "周四025",
        "league": "世界杯",
        "home_cn": "捷克",
        "away_cn": "南非",
        "total_goals_odds": {
          "0": 9.6,
          "1": 4.4,
          "2": 3.1,
          "3": 3.5,
          "4": 6.2,
          "5": 12.5,
          "6": 23,
          "7": 34
        },
        "remark": "比赛将在美国-佐治亚州亚特兰大举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Czechia Elo 1764 vs South Africa 1627，差距 137 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Czechia 1.47 : 0.97 South Africa，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.8%, 1-1 12.4%, 2-0 9.4%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Czechia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-18",
      "group": "A",
      "city": "Zapopan",
      "country": "Mexico",
      "home": "Mexico",
      "away": "Korea Republic",
      "home_score": 1,
      "away_score": 0,
      "lambda_home": 1.38,
      "lambda_away": 1.16,
      "home_win": 42.0,
      "draw": 26.5,
      "away_win": 31.5,
      "matrix": [
        [
          7.8,
          9.1,
          5.3,
          2.0,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.9,
          12.6,
          7.3,
          2.8,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          7.5,
          8.7,
          5.1,
          2.0,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.5,
          4.0,
          2.3,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.2,
          1.4,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.6
        },
        {
          "score": "1-0",
          "prob": 10.9
        },
        {
          "score": "0-1",
          "prob": 9.1
        },
        {
          "score": "2-1",
          "prob": 8.7
        },
        {
          "score": "0-0",
          "prob": 7.8
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.1
        },
        {
          "score": "3-1",
          "prob": 4.0
        },
        {
          "score": "3-0",
          "prob": 3.5
        },
        {
          "score": "1-3",
          "prob": 2.8
        },
        {
          "score": "3-2",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-2",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "1-4",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-4",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.0,
        "margin_3_plus": 11.1,
        "level": "watch"
      },
      "winner": "Mexico",
      "winner_prob": 42.0,
      "completed": true,
      "actual_score": "1-0",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Mexico，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-19",
        "kickoff_bj": "2026-06-19 09:00",
        "match_id": 2040238,
        "match_num": "周四028",
        "league": "世界杯",
        "home_cn": "墨西哥",
        "away_cn": "韩国",
        "total_goals_odds": {
          "0": 8.8,
          "1": 4.35,
          "2": 3.1,
          "3": 3.8,
          "4": 5.9,
          "5": 12,
          "6": 23,
          "7": 35
        },
        "remark": "比赛将在墨西哥-萨波潘举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Mexico Elo 1924 vs Korea Republic 1841，差距 83 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Mexico 1.38 : 1.16 Korea Republic，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.6%, 1-0 10.9%, 0-1 9.1%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Mexico，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-18",
      "group": "B",
      "city": "Inglewood",
      "country": "United States",
      "home": "Switzerland",
      "away": "Bosnia and Herzegovina",
      "home_score": 4,
      "away_score": 1,
      "lambda_home": 1.63,
      "lambda_away": 0.95,
      "home_win": 53.2,
      "draw": 24.8,
      "away_win": 22.1,
      "matrix": [
        [
          7.6,
          7.2,
          3.4,
          1.1,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.4,
          11.8,
          5.6,
          1.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.0,
          9.6,
          4.5,
          1.4,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          5.4,
          5.2,
          2.5,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.2,
          2.1,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.4
        },
        {
          "score": "1-1",
          "prob": 11.8
        },
        {
          "score": "2-0",
          "prob": 10.0
        },
        {
          "score": "2-1",
          "prob": 9.6
        },
        {
          "score": "0-0",
          "prob": 7.6
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 5.4
        },
        {
          "score": "3-1",
          "prob": 5.2
        },
        {
          "score": "2-2",
          "prob": 4.5
        },
        {
          "score": "3-2",
          "prob": 2.5
        },
        {
          "score": "4-0",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 2.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.6,
        "margin_3_plus": 13.9,
        "level": "watch"
      },
      "winner": "Switzerland",
      "winner_prob": 53.2,
      "completed": true,
      "actual_score": "4-1",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Switzerland，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Switzerland Elo 1875 vs Bosnia and Herzegovina 1633，差距 243 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Switzerland 1.63 : 0.95 Bosnia and Herzegovina，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.4%, 1-1 11.8%, 2-0 10.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Switzerland，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-18",
      "group": "B",
      "city": "Vancouver",
      "country": "Canada",
      "home": "Canada",
      "away": "Qatar",
      "home_score": 6,
      "away_score": 0,
      "lambda_home": 1.53,
      "lambda_away": 0.91,
      "home_win": 51.7,
      "draw": 25.8,
      "away_win": 22.4,
      "matrix": [
        [
          8.7,
          7.9,
          3.6,
          1.1,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          13.3,
          12.1,
          5.5,
          1.7,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.2,
          9.3,
          4.2,
          1.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          5.2,
          4.7,
          2.1,
          0.7,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.0,
          1.8,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 13.3
        },
        {
          "score": "1-1",
          "prob": 12.1
        },
        {
          "score": "2-0",
          "prob": 10.2
        },
        {
          "score": "2-1",
          "prob": 9.3
        },
        {
          "score": "0-0",
          "prob": 8.7
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 5.2
        },
        {
          "score": "3-1",
          "prob": 4.7
        },
        {
          "score": "2-2",
          "prob": 4.2
        },
        {
          "score": "3-2",
          "prob": 2.1
        },
        {
          "score": "4-0",
          "prob": 2.0
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 2.0,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.6,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.8,
        "margin_3_plus": 12.8,
        "level": "watch"
      },
      "winner": "Canada",
      "winner_prob": 51.7,
      "completed": true,
      "actual_score": "6-0",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Canada，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Canada Elo 1828 vs Qatar 1574，差距 255 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Canada 1.53 : 0.91 Qatar，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 13.3%, 1-1 12.1%, 2-0 10.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Canada，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-19",
      "group": "D",
      "city": "",
      "country": "United States",
      "home": "USA",
      "away": "Australia",
      "home_score": 2,
      "away_score": 0,
      "lambda_home": 1.17,
      "lambda_away": 1.41,
      "home_win": 31.3,
      "draw": 26.3,
      "away_win": 42.5,
      "matrix": [
        [
          7.6,
          10.7,
          7.5,
          3.5,
          1.2,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          8.9,
          12.5,
          8.8,
          4.1,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          5.2,
          7.3,
          5.2,
          2.4,
          0.9,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          2.0,
          2.9,
          2.0,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.8,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.5
        },
        {
          "score": "0-1",
          "prob": 10.7
        },
        {
          "score": "1-0",
          "prob": 8.9
        },
        {
          "score": "1-2",
          "prob": 8.8
        },
        {
          "score": "0-0",
          "prob": 7.6
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.2
        },
        {
          "score": "1-3",
          "prob": 4.1
        },
        {
          "score": "0-3",
          "prob": 3.5
        },
        {
          "score": "3-1",
          "prob": 2.9
        },
        {
          "score": "2-3",
          "prob": 2.4
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.7,
        "margin_3_plus": 11.3,
        "level": "watch"
      },
      "winner": "Australia",
      "winner_prob": 42.5,
      "completed": true,
      "actual_score": "2-0",
      "predicted_direction": "away",
      "actual_direction": "home",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Australia（约 42.5%），实际是 USA（赛前约 31.3%）。",
        "reason": "胜负方向判断偏差。双方差距没有模型估计得那么稳定，实际比赛执行效率改变了结果。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际胜负方向和赛前倾向相反，需要复盘临场因素。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-20",
        "kickoff_bj": "2026-06-20 03:00",
        "match_id": 2040239,
        "match_num": "周五029",
        "league": "世界杯",
        "home_cn": "美国",
        "away_cn": "澳大利亚",
        "total_goals_odds": {
          "0": 12.5,
          "1": 5.2,
          "2": 3.65,
          "3": 3.3,
          "4": 5.1,
          "5": 9,
          "6": 17,
          "7": 26
        },
        "remark": "比赛将在美国-华盛顿州西雅图举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "USA Elo 1815 vs Australia 1836，差距 21 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 USA 1.17 : 1.41 Australia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.5%, 0-1 10.7%, 1-0 8.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Australia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-19",
      "group": "C",
      "city": "",
      "country": "United States",
      "home": "Scotland",
      "away": "Morocco",
      "home_score": 0,
      "away_score": 1,
      "lambda_home": 1.02,
      "lambda_away": 1.45,
      "home_win": 26.5,
      "draw": 26.4,
      "away_win": 47.1,
      "matrix": [
        [
          8.5,
          12.3,
          8.9,
          4.3,
          1.6,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          8.6,
          12.5,
          9.1,
          4.4,
          1.6,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          4.4,
          6.4,
          4.6,
          2.2,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          1.5,
          2.2,
          1.6,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.6,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.5
        },
        {
          "score": "0-1",
          "prob": 12.3
        },
        {
          "score": "1-2",
          "prob": 9.1
        },
        {
          "score": "0-2",
          "prob": 8.9
        },
        {
          "score": "1-0",
          "prob": 8.6
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.6
        },
        {
          "score": "1-3",
          "prob": 4.4
        },
        {
          "score": "0-3",
          "prob": 4.3
        },
        {
          "score": "2-3",
          "prob": 2.2
        },
        {
          "score": "3-1",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-4",
          "prob": 1.6,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "1-5",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.7,
        "margin_3_plus": 11.8,
        "level": "watch"
      },
      "winner": "Morocco",
      "winner_prob": 47.1,
      "completed": true,
      "actual_score": "0-1",
      "predicted_direction": "away",
      "actual_direction": "away",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Morocco，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-20",
        "kickoff_bj": "2026-06-20 06:00",
        "match_id": 2040240,
        "match_num": "周五030",
        "league": "世界杯",
        "home_cn": "苏格兰",
        "away_cn": "摩洛哥",
        "total_goals_odds": {
          "0": 10,
          "1": 4.4,
          "2": 3.15,
          "3": 3.45,
          "4": 6.25,
          "5": 12.5,
          "6": 21,
          "7": 32
        },
        "remark": "比赛将在美国-马萨诸塞州福克斯伯勒举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Scotland Elo 1769 vs Morocco 1926，差距 157 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Scotland 1.02 : 1.45 Morocco，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.5%, 0-1 12.3%, 1-2 9.1%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Morocco，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-19",
      "group": "C",
      "city": "",
      "country": "United States",
      "home": "Brazil",
      "away": "Haiti",
      "home_score": 3,
      "away_score": 0,
      "lambda_home": 2.13,
      "lambda_away": 0.8,
      "home_win": 68.0,
      "draw": 19.1,
      "away_win": 12.9,
      "matrix": [
        [
          5.3,
          4.3,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.3,
          9.1,
          3.7,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.1,
          9.7,
          3.9,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          8.6,
          6.9,
          2.8,
          0.7,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          4.6,
          3.7,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.0,
          1.6,
          0.6,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          0.6,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "2-0",
          "prob": 12.1
        },
        {
          "score": "1-0",
          "prob": 11.3
        },
        {
          "score": "2-1",
          "prob": 9.7
        },
        {
          "score": "1-1",
          "prob": 9.1
        },
        {
          "score": "3-0",
          "prob": 8.6
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 8.6
        },
        {
          "score": "3-1",
          "prob": 6.9
        },
        {
          "score": "4-0",
          "prob": 4.6
        },
        {
          "score": "2-2",
          "prob": 3.9
        },
        {
          "score": "4-1",
          "prob": 3.7
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 4.6,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 3.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "5-0",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 1.6,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 1.5,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "2-3",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "6-0",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 6
        }
      ],
      "big_score_signal": {
        "over_3_5": 33.8,
        "margin_3_plus": 24.1,
        "level": "high"
      },
      "winner": "Brazil",
      "winner_prob": 68.0,
      "completed": true,
      "actual_score": "3-0",
      "predicted_direction": "home",
      "actual_direction": "home",
      "prediction_hit": true,
      "review": {
        "title": "方向命中",
        "summary": "赛前更看好 Brazil，实际结果也走向这个方向。",
        "reason": "模型对双方强弱和进攻效率的判断基本成立。"
      },
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-20",
        "kickoff_bj": "2026-06-20 08:30",
        "match_id": 2040241,
        "match_num": "周五031",
        "league": "世界杯",
        "home_cn": "巴西",
        "away_cn": "海地",
        "total_goals_odds": {
          "0": 38,
          "1": 9.9,
          "2": 5.45,
          "3": 4.2,
          "4": 3.9,
          "5": 5.1,
          "6": 8,
          "7": 7.8
        },
        "remark": "比赛将在美国-宾夕法尼亚州费城举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Brazil Elo 1997 vs Haiti 1628，差距 369 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Brazil 2.13 : 0.8 Haiti，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：2-0 12.1%, 1-0 11.3%, 2-1 9.7%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Brazil，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-19",
      "group": "D",
      "city": "",
      "country": "United States",
      "home": "Turkey",
      "away": "Paraguay",
      "home_score": 0,
      "away_score": 1,
      "lambda_home": 1.31,
      "lambda_away": 1.11,
      "home_win": 41.0,
      "draw": 27.4,
      "away_win": 31.6,
      "matrix": [
        [
          8.9,
          9.9,
          5.5,
          2.0,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.7,
          12.9,
          7.2,
          2.7,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          7.6,
          8.4,
          4.7,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.3,
          3.7,
          2.0,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.1,
          1.2,
          0.7,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.9
        },
        {
          "score": "1-0",
          "prob": 11.7
        },
        {
          "score": "0-1",
          "prob": 9.9
        },
        {
          "score": "0-0",
          "prob": 8.9
        },
        {
          "score": "2-1",
          "prob": 8.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.7
        },
        {
          "score": "3-1",
          "prob": 3.7
        },
        {
          "score": "3-0",
          "prob": 3.3
        },
        {
          "score": "1-3",
          "prob": 2.7
        },
        {
          "score": "0-3",
          "prob": 2.0
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-2",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "1-4",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 0.6,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.4,
        "margin_3_plus": 10.3,
        "level": "watch"
      },
      "winner": "Turkey",
      "winner_prob": 41.0,
      "completed": true,
      "actual_score": "0-1",
      "predicted_direction": "home",
      "actual_direction": "away",
      "prediction_hit": false,
      "review": {
        "title": "方向未中",
        "summary": "赛前倾向 Turkey（约 41.0%），实际是 Paraguay（赛前约 31.6%）。",
        "reason": "胜负方向判断偏差。双方差距没有模型估计得那么稳定，实际比赛执行效率改变了结果。"
      },
      "risk_tags": [
        {
          "level": "red",
          "label": "赛后翻车点",
          "text": "实际胜负方向和赛前倾向相反，需要复盘临场因素。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-20",
        "kickoff_bj": "2026-06-20 11:00",
        "match_id": 2040242,
        "match_num": "周五032",
        "league": "世界杯",
        "home_cn": "土耳其",
        "away_cn": "巴拉圭",
        "total_goals_odds": {
          "0": 10,
          "1": 4.5,
          "2": 3.25,
          "3": 3.55,
          "4": 5.9,
          "5": 11,
          "6": 22,
          "7": 28
        },
        "remark": "比赛将在美国-加利福尼亚州圣克拉拉举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Turkey Elo 1862 vs Paraguay 1803，差距 59 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Turkey 1.31 : 1.11 Paraguay，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.9%, 1-0 11.7%, 0-1 9.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Turkey，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-20",
      "group": "E",
      "city": "Toronto",
      "country": "Canada",
      "home": "Germany",
      "away": "Ivory Coast",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.63,
      "lambda_away": 1.06,
      "home_win": 50.7,
      "draw": 24.7,
      "away_win": 24.6,
      "matrix": [
        [
          6.8,
          7.2,
          3.8,
          1.3,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.1,
          11.7,
          6.2,
          2.2,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          9.0,
          9.6,
          5.1,
          1.8,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.9,
          5.2,
          2.8,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          2.0,
          2.1,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          0.7,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 11.7
        },
        {
          "score": "1-0",
          "prob": 11.1
        },
        {
          "score": "2-1",
          "prob": 9.6
        },
        {
          "score": "2-0",
          "prob": 9.0
        },
        {
          "score": "0-1",
          "prob": 7.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-1",
          "prob": 5.2
        },
        {
          "score": "2-2",
          "prob": 5.1
        },
        {
          "score": "3-0",
          "prob": 4.9
        },
        {
          "score": "3-2",
          "prob": 2.8
        },
        {
          "score": "1-3",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 2.0,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.4,
        "margin_3_plus": 13.9,
        "level": "high"
      },
      "winner": "Germany",
      "winner_prob": 50.7,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Germany Elo 1957 vs Ivory Coast 1806，差距 150 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Germany 1.63 : 1.06 Ivory Coast，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 11.7%, 1-0 11.1%, 2-1 9.6%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Germany，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-20",
      "group": "E",
      "city": "Kansas City",
      "country": "United States",
      "home": "Ecuador",
      "away": "Curaçao",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.82,
      "lambda_away": 0.86,
      "home_win": 60.1,
      "draw": 22.6,
      "away_win": 17.3,
      "matrix": [
        [
          6.9,
          5.9,
          2.5,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.5,
          10.7,
          4.6,
          1.3,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.4,
          9.8,
          4.2,
          1.2,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          6.9,
          5.9,
          2.5,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          3.1,
          2.7,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.1,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.5
        },
        {
          "score": "2-0",
          "prob": 11.4
        },
        {
          "score": "1-1",
          "prob": 10.7
        },
        {
          "score": "2-1",
          "prob": 9.8
        },
        {
          "score": "0-0",
          "prob": 6.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 6.9
        },
        {
          "score": "3-1",
          "prob": 5.9
        },
        {
          "score": "2-2",
          "prob": 4.2
        },
        {
          "score": "4-0",
          "prob": 3.1
        },
        {
          "score": "4-1",
          "prob": 2.7
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 3.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "2-3",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "5-0",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.7,
        "margin_3_plus": 17.3,
        "level": "watch"
      },
      "winner": "Ecuador",
      "winner_prob": 60.1,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Ecuador Elo 1912 vs Curaçao 1529，差距 383 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Ecuador 1.82 : 0.86 Curaçao，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.5%, 2-0 11.4%, 1-1 10.7%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Ecuador，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-20",
      "group": "F",
      "city": "Houston",
      "country": "United States",
      "home": "Netherlands",
      "away": "Sweden",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.66,
      "lambda_away": 1.13,
      "home_win": 49.7,
      "draw": 24.3,
      "away_win": 26.0,
      "matrix": [
        [
          6.1,
          6.9,
          3.9,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.2,
          11.5,
          6.5,
          2.5,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          8.4,
          9.6,
          5.4,
          2.0,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.7,
          5.3,
          3.0,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.9,
          2.2,
          1.2,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.7,
          0.4,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 11.5
        },
        {
          "score": "1-0",
          "prob": 10.2
        },
        {
          "score": "2-1",
          "prob": 9.6
        },
        {
          "score": "2-0",
          "prob": 8.4
        },
        {
          "score": "0-1",
          "prob": 6.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.4
        },
        {
          "score": "3-1",
          "prob": 5.3
        },
        {
          "score": "3-0",
          "prob": 4.7
        },
        {
          "score": "3-2",
          "prob": 3.0
        },
        {
          "score": "1-3",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 3.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 1.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        }
      ],
      "big_score_signal": {
        "over_3_5": 30.1,
        "margin_3_plus": 14.0,
        "level": "high"
      },
      "winner": "Netherlands",
      "winner_prob": 49.7,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-21",
        "kickoff_bj": "2026-06-21 01:00",
        "match_id": 2040243,
        "match_num": "周六033",
        "league": "世界杯",
        "home_cn": "荷兰",
        "away_cn": "瑞典",
        "total_goals_odds": {
          "0": 16,
          "1": 6.25,
          "2": 3.7,
          "3": 3.3,
          "4": 4.85,
          "5": 7.8,
          "6": 14,
          "7": 19
        },
        "remark": "比赛将在美国-得克萨斯州休斯敦举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Netherlands Elo 1935 vs Sweden 1772，差距 163 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Netherlands 1.66 : 1.13 Sweden，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 11.5%, 1-0 10.2%, 2-1 9.6%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Netherlands，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-20",
      "group": "F",
      "city": "Guadalupe",
      "country": "Mexico",
      "home": "Tunisia",
      "away": "Japan",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.94,
      "lambda_away": 1.65,
      "home_win": 21.4,
      "draw": 24.6,
      "away_win": 54.0,
      "matrix": [
        [
          7.6,
          12.5,
          10.2,
          5.6,
          2.3,
          0.8,
          0.2,
          0.0,
          0.0
        ],
        [
          7.1,
          11.7,
          9.6,
          5.3,
          2.2,
          0.7,
          0.2,
          0.0,
          0.0
        ],
        [
          3.3,
          5.5,
          4.5,
          2.5,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          1.0,
          1.7,
          1.4,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.4,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 12.5
        },
        {
          "score": "1-1",
          "prob": 11.7
        },
        {
          "score": "0-2",
          "prob": 10.2
        },
        {
          "score": "1-2",
          "prob": 9.6
        },
        {
          "score": "0-0",
          "prob": 7.6
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 5.6
        },
        {
          "score": "1-3",
          "prob": 5.3
        },
        {
          "score": "2-2",
          "prob": 4.5
        },
        {
          "score": "2-3",
          "prob": 2.5
        },
        {
          "score": "0-4",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-4",
          "prob": 2.3,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-5",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "1-5",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.8,
        "margin_3_plus": 14.2,
        "level": "watch"
      },
      "winner": "Japan",
      "winner_prob": 54.0,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-21",
        "kickoff_bj": "2026-06-21 12:00",
        "match_id": 2040246,
        "match_num": "周六036",
        "league": "世界杯",
        "home_cn": "突尼斯",
        "away_cn": "日本",
        "total_goals_odds": {
          "0": 11,
          "1": 4.4,
          "2": 3.3,
          "3": 3.6,
          "4": 5.8,
          "5": 10.5,
          "6": 19,
          "7": 29
        },
        "remark": "比赛将在墨西哥-瓜达卢佩举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Tunisia Elo 1696 vs Japan 1924，差距 228 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Tunisia 0.94 : 1.65 Japan，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 12.5%, 1-1 11.7%, 0-2 10.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Japan，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-21",
      "group": "G",
      "city": "Inglewood",
      "country": "United States",
      "home": "Belgium",
      "away": "Iran",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.35,
      "lambda_away": 1.27,
      "home_win": 38.7,
      "draw": 26.3,
      "away_win": 35.1,
      "matrix": [
        [
          7.3,
          9.3,
          5.9,
          2.5,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          9.8,
          12.5,
          7.9,
          3.4,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.6,
          8.4,
          5.3,
          2.3,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          3.0,
          3.8,
          2.4,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.0,
          1.3,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.5
        },
        {
          "score": "1-0",
          "prob": 9.8
        },
        {
          "score": "0-1",
          "prob": 9.3
        },
        {
          "score": "2-1",
          "prob": 8.4
        },
        {
          "score": "1-2",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.3
        },
        {
          "score": "3-1",
          "prob": 3.8
        },
        {
          "score": "1-3",
          "prob": 3.4
        },
        {
          "score": "3-0",
          "prob": 3.0
        },
        {
          "score": "0-3",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "1-4",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-0",
          "prob": 1.0,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-4",
          "prob": 0.8,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.6,
        "margin_3_plus": 11.5,
        "level": "watch"
      },
      "winner": "Belgium",
      "winner_prob": 38.7,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-22",
        "kickoff_bj": "2026-06-22 03:00",
        "match_id": 2040248,
        "match_num": "周日038",
        "league": "世界杯",
        "home_cn": "比利时",
        "away_cn": "伊朗",
        "total_goals_odds": {
          "0": 13,
          "1": 5.4,
          "2": 3.65,
          "3": 3.4,
          "4": 4.9,
          "5": 9,
          "6": 15,
          "7": 24
        },
        "remark": "比赛将在美国-加利福尼亚州英格尔伍德举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Belgium Elo 1924 vs Iran 1849，差距 75 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Belgium 1.35 : 1.27 Iran，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.5%, 1-0 9.8%, 0-1 9.3%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Belgium，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-21",
      "group": "G",
      "city": "Vancouver",
      "country": "Canada",
      "home": "New Zealand",
      "away": "Egypt",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.1,
      "lambda_away": 1.49,
      "home_win": 28.0,
      "draw": 25.9,
      "away_win": 46.1,
      "matrix": [
        [
          7.5,
          11.2,
          8.3,
          4.1,
          1.5,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          8.3,
          12.3,
          9.2,
          4.5,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          4.5,
          6.8,
          5.0,
          2.5,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          1.7,
          2.5,
          1.8,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.7,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.3
        },
        {
          "score": "0-1",
          "prob": 11.2
        },
        {
          "score": "1-2",
          "prob": 9.2
        },
        {
          "score": "0-2",
          "prob": 8.3
        },
        {
          "score": "1-0",
          "prob": 8.3
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.0
        },
        {
          "score": "1-3",
          "prob": 4.5
        },
        {
          "score": "0-3",
          "prob": 4.1
        },
        {
          "score": "2-3",
          "prob": 2.5
        },
        {
          "score": "3-1",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.5,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "1-5",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.8,
        "margin_3_plus": 12.1,
        "level": "watch"
      },
      "winner": "Egypt",
      "winner_prob": 46.1,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-22",
        "kickoff_bj": "2026-06-22 09:00",
        "match_id": 2040250,
        "match_num": "周日040",
        "league": "世界杯",
        "home_cn": "新西兰",
        "away_cn": "埃及",
        "total_goals_odds": {
          "0": 10,
          "1": 4.3,
          "2": 3.2,
          "3": 3.6,
          "4": 6,
          "5": 12,
          "6": 21,
          "7": 30
        },
        "remark": "比赛将在加拿大-温哥华举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "New Zealand Elo 1654 vs Egypt 1776，差距 122 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 New Zealand 1.1 : 1.49 Egypt，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.3%, 0-1 11.2%, 1-2 9.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Egypt，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-21",
      "group": "H",
      "city": "Atlanta",
      "country": "United States",
      "home": "Spain",
      "away": "Saudi Arabia",
      "home_score": null,
      "away_score": null,
      "lambda_home": 2.14,
      "lambda_away": 0.75,
      "home_win": 69.4,
      "draw": 18.8,
      "away_win": 11.7,
      "matrix": [
        [
          5.6,
          4.2,
          1.6,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.0,
          8.9,
          3.3,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.8,
          9.5,
          3.6,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          9.1,
          6.8,
          2.5,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          4.9,
          3.6,
          1.4,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.1,
          1.5,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          0.6,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "2-0",
          "prob": 12.8
        },
        {
          "score": "1-0",
          "prob": 12.0
        },
        {
          "score": "2-1",
          "prob": 9.5
        },
        {
          "score": "3-0",
          "prob": 9.1
        },
        {
          "score": "1-1",
          "prob": 8.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 9.1
        },
        {
          "score": "3-1",
          "prob": 6.8
        },
        {
          "score": "4-0",
          "prob": 4.9
        },
        {
          "score": "2-2",
          "prob": 3.6
        },
        {
          "score": "4-1",
          "prob": 3.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 4.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 3.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "5-0",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 1.5,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 1.4,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "2-3",
          "prob": 0.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "6-0",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 6
        }
      ],
      "big_score_signal": {
        "over_3_5": 32.6,
        "margin_3_plus": 24.7,
        "level": "high"
      },
      "winner": "Spain",
      "winner_prob": 69.4,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-22",
        "kickoff_bj": "2026-06-22 00:00",
        "match_id": 2040247,
        "match_num": "周日037",
        "league": "世界杯",
        "home_cn": "西班牙",
        "away_cn": "沙特阿拉伯",
        "total_goals_odds": {
          "0": 26,
          "1": 7.75,
          "2": 4.5,
          "3": 3.6,
          "4": 4.2,
          "5": 6.3,
          "6": 9.7,
          "7": 11.5
        },
        "remark": "比赛将在美国-佐治亚州亚特兰大举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Spain Elo 2083 vs Saudi Arabia 1668，差距 414 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Spain 2.14 : 0.75 Saudi Arabia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：2-0 12.8%, 1-0 12.0%, 2-1 9.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Spain，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-21",
      "group": "H",
      "city": "Miami Gardens",
      "country": "United States",
      "home": "Uruguay",
      "away": "Cape Verde",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.64,
      "lambda_away": 0.83,
      "home_win": 56.6,
      "draw": 24.6,
      "away_win": 18.9,
      "matrix": [
        [
          8.5,
          7.0,
          2.9,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          13.9,
          11.5,
          4.8,
          1.3,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.4,
          9.4,
          3.9,
          1.1,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          6.2,
          5.2,
          2.1,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.5,
          2.1,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.8,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 13.9
        },
        {
          "score": "1-1",
          "prob": 11.5
        },
        {
          "score": "2-0",
          "prob": 11.4
        },
        {
          "score": "2-1",
          "prob": 9.4
        },
        {
          "score": "0-0",
          "prob": 8.5
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 6.2
        },
        {
          "score": "3-1",
          "prob": 5.2
        },
        {
          "score": "2-2",
          "prob": 3.9
        },
        {
          "score": "4-0",
          "prob": 2.5
        },
        {
          "score": "3-2",
          "prob": 2.1
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 2.5,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-0",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.2,
        "margin_3_plus": 14.5,
        "level": "watch"
      },
      "winner": "Uruguay",
      "winner_prob": 56.6,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": {
        "source": "中国体育彩票官网",
        "ticket_date": "2026-06-22",
        "kickoff_bj": "2026-06-22 06:00",
        "match_id": 2040249,
        "match_num": "周日039",
        "league": "世界杯",
        "home_cn": "乌拉圭",
        "away_cn": "佛得角",
        "total_goals_odds": {
          "0": 8.5,
          "1": 3.9,
          "2": 3.1,
          "3": 3.75,
          "4": 6.5,
          "5": 14,
          "6": 26,
          "7": 36
        },
        "remark": "比赛将在美国-佛罗里达州迈阿密加登斯举行"
      },
      "ai": [
        {
          "title": "实力对比",
          "text": "Uruguay Elo 1893 vs Cape Verde 1635，差距 258 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Uruguay 1.64 : 0.83 Cape Verde，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 13.9%, 1-1 11.5%, 2-0 11.4%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Uruguay，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-22",
      "group": "I",
      "city": "Philadelphia",
      "country": "United States",
      "home": "France",
      "away": "Iraq",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.86,
      "lambda_away": 0.85,
      "home_win": 61.3,
      "draw": 22.1,
      "away_win": 16.6,
      "matrix": [
        [
          6.7,
          5.6,
          2.4,
          0.7,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.4,
          10.5,
          4.4,
          1.3,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.5,
          9.8,
          4.1,
          1.2,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          7.2,
          6.1,
          2.6,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          3.3,
          2.8,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.2,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.4
        },
        {
          "score": "2-0",
          "prob": 11.5
        },
        {
          "score": "1-1",
          "prob": 10.5
        },
        {
          "score": "2-1",
          "prob": 9.8
        },
        {
          "score": "3-0",
          "prob": 7.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 7.2
        },
        {
          "score": "3-1",
          "prob": 6.1
        },
        {
          "score": "2-2",
          "prob": 4.1
        },
        {
          "score": "4-0",
          "prob": 3.3
        },
        {
          "score": "4-1",
          "prob": 2.8
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 3.3,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-0",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "2-3",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "5-1",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.2,
        "margin_3_plus": 18.0,
        "level": "high"
      },
      "winner": "France",
      "winner_prob": 61.3,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "France Elo 2039 vs Iraq 1694，差距 345 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 France 1.86 : 0.85 Iraq，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.4%, 2-0 11.5%, 1-1 10.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 France，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-22",
      "group": "I",
      "city": "East Rutherford",
      "country": "United States",
      "home": "Norway",
      "away": "Senegal",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.23,
      "lambda_away": 1.21,
      "home_win": 36.8,
      "draw": 27.4,
      "away_win": 35.8,
      "matrix": [
        [
          8.7,
          10.6,
          6.4,
          2.6,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          10.7,
          13.0,
          7.8,
          3.2,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          6.6,
          8.0,
          4.8,
          1.9,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          2.7,
          3.3,
          2.0,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.8,
          1.0,
          0.6,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 13.0
        },
        {
          "score": "1-0",
          "prob": 10.7
        },
        {
          "score": "0-1",
          "prob": 10.6
        },
        {
          "score": "0-0",
          "prob": 8.7
        },
        {
          "score": "2-1",
          "prob": 8.0
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.8
        },
        {
          "score": "3-1",
          "prob": 3.3
        },
        {
          "score": "1-3",
          "prob": 3.2
        },
        {
          "score": "3-0",
          "prob": 2.7
        },
        {
          "score": "0-3",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-1",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-4",
          "prob": 0.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-0",
          "prob": 0.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.6,
        "margin_3_plus": 10.0,
        "level": "watch"
      },
      "winner": "Norway",
      "winner_prob": 36.8,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Norway Elo 1872 vs Senegal 1844，差距 28 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Norway 1.23 : 1.21 Senegal，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 13.0%, 1-0 10.7%, 0-1 10.6%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Norway，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-22",
      "group": "J",
      "city": "Arlington",
      "country": "United States",
      "home": "Argentina",
      "away": "Austria",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.82,
      "lambda_away": 0.97,
      "home_win": 57.2,
      "draw": 22.9,
      "away_win": 19.9,
      "matrix": [
        [
          6.2,
          6.0,
          2.9,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.2,
          10.9,
          5.3,
          1.7,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.2,
          9.9,
          4.8,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          6.2,
          6.0,
          2.9,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.8,
          2.7,
          1.3,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.0,
          1.0,
          0.5,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 11.2
        },
        {
          "score": "1-1",
          "prob": 10.9
        },
        {
          "score": "2-0",
          "prob": 10.2
        },
        {
          "score": "2-1",
          "prob": 9.9
        },
        {
          "score": "0-0",
          "prob": 6.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 6.2
        },
        {
          "score": "3-1",
          "prob": 6.0
        },
        {
          "score": "2-2",
          "prob": 4.8
        },
        {
          "score": "3-2",
          "prob": 2.9
        },
        {
          "score": "4-0",
          "prob": 2.8
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 2.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.3,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-1",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 30.1,
        "margin_3_plus": 16.8,
        "level": "high"
      },
      "winner": "Argentina",
      "winner_prob": 57.2,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Argentina Elo 2110 vs Austria 1867，差距 242 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Argentina 1.82 : 0.97 Austria，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 11.2%, 1-1 10.9%, 2-0 10.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Argentina，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-22",
      "group": "J",
      "city": "Santa Clara",
      "country": "United States",
      "home": "Jordan",
      "away": "Algeria",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.93,
      "lambda_away": 1.46,
      "home_win": 24.1,
      "draw": 26.5,
      "away_win": 49.4,
      "matrix": [
        [
          9.1,
          13.3,
          9.7,
          4.7,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          8.5,
          12.4,
          9.1,
          4.4,
          1.6,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          4.0,
          5.8,
          4.2,
          2.1,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          1.2,
          1.8,
          1.3,
          0.6,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.4,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 13.3
        },
        {
          "score": "1-1",
          "prob": 12.4
        },
        {
          "score": "0-2",
          "prob": 9.7
        },
        {
          "score": "0-0",
          "prob": 9.1
        },
        {
          "score": "1-2",
          "prob": 9.1
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 4.7
        },
        {
          "score": "1-3",
          "prob": 4.4
        },
        {
          "score": "2-2",
          "prob": 4.2
        },
        {
          "score": "2-3",
          "prob": 2.1
        },
        {
          "score": "3-1",
          "prob": 1.8
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-4",
          "prob": 1.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 1.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-5",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "0-5",
          "prob": 0.5,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 21.9,
        "margin_3_plus": 11.7,
        "level": "watch"
      },
      "winner": "Algeria",
      "winner_prob": 49.4,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Jordan Elo 1689 vs Algeria 1854，差距 165 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Jordan 0.93 : 1.46 Algeria，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 13.3%, 1-1 12.4%, 0-2 9.7%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Algeria，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-23",
      "group": "K",
      "city": "Houston",
      "country": "United States",
      "home": "Portugal",
      "away": "Uzbekistan",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.65,
      "lambda_away": 0.99,
      "home_win": 52.8,
      "draw": 24.6,
      "away_win": 22.7,
      "matrix": [
        [
          7.2,
          7.1,
          3.5,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.8,
          11.7,
          5.8,
          1.9,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          9.7,
          9.6,
          4.7,
          1.6,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          5.3,
          5.3,
          2.6,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.2,
          2.2,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          0.7,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 11.8
        },
        {
          "score": "1-1",
          "prob": 11.7
        },
        {
          "score": "2-0",
          "prob": 9.7
        },
        {
          "score": "2-1",
          "prob": 9.6
        },
        {
          "score": "0-0",
          "prob": 7.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 5.3
        },
        {
          "score": "3-1",
          "prob": 5.3
        },
        {
          "score": "2-2",
          "prob": 4.7
        },
        {
          "score": "3-2",
          "prob": 2.6
        },
        {
          "score": "4-0",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 2.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 1.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.1,
        "margin_3_plus": 14.3,
        "level": "watch"
      },
      "winner": "Portugal",
      "winner_prob": 52.8,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Portugal Elo 1979 vs Uzbekistan 1752，差距 227 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Portugal 1.65 : 0.99 Uzbekistan，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 11.8%, 1-1 11.7%, 2-0 9.7%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Portugal，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-23",
      "group": "K",
      "city": "Zapopan",
      "country": "Mexico",
      "home": "Colombia",
      "away": "DR Congo",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.61,
      "lambda_away": 0.86,
      "home_win": 55.0,
      "draw": 24.9,
      "away_win": 20.1,
      "matrix": [
        [
          8.4,
          7.3,
          3.1,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          13.5,
          11.7,
          5.1,
          1.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.9,
          9.4,
          4.1,
          1.2,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          5.9,
          5.1,
          2.2,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.4,
          2.0,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.8,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 13.5
        },
        {
          "score": "1-1",
          "prob": 11.7
        },
        {
          "score": "2-0",
          "prob": 10.9
        },
        {
          "score": "2-1",
          "prob": 9.4
        },
        {
          "score": "0-0",
          "prob": 8.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 5.9
        },
        {
          "score": "3-1",
          "prob": 5.1
        },
        {
          "score": "2-2",
          "prob": 4.1
        },
        {
          "score": "4-0",
          "prob": 2.4
        },
        {
          "score": "3-2",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 2.4,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-2",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-0",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.8,
        "margin_3_plus": 14.1,
        "level": "watch"
      },
      "winner": "Colombia",
      "winner_prob": 55.0,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Colombia Elo 1993 vs DR Congo 1693，差距 300 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Colombia 1.61 : 0.86 DR Congo，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 13.5%, 1-1 11.7%, 2-0 10.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Colombia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-23",
      "group": "L",
      "city": "Foxborough",
      "country": "United States",
      "home": "England",
      "away": "Ghana",
      "home_score": null,
      "away_score": null,
      "lambda_home": 2.1,
      "lambda_away": 0.79,
      "home_win": 67.7,
      "draw": 19.4,
      "away_win": 12.9,
      "matrix": [
        [
          5.5,
          4.4,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.7,
          9.2,
          3.6,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.2,
          9.7,
          3.8,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          8.6,
          6.8,
          2.7,
          0.7,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          4.5,
          3.6,
          1.4,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.9,
          1.5,
          0.6,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "2-0",
          "prob": 12.2
        },
        {
          "score": "1-0",
          "prob": 11.7
        },
        {
          "score": "2-1",
          "prob": 9.7
        },
        {
          "score": "1-1",
          "prob": 9.2
        },
        {
          "score": "3-0",
          "prob": 8.6
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 8.6
        },
        {
          "score": "3-1",
          "prob": 6.8
        },
        {
          "score": "4-0",
          "prob": 4.5
        },
        {
          "score": "2-2",
          "prob": 3.8
        },
        {
          "score": "4-1",
          "prob": 3.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 4.5,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 3.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "5-0",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 1.5,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 1.4,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "2-3",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "6-0",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 6
        }
      ],
      "big_score_signal": {
        "over_3_5": 32.9,
        "margin_3_plus": 23.6,
        "level": "high"
      },
      "winner": "England",
      "winner_prob": 67.7,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "England Elo 1990 vs Ghana 1615，差距 374 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 England 2.1 : 0.79 Ghana，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：2-0 12.2%, 1-0 11.7%, 2-1 9.7%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 England，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-23",
      "group": "L",
      "city": "Toronto",
      "country": "Canada",
      "home": "Panama",
      "away": "Croatia",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.93,
      "lambda_away": 1.6,
      "home_win": 22.0,
      "draw": 25.0,
      "away_win": 53.1,
      "matrix": [
        [
          7.9,
          12.7,
          10.2,
          5.4,
          2.2,
          0.7,
          0.2,
          0.0,
          0.0
        ],
        [
          7.4,
          11.8,
          9.5,
          5.1,
          2.0,
          0.7,
          0.2,
          0.0,
          0.0
        ],
        [
          3.4,
          5.5,
          4.4,
          2.4,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          1.1,
          1.7,
          1.4,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.4,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 12.7
        },
        {
          "score": "1-1",
          "prob": 11.8
        },
        {
          "score": "0-2",
          "prob": 10.2
        },
        {
          "score": "1-2",
          "prob": 9.5
        },
        {
          "score": "0-0",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 5.4
        },
        {
          "score": "1-3",
          "prob": 5.1
        },
        {
          "score": "2-2",
          "prob": 4.4
        },
        {
          "score": "2-3",
          "prob": 2.4
        },
        {
          "score": "0-4",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-4",
          "prob": 2.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "1-5",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-5",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.0,
        "margin_3_plus": 13.8,
        "level": "watch"
      },
      "winner": "Croatia",
      "winner_prob": 53.1,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Panama Elo 1738 vs Croatia 1901，差距 163 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Panama 0.93 : 1.6 Croatia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 12.7%, 1-1 11.8%, 0-2 10.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Croatia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-24",
      "group": "A",
      "city": "Mexico City",
      "country": "Mexico",
      "home": "Mexico",
      "away": "Czechia",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.54,
      "lambda_away": 1.05,
      "home_win": 48.5,
      "draw": 25.6,
      "away_win": 25.9,
      "matrix": [
        [
          7.5,
          7.9,
          4.2,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.6,
          12.1,
          6.4,
          2.2,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          8.9,
          9.3,
          4.9,
          1.7,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.6,
          4.8,
          2.5,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.7,
          1.8,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.1
        },
        {
          "score": "1-0",
          "prob": 11.6
        },
        {
          "score": "2-1",
          "prob": 9.3
        },
        {
          "score": "2-0",
          "prob": 8.9
        },
        {
          "score": "0-1",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.9
        },
        {
          "score": "3-1",
          "prob": 4.8
        },
        {
          "score": "3-0",
          "prob": 4.6
        },
        {
          "score": "3-2",
          "prob": 2.5
        },
        {
          "score": "1-3",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 1.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 0.6,
          "total_goals": 5,
          "margin": 3
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.6,
        "margin_3_plus": 12.6,
        "level": "watch"
      },
      "winner": "Mexico",
      "winner_prob": 48.5,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Mexico Elo 1935 vs Czechia 1759，差距 175 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Mexico 1.54 : 1.05 Czechia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.1%, 1-0 11.6%, 2-1 9.3%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Mexico，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-24",
      "group": "A",
      "city": "Guadalupe",
      "country": "Mexico",
      "home": "South Africa",
      "away": "Korea Republic",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.91,
      "lambda_away": 1.57,
      "home_win": 21.7,
      "draw": 25.3,
      "away_win": 53.0,
      "matrix": [
        [
          8.4,
          13.2,
          10.4,
          5.4,
          2.1,
          0.7,
          0.2,
          0.0,
          0.0
        ],
        [
          7.6,
          11.9,
          9.4,
          4.9,
          1.9,
          0.6,
          0.2,
          0.0,
          0.0
        ],
        [
          3.4,
          5.4,
          4.3,
          2.2,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          1.0,
          1.6,
          1.3,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.4,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 13.2
        },
        {
          "score": "1-1",
          "prob": 11.9
        },
        {
          "score": "0-2",
          "prob": 10.4
        },
        {
          "score": "1-2",
          "prob": 9.4
        },
        {
          "score": "0-0",
          "prob": 8.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 5.4
        },
        {
          "score": "1-3",
          "prob": 4.9
        },
        {
          "score": "2-2",
          "prob": 4.3
        },
        {
          "score": "2-3",
          "prob": 2.2
        },
        {
          "score": "0-4",
          "prob": 2.1
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-4",
          "prob": 2.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-5",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "1-5",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.8,
        "margin_3_plus": 13.3,
        "level": "watch"
      },
      "winner": "Korea Republic",
      "winner_prob": 53.0,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "South Africa Elo 1631 vs Korea Republic 1830，差距 199 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 South Africa 0.91 : 1.57 Korea Republic，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 13.2%, 1-1 11.9%, 0-2 10.4%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Korea Republic，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-24",
      "group": "B",
      "city": "Vancouver",
      "country": "Canada",
      "home": "Canada",
      "away": "Switzerland",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.15,
      "lambda_away": 1.3,
      "home_win": 32.9,
      "draw": 27.2,
      "away_win": 39.9,
      "matrix": [
        [
          8.6,
          11.2,
          7.3,
          3.1,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          9.9,
          12.9,
          8.4,
          3.6,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          5.7,
          7.4,
          4.8,
          2.1,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.2,
          2.9,
          1.9,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.8,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.9
        },
        {
          "score": "0-1",
          "prob": 11.2
        },
        {
          "score": "1-0",
          "prob": 9.9
        },
        {
          "score": "0-0",
          "prob": 8.6
        },
        {
          "score": "1-2",
          "prob": 8.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.8
        },
        {
          "score": "1-3",
          "prob": 3.6
        },
        {
          "score": "0-3",
          "prob": 3.1
        },
        {
          "score": "3-1",
          "prob": 2.9
        },
        {
          "score": "3-0",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.0,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-4",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "4-0",
          "prob": 0.6,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.1,
        "margin_3_plus": 10.3,
        "level": "watch"
      },
      "winner": "Switzerland",
      "winner_prob": 39.9,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Canada Elo 1836 vs Switzerland 1882，差距 47 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Canada 1.15 : 1.3 Switzerland，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.9%, 0-1 11.2%, 1-0 9.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Switzerland，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-24",
      "group": "B",
      "city": "Seattle",
      "country": "United States",
      "home": "Bosnia and Herzegovina",
      "away": "Qatar",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.26,
      "lambda_away": 1.14,
      "home_win": 39.2,
      "draw": 27.6,
      "away_win": 33.2,
      "matrix": [
        [
          9.1,
          10.3,
          5.9,
          2.2,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.4,
          13.0,
          7.4,
          2.8,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          7.2,
          8.2,
          4.7,
          1.8,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.0,
          3.5,
          2.0,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.0,
          1.1,
          0.6,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 13.0
        },
        {
          "score": "1-0",
          "prob": 11.4
        },
        {
          "score": "0-1",
          "prob": 10.3
        },
        {
          "score": "0-0",
          "prob": 9.1
        },
        {
          "score": "2-1",
          "prob": 8.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.7
        },
        {
          "score": "3-1",
          "prob": 3.5
        },
        {
          "score": "3-0",
          "prob": 3.0
        },
        {
          "score": "1-3",
          "prob": 2.8
        },
        {
          "score": "0-3",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.0,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-2",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-4",
          "prob": 0.6,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.0,
        "margin_3_plus": 10.0,
        "level": "watch"
      },
      "winner": "Bosnia and Herzegovina",
      "winner_prob": 39.2,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Bosnia and Herzegovina Elo 1625 vs Qatar 1566，差距 59 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Bosnia and Herzegovina 1.26 : 1.14 Qatar，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 13.0%, 1-0 11.4%, 0-1 10.3%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Bosnia and Herzegovina，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-24",
      "group": "C",
      "city": "Miami Gardens",
      "country": "United States",
      "home": "Scotland",
      "away": "Brazil",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.94,
      "lambda_away": 1.82,
      "home_win": 19.1,
      "draw": 22.7,
      "away_win": 58.1,
      "matrix": [
        [
          6.3,
          11.5,
          10.5,
          6.4,
          2.9,
          1.1,
          0.3,
          0.1,
          0.0
        ],
        [
          5.9,
          10.8,
          9.9,
          6.0,
          2.7,
          1.0,
          0.3,
          0.1,
          0.0
        ],
        [
          2.8,
          5.1,
          4.6,
          2.8,
          1.3,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          0.9,
          1.6,
          1.5,
          0.9,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.4,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 11.5
        },
        {
          "score": "1-1",
          "prob": 10.8
        },
        {
          "score": "0-2",
          "prob": 10.5
        },
        {
          "score": "1-2",
          "prob": 9.9
        },
        {
          "score": "0-3",
          "prob": 6.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 6.4
        },
        {
          "score": "1-3",
          "prob": 6.0
        },
        {
          "score": "2-2",
          "prob": 4.6
        },
        {
          "score": "0-4",
          "prob": 2.9
        },
        {
          "score": "2-3",
          "prob": 2.8
        }
      ],
      "bold_score_candidates": [
        {
          "score": "0-4",
          "prob": 2.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.3,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-5",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "1-5",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 29.7,
        "margin_3_plus": 17.2,
        "level": "high"
      },
      "winner": "Brazil",
      "winner_prob": 58.1,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Scotland Elo 1761 vs Brazil 2001，差距 240 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Scotland 0.94 : 1.82 Brazil，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 11.5%, 1-1 10.8%, 0-2 10.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Brazil，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-24",
      "group": "C",
      "city": "Atlanta",
      "country": "United States",
      "home": "Morocco",
      "away": "Haiti",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.74,
      "lambda_away": 0.85,
      "home_win": 58.6,
      "draw": 23.4,
      "away_win": 18.0,
      "matrix": [
        [
          7.5,
          6.4,
          2.7,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          13.1,
          11.1,
          4.7,
          1.3,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.4,
          9.7,
          4.1,
          1.2,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          6.6,
          5.6,
          2.4,
          0.7,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.9,
          2.4,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.0,
          0.9,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 13.1
        },
        {
          "score": "2-0",
          "prob": 11.4
        },
        {
          "score": "1-1",
          "prob": 11.1
        },
        {
          "score": "2-1",
          "prob": 9.7
        },
        {
          "score": "0-0",
          "prob": 7.5
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 6.6
        },
        {
          "score": "3-1",
          "prob": 5.6
        },
        {
          "score": "2-2",
          "prob": 4.1
        },
        {
          "score": "4-0",
          "prob": 2.9
        },
        {
          "score": "3-2",
          "prob": 2.4
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 2.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-0",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.0,
        "margin_3_plus": 16.3,
        "level": "watch"
      },
      "winner": "Morocco",
      "winner_prob": 58.6,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Morocco Elo 1935 vs Haiti 1625，差距 310 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Morocco 1.74 : 0.85 Haiti，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 13.1%, 2-0 11.4%, 1-1 11.1%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Morocco，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-25",
      "group": "D",
      "city": "Inglewood",
      "country": "United States",
      "home": "USA",
      "away": "Turkey",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.23,
      "lambda_away": 1.23,
      "home_win": 36.4,
      "draw": 27.3,
      "away_win": 36.3,
      "matrix": [
        [
          8.6,
          10.5,
          6.5,
          2.6,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          10.6,
          12.9,
          7.9,
          3.2,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          6.5,
          7.9,
          4.9,
          2.0,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          2.7,
          3.3,
          2.0,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.8,
          1.0,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.9
        },
        {
          "score": "1-0",
          "prob": 10.6
        },
        {
          "score": "0-1",
          "prob": 10.5
        },
        {
          "score": "0-0",
          "prob": 8.6
        },
        {
          "score": "1-2",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.9
        },
        {
          "score": "3-1",
          "prob": 3.3
        },
        {
          "score": "1-3",
          "prob": 3.2
        },
        {
          "score": "3-0",
          "prob": 2.7
        },
        {
          "score": "0-3",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-1",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-4",
          "prob": 0.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-0",
          "prob": 0.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.0,
        "margin_3_plus": 10.1,
        "level": "watch"
      },
      "winner": "USA",
      "winner_prob": 36.4,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "USA Elo 1832 vs Turkey 1845，差距 13 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 USA 1.23 : 1.23 Turkey，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.9%, 1-0 10.6%, 0-1 10.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 USA，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-25",
      "group": "D",
      "city": "Santa Clara",
      "country": "United States",
      "home": "Paraguay",
      "away": "Australia",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.14,
      "lambda_away": 1.39,
      "home_win": 30.7,
      "draw": 26.5,
      "away_win": 42.8,
      "matrix": [
        [
          7.9,
          11.1,
          7.7,
          3.6,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          9.0,
          12.6,
          8.8,
          4.1,
          1.4,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          5.2,
          7.2,
          5.0,
          2.3,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          2.0,
          2.7,
          1.9,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.8,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.6
        },
        {
          "score": "0-1",
          "prob": 11.1
        },
        {
          "score": "1-0",
          "prob": 9.0
        },
        {
          "score": "1-2",
          "prob": 8.8
        },
        {
          "score": "0-0",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.0
        },
        {
          "score": "1-3",
          "prob": 4.1
        },
        {
          "score": "0-3",
          "prob": 3.6
        },
        {
          "score": "3-1",
          "prob": 2.7
        },
        {
          "score": "2-3",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "4-1",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 0.6,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.7,
        "margin_3_plus": 11.2,
        "level": "watch"
      },
      "winner": "Australia",
      "winner_prob": 42.8,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Paraguay Elo 1819 vs Australia 1819，差距 0 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Paraguay 1.14 : 1.39 Australia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.6%, 0-1 11.1%, 1-0 9.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Australia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-25",
      "group": "E",
      "city": "Philadelphia",
      "country": "United States",
      "home": "Curaçao",
      "away": "Ivory Coast",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.9,
      "lambda_away": 1.79,
      "home_win": 18.6,
      "draw": 23.0,
      "away_win": 58.4,
      "matrix": [
        [
          6.7,
          12.1,
          10.9,
          6.5,
          2.9,
          1.0,
          0.3,
          0.1,
          0.0
        ],
        [
          6.1,
          10.9,
          9.8,
          5.9,
          2.6,
          0.9,
          0.3,
          0.1,
          0.0
        ],
        [
          2.7,
          4.9,
          4.4,
          2.6,
          1.2,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          0.8,
          1.5,
          1.3,
          0.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.3,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 12.1
        },
        {
          "score": "0-2",
          "prob": 10.9
        },
        {
          "score": "1-1",
          "prob": 10.9
        },
        {
          "score": "1-2",
          "prob": 9.8
        },
        {
          "score": "0-0",
          "prob": 6.7
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 6.5
        },
        {
          "score": "1-3",
          "prob": 5.9
        },
        {
          "score": "2-2",
          "prob": 4.4
        },
        {
          "score": "0-4",
          "prob": 2.9
        },
        {
          "score": "1-4",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "0-4",
          "prob": 2.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-5",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "1-5",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.2,
        "margin_3_plus": 16.7,
        "level": "high"
      },
      "winner": "Ivory Coast",
      "winner_prob": 58.4,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Curaçao Elo 1529 vs Ivory Coast 1806，差距 278 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Curaçao 0.9 : 1.79 Ivory Coast，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 12.1%, 0-2 10.9%, 1-1 10.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Ivory Coast，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-25",
      "group": "E",
      "city": "East Rutherford",
      "country": "United States",
      "home": "Ecuador",
      "away": "Germany",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.07,
      "lambda_away": 1.55,
      "home_win": 26.3,
      "draw": 25.4,
      "away_win": 48.3,
      "matrix": [
        [
          7.2,
          11.2,
          8.7,
          4.5,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          7.8,
          12.1,
          9.4,
          4.8,
          1.9,
          0.6,
          0.2,
          0.0,
          0.0
        ],
        [
          4.2,
          6.5,
          5.0,
          2.6,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          1.5,
          2.3,
          1.8,
          0.9,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.6,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.1
        },
        {
          "score": "0-1",
          "prob": 11.2
        },
        {
          "score": "1-2",
          "prob": 9.4
        },
        {
          "score": "0-2",
          "prob": 8.7
        },
        {
          "score": "1-0",
          "prob": 7.8
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.0
        },
        {
          "score": "1-3",
          "prob": 4.8
        },
        {
          "score": "0-3",
          "prob": 4.5
        },
        {
          "score": "2-3",
          "prob": 2.6
        },
        {
          "score": "3-1",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-4",
          "prob": 1.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-5",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 0.6,
          "total_goals": 5,
          "margin": 3
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.6,
        "margin_3_plus": 12.7,
        "level": "watch"
      },
      "winner": "Germany",
      "winner_prob": 48.3,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Ecuador Elo 1912 vs Germany 1957，差距 44 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Ecuador 1.07 : 1.55 Germany，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.1%, 0-1 11.2%, 1-2 9.4%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Germany，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-25",
      "group": "F",
      "city": "Arlington",
      "country": "United States",
      "home": "Japan",
      "away": "Sweden",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.57,
      "lambda_away": 1.15,
      "home_win": 47.0,
      "draw": 25.1,
      "away_win": 27.9,
      "matrix": [
        [
          6.6,
          7.6,
          4.4,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.4,
          11.9,
          6.8,
          2.6,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          8.1,
          9.3,
          5.4,
          2.1,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.2,
          4.9,
          2.8,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.7,
          1.9,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 11.9
        },
        {
          "score": "1-0",
          "prob": 10.4
        },
        {
          "score": "2-1",
          "prob": 9.3
        },
        {
          "score": "2-0",
          "prob": 8.1
        },
        {
          "score": "0-1",
          "prob": 7.6
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.4
        },
        {
          "score": "3-1",
          "prob": 4.9
        },
        {
          "score": "3-0",
          "prob": 4.2
        },
        {
          "score": "3-2",
          "prob": 2.8
        },
        {
          "score": "1-3",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "5-1",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.7,
        "margin_3_plus": 13.0,
        "level": "high"
      },
      "winner": "Japan",
      "winner_prob": 47.0,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Japan Elo 1924 vs Sweden 1772，差距 152 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Japan 1.57 : 1.15 Sweden，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 11.9%, 1-0 10.4%, 2-1 9.3%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Japan，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-25",
      "group": "F",
      "city": "Kansas City",
      "country": "United States",
      "home": "Tunisia",
      "away": "Netherlands",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.92,
      "lambda_away": 1.75,
      "home_win": 19.7,
      "draw": 23.5,
      "away_win": 56.8,
      "matrix": [
        [
          6.9,
          12.1,
          10.6,
          6.2,
          2.7,
          0.9,
          0.3,
          0.1,
          0.0
        ],
        [
          6.4,
          11.2,
          9.8,
          5.7,
          2.5,
          0.9,
          0.3,
          0.1,
          0.0
        ],
        [
          2.9,
          5.1,
          4.5,
          2.6,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          0.9,
          1.6,
          1.4,
          0.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.4,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 12.1
        },
        {
          "score": "1-1",
          "prob": 11.2
        },
        {
          "score": "0-2",
          "prob": 10.6
        },
        {
          "score": "1-2",
          "prob": 9.8
        },
        {
          "score": "0-0",
          "prob": 6.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 6.2
        },
        {
          "score": "1-3",
          "prob": 5.7
        },
        {
          "score": "2-2",
          "prob": 4.5
        },
        {
          "score": "0-4",
          "prob": 2.7
        },
        {
          "score": "2-3",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "0-4",
          "prob": 2.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "1-5",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "0-5",
          "prob": 0.9,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.9,
        "margin_3_plus": 16.2,
        "level": "watch"
      },
      "winner": "Netherlands",
      "winner_prob": 56.8,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Tunisia Elo 1696 vs Netherlands 1935，差距 239 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Tunisia 0.92 : 1.75 Netherlands，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 12.1%, 1-1 11.2%, 0-2 10.6%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Netherlands，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-26",
      "group": "G",
      "city": "Seattle",
      "country": "United States",
      "home": "Egypt",
      "away": "Iran",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.09,
      "lambda_away": 1.41,
      "home_win": 29.3,
      "draw": 26.6,
      "away_win": 44.1,
      "matrix": [
        [
          8.2,
          11.5,
          8.1,
          3.8,
          1.3,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          9.0,
          12.6,
          8.9,
          4.2,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          4.9,
          6.9,
          4.9,
          2.3,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          1.8,
          2.5,
          1.8,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.7,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.6
        },
        {
          "score": "0-1",
          "prob": 11.5
        },
        {
          "score": "1-0",
          "prob": 9.0
        },
        {
          "score": "1-2",
          "prob": 8.9
        },
        {
          "score": "0-0",
          "prob": 8.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.9
        },
        {
          "score": "1-3",
          "prob": 4.2
        },
        {
          "score": "0-3",
          "prob": 3.8
        },
        {
          "score": "3-1",
          "prob": 2.5
        },
        {
          "score": "2-3",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.3,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.2,
        "margin_3_plus": 11.3,
        "level": "watch"
      },
      "winner": "Iran",
      "winner_prob": 44.1,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Egypt Elo 1776 vs Iran 1849，差距 73 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Egypt 1.09 : 1.41 Iran，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.6%, 0-1 11.5%, 1-0 9.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Iran，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-26",
      "group": "G",
      "city": "Vancouver",
      "country": "Canada",
      "home": "New Zealand",
      "away": "Belgium",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.99,
      "lambda_away": 1.83,
      "home_win": 20.2,
      "draw": 22.7,
      "away_win": 57.0,
      "matrix": [
        [
          5.9,
          10.8,
          9.9,
          6.1,
          2.8,
          1.0,
          0.3,
          0.1,
          0.0
        ],
        [
          5.9,
          10.8,
          9.9,
          6.0,
          2.8,
          1.0,
          0.3,
          0.1,
          0.0
        ],
        [
          2.9,
          5.4,
          4.9,
          3.0,
          1.4,
          0.5,
          0.2,
          0.0,
          0.0
        ],
        [
          1.0,
          1.8,
          1.6,
          1.0,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          0.2,
          0.4,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 10.8
        },
        {
          "score": "1-1",
          "prob": 10.8
        },
        {
          "score": "0-2",
          "prob": 9.9
        },
        {
          "score": "1-2",
          "prob": 9.9
        },
        {
          "score": "0-3",
          "prob": 6.1
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 6.1
        },
        {
          "score": "1-3",
          "prob": 6.0
        },
        {
          "score": "2-2",
          "prob": 4.9
        },
        {
          "score": "2-3",
          "prob": 3.0
        },
        {
          "score": "0-4",
          "prob": 2.8
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 3.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 2.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-2",
          "prob": 1.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.4,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "1-5",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-5",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 31.1,
        "margin_3_plus": 17.1,
        "level": "high"
      },
      "winner": "Belgium",
      "winner_prob": 57.0,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "New Zealand Elo 1654 vs Belgium 1924，差距 270 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 New Zealand 0.99 : 1.83 Belgium，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 10.8%, 1-1 10.8%, 0-2 9.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Belgium，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-26",
      "group": "H",
      "city": "Houston",
      "country": "United States",
      "home": "Cape Verde",
      "away": "Saudi Arabia",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.04,
      "lambda_away": 1.26,
      "home_win": 30.5,
      "draw": 28.1,
      "away_win": 41.4,
      "matrix": [
        [
          10.0,
          12.6,
          8.0,
          3.3,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          10.4,
          13.1,
          8.3,
          3.5,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          5.4,
          6.8,
          4.3,
          1.8,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.9,
          2.4,
          1.5,
          0.6,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.6,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 13.1
        },
        {
          "score": "0-1",
          "prob": 12.6
        },
        {
          "score": "1-0",
          "prob": 10.4
        },
        {
          "score": "0-0",
          "prob": 10.0
        },
        {
          "score": "1-2",
          "prob": 8.3
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.3
        },
        {
          "score": "1-3",
          "prob": 3.5
        },
        {
          "score": "0-3",
          "prob": 3.3
        },
        {
          "score": "3-1",
          "prob": 2.4
        },
        {
          "score": "3-0",
          "prob": 1.9
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 0.5,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 20.2,
        "margin_3_plus": 9.7,
        "level": "watch"
      },
      "winner": "Saudi Arabia",
      "winner_prob": 41.4,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Cape Verde Elo 1635 vs Saudi Arabia 1668，差距 33 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Cape Verde 1.04 : 1.26 Saudi Arabia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 13.1%, 0-1 12.6%, 1-0 10.4%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Saudi Arabia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-26",
      "group": "H",
      "city": "Zapopan",
      "country": "Mexico",
      "home": "Uruguay",
      "away": "Spain",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.97,
      "lambda_away": 1.7,
      "home_win": 21.4,
      "draw": 24.0,
      "away_win": 54.6,
      "matrix": [
        [
          6.9,
          11.8,
          10.0,
          5.7,
          2.4,
          0.8,
          0.2,
          0.1,
          0.0
        ],
        [
          6.7,
          11.4,
          9.7,
          5.5,
          2.3,
          0.8,
          0.2,
          0.1,
          0.0
        ],
        [
          3.2,
          5.5,
          4.7,
          2.7,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          1.0,
          1.8,
          1.5,
          0.9,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.4,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 11.8
        },
        {
          "score": "1-1",
          "prob": 11.4
        },
        {
          "score": "0-2",
          "prob": 10.0
        },
        {
          "score": "1-2",
          "prob": 9.7
        },
        {
          "score": "0-0",
          "prob": 6.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 5.7
        },
        {
          "score": "1-3",
          "prob": 5.5
        },
        {
          "score": "2-2",
          "prob": 4.7
        },
        {
          "score": "2-3",
          "prob": 2.7
        },
        {
          "score": "0-4",
          "prob": 2.4
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-4",
          "prob": 2.4,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-5",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "0-5",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.7,
        "margin_3_plus": 15.0,
        "level": "watch"
      },
      "winner": "Spain",
      "winner_prob": 54.6,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Uruguay Elo 1893 vs Spain 2083，差距 189 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Uruguay 0.97 : 1.7 Spain，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 11.8%, 1-1 11.4%, 0-2 10.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Spain，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-26",
      "group": "I",
      "city": "Foxborough",
      "country": "United States",
      "home": "Norway",
      "away": "France",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.04,
      "lambda_away": 1.67,
      "home_win": 23.5,
      "draw": 24.3,
      "away_win": 52.1,
      "matrix": [
        [
          6.7,
          11.2,
          9.3,
          5.2,
          2.2,
          0.7,
          0.2,
          0.0,
          0.0
        ],
        [
          6.9,
          11.6,
          9.6,
          5.4,
          2.2,
          0.7,
          0.2,
          0.0,
          0.0
        ],
        [
          3.6,
          6.0,
          5.0,
          2.8,
          1.2,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          1.2,
          2.1,
          1.7,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.5,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 11.6
        },
        {
          "score": "0-1",
          "prob": 11.2
        },
        {
          "score": "1-2",
          "prob": 9.6
        },
        {
          "score": "0-2",
          "prob": 9.3
        },
        {
          "score": "1-0",
          "prob": 6.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "1-3",
          "prob": 5.4
        },
        {
          "score": "0-3",
          "prob": 5.2
        },
        {
          "score": "2-2",
          "prob": 5.0
        },
        {
          "score": "2-3",
          "prob": 2.8
        },
        {
          "score": "0-4",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 2.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-2",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-5",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "0-5",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.3,
        "margin_3_plus": 14.2,
        "level": "high"
      },
      "winner": "France",
      "winner_prob": 52.1,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Norway Elo 1872 vs France 2039，差距 167 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Norway 1.04 : 1.67 France，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 11.6%, 0-1 11.2%, 1-2 9.6%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 France，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-26",
      "group": "I",
      "city": "Toronto",
      "country": "Canada",
      "home": "Senegal",
      "away": "Iraq",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.35,
      "lambda_away": 1.0,
      "home_win": 44.7,
      "draw": 27.4,
      "away_win": 27.9,
      "matrix": [
        [
          9.5,
          9.5,
          4.8,
          1.6,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          12.8,
          12.9,
          6.5,
          2.2,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          8.7,
          8.7,
          4.4,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.9,
          3.9,
          2.0,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.3,
          1.3,
          0.7,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.9
        },
        {
          "score": "1-0",
          "prob": 12.8
        },
        {
          "score": "0-0",
          "prob": 9.5
        },
        {
          "score": "0-1",
          "prob": 9.5
        },
        {
          "score": "2-0",
          "prob": 8.7
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.4
        },
        {
          "score": "3-0",
          "prob": 3.9
        },
        {
          "score": "3-1",
          "prob": 3.9
        },
        {
          "score": "1-3",
          "prob": 2.2
        },
        {
          "score": "3-2",
          "prob": 2.0
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.3,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 0.5,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "5-1",
          "prob": 0.4,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 21.4,
        "margin_3_plus": 10.5,
        "level": "watch"
      },
      "winner": "Senegal",
      "winner_prob": 44.7,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Senegal Elo 1844 vs Iraq 1694，差距 150 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Senegal 1.35 : 1.0 Iraq，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.9%, 1-0 12.8%, 0-0 9.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Senegal，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-27",
      "group": "J",
      "city": "Kansas City",
      "country": "United States",
      "home": "Algeria",
      "away": "Austria",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.26,
      "lambda_away": 1.29,
      "home_win": 36.1,
      "draw": 26.7,
      "away_win": 37.2,
      "matrix": [
        [
          7.8,
          10.1,
          6.5,
          2.8,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          9.9,
          12.7,
          8.2,
          3.5,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.2,
          8.0,
          5.2,
          2.2,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.6,
          3.4,
          2.2,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.8,
          1.1,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.7
        },
        {
          "score": "0-1",
          "prob": 10.1
        },
        {
          "score": "1-0",
          "prob": 9.9
        },
        {
          "score": "1-2",
          "prob": 8.2
        },
        {
          "score": "2-1",
          "prob": 8.0
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.2
        },
        {
          "score": "1-3",
          "prob": 3.5
        },
        {
          "score": "3-1",
          "prob": 3.4
        },
        {
          "score": "0-3",
          "prob": 2.8
        },
        {
          "score": "3-0",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-1",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-4",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-0",
          "prob": 0.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 25.2,
        "margin_3_plus": 10.9,
        "level": "watch"
      },
      "winner": "Austria",
      "winner_prob": 37.2,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Algeria Elo 1854 vs Austria 1867，差距 13 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Algeria 1.26 : 1.29 Austria，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.7%, 0-1 10.1%, 1-0 9.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Austria，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-27",
      "group": "J",
      "city": "Arlington",
      "country": "United States",
      "home": "Jordan",
      "away": "Argentina",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.7,
      "lambda_away": 2.1,
      "home_win": 11.3,
      "draw": 18.9,
      "away_win": 69.8,
      "matrix": [
        [
          6.0,
          12.7,
          13.3,
          9.4,
          4.9,
          2.1,
          0.7,
          0.2,
          0.1
        ],
        [
          4.3,
          8.9,
          9.4,
          6.6,
          3.5,
          1.5,
          0.5,
          0.2,
          0.0
        ],
        [
          1.5,
          3.2,
          3.3,
          2.3,
          1.2,
          0.5,
          0.2,
          0.1,
          0.0
        ],
        [
          0.4,
          0.7,
          0.8,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-2",
          "prob": 13.3
        },
        {
          "score": "0-1",
          "prob": 12.7
        },
        {
          "score": "0-3",
          "prob": 9.4
        },
        {
          "score": "1-2",
          "prob": 9.4
        },
        {
          "score": "1-1",
          "prob": 8.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 9.4
        },
        {
          "score": "1-3",
          "prob": 6.6
        },
        {
          "score": "0-4",
          "prob": 4.9
        },
        {
          "score": "1-4",
          "prob": 3.5
        },
        {
          "score": "2-2",
          "prob": 3.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "0-4",
          "prob": 4.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 3.5,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-5",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "1-5",
          "prob": 1.5,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-2",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-6",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 6
        }
      ],
      "big_score_signal": {
        "over_3_5": 30.8,
        "margin_3_plus": 24.5,
        "level": "high"
      },
      "winner": "Argentina",
      "winner_prob": 69.8,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Jordan Elo 1689 vs Argentina 2110，差距 421 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Jordan 0.7 : 2.1 Argentina，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-2 13.3%, 0-1 12.7%, 0-3 9.4%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Argentina，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-27",
      "group": "K",
      "city": "Miami Gardens",
      "country": "United States",
      "home": "Colombia",
      "away": "Portugal",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.16,
      "lambda_away": 1.27,
      "home_win": 33.8,
      "draw": 27.4,
      "away_win": 38.8,
      "matrix": [
        [
          8.8,
          11.2,
          7.1,
          3.0,
          0.9,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          10.2,
          13.0,
          8.2,
          3.5,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.0,
          7.5,
          4.8,
          2.0,
          0.6,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.3,
          2.9,
          1.9,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          0.9,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 13.0
        },
        {
          "score": "0-1",
          "prob": 11.2
        },
        {
          "score": "1-0",
          "prob": 10.2
        },
        {
          "score": "0-0",
          "prob": 8.8
        },
        {
          "score": "1-2",
          "prob": 8.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.8
        },
        {
          "score": "1-3",
          "prob": 3.5
        },
        {
          "score": "0-3",
          "prob": 3.0
        },
        {
          "score": "3-1",
          "prob": 2.9
        },
        {
          "score": "3-0",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-1",
          "prob": 0.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-0",
          "prob": 0.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.7,
        "margin_3_plus": 10.3,
        "level": "watch"
      },
      "winner": "Portugal",
      "winner_prob": 38.8,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Colombia Elo 1993 vs Portugal 1979，差距 14 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Colombia 1.16 : 1.27 Portugal，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 13.0%, 0-1 11.2%, 1-0 10.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Portugal，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-27",
      "group": "K",
      "city": "Atlanta",
      "country": "United States",
      "home": "DR Congo",
      "away": "Uzbekistan",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.12,
      "lambda_away": 1.37,
      "home_win": 30.7,
      "draw": 26.8,
      "away_win": 42.5,
      "matrix": [
        [
          8.3,
          11.3,
          7.8,
          3.5,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          9.3,
          12.7,
          8.7,
          4.0,
          1.4,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          5.2,
          7.1,
          4.9,
          2.2,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.0,
          2.7,
          1.8,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.8,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.7
        },
        {
          "score": "0-1",
          "prob": 11.3
        },
        {
          "score": "1-0",
          "prob": 9.3
        },
        {
          "score": "1-2",
          "prob": 8.7
        },
        {
          "score": "0-0",
          "prob": 8.3
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.9
        },
        {
          "score": "1-3",
          "prob": 4.0
        },
        {
          "score": "0-3",
          "prob": 3.5
        },
        {
          "score": "3-1",
          "prob": 2.7
        },
        {
          "score": "2-3",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.9,
        "margin_3_plus": 10.9,
        "level": "watch"
      },
      "winner": "Uzbekistan",
      "winner_prob": 42.5,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "DR Congo Elo 1693 vs Uzbekistan 1752，差距 59 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 DR Congo 1.12 : 1.37 Uzbekistan，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.7%, 0-1 11.3%, 1-0 9.3%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Uzbekistan，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-27",
      "group": "L",
      "city": "East Rutherford",
      "country": "United States",
      "home": "Panama",
      "away": "England",
      "home_score": null,
      "away_score": null,
      "lambda_home": 0.84,
      "lambda_away": 1.95,
      "home_win": 15.5,
      "draw": 21.2,
      "away_win": 63.3,
      "matrix": [
        [
          6.1,
          12.0,
          11.7,
          7.6,
          3.7,
          1.4,
          0.5,
          0.1,
          0.0
        ],
        [
          5.2,
          10.1,
          9.8,
          6.4,
          3.1,
          1.2,
          0.4,
          0.1,
          0.0
        ],
        [
          2.2,
          4.2,
          4.1,
          2.7,
          1.3,
          0.5,
          0.2,
          0.0,
          0.0
        ],
        [
          0.6,
          1.2,
          1.2,
          0.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 12.0
        },
        {
          "score": "0-2",
          "prob": 11.7
        },
        {
          "score": "1-1",
          "prob": 10.1
        },
        {
          "score": "1-2",
          "prob": 9.8
        },
        {
          "score": "0-3",
          "prob": 7.6
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 7.6
        },
        {
          "score": "1-3",
          "prob": 6.4
        },
        {
          "score": "2-2",
          "prob": 4.1
        },
        {
          "score": "0-4",
          "prob": 3.7
        },
        {
          "score": "1-4",
          "prob": 3.1
        }
      ],
      "bold_score_candidates": [
        {
          "score": "0-4",
          "prob": 3.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 3.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-5",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "2-4",
          "prob": 1.3,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "1-5",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-2",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 30.2,
        "margin_3_plus": 19.7,
        "level": "high"
      },
      "winner": "England",
      "winner_prob": 63.3,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "away",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Panama Elo 1738 vs England 1990，差距 252 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Panama 0.84 : 1.95 England，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 12.0%, 0-2 11.7%, 1-1 10.1%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 England，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    {
      "date": "2026-06-27",
      "group": "L",
      "city": "Philadelphia",
      "country": "United States",
      "home": "Croatia",
      "away": "Ghana",
      "home_score": null,
      "away_score": null,
      "lambda_home": 1.73,
      "lambda_away": 0.88,
      "home_win": 57.5,
      "draw": 23.6,
      "away_win": 18.9,
      "matrix": [
        [
          7.4,
          6.5,
          2.8,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.7,
          11.2,
          4.9,
          1.4,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.0,
          9.7,
          4.3,
          1.2,
          0.3,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          6.4,
          5.6,
          2.5,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.7,
          2.4,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.0,
          0.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.7
        },
        {
          "score": "1-1",
          "prob": 11.2
        },
        {
          "score": "2-0",
          "prob": 11.0
        },
        {
          "score": "2-1",
          "prob": 9.7
        },
        {
          "score": "0-0",
          "prob": 7.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 6.4
        },
        {
          "score": "3-1",
          "prob": 5.6
        },
        {
          "score": "2-2",
          "prob": 4.3
        },
        {
          "score": "4-0",
          "prob": 2.7
        },
        {
          "score": "3-2",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 2.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-2",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-0",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.5,
        "margin_3_plus": 15.9,
        "level": "watch"
      },
      "winner": "Croatia",
      "winner_prob": 57.5,
      "completed": false,
      "actual_score": null,
      "predicted_direction": "home",
      "actual_direction": null,
      "prediction_hit": null,
      "review": null,
      "risk_tags": [
        {
          "level": "amber",
          "label": "防平提醒",
          "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
        },
        {
          "level": "red",
          "label": "强队不胜风险",
          "text": "热门方优势明显，反而要单独提醒不胜风险。"
        },
        {
          "level": "blue",
          "label": "小比分拉扯",
          "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
        }
      ],
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Croatia Elo 1901 vs Ghana 1615，差距 285 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Croatia 1.73 : 0.88 Ghana，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.7%, 1-1 11.2%, 2-0 11.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Croatia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    }
  ],
  "daily_tickets": [
    {
      "date": "2026-06-21",
      "group_no": 1,
      "status": "red",
      "summary": "不建议4场串起来买",
      "reason": "风险点：Ecuador vs Curaçao",
      "outcome_ticket": [
        {
          "match": "Germany vs Cote d'Ivoire",
          "kickoff_time": "04:00",
          "pick": "Germany",
          "prob": 75.0,
          "note": "",
          "risk_tags": [
            {
              "level": "blue",
              "label": "小比分拉扯",
              "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
            }
          ]
        },
        {
          "match": "Tunisia vs Japan",
          "kickoff_time": "12:00",
          "pick": "Japan",
          "prob": 54.0,
          "note": "",
          "risk_tags": [
            {
              "level": "amber",
              "label": "防平提醒",
              "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
            },
            {
              "level": "blue",
              "label": "小比分拉扯",
              "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
            }
          ]
        },
        {
          "match": "Netherlands vs Sweden",
          "kickoff_time": "01:00",
          "pick": "Netherlands",
          "prob": 49.7,
          "note": "",
          "risk_tags": [
            {
              "level": "amber",
              "label": "防平提醒",
              "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
            },
            {
              "level": "blue",
              "label": "小比分拉扯",
              "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
            }
          ]
        },
        {
          "match": "Ecuador vs Curaçao",
          "kickoff_time": "08:00",
          "pick": "Ecuador",
          "prob": 60.1,
          "note": "",
          "risk_tags": [
            {
              "level": "red",
              "label": "强队不胜风险",
              "text": "热门方优势明显，反而要单独提醒不胜风险。"
            },
            {
              "level": "blue",
              "label": "小比分拉扯",
              "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
            }
          ]
        }
      ],
      "score_ticket": {
        "status": "red",
        "summary": "波胆2串2是主玩法：命中率低，但比4场串更适合小额博收益。",
        "items": [
          {
            "match": "Germany vs Cote d'Ivoire",
            "kickoff_time": "04:00",
            "scores": [
              {
                "score": "2-0",
                "prob": 12.6,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "1-0",
                "prob": 10.3,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "3-0",
                "prob": 10.2,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "3-1",
                "prob": 7.4,
                "big": true,
                "odds": null,
                "tag": "搏大"
              }
            ],
            "risk": "比分命中难度高，适合小额娱乐，不适合作为主票。"
          },
          {
            "match": "Tunisia vs Japan",
            "kickoff_time": "12:00",
            "scores": [
              {
                "score": "0-1",
                "prob": 12.5,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "1-1",
                "prob": 11.7,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "0-2",
                "prob": 10.2,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "0-3",
                "prob": 5.6,
                "big": true,
                "odds": null,
                "tag": "搏大"
              }
            ],
            "risk": "比分命中难度高，适合小额娱乐，不适合作为主票。"
          },
          {
            "match": "Netherlands vs Sweden",
            "kickoff_time": "01:00",
            "scores": [
              {
                "score": "1-1",
                "prob": 11.5,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "1-0",
                "prob": 10.2,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "2-1",
                "prob": 9.6,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "2-2",
                "prob": 5.4,
                "big": true,
                "odds": null,
                "tag": "搏大"
              }
            ],
            "risk": "比分命中难度高，适合小额娱乐，不适合作为主票。"
          },
          {
            "match": "Ecuador vs Curaçao",
            "kickoff_time": "08:00",
            "scores": [
              {
                "score": "1-0",
                "prob": 12.5,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "2-0",
                "prob": 11.4,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "1-1",
                "prob": 10.7,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "3-0",
                "prob": 6.9,
                "big": true,
                "odds": null,
                "tag": "搏大"
              }
            ],
            "risk": "比分命中难度高，适合小额娱乐，不适合作为主票。"
          }
        ],
        "pair_plans": [
          {
            "label": "相对稳妥2串2",
            "note": "优先选前三比分，不碰夸张比分。",
            "matches": [
              {
                "match": "Ecuador vs Curaçao",
                "scores": [
                  {
                    "score": "1-0",
                    "prob": 12.5,
                    "odds": null,
                    "tag": "前三"
                  },
                  {
                    "score": "2-0",
                    "prob": 11.4,
                    "odds": null,
                    "tag": "前三"
                  }
                ]
              },
              {
                "match": "Tunisia vs Japan",
                "scores": [
                  {
                    "score": "0-1",
                    "prob": 12.5,
                    "odds": null,
                    "tag": "前三"
                  },
                  {
                    "score": "1-1",
                    "prob": 11.7,
                    "odds": null,
                    "tag": "前三"
                  }
                ]
              }
            ]
          },
          {
            "label": "进阶搏大2串2",
            "note": "只适合小额，目标是收益，不追稳定。",
            "matches": [
              {
                "match": "Germany vs Cote d'Ivoire",
                "scores": [
                  {
                    "score": "3-0",
                    "prob": 10.2,
                    "odds": null,
                    "tag": "前三"
                  },
                  {
                    "score": "3-1",
                    "prob": 7.4,
                    "big": true,
                    "odds": null,
                    "tag": "搏大"
                  }
                ]
              },
              {
                "match": "Ecuador vs Curaçao",
                "scores": [
                  {
                    "score": "1-1",
                    "prob": 10.7,
                    "odds": null,
                    "tag": "前三"
                  },
                  {
                    "score": "3-0",
                    "prob": 6.9,
                    "big": true,
                    "odds": null,
                    "tag": "搏大"
                  }
                ]
              }
            ]
          }
        ],
        "longshot_singles": [
          {
            "match": "Germany vs Cote d'Ivoire",
            "score": "6-1",
            "prob": 0.9,
            "odds": null,
            "reason": "奇兵单注：6球以上或同档爆打信号，只适合极小额，不进2串2。"
          },
          {
            "match": "Tunisia vs Japan",
            "score": "1-5",
            "prob": 0.7,
            "odds": null,
            "reason": "奇兵单注：6球以上或同档爆打信号，只适合极小额，不进2串2。"
          }
        ]
      }
    },
    {
      "date": "2026-06-22",
      "group_no": 1,
      "status": "red",
      "summary": "不建议4场串起来买",
      "reason": "风险点：Uruguay vs Cape Verde；低置信方向：Belgium vs Iran",
      "outcome_ticket": [
        {
          "match": "Spain vs Saudi Arabia",
          "kickoff_time": "00:00",
          "pick": "Spain",
          "prob": 69.4,
          "note": "",
          "risk_tags": [
            {
              "level": "blue",
              "label": "小比分拉扯",
              "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
            }
          ]
        },
        {
          "match": "New Zealand vs Egypt",
          "kickoff_time": "09:00",
          "pick": "Egypt",
          "prob": 46.1,
          "note": "",
          "risk_tags": [
            {
              "level": "amber",
              "label": "防平提醒",
              "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
            },
            {
              "level": "blue",
              "label": "小比分拉扯",
              "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
            }
          ]
        },
        {
          "match": "Belgium vs Iran",
          "kickoff_time": "03:00",
          "pick": "Belgium",
          "prob": 38.7,
          "note": "",
          "risk_tags": [
            {
              "level": "blue",
              "label": "小比分拉扯",
              "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
            }
          ]
        },
        {
          "match": "Uruguay vs Cape Verde",
          "kickoff_time": "06:00",
          "pick": "Uruguay",
          "prob": 56.6,
          "note": "",
          "risk_tags": [
            {
              "level": "amber",
              "label": "防平提醒",
              "text": "强队方向清楚，但平局概率不低，不能只看胜负方向。"
            },
            {
              "level": "red",
              "label": "强队不胜风险",
              "text": "热门方优势明显，反而要单独提醒不胜风险。"
            },
            {
              "level": "blue",
              "label": "小比分拉扯",
              "text": "最可能比分含平局，小球和僵局风险需要前置提醒。"
            }
          ]
        }
      ],
      "score_ticket": {
        "status": "red",
        "summary": "波胆2串2是主玩法：命中率低，但比4场串更适合小额博收益。",
        "items": [
          {
            "match": "Spain vs Saudi Arabia",
            "kickoff_time": "00:00",
            "scores": [
              {
                "score": "2-0",
                "prob": 12.8,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "1-0",
                "prob": 12.0,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "2-1",
                "prob": 9.5,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "3-0",
                "prob": 9.1,
                "big": true,
                "odds": null,
                "tag": "搏大"
              }
            ],
            "risk": "比分命中难度高，适合小额娱乐，不适合作为主票。"
          },
          {
            "match": "New Zealand vs Egypt",
            "kickoff_time": "09:00",
            "scores": [
              {
                "score": "1-1",
                "prob": 12.3,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "0-1",
                "prob": 11.2,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "1-2",
                "prob": 9.2,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "2-2",
                "prob": 5.0,
                "big": true,
                "odds": null,
                "tag": "搏大"
              }
            ],
            "risk": "比分命中难度高，适合小额娱乐，不适合作为主票。"
          },
          {
            "match": "Belgium vs Iran",
            "kickoff_time": "03:00",
            "scores": [
              {
                "score": "1-1",
                "prob": 12.5,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "1-0",
                "prob": 9.8,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "0-1",
                "prob": 9.3,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "2-2",
                "prob": 5.3,
                "big": true,
                "odds": null,
                "tag": "搏大"
              }
            ],
            "risk": "比分命中难度高，适合小额娱乐，不适合作为主票。"
          },
          {
            "match": "Uruguay vs Cape Verde",
            "kickoff_time": "06:00",
            "scores": [
              {
                "score": "1-0",
                "prob": 13.9,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "1-1",
                "prob": 11.5,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "2-0",
                "prob": 11.4,
                "odds": null,
                "tag": "前三"
              },
              {
                "score": "3-0",
                "prob": 6.2,
                "big": true,
                "odds": null,
                "tag": "搏大"
              }
            ],
            "risk": "比分命中难度高，适合小额娱乐，不适合作为主票。"
          }
        ],
        "pair_plans": [
          {
            "label": "相对稳妥2串2",
            "note": "优先选前三比分，不碰夸张比分。",
            "matches": [
              {
                "match": "Uruguay vs Cape Verde",
                "scores": [
                  {
                    "score": "1-0",
                    "prob": 13.9,
                    "odds": null,
                    "tag": "前三"
                  },
                  {
                    "score": "1-1",
                    "prob": 11.5,
                    "odds": null,
                    "tag": "前三"
                  }
                ]
              },
              {
                "match": "Spain vs Saudi Arabia",
                "scores": [
                  {
                    "score": "2-0",
                    "prob": 12.8,
                    "odds": null,
                    "tag": "前三"
                  },
                  {
                    "score": "1-0",
                    "prob": 12.0,
                    "odds": null,
                    "tag": "前三"
                  }
                ]
              }
            ]
          },
          {
            "label": "进阶搏大2串2",
            "note": "只适合小额，目标是收益，不追稳定。",
            "matches": [
              {
                "match": "Spain vs Saudi Arabia",
                "scores": [
                  {
                    "score": "2-1",
                    "prob": 9.5,
                    "odds": null,
                    "tag": "前三"
                  },
                  {
                    "score": "3-0",
                    "prob": 9.1,
                    "big": true,
                    "odds": null,
                    "tag": "搏大"
                  }
                ]
              },
              {
                "match": "Uruguay vs Cape Verde",
                "scores": [
                  {
                    "score": "2-0",
                    "prob": 11.4,
                    "odds": null,
                    "tag": "前三"
                  },
                  {
                    "score": "3-0",
                    "prob": 6.2,
                    "big": true,
                    "odds": null,
                    "tag": "搏大"
                  }
                ]
              }
            ]
          }
        ],
        "longshot_singles": [
          {
            "match": "Spain vs Saudi Arabia",
            "score": "6-0",
            "prob": 0.7,
            "odds": null,
            "reason": "奇兵单注：6球以上或同档爆打信号，只适合极小额，不进2串2。"
          },
          {
            "match": "New Zealand vs Egypt",
            "score": "1-5",
            "prob": 0.5,
            "odds": null,
            "reason": "奇兵单注：6球以上或同档爆打信号，只适合极小额，不进2串2。"
          }
        ]
      }
    }
  ],
  "post_match_reviews": [
    {
      "date": "2026-06-17",
      "kickoff_time": "07:00",
      "match": "Ghana vs Panama",
      "actual_score": "1-0",
      "direction_hit": false,
      "score_hit": "前三",
      "predicted_scores": [
        {
          "score": "1-1",
          "prob": 12.8,
          "odds": 5,
          "tag": "前三"
        },
        {
          "score": "0-1",
          "prob": 11.9,
          "odds": 8.8,
          "tag": "前三"
        },
        {
          "score": "1-0",
          "prob": 9.5,
          "odds": 6.3,
          "tag": "前三"
        },
        {
          "score": "2-2",
          "prob": 4.7,
          "big": true,
          "odds": null,
          "tag": "搏大"
        }
      ],
      "summary": "赛前给：1-1(前三)、0-1(前三)、1-0(前三)、2-2(搏大)；实际：1-0。",
      "reason": "比分前三命中，但仍要复盘是否过度依赖低回报方向。"
    },
    {
      "date": "2026-06-17",
      "kickoff_time": "10:00",
      "match": "Uzbekistan vs Colombia",
      "actual_score": "1-3",
      "direction_hit": true,
      "score_hit": "未中",
      "predicted_scores": [
        {
          "score": "0-1",
          "prob": 12.5,
          "odds": 5.6,
          "tag": "前三"
        },
        {
          "score": "1-1",
          "prob": 12.4,
          "odds": 9,
          "tag": "前三"
        },
        {
          "score": "0-2",
          "prob": 9.2,
          "odds": 5.2,
          "tag": "前三"
        },
        {
          "score": "0-3",
          "prob": 4.5,
          "big": true,
          "odds": 8,
          "tag": "搏大"
        }
      ],
      "summary": "赛前给：0-1(前三)、1-1(前三)、0-2(前三)、0-3(搏大)；实际：1-3。",
      "reason": "前三比分偏保守，没有覆盖实际进球数。"
    },
    {
      "date": "2026-06-18",
      "kickoff_time": "00:00",
      "match": "Czechia vs South Africa",
      "actual_score": "1-1",
      "direction_hit": false,
      "score_hit": "前三",
      "predicted_scores": [
        {
          "score": "1-0",
          "prob": 12.8,
          "odds": null,
          "tag": "前三"
        },
        {
          "score": "1-1",
          "prob": 12.4,
          "odds": null,
          "tag": "前三"
        },
        {
          "score": "2-0",
          "prob": 9.4,
          "odds": null,
          "tag": "前三"
        },
        {
          "score": "3-0",
          "prob": 4.6,
          "big": true,
          "odds": null,
          "tag": "搏大"
        }
      ],
      "summary": "赛前给：1-0(前三)、1-1(前三)、2-0(前三)、3-0(搏大)；实际：1-1。",
      "reason": "比分前三命中，但仍要复盘是否过度依赖低回报方向。"
    },
    {
      "date": "2026-06-18",
      "kickoff_time": "09:00",
      "match": "Mexico vs Korea Republic",
      "actual_score": "1-0",
      "direction_hit": true,
      "score_hit": "前三",
      "predicted_scores": [
        {
          "score": "1-1",
          "prob": 12.6,
          "odds": null,
          "tag": "前三"
        },
        {
          "score": "1-0",
          "prob": 10.9,
          "odds": null,
          "tag": "前三"
        },
        {
          "score": "0-1",
          "prob": 9.1,
          "odds": null,
          "tag": "前三"
        },
        {
          "score": "2-2",
          "prob": 5.1,
          "big": true,
          "odds": null,
          "tag": "搏大"
        }
      ],
      "summary": "赛前给：1-1(前三)、1-0(前三)、0-1(前三)、2-2(搏大)；实际：1-0。",
      "reason": "比分前三命中，但仍要复盘是否过度依赖低回报方向。"
    },
    {
      "date": "2026-06-19",
      "kickoff_time": "03:00",
      "match": "USA vs Australia",
      "actual_score": "2-0",
      "direction_hit": false,
      "score_hit": "未中",
      "predicted_scores": [
        {
          "score": "1-1",
          "tag": "前三"
        },
        {
          "score": "0-1",
          "tag": "前三"
        },
        {
          "score": "1-0",
          "tag": "前三"
        },
        {
          "score": "2-3",
          "tag": "搏大"
        }
      ],
      "summary": "赛前给：1-1(前三)、0-1(前三)、1-0(前三)、2-3(搏大)；实际：2-0。",
      "reason": "胜负方向判断错，说明临场状态/赔率反向信号权重不够。"
    },
    {
      "date": "2026-06-19",
      "kickoff_time": "06:00",
      "match": "Scotland vs Morocco",
      "actual_score": "0-1",
      "direction_hit": true,
      "score_hit": "前三",
      "predicted_scores": [
        {
          "score": "1-1",
          "tag": "前三"
        },
        {
          "score": "0-1",
          "tag": "前三"
        },
        {
          "score": "1-2",
          "tag": "前三"
        },
        {
          "score": "2-3",
          "tag": "搏大"
        }
      ],
      "summary": "赛前给：1-1(前三)、0-1(前三)、1-2(前三)、2-3(搏大)；实际：0-1。",
      "reason": "比分前三命中，但仍要复盘是否过度依赖低回报方向。"
    },
    {
      "date": "2026-06-19",
      "kickoff_time": "08:30",
      "match": "Brazil vs Haiti",
      "actual_score": "3-0",
      "direction_hit": true,
      "score_hit": "未中",
      "predicted_scores": [
        {
          "score": "2-0",
          "tag": "前三"
        },
        {
          "score": "1-0",
          "tag": "前三"
        },
        {
          "score": "2-1",
          "tag": "前三"
        },
        {
          "score": "4-0",
          "tag": "搏大"
        }
      ],
      "summary": "赛前给：2-0(前三)、1-0(前三)、2-1(前三)、4-0(搏大)；实际：3-0。",
      "reason": "比分尾部分布没覆盖到，说明只看最高概率会漏掉次热门结果。"
    },
    {
      "date": "2026-06-19",
      "kickoff_time": "11:00",
      "match": "Turkey vs Paraguay",
      "actual_score": "0-1",
      "direction_hit": false,
      "score_hit": "前三",
      "predicted_scores": [
        {
          "score": "1-1",
          "tag": "前三"
        },
        {
          "score": "1-0",
          "tag": "前三"
        },
        {
          "score": "0-1",
          "tag": "前三"
        },
        {
          "score": "3-2",
          "tag": "搏大"
        }
      ],
      "summary": "赛前给：1-1(前三)、1-0(前三)、0-1(前三)、3-2(搏大)；实际：0-1。",
      "reason": "比分前三命中，但仍要复盘是否过度依赖低回报方向。"
    }
  ],
  "projected_group_tables": {
    "A": [
      {
        "rank": 1,
        "team": "Mexico",
        "points": 7.71,
        "gd": 3.49,
        "gf": 4.54
      },
      {
        "rank": 2,
        "team": "Korea Republic",
        "points": 4.84,
        "gd": 0.66,
        "gf": 3.57
      },
      {
        "rank": 3,
        "team": "Czechia",
        "points": 2.03,
        "gd": -1.49,
        "gf": 3.05
      },
      {
        "rank": 4,
        "team": "South Africa",
        "points": 1.9,
        "gd": -2.66,
        "gf": 1.91
      }
    ],
    "B": [
      {
        "rank": 1,
        "team": "Switzerland",
        "points": 5.47,
        "gd": 3.15,
        "gf": 6.3
      },
      {
        "rank": 2,
        "team": "Canada",
        "points": 5.26,
        "gd": 5.85,
        "gf": 8.15
      },
      {
        "rank": 3,
        "team": "Bosnia and Herzegovina",
        "points": 2.45,
        "gd": -2.88,
        "gf": 3.26
      },
      {
        "rank": 4,
        "team": "Qatar",
        "points": 2.27,
        "gd": -6.12,
        "gf": 2.14
      }
    ],
    "C": [
      {
        "rank": 1,
        "team": "Morocco",
        "points": 5.99,
        "gd": 1.89,
        "gf": 3.74
      },
      {
        "rank": 2,
        "team": "Brazil",
        "points": 5.97,
        "gd": 3.88,
        "gf": 5.82
      },
      {
        "rank": 3,
        "team": "Scotland",
        "points": 3.8,
        "gd": -0.88,
        "gf": 1.94
      },
      {
        "rank": 4,
        "team": "Haiti",
        "points": 0.77,
        "gd": -4.89,
        "gf": 0.85
      }
    ],
    "D": [
      {
        "rank": 1,
        "team": "USA",
        "points": 7.37,
        "gd": 5.0,
        "gf": 7.23
      },
      {
        "rank": 2,
        "team": "Australia",
        "points": 4.55,
        "gd": 0.25,
        "gf": 3.39
      },
      {
        "rank": 3,
        "team": "Paraguay",
        "points": 4.19,
        "gd": -2.25,
        "gf": 3.14
      },
      {
        "rank": 4,
        "team": "Turkey",
        "points": 1.36,
        "gd": -3.0,
        "gf": 1.23
      }
    ],
    "E": [
      {
        "rank": 1,
        "team": "Germany",
        "points": 6.47,
        "gd": 7.05,
        "gf": 10.18
      },
      {
        "rank": 2,
        "team": "Ivory Coast",
        "points": 5.97,
        "gd": 1.32,
        "gf": 3.85
      },
      {
        "rank": 3,
        "team": "Ecuador",
        "points": 3.07,
        "gd": -0.52,
        "gf": 2.89
      },
      {
        "rank": 4,
        "team": "Curaçao",
        "points": 1.53,
        "gd": -7.85,
        "gf": 2.76
      }
    ],
    "F": [
      {
        "rank": 1,
        "team": "Sweden",
        "points": 5.11,
        "gd": 3.05,
        "gf": 7.28
      },
      {
        "rank": 2,
        "team": "Netherlands",
        "points": 4.67,
        "gd": 1.36,
        "gf": 5.41
      },
      {
        "rank": 3,
        "team": "Japan",
        "points": 4.53,
        "gd": 1.13,
        "gf": 5.22
      },
      {
        "rank": 4,
        "team": "Tunisia",
        "points": 1.71,
        "gd": -5.54,
        "gf": 2.86
      }
    ],
    "G": [
      {
        "rank": 1,
        "team": "Belgium",
        "points": 4.36,
        "gd": 0.92,
        "gf": 4.18
      },
      {
        "rank": 2,
        "team": "Iran",
        "points": 3.9,
        "gd": 0.24,
        "gf": 4.68
      },
      {
        "rank": 3,
        "team": "Egypt",
        "points": 3.79,
        "gd": 0.07,
        "gf": 3.58
      },
      {
        "rank": 4,
        "team": "New Zealand",
        "points": 2.93,
        "gd": -1.23,
        "gf": 4.09
      }
    ],
    "H": [
      {
        "rank": 1,
        "team": "Spain",
        "points": 5.15,
        "gd": 2.12,
        "gf": 3.84
      },
      {
        "rank": 2,
        "team": "Uruguay",
        "points": 3.83,
        "gd": 0.08,
        "gf": 3.61
      },
      {
        "rank": 3,
        "team": "Saudi Arabia",
        "points": 3.06,
        "gd": -1.17,
        "gf": 3.01
      },
      {
        "rank": 4,
        "team": "Cape Verde",
        "points": 3.01,
        "gd": -1.03,
        "gf": 1.87
      }
    ],
    "I": [
      {
        "rank": 1,
        "team": "France",
        "points": 6.87,
        "gd": 3.64,
        "gf": 6.53
      },
      {
        "rank": 2,
        "team": "Norway",
        "points": 5.33,
        "gd": 2.39,
        "gf": 6.27
      },
      {
        "rank": 3,
        "team": "Senegal",
        "points": 2.96,
        "gd": -1.67,
        "gf": 3.56
      },
      {
        "rank": 4,
        "team": "Iraq",
        "points": 1.83,
        "gd": -4.36,
        "gf": 2.85
      }
    ],
    "J": [
      {
        "rank": 1,
        "team": "Argentina",
        "points": 7.23,
        "gd": 5.25,
        "gf": 6.92
      },
      {
        "rank": 2,
        "team": "Austria",
        "points": 5.21,
        "gd": 1.18,
        "gf": 5.26
      },
      {
        "rank": 3,
        "team": "Algeria",
        "points": 3.1,
        "gd": -2.5,
        "gf": 2.72
      },
      {
        "rank": 4,
        "team": "Jordan",
        "points": 1.52,
        "gd": -3.93,
        "gf": 2.63
      }
    ],
    "K": [
      {
        "rank": 1,
        "team": "Colombia",
        "points": 6.19,
        "gd": 2.64,
        "gf": 5.77
      },
      {
        "rank": 2,
        "team": "Portugal",
        "points": 4.27,
        "gd": 0.77,
        "gf": 3.92
      },
      {
        "rank": 3,
        "team": "DR Congo",
        "points": 3.04,
        "gd": -1.0,
        "gf": 2.98
      },
      {
        "rank": 4,
        "team": "Uzbekistan",
        "points": 2.47,
        "gd": -2.41,
        "gf": 3.36
      }
    ],
    "L": [
      {
        "rank": 1,
        "team": "England",
        "points": 7.34,
        "gd": 4.42,
        "gf": 8.05
      },
      {
        "rank": 2,
        "team": "Ghana",
        "points": 4.38,
        "gd": -1.16,
        "gf": 2.67
      },
      {
        "rank": 3,
        "team": "Croatia",
        "points": 3.8,
        "gd": -0.48,
        "gf": 5.33
      },
      {
        "rank": 4,
        "team": "Panama",
        "points": 1.59,
        "gd": -2.78,
        "gf": 1.77
      }
    ]
  },
  "ranking": [
    {
      "team": "Argentina",
      "group": "J",
      "elo": 2110,
      "attack": 0.29,
      "defense": 0.32,
      "qualify": 97.2,
      "r16": 72.2,
      "qf": 54.5,
      "sf": 39.7,
      "final": 26.4,
      "champion": 17.3
    },
    {
      "team": "Spain",
      "group": "H",
      "elo": 2083,
      "attack": 0.39,
      "defense": 0.39,
      "qualify": 74.7,
      "r16": 58.2,
      "qf": 41.4,
      "sf": 30.6,
      "final": 20.5,
      "champion": 13.8
    },
    {
      "team": "France",
      "group": "I",
      "elo": 2039,
      "attack": 0.25,
      "defense": 0.12,
      "qualify": 95.0,
      "r16": 68.2,
      "qf": 45.8,
      "sf": 26.5,
      "final": 15.7,
      "champion": 8.6
    },
    {
      "team": "Brazil",
      "group": "C",
      "elo": 2001,
      "attack": 0.43,
      "defense": 0.39,
      "qualify": 83.9,
      "r16": 63.3,
      "qf": 40.4,
      "sf": 25.9,
      "final": 15.4,
      "champion": 8.1
    },
    {
      "team": "England",
      "group": "L",
      "elo": 1990,
      "attack": 0.49,
      "defense": 0.35,
      "qualify": 97.0,
      "r16": 68.6,
      "qf": 42.3,
      "sf": 24.5,
      "final": 14.4,
      "champion": 7.5
    },
    {
      "team": "Germany",
      "group": "E",
      "elo": 1957,
      "attack": 0.49,
      "defense": 0.21,
      "qualify": 90.8,
      "r16": 62.0,
      "qf": 40.0,
      "sf": 22.1,
      "final": 11.8,
      "champion": 5.8
    },
    {
      "team": "Colombia",
      "group": "K",
      "elo": 1993,
      "attack": -0.12,
      "defense": 0.22,
      "qualify": 88.4,
      "r16": 61.4,
      "qf": 34.1,
      "sf": 16.8,
      "final": 8.7,
      "champion": 4.3
    },
    {
      "team": "Portugal",
      "group": "K",
      "elo": 1979,
      "attack": 0.2,
      "defense": 0.24,
      "qualify": 66.5,
      "r16": 50.7,
      "qf": 29.0,
      "sf": 16.8,
      "final": 7.9,
      "champion": 3.9
    },
    {
      "team": "Netherlands",
      "group": "F",
      "elo": 1935,
      "attack": 0.39,
      "defense": 0.17,
      "qualify": 69.0,
      "r16": 43.9,
      "qf": 22.3,
      "sf": 12.7,
      "final": 6.3,
      "champion": 3.1
    },
    {
      "team": "Mexico",
      "group": "A",
      "elo": 1935,
      "attack": 0.2,
      "defense": 0.28,
      "qualify": 100.0,
      "r16": 61.5,
      "qf": 28.9,
      "sf": 15.2,
      "final": 7.2,
      "champion": 2.9
    },
    {
      "team": "Morocco",
      "group": "C",
      "elo": 1935,
      "attack": 0.01,
      "defense": 0.46,
      "qualify": 95.8,
      "r16": 53.5,
      "qf": 24.5,
      "sf": 12.7,
      "final": 6.2,
      "champion": 2.5
    },
    {
      "team": "Belgium",
      "group": "G",
      "elo": 1924,
      "attack": 0.24,
      "defense": -0.03,
      "qualify": 57.0,
      "r16": 47.3,
      "qf": 25.6,
      "sf": 11.5,
      "final": 5.3,
      "champion": 2.5
    },
    {
      "team": "Japan",
      "group": "F",
      "elo": 1924,
      "attack": 0.23,
      "defense": 0.16,
      "qualify": 57.4,
      "r16": 42.9,
      "qf": 22.0,
      "sf": 11.2,
      "final": 4.5,
      "champion": 1.9
    },
    {
      "team": "Austria",
      "group": "J",
      "elo": 1867,
      "attack": 0.22,
      "defense": -0.04,
      "qualify": 78.0,
      "r16": 43.7,
      "qf": 22.9,
      "sf": 10.8,
      "final": 3.9,
      "champion": 1.8
    },
    {
      "team": "Iran",
      "group": "G",
      "elo": 1849,
      "attack": 0.28,
      "defense": 0.46,
      "qualify": 65.0,
      "r16": 44.2,
      "qf": 23.6,
      "sf": 10.4,
      "final": 4.8,
      "champion": 1.8
    },
    {
      "team": "Uruguay",
      "group": "H",
      "elo": 1893,
      "attack": 0.08,
      "defense": 0.17,
      "qualify": 56.6,
      "r16": 30.1,
      "qf": 16.1,
      "sf": 8.2,
      "final": 3.5,
      "champion": 1.4
    },
    {
      "team": "Croatia",
      "group": "L",
      "elo": 1901,
      "attack": 0.18,
      "defense": 0.31,
      "qualify": 36.9,
      "r16": 31.3,
      "qf": 15.1,
      "sf": 8.3,
      "final": 3.5,
      "champion": 1.3
    },
    {
      "team": "USA",
      "group": "D",
      "elo": 1832,
      "attack": 0.01,
      "defense": 0.1,
      "qualify": 100.0,
      "r16": 62.0,
      "qf": 29.0,
      "sf": 9.7,
      "final": 3.8,
      "champion": 1.3
    },
    {
      "team": "Australia",
      "group": "D",
      "elo": 1819,
      "attack": 0.35,
      "defense": 0.26,
      "qualify": 69.3,
      "r16": 45.7,
      "qf": 21.7,
      "sf": 8.7,
      "final": 3.4,
      "champion": 1.3
    },
    {
      "team": "Korea Republic",
      "group": "A",
      "elo": 1830,
      "attack": 0.21,
      "defense": 0.31,
      "qualify": 72.5,
      "r16": 45.9,
      "qf": 20.7,
      "sf": 8.1,
      "final": 2.9,
      "champion": 1.1
    },
    {
      "team": "Ivory Coast",
      "group": "E",
      "elo": 1806,
      "attack": 0.11,
      "defense": 0.32,
      "qualify": 89.4,
      "r16": 41.5,
      "qf": 17.6,
      "sf": 6.3,
      "final": 2.2,
      "champion": 1.0
    },
    {
      "team": "Ecuador",
      "group": "E",
      "elo": 1912,
      "attack": -0.17,
      "defense": -0.04,
      "qualify": 14.7,
      "r16": 32.6,
      "qf": 14.3,
      "sf": 5.7,
      "final": 2.5,
      "champion": 0.9
    },
    {
      "team": "Switzerland",
      "group": "B",
      "elo": 1882,
      "attack": 0.02,
      "defense": -0.11,
      "qualify": 100.0,
      "r16": 53.2,
      "qf": 20.3,
      "sf": 8.6,
      "final": 3.2,
      "champion": 0.9
    },
    {
      "team": "Norway",
      "group": "I",
      "elo": 1872,
      "attack": 0.05,
      "defense": -0.1,
      "qualify": 80.1,
      "r16": 47.3,
      "qf": 18.4,
      "sf": 7.0,
      "final": 2.6,
      "champion": 0.9
    },
    {
      "team": "Algeria",
      "group": "J",
      "elo": 1854,
      "attack": 0.05,
      "defense": 0.32,
      "qualify": 20.0,
      "r16": 24.6,
      "qf": 11.6,
      "sf": 5.3,
      "final": 2.5,
      "champion": 0.9
    },
    {
      "team": "Canada",
      "group": "B",
      "elo": 1836,
      "attack": -0.14,
      "defense": 0.11,
      "qualify": 100.0,
      "r16": 50.3,
      "qf": 16.5,
      "sf": 6.2,
      "final": 1.9,
      "champion": 0.6
    },
    {
      "team": "Senegal",
      "group": "I",
      "elo": 1844,
      "attack": -0.06,
      "defense": 0.36,
      "qualify": 19.5,
      "r16": 29.1,
      "qf": 11.7,
      "sf": 4.1,
      "final": 1.4,
      "champion": 0.5
    },
    {
      "team": "Sweden",
      "group": "F",
      "elo": 1772,
      "attack": 0.34,
      "defense": 0.12,
      "qualify": 67.1,
      "r16": 35.6,
      "qf": 13.1,
      "sf": 5.0,
      "final": 1.9,
      "champion": 0.5
    },
    {
      "team": "Paraguay",
      "group": "D",
      "elo": 1819,
      "attack": -0.13,
      "defense": 0.03,
      "qualify": 30.7,
      "r16": 22.7,
      "qf": 9.3,
      "sf": 2.9,
      "final": 0.9,
      "champion": 0.4
    },
    {
      "team": "Egypt",
      "group": "G",
      "elo": 1776,
      "attack": 0.1,
      "defense": 0.31,
      "qualify": 39.5,
      "r16": 27.9,
      "qf": 11.1,
      "sf": 3.4,
      "final": 1.0,
      "champion": 0.4
    },
    {
      "team": "Czechia",
      "group": "A",
      "elo": 1759,
      "attack": 0.22,
      "defense": 0.3,
      "qualify": 11.4,
      "r16": 14.4,
      "qf": 6.4,
      "sf": 2.2,
      "final": 0.6,
      "champion": 0.2
    },
    {
      "team": "Uzbekistan",
      "group": "K",
      "elo": 1752,
      "attack": 0.18,
      "defense": 0.24,
      "qualify": 17.3,
      "r16": 9.5,
      "qf": 3.1,
      "sf": 1.2,
      "final": 0.5,
      "champion": 0.1
    },
    {
      "team": "Saudi Arabia",
      "group": "H",
      "elo": 1668,
      "attack": 0.05,
      "defense": 0.29,
      "qualify": 45.6,
      "r16": 14.6,
      "qf": 5.6,
      "sf": 1.4,
      "final": 0.4,
      "champion": 0.1
    },
    {
      "team": "Cape Verde",
      "group": "H",
      "elo": 1635,
      "attack": -0.25,
      "defense": 0.23,
      "qualify": 23.1,
      "r16": 8.0,
      "qf": 1.9,
      "sf": 0.4,
      "final": 0.1,
      "champion": 0.1
    },
    {
      "team": "Bosnia and Herzegovina",
      "group": "B",
      "elo": 1625,
      "attack": -0.07,
      "defense": 0.07,
      "qualify": 0,
      "r16": 10.8,
      "qf": 3.3,
      "sf": 0.6,
      "final": 0.1,
      "champion": 0.1
    },
    {
      "team": "Turkey",
      "group": "D",
      "elo": 1845,
      "attack": -0.05,
      "defense": 0.04,
      "qualify": 0,
      "r16": 0.8,
      "qf": 0.5,
      "sf": 0.1,
      "final": 0.0,
      "champion": 0
    },
    {
      "team": "Scotland",
      "group": "C",
      "elo": 1761,
      "attack": 0.16,
      "defense": 0.16,
      "qualify": 20.3,
      "r16": 16.5,
      "qf": 6.1,
      "sf": 1.4,
      "final": 0.3,
      "champion": 0
    },
    {
      "team": "Panama",
      "group": "L",
      "elo": 1738,
      "attack": -0.14,
      "defense": -0.04,
      "qualify": 7.3,
      "r16": 7.2,
      "qf": 2.7,
      "sf": 0.7,
      "final": 0.2,
      "champion": 0.0
    },
    {
      "team": "Tunisia",
      "group": "F",
      "elo": 1696,
      "attack": -0.02,
      "defense": 0.31,
      "qualify": 6.4,
      "r16": 6.7,
      "qf": 1.8,
      "sf": 0.4,
      "final": 0.1,
      "champion": 0
    },
    {
      "team": "Iraq",
      "group": "I",
      "elo": 1694,
      "attack": 0.04,
      "defense": 0.37,
      "qualify": 5.4,
      "r16": 8.1,
      "qf": 2.6,
      "sf": 1.0,
      "final": 0.2,
      "champion": 0.0
    },
    {
      "team": "DR Congo",
      "group": "K",
      "elo": 1693,
      "attack": 0.01,
      "defense": 0.19,
      "qualify": 27.8,
      "r16": 15.0,
      "qf": 4.7,
      "sf": 1.5,
      "final": 0.3,
      "champion": 0.0
    },
    {
      "team": "Jordan",
      "group": "J",
      "elo": 1689,
      "attack": -0.13,
      "defense": 0.24,
      "qualify": 4.8,
      "r16": 8.6,
      "qf": 2.4,
      "sf": 0.6,
      "final": 0.2,
      "champion": 0.0
    },
    {
      "team": "New Zealand",
      "group": "G",
      "elo": 1654,
      "attack": 0.19,
      "defense": -0.02,
      "qualify": 38.6,
      "r16": 18.4,
      "qf": 5.2,
      "sf": 1.1,
      "final": 0.3,
      "champion": 0.0
    },
    {
      "team": "South Africa",
      "group": "A",
      "elo": 1631,
      "attack": -0.12,
      "defense": 0.34,
      "qualify": 16.2,
      "r16": 6.9,
      "qf": 2.2,
      "sf": 0.5,
      "final": 0.2,
      "champion": 0.0
    },
    {
      "team": "Ghana",
      "group": "L",
      "elo": 1615,
      "attack": 0.07,
      "defense": 0.29,
      "qualify": 58.9,
      "r16": 22.6,
      "qf": 5.3,
      "sf": 1.5,
      "final": 0.2,
      "champion": 0.0
    },
    {
      "team": "Qatar",
      "group": "B",
      "elo": 1566,
      "attack": -0.04,
      "defense": 0.18,
      "qualify": 0,
      "r16": 6.8,
      "qf": 1.7,
      "sf": 0.2,
      "final": 0.0,
      "champion": 0
    },
    {
      "team": "Curaçao",
      "group": "E",
      "elo": 1529,
      "attack": 0.12,
      "defense": -0.07,
      "qualify": 5.1,
      "r16": 3.6,
      "qf": 0.8,
      "sf": 0.2,
      "final": 0,
      "champion": 0
    }
  ],
  "bracket": [
    {
      "name": "32强",
      "games": [
        {
          "id": 73,
          "round": "32强",
          "date": "",
          "home": "Korea Republic",
          "away": "Canada",
          "home_win": 40.6,
          "draw": 27.3,
          "away_win": 32.1,
          "winner": "Korea Republic",
          "winner_prob": 55.8,
          "path_note": "A组第2 vs B组第2"
        },
        {
          "id": 74,
          "round": "32强",
          "date": "",
          "home": "Germany",
          "away": "Japan",
          "home_win": 42.3,
          "draw": 25.5,
          "away_win": 32.2,
          "winner": "Germany",
          "winner_prob": 56.8,
          "path_note": "E组第1 vs 最佳第三名"
        },
        {
          "id": 75,
          "round": "32强",
          "date": "",
          "home": "Sweden",
          "away": "Brazil",
          "home_win": 20.8,
          "draw": 22.9,
          "away_win": 56.2,
          "winner": "Brazil",
          "winner_prob": 73.0,
          "path_note": "F组第1 vs C组第2"
        },
        {
          "id": 76,
          "round": "32强",
          "date": "",
          "home": "Morocco",
          "away": "Netherlands",
          "home_win": 34.5,
          "draw": 26.9,
          "away_win": 38.6,
          "winner": "Netherlands",
          "winner_prob": 52.8,
          "path_note": "C组第1 vs F组第2"
        },
        {
          "id": 77,
          "round": "32强",
          "date": "",
          "home": "France",
          "away": "Paraguay",
          "home_win": 56.5,
          "draw": 23.7,
          "away_win": 19.8,
          "winner": "France",
          "winner_prob": 74.0,
          "path_note": "I组第1 vs 最佳第三名"
        },
        {
          "id": 78,
          "round": "32强",
          "date": "",
          "home": "Ivory Coast",
          "away": "Norway",
          "home_win": 35.2,
          "draw": 26.8,
          "away_win": 38.0,
          "winner": "Norway",
          "winner_prob": 51.9,
          "path_note": "E组第2 vs I组第2"
        },
        {
          "id": 79,
          "round": "32强",
          "date": "",
          "home": "Mexico",
          "away": "Ecuador",
          "home_win": 43.6,
          "draw": 26.9,
          "away_win": 29.5,
          "winner": "Mexico",
          "winner_prob": 59.6,
          "path_note": "A组第1 vs 最佳第三名"
        },
        {
          "id": 80,
          "round": "32强",
          "date": "",
          "home": "England",
          "away": "Algeria",
          "home_win": 50.8,
          "draw": 25.0,
          "away_win": 24.3,
          "winner": "England",
          "winner_prob": 67.6,
          "path_note": "L组第1 vs 最佳第三名"
        },
        {
          "id": 81,
          "round": "32强",
          "date": "",
          "home": "USA",
          "away": "Senegal",
          "home_win": 34.7,
          "draw": 27.8,
          "away_win": 37.5,
          "winner": "Senegal",
          "winner_prob": 51.9,
          "path_note": "D组第1 vs 最佳第三名"
        },
        {
          "id": 82,
          "round": "32强",
          "date": "",
          "home": "Belgium",
          "away": "Croatia",
          "home_win": 37.0,
          "draw": 26.3,
          "away_win": 36.7,
          "winner": "Belgium",
          "winner_prob": 50.2,
          "path_note": "G组第1 vs 最佳第三名"
        },
        {
          "id": 83,
          "round": "32强",
          "date": "",
          "home": "Portugal",
          "away": "Ghana",
          "home_win": 62.9,
          "draw": 21.6,
          "away_win": 15.5,
          "winner": "Portugal",
          "winner_prob": 80.2,
          "path_note": "K组第2 vs L组第2"
        },
        {
          "id": 84,
          "round": "32强",
          "date": "",
          "home": "Spain",
          "away": "Austria",
          "home_win": 57.0,
          "draw": 22.8,
          "away_win": 20.2,
          "winner": "Spain",
          "winner_prob": 73.8,
          "path_note": "H组第1 vs J组第2"
        },
        {
          "id": 85,
          "round": "32强",
          "date": "",
          "home": "Switzerland",
          "away": "Egypt",
          "home_win": 40.4,
          "draw": 26.8,
          "away_win": 32.8,
          "winner": "Switzerland",
          "winner_prob": 55.2,
          "path_note": "B组第1 vs 最佳第三名"
        },
        {
          "id": 86,
          "round": "32强",
          "date": "",
          "home": "Argentina",
          "away": "Uruguay",
          "home_win": 54.9,
          "draw": 24.0,
          "away_win": 21.1,
          "winner": "Argentina",
          "winner_prob": 72.2,
          "path_note": "J组第1 vs H组第2"
        },
        {
          "id": 87,
          "round": "32强",
          "date": "",
          "home": "Colombia",
          "away": "Scotland",
          "home_win": 49.3,
          "draw": 26.0,
          "away_win": 24.7,
          "winner": "Colombia",
          "winner_prob": 66.6,
          "path_note": "K组第1 vs 最佳第三名"
        },
        {
          "id": 88,
          "round": "32强",
          "date": "",
          "home": "Australia",
          "away": "Iran",
          "home_win": 34.2,
          "draw": 26.4,
          "away_win": 39.5,
          "winner": "Iran",
          "winner_prob": 53.6,
          "path_note": "D组第2 vs G组第2"
        }
      ]
    },
    {
      "name": "16强",
      "games": [
        {
          "id": 89,
          "round": "16强",
          "date": "",
          "home": "Korea Republic",
          "away": "Germany",
          "home_win": 26.9,
          "draw": 24.9,
          "away_win": 48.2,
          "winner": "Germany",
          "winner_prob": 64.2
        },
        {
          "id": 90,
          "round": "16强",
          "date": "",
          "home": "Brazil",
          "away": "Netherlands",
          "home_win": 43.6,
          "draw": 25.4,
          "away_win": 31.0,
          "winner": "Brazil",
          "winner_prob": 58.4
        },
        {
          "id": 91,
          "round": "16强",
          "date": "",
          "home": "France",
          "away": "Norway",
          "home_win": 52.1,
          "draw": 24.3,
          "away_win": 23.5,
          "winner": "France",
          "winner_prob": 68.9
        },
        {
          "id": 92,
          "round": "16强",
          "date": "",
          "home": "Mexico",
          "away": "England",
          "home_win": 30.3,
          "draw": 25.7,
          "away_win": 44.0,
          "winner": "England",
          "winner_prob": 59.2
        },
        {
          "id": 93,
          "round": "16强",
          "date": "",
          "home": "Senegal",
          "away": "Belgium",
          "home_win": 30.6,
          "draw": 26.7,
          "away_win": 42.7,
          "winner": "Belgium",
          "winner_prob": 58.3
        },
        {
          "id": 94,
          "round": "16强",
          "date": "",
          "home": "Portugal",
          "away": "Spain",
          "home_win": 27.6,
          "draw": 25.5,
          "away_win": 46.9,
          "winner": "Spain",
          "winner_prob": 63.0
        },
        {
          "id": 95,
          "round": "16强",
          "date": "",
          "home": "Switzerland",
          "away": "Argentina",
          "home_win": 18.9,
          "draw": 22.8,
          "away_win": 58.3,
          "winner": "Argentina",
          "winner_prob": 75.5
        },
        {
          "id": 96,
          "round": "16强",
          "date": "",
          "home": "Colombia",
          "away": "Iran",
          "home_win": 40.1,
          "draw": 27.5,
          "away_win": 32.4,
          "winner": "Colombia",
          "winner_prob": 55.3
        }
      ]
    },
    {
      "name": "8强",
      "games": [
        {
          "id": 97,
          "round": "8强",
          "date": "",
          "home": "Germany",
          "away": "Brazil",
          "home_win": 33.7,
          "draw": 25.4,
          "away_win": 40.9,
          "winner": "Brazil",
          "winner_prob": 54.8
        },
        {
          "id": 98,
          "round": "8强",
          "date": "",
          "home": "France",
          "away": "England",
          "home_win": 36.9,
          "draw": 25.8,
          "away_win": 37.3,
          "winner": "England",
          "winner_prob": 50.3
        },
        {
          "id": 99,
          "round": "8强",
          "date": "",
          "home": "Belgium",
          "away": "Spain",
          "home_win": 23.4,
          "draw": 24.0,
          "away_win": 52.6,
          "winner": "Spain",
          "winner_prob": 69.2
        },
        {
          "id": 100,
          "round": "8强",
          "date": "",
          "home": "Argentina",
          "away": "Colombia",
          "home_win": 49.2,
          "draw": 25.9,
          "away_win": 24.9,
          "winner": "Argentina",
          "winner_prob": 66.4
        }
      ]
    },
    {
      "name": "半决赛",
      "games": [
        {
          "id": 101,
          "round": "半决赛",
          "date": "",
          "home": "Brazil",
          "away": "England",
          "home_win": 37.6,
          "draw": 25.8,
          "away_win": 36.6,
          "winner": "Brazil",
          "winner_prob": 50.7
        },
        {
          "id": 102,
          "round": "半决赛",
          "date": "",
          "home": "Spain",
          "away": "Argentina",
          "home_win": 36.4,
          "draw": 26.3,
          "away_win": 37.3,
          "winner": "Argentina",
          "winner_prob": 50.6
        }
      ]
    },
    {
      "name": "决赛",
      "games": [
        {
          "id": 103,
          "round": "决赛",
          "date": "",
          "home": "Brazil",
          "away": "Argentina",
          "home_win": 31.4,
          "draw": 25.9,
          "away_win": 42.7,
          "winner": "Argentina",
          "winner_prob": 57.6
        }
      ]
    }
  ],
  "match_models": {
    "Korea Republic__Canada": {
      "id": 73,
      "round": "32强",
      "date": "",
      "home": "Korea Republic",
      "away": "Canada",
      "home_win": 40.6,
      "draw": 27.3,
      "away_win": 32.1,
      "winner": "Korea Republic",
      "winner_prob": 40.6,
      "path_note": "A组第2 vs B组第2",
      "lambda_home": 1.31,
      "lambda_away": 1.13,
      "matrix": [
        [
          8.7,
          9.9,
          5.6,
          2.1,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.4,
          12.9,
          7.3,
          2.7,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          7.5,
          8.4,
          4.8,
          1.8,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.3,
          3.7,
          2.1,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.1,
          1.2,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.9
        },
        {
          "score": "1-0",
          "prob": 11.4
        },
        {
          "score": "0-1",
          "prob": 9.9
        },
        {
          "score": "0-0",
          "prob": 8.7
        },
        {
          "score": "2-1",
          "prob": 8.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.8
        },
        {
          "score": "3-1",
          "prob": 3.7
        },
        {
          "score": "3-0",
          "prob": 3.3
        },
        {
          "score": "1-3",
          "prob": 2.7
        },
        {
          "score": "0-3",
          "prob": 2.1
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-4",
          "prob": 0.6,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.9,
        "margin_3_plus": 10.5,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Korea Republic Elo 1830 vs Canada 1836，差距 5 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Korea Republic 1.31 : 1.13 Canada，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.9%, 1-0 11.4%, 0-1 9.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Korea Republic，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Germany__Japan": {
      "id": 74,
      "round": "32强",
      "date": "",
      "home": "Germany",
      "away": "Japan",
      "home_win": 42.3,
      "draw": 25.5,
      "away_win": 32.2,
      "winner": "Germany",
      "winner_prob": 42.3,
      "path_note": "E组第1 vs 最佳第三名",
      "lambda_home": 1.48,
      "lambda_away": 1.25,
      "matrix": [
        [
          6.5,
          8.2,
          5.1,
          2.1,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          9.6,
          12.1,
          7.6,
          3.2,
          1.0,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          7.1,
          8.9,
          5.6,
          2.3,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          3.5,
          4.4,
          2.8,
          1.2,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.3,
          1.6,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.1
        },
        {
          "score": "1-0",
          "prob": 9.6
        },
        {
          "score": "2-1",
          "prob": 8.9
        },
        {
          "score": "0-1",
          "prob": 8.2
        },
        {
          "score": "1-2",
          "prob": 7.6
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.6
        },
        {
          "score": "3-1",
          "prob": 4.4
        },
        {
          "score": "3-0",
          "prob": 3.5
        },
        {
          "score": "1-3",
          "prob": 3.2
        },
        {
          "score": "3-2",
          "prob": 2.8
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.3,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-2",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "1-4",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-4",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 29.1,
        "margin_3_plus": 12.4,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Germany Elo 1957 vs Japan 1924，差距 33 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Germany 1.48 : 1.25 Japan，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.1%, 1-0 9.6%, 2-1 8.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Germany，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Sweden__Brazil": {
      "id": 75,
      "round": "32强",
      "date": "",
      "home": "Sweden",
      "away": "Brazil",
      "home_win": 20.8,
      "draw": 22.9,
      "away_win": 56.2,
      "winner": "Brazil",
      "winner_prob": 56.2,
      "path_note": "F组第1 vs C组第2",
      "lambda_home": 1.01,
      "lambda_away": 1.81,
      "matrix": [
        [
          5.9,
          10.8,
          9.8,
          5.9,
          2.7,
          1.0,
          0.3,
          0.1,
          0.0
        ],
        [
          6.0,
          10.9,
          9.9,
          6.0,
          2.7,
          1.0,
          0.3,
          0.1,
          0.0
        ],
        [
          3.0,
          5.5,
          5.0,
          3.0,
          1.4,
          0.5,
          0.2,
          0.0,
          0.0
        ],
        [
          1.0,
          1.8,
          1.7,
          1.0,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          0.3,
          0.5,
          0.4,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 10.9
        },
        {
          "score": "0-1",
          "prob": 10.8
        },
        {
          "score": "1-2",
          "prob": 9.9
        },
        {
          "score": "0-2",
          "prob": 9.8
        },
        {
          "score": "1-0",
          "prob": 6.0
        }
      ],
      "big_score_candidates": [
        {
          "score": "1-3",
          "prob": 6.0
        },
        {
          "score": "0-3",
          "prob": 5.9
        },
        {
          "score": "2-2",
          "prob": 5.0
        },
        {
          "score": "2-3",
          "prob": 3.0
        },
        {
          "score": "0-4",
          "prob": 2.7
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 3.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 2.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-2",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.4,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "1-5",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-5",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 31.6,
        "margin_3_plus": 17.0,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Sweden Elo 1772 vs Brazil 2001，差距 229 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Sweden 1.01 : 1.81 Brazil，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 10.9%, 0-1 10.8%, 1-2 9.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Brazil，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Morocco__Netherlands": {
      "id": 76,
      "round": "32强",
      "date": "",
      "home": "Morocco",
      "away": "Netherlands",
      "home_win": 34.5,
      "draw": 26.9,
      "away_win": 38.6,
      "winner": "Netherlands",
      "winner_prob": 38.6,
      "path_note": "C组第1 vs F组第2",
      "lambda_home": 1.22,
      "lambda_away": 1.3,
      "matrix": [
        [
          8.1,
          10.5,
          6.8,
          3.0,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          9.8,
          12.8,
          8.3,
          3.6,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.0,
          7.8,
          5.1,
          2.2,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.4,
          3.1,
          2.0,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          1.0,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.8
        },
        {
          "score": "0-1",
          "prob": 10.5
        },
        {
          "score": "1-0",
          "prob": 9.8
        },
        {
          "score": "1-2",
          "prob": 8.3
        },
        {
          "score": "0-0",
          "prob": 8.1
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.1
        },
        {
          "score": "1-3",
          "prob": 3.6
        },
        {
          "score": "3-1",
          "prob": 3.1
        },
        {
          "score": "0-3",
          "prob": 3.0
        },
        {
          "score": "3-0",
          "prob": 2.4
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-1",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.0,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "2-4",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "4-0",
          "prob": 0.7,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.6,
        "margin_3_plus": 10.9,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Morocco Elo 1935 vs Netherlands 1935，差距 0 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Morocco 1.22 : 1.3 Netherlands，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.8%, 0-1 10.5%, 1-0 9.8%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Netherlands，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "France__Paraguay": {
      "id": 77,
      "round": "32强",
      "date": "",
      "home": "France",
      "away": "Paraguay",
      "home_win": 56.5,
      "draw": 23.7,
      "away_win": 19.8,
      "winner": "France",
      "winner_prob": 56.5,
      "path_note": "I组第1 vs 最佳第三名",
      "lambda_home": 1.72,
      "lambda_away": 0.91,
      "matrix": [
        [
          7.1,
          6.5,
          3.0,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.3,
          11.3,
          5.2,
          1.6,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.6,
          9.7,
          4.4,
          1.4,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          6.1,
          5.6,
          2.6,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.6,
          2.4,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.9,
          0.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.3
        },
        {
          "score": "1-1",
          "prob": 11.3
        },
        {
          "score": "2-0",
          "prob": 10.6
        },
        {
          "score": "2-1",
          "prob": 9.7
        },
        {
          "score": "0-0",
          "prob": 7.1
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 6.1
        },
        {
          "score": "3-1",
          "prob": 5.6
        },
        {
          "score": "2-2",
          "prob": 4.4
        },
        {
          "score": "3-2",
          "prob": 2.6
        },
        {
          "score": "4-0",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 2.6,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-0",
          "prob": 0.9,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "5-1",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.2,
        "margin_3_plus": 15.7,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "France Elo 2039 vs Paraguay 1819，差距 220 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 France 1.72 : 0.91 Paraguay，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.3%, 1-1 11.3%, 2-0 10.6%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 France，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Ivory Coast__Norway": {
      "id": 78,
      "round": "32强",
      "date": "",
      "home": "Ivory Coast",
      "away": "Norway",
      "home_win": 35.2,
      "draw": 26.8,
      "away_win": 38.0,
      "winner": "Norway",
      "winner_prob": 38.0,
      "path_note": "E组第2 vs I组第2",
      "lambda_home": 1.23,
      "lambda_away": 1.29,
      "matrix": [
        [
          8.0,
          10.4,
          6.7,
          2.9,
          0.9,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          9.9,
          12.8,
          8.2,
          3.5,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.1,
          7.9,
          5.1,
          2.2,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.5,
          3.2,
          2.1,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.8,
          1.0,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.8
        },
        {
          "score": "0-1",
          "prob": 10.4
        },
        {
          "score": "1-0",
          "prob": 9.9
        },
        {
          "score": "1-2",
          "prob": 8.2
        },
        {
          "score": "0-0",
          "prob": 8.0
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.1
        },
        {
          "score": "1-3",
          "prob": 3.5
        },
        {
          "score": "3-1",
          "prob": 3.2
        },
        {
          "score": "0-3",
          "prob": 2.9
        },
        {
          "score": "3-0",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-1",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-4",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-0",
          "prob": 0.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.6,
        "margin_3_plus": 10.8,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Ivory Coast Elo 1806 vs Norway 1872，差距 66 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Ivory Coast 1.23 : 1.29 Norway，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.8%, 0-1 10.4%, 1-0 9.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Norway，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Mexico__Ecuador": {
      "id": 79,
      "round": "32强",
      "date": "",
      "home": "Mexico",
      "away": "Ecuador",
      "home_win": 43.6,
      "draw": 26.9,
      "away_win": 29.5,
      "winner": "Mexico",
      "winner_prob": 43.6,
      "path_note": "A组第1 vs 最佳第三名",
      "lambda_home": 1.38,
      "lambda_away": 1.09,
      "matrix": [
        [
          8.5,
          9.2,
          5.0,
          1.8,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.7,
          12.7,
          6.9,
          2.5,
          0.7,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          8.1,
          8.8,
          4.8,
          1.7,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.7,
          4.0,
          2.2,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.3,
          1.4,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.7
        },
        {
          "score": "1-0",
          "prob": 11.7
        },
        {
          "score": "0-1",
          "prob": 9.2
        },
        {
          "score": "2-1",
          "prob": 8.8
        },
        {
          "score": "0-0",
          "prob": 8.5
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.8
        },
        {
          "score": "3-1",
          "prob": 4.0
        },
        {
          "score": "3-0",
          "prob": 3.7
        },
        {
          "score": "1-3",
          "prob": 2.5
        },
        {
          "score": "3-2",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.3,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-4",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.4,
        "margin_3_plus": 10.9,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Mexico Elo 1935 vs Ecuador 1912，差距 23 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Mexico 1.38 : 1.09 Ecuador，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.7%, 1-0 11.7%, 0-1 9.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Mexico，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "England__Algeria": {
      "id": 80,
      "round": "32强",
      "date": "",
      "home": "England",
      "away": "Algeria",
      "home_win": 50.8,
      "draw": 25.0,
      "away_win": 24.3,
      "winner": "England",
      "winner_prob": 50.8,
      "path_note": "L组第1 vs 最佳第三名",
      "lambda_home": 1.6,
      "lambda_away": 1.03,
      "matrix": [
        [
          7.2,
          7.4,
          3.8,
          1.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.6,
          11.9,
          6.1,
          2.1,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          9.3,
          9.5,
          4.9,
          1.7,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          5.0,
          5.1,
          2.6,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.0,
          2.0,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 11.9
        },
        {
          "score": "1-0",
          "prob": 11.6
        },
        {
          "score": "2-1",
          "prob": 9.5
        },
        {
          "score": "2-0",
          "prob": 9.3
        },
        {
          "score": "0-1",
          "prob": 7.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-1",
          "prob": 5.1
        },
        {
          "score": "3-0",
          "prob": 5.0
        },
        {
          "score": "2-2",
          "prob": 4.9
        },
        {
          "score": "3-2",
          "prob": 2.6
        },
        {
          "score": "1-3",
          "prob": 2.1
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 2.0,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.6,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.7,
        "margin_3_plus": 13.5,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "England Elo 1990 vs Algeria 1854，差距 136 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 England 1.6 : 1.03 Algeria，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 11.9%, 1-0 11.6%, 2-1 9.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 England，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "USA__Senegal": {
      "id": 81,
      "round": "32强",
      "date": "",
      "home": "USA",
      "away": "Senegal",
      "home_win": 34.7,
      "draw": 27.8,
      "away_win": 37.5,
      "winner": "Senegal",
      "winner_prob": 37.5,
      "path_note": "D组第1 vs 最佳第三名",
      "lambda_home": 1.16,
      "lambda_away": 1.22,
      "matrix": [
        [
          9.3,
          11.3,
          6.9,
          2.8,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          10.8,
          13.1,
          8.0,
          3.2,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          6.2,
          7.6,
          4.6,
          1.9,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          2.4,
          2.9,
          1.8,
          0.7,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          0.8,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 13.1
        },
        {
          "score": "0-1",
          "prob": 11.3
        },
        {
          "score": "1-0",
          "prob": 10.8
        },
        {
          "score": "0-0",
          "prob": 9.3
        },
        {
          "score": "1-2",
          "prob": 8.0
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.6
        },
        {
          "score": "1-3",
          "prob": 3.2
        },
        {
          "score": "3-1",
          "prob": 2.9
        },
        {
          "score": "0-3",
          "prob": 2.8
        },
        {
          "score": "3-0",
          "prob": 2.4
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-0",
          "prob": 0.7,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 21.2,
        "margin_3_plus": 9.6,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "USA Elo 1832 vs Senegal 1844，差距 12 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 USA 1.16 : 1.22 Senegal，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 13.1%, 0-1 11.3%, 1-0 10.8%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Senegal，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Belgium__Croatia": {
      "id": 82,
      "round": "32强",
      "date": "",
      "home": "Belgium",
      "away": "Croatia",
      "home_win": 37.0,
      "draw": 26.3,
      "away_win": 36.7,
      "winner": "Belgium",
      "winner_prob": 37.0,
      "path_note": "G组第1 vs 最佳第三名",
      "lambda_home": 1.31,
      "lambda_away": 1.3,
      "matrix": [
        [
          7.3,
          9.5,
          6.2,
          2.7,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          9.6,
          12.5,
          8.2,
          3.5,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.3,
          8.2,
          5.3,
          2.3,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.8,
          3.6,
          2.3,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.9,
          1.2,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.5
        },
        {
          "score": "1-0",
          "prob": 9.6
        },
        {
          "score": "0-1",
          "prob": 9.5
        },
        {
          "score": "1-2",
          "prob": 8.2
        },
        {
          "score": "2-1",
          "prob": 8.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.3
        },
        {
          "score": "3-1",
          "prob": 3.6
        },
        {
          "score": "1-3",
          "prob": 3.5
        },
        {
          "score": "3-0",
          "prob": 2.8
        },
        {
          "score": "0-3",
          "prob": 2.7
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-1",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-4",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-0",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.4,
        "margin_3_plus": 11.4,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Belgium Elo 1924 vs Croatia 1901，差距 23 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Belgium 1.31 : 1.3 Croatia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.5%, 1-0 9.6%, 0-1 9.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Belgium，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Portugal__Ghana": {
      "id": 83,
      "round": "32强",
      "date": "",
      "home": "Portugal",
      "away": "Ghana",
      "home_win": 62.9,
      "draw": 21.6,
      "away_win": 15.5,
      "winner": "Portugal",
      "winner_prob": 62.9,
      "path_note": "K组第2 vs L组第2",
      "lambda_home": 1.9,
      "lambda_away": 0.82,
      "matrix": [
        [
          6.6,
          5.4,
          2.2,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.6,
          10.3,
          4.2,
          1.1,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.9,
          9.7,
          4.0,
          1.1,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          7.5,
          6.2,
          2.5,
          0.7,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          3.6,
          2.9,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.4,
          1.1,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.6
        },
        {
          "score": "2-0",
          "prob": 11.9
        },
        {
          "score": "1-1",
          "prob": 10.3
        },
        {
          "score": "2-1",
          "prob": 9.7
        },
        {
          "score": "3-0",
          "prob": 7.5
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 7.5
        },
        {
          "score": "3-1",
          "prob": 6.2
        },
        {
          "score": "2-2",
          "prob": 4.0
        },
        {
          "score": "4-0",
          "prob": 3.6
        },
        {
          "score": "4-1",
          "prob": 2.9
        }
      ],
      "bold_score_candidates": [
        {
          "score": "4-0",
          "prob": 3.6,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "5-0",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "4-2",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-1",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.5,
        "margin_3_plus": 19.0,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Portugal Elo 1979 vs Ghana 1615，差距 364 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Portugal 1.9 : 0.82 Ghana，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.6%, 2-0 11.9%, 1-1 10.3%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Portugal，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Spain__Austria": {
      "id": 84,
      "round": "32强",
      "date": "",
      "home": "Spain",
      "away": "Austria",
      "home_win": 57.0,
      "draw": 22.8,
      "away_win": 20.2,
      "winner": "Spain",
      "winner_prob": 57.0,
      "path_note": "H组第1 vs J组第2",
      "lambda_home": 1.82,
      "lambda_away": 0.98,
      "matrix": [
        [
          6.1,
          6.0,
          2.9,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          11.0,
          10.8,
          5.3,
          1.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.0,
          9.9,
          4.9,
          1.6,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          6.1,
          6.0,
          2.9,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.8,
          2.7,
          1.3,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.0,
          1.0,
          0.5,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 11.0
        },
        {
          "score": "1-1",
          "prob": 10.8
        },
        {
          "score": "2-0",
          "prob": 10.0
        },
        {
          "score": "2-1",
          "prob": 9.9
        },
        {
          "score": "0-0",
          "prob": 6.1
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 6.1
        },
        {
          "score": "3-1",
          "prob": 6.0
        },
        {
          "score": "2-2",
          "prob": 4.9
        },
        {
          "score": "3-2",
          "prob": 2.9
        },
        {
          "score": "4-0",
          "prob": 2.8
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 2.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.3,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-1",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-0",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 30.5,
        "margin_3_plus": 16.8,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Spain Elo 2083 vs Austria 1867，差距 216 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Spain 1.82 : 0.98 Austria，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 11.0%, 1-1 10.8%, 2-0 10.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Spain，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Switzerland__Egypt": {
      "id": 85,
      "round": "32强",
      "date": "",
      "home": "Switzerland",
      "away": "Egypt",
      "home_win": 40.4,
      "draw": 26.8,
      "away_win": 32.8,
      "winner": "Switzerland",
      "winner_prob": 40.4,
      "path_note": "B组第1 vs 最佳第三名",
      "lambda_home": 1.34,
      "lambda_away": 1.17,
      "matrix": [
        [
          8.1,
          9.5,
          5.6,
          2.2,
          0.6,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          10.9,
          12.7,
          7.5,
          2.9,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          7.2,
          8.5,
          5.0,
          2.0,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.2,
          3.8,
          2.2,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.1,
          1.3,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.7
        },
        {
          "score": "1-0",
          "prob": 10.9
        },
        {
          "score": "0-1",
          "prob": 9.5
        },
        {
          "score": "2-1",
          "prob": 8.5
        },
        {
          "score": "0-0",
          "prob": 8.1
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.0
        },
        {
          "score": "3-1",
          "prob": 3.8
        },
        {
          "score": "3-0",
          "prob": 3.2
        },
        {
          "score": "1-3",
          "prob": 2.9
        },
        {
          "score": "0-3",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.1,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 0.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "2-4",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.4,
        "margin_3_plus": 10.8,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Switzerland Elo 1882 vs Egypt 1776，差距 106 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Switzerland 1.34 : 1.17 Egypt，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.7%, 1-0 10.9%, 0-1 9.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Switzerland，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Argentina__Uruguay": {
      "id": 86,
      "round": "32强",
      "date": "",
      "home": "Argentina",
      "away": "Uruguay",
      "home_win": 54.9,
      "draw": 24.0,
      "away_win": 21.1,
      "winner": "Argentina",
      "winner_prob": 54.9,
      "path_note": "J组第1 vs H组第2",
      "lambda_home": 1.7,
      "lambda_away": 0.95,
      "matrix": [
        [
          7.1,
          6.7,
          3.2,
          1.0,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          12.0,
          11.4,
          5.4,
          1.7,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          10.2,
          9.7,
          4.6,
          1.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          5.8,
          5.5,
          2.6,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          2.4,
          2.3,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.8,
          0.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.0
        },
        {
          "score": "1-1",
          "prob": 11.4
        },
        {
          "score": "2-0",
          "prob": 10.2
        },
        {
          "score": "2-1",
          "prob": 9.7
        },
        {
          "score": "0-0",
          "prob": 7.1
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 5.8
        },
        {
          "score": "3-1",
          "prob": 5.5
        },
        {
          "score": "2-2",
          "prob": 4.6
        },
        {
          "score": "3-2",
          "prob": 2.6
        },
        {
          "score": "4-0",
          "prob": 2.4
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 2.4,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "5-1",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-0",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.1,
        "margin_3_plus": 15.0,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Argentina Elo 2110 vs Uruguay 1893，差距 216 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Argentina 1.7 : 0.95 Uruguay，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.0%, 1-1 11.4%, 2-0 10.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Argentina，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Colombia__Scotland": {
      "id": 87,
      "round": "32强",
      "date": "",
      "home": "Colombia",
      "away": "Scotland",
      "home_win": 49.3,
      "draw": 26.0,
      "away_win": 24.7,
      "winner": "Colombia",
      "winner_prob": 49.3,
      "path_note": "K组第1 vs 最佳第三名",
      "lambda_home": 1.5,
      "lambda_away": 0.98,
      "matrix": [
        [
          8.3,
          8.2,
          4.0,
          1.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          12.5,
          12.3,
          6.0,
          2.0,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          9.4,
          9.2,
          4.5,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.7,
          4.6,
          2.3,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.8,
          1.7,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.5
        },
        {
          "score": "1-1",
          "prob": 12.3
        },
        {
          "score": "2-0",
          "prob": 9.4
        },
        {
          "score": "2-1",
          "prob": 9.2
        },
        {
          "score": "0-0",
          "prob": 8.3
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 4.7
        },
        {
          "score": "3-1",
          "prob": 4.6
        },
        {
          "score": "2-2",
          "prob": 4.5
        },
        {
          "score": "3-2",
          "prob": 2.3
        },
        {
          "score": "1-3",
          "prob": 2.0
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-0",
          "prob": 1.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.5,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 23.8,
        "margin_3_plus": 12.2,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Colombia Elo 1993 vs Scotland 1761，差距 232 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Colombia 1.5 : 0.98 Scotland，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.5%, 1-1 12.3%, 2-0 9.4%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Colombia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Australia__Iran": {
      "id": 88,
      "round": "32强",
      "date": "",
      "home": "Australia",
      "away": "Iran",
      "home_win": 34.2,
      "draw": 26.4,
      "away_win": 39.5,
      "winner": "Iran",
      "winner_prob": 39.5,
      "path_note": "D组第2 vs G组第2",
      "lambda_home": 1.24,
      "lambda_away": 1.36,
      "matrix": [
        [
          7.4,
          10.1,
          6.8,
          3.1,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          9.2,
          12.5,
          8.5,
          3.8,
          1.3,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          5.7,
          7.8,
          5.3,
          2.4,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.4,
          3.2,
          2.2,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          1.0,
          0.7,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.5
        },
        {
          "score": "0-1",
          "prob": 10.1
        },
        {
          "score": "1-0",
          "prob": 9.2
        },
        {
          "score": "1-2",
          "prob": 8.5
        },
        {
          "score": "2-1",
          "prob": 7.8
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.3
        },
        {
          "score": "1-3",
          "prob": 3.8
        },
        {
          "score": "3-1",
          "prob": 3.2
        },
        {
          "score": "0-3",
          "prob": 3.1
        },
        {
          "score": "2-3",
          "prob": 2.4
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 1.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.0,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "4-2",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.1,
        "margin_3_plus": 11.3,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Australia Elo 1819 vs Iran 1849，差距 30 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Australia 1.24 : 1.36 Iran，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.5%, 0-1 10.1%, 1-0 9.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Iran，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Korea Republic__Germany": {
      "id": 89,
      "round": "16强",
      "date": "",
      "home": "Korea Republic",
      "away": "Germany",
      "home_win": 26.9,
      "draw": 24.9,
      "away_win": 48.2,
      "winner": "Germany",
      "winner_prob": 48.2,
      "lambda_home": 1.12,
      "lambda_away": 1.59,
      "matrix": [
        [
          6.6,
          10.5,
          8.4,
          4.5,
          1.8,
          0.6,
          0.1,
          0.0,
          0.0
        ],
        [
          7.4,
          11.8,
          9.4,
          5.0,
          2.0,
          0.6,
          0.2,
          0.0,
          0.0
        ],
        [
          4.2,
          6.6,
          5.3,
          2.8,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          1.6,
          2.5,
          2.0,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.7,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 11.8
        },
        {
          "score": "0-1",
          "prob": 10.5
        },
        {
          "score": "1-2",
          "prob": 9.4
        },
        {
          "score": "0-2",
          "prob": 8.4
        },
        {
          "score": "1-0",
          "prob": 7.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.3
        },
        {
          "score": "1-3",
          "prob": 5.0
        },
        {
          "score": "0-3",
          "prob": 4.5
        },
        {
          "score": "2-3",
          "prob": 2.8
        },
        {
          "score": "3-1",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-2",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "0-4",
          "prob": 1.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "1-5",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.6,
        "margin_3_plus": 13.4,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Korea Republic Elo 1830 vs Germany 1957，差距 126 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Korea Republic 1.12 : 1.59 Germany，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 11.8%, 0-1 10.5%, 1-2 9.4%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Germany，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Brazil__Netherlands": {
      "id": 90,
      "round": "16强",
      "date": "",
      "home": "Brazil",
      "away": "Netherlands",
      "home_win": 43.6,
      "draw": 25.4,
      "away_win": 31.0,
      "winner": "Brazil",
      "winner_prob": 43.6,
      "lambda_home": 1.5,
      "lambda_away": 1.23,
      "matrix": [
        [
          6.5,
          8.0,
          4.9,
          2.0,
          0.6,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          9.8,
          12.0,
          7.4,
          3.0,
          0.9,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          7.4,
          9.0,
          5.5,
          2.3,
          0.7,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          3.7,
          4.5,
          2.8,
          1.1,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.4,
          1.7,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.4,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.0
        },
        {
          "score": "1-0",
          "prob": 9.8
        },
        {
          "score": "2-1",
          "prob": 9.0
        },
        {
          "score": "0-1",
          "prob": 8.0
        },
        {
          "score": "1-2",
          "prob": 7.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.5
        },
        {
          "score": "3-1",
          "prob": 4.5
        },
        {
          "score": "3-0",
          "prob": 3.7
        },
        {
          "score": "1-3",
          "prob": 3.0
        },
        {
          "score": "3-2",
          "prob": 2.8
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.4,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-2",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "1-4",
          "prob": 0.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-4",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.6,
        "margin_3_plus": 12.4,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Brazil Elo 2001 vs Netherlands 1935，差距 66 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Brazil 1.5 : 1.23 Netherlands，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.0%, 1-0 9.8%, 2-1 9.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Brazil，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "France__Norway": {
      "id": 91,
      "round": "16强",
      "date": "",
      "home": "France",
      "away": "Norway",
      "home_win": 52.1,
      "draw": 24.3,
      "away_win": 23.5,
      "winner": "France",
      "winner_prob": 52.1,
      "lambda_home": 1.67,
      "lambda_away": 1.04,
      "matrix": [
        [
          6.7,
          6.9,
          3.6,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.2,
          11.6,
          6.0,
          2.1,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          9.3,
          9.6,
          5.0,
          1.7,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          5.2,
          5.4,
          2.8,
          1.0,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          2.2,
          2.2,
          1.2,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.7,
          0.7,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 11.6
        },
        {
          "score": "1-0",
          "prob": 11.2
        },
        {
          "score": "2-1",
          "prob": 9.6
        },
        {
          "score": "2-0",
          "prob": 9.3
        },
        {
          "score": "0-1",
          "prob": 6.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-1",
          "prob": 5.4
        },
        {
          "score": "3-0",
          "prob": 5.2
        },
        {
          "score": "2-2",
          "prob": 5.0
        },
        {
          "score": "3-2",
          "prob": 2.8
        },
        {
          "score": "4-0",
          "prob": 2.2
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 2.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 2.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 1.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.7,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.3,
        "margin_3_plus": 14.2,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "France Elo 2039 vs Norway 1872，差距 167 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 France 1.67 : 1.04 Norway，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 11.6%, 1-0 11.2%, 2-1 9.6%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 France，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Mexico__England": {
      "id": 92,
      "round": "16强",
      "date": "",
      "home": "Mexico",
      "away": "England",
      "home_win": 30.3,
      "draw": 25.7,
      "away_win": 44.0,
      "winner": "England",
      "winner_prob": 44.0,
      "lambda_home": 1.18,
      "lambda_away": 1.47,
      "matrix": [
        [
          7.0,
          10.4,
          7.7,
          3.8,
          1.4,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          8.3,
          12.2,
          9.0,
          4.4,
          1.6,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          4.9,
          7.2,
          5.3,
          2.6,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          1.9,
          2.8,
          2.1,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.8,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.2
        },
        {
          "score": "0-1",
          "prob": 10.4
        },
        {
          "score": "1-2",
          "prob": 9.0
        },
        {
          "score": "1-0",
          "prob": 8.3
        },
        {
          "score": "0-2",
          "prob": 7.7
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.3
        },
        {
          "score": "1-3",
          "prob": 4.4
        },
        {
          "score": "0-3",
          "prob": 3.8
        },
        {
          "score": "3-1",
          "prob": 2.8
        },
        {
          "score": "2-3",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.6,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.4,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.1,
        "margin_3_plus": 12.0,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Mexico Elo 1935 vs England 1990，差距 55 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Mexico 1.18 : 1.47 England，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.2%, 0-1 10.4%, 1-2 9.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 England，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Senegal__Belgium": {
      "id": 93,
      "round": "16强",
      "date": "",
      "home": "Senegal",
      "away": "Belgium",
      "home_win": 30.6,
      "draw": 26.7,
      "away_win": 42.7,
      "winner": "Belgium",
      "winner_prob": 42.7,
      "lambda_home": 1.13,
      "lambda_away": 1.38,
      "matrix": [
        [
          8.1,
          11.2,
          7.8,
          3.6,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          9.2,
          12.7,
          8.8,
          4.0,
          1.4,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          5.2,
          7.1,
          4.9,
          2.3,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          1.9,
          2.7,
          1.9,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.8,
          0.5,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.7
        },
        {
          "score": "0-1",
          "prob": 11.2
        },
        {
          "score": "1-0",
          "prob": 9.2
        },
        {
          "score": "1-2",
          "prob": 8.8
        },
        {
          "score": "0-0",
          "prob": 8.1
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.9
        },
        {
          "score": "1-3",
          "prob": 4.0
        },
        {
          "score": "0-3",
          "prob": 3.6
        },
        {
          "score": "3-1",
          "prob": 2.7
        },
        {
          "score": "2-3",
          "prob": 2.3
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "4-1",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.3,
        "margin_3_plus": 11.0,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Senegal Elo 1844 vs Belgium 1924，差距 80 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Senegal 1.13 : 1.38 Belgium，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.7%, 0-1 11.2%, 1-0 9.2%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Belgium，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Portugal__Spain": {
      "id": 94,
      "round": "16强",
      "date": "",
      "home": "Portugal",
      "away": "Spain",
      "home_win": 27.6,
      "draw": 25.5,
      "away_win": 46.9,
      "winner": "Spain",
      "winner_prob": 46.9,
      "lambda_home": 1.11,
      "lambda_away": 1.53,
      "matrix": [
        [
          7.2,
          10.9,
          8.4,
          4.3,
          1.6,
          0.5,
          0.1,
          0.0,
          0.0
        ],
        [
          7.9,
          12.1,
          9.3,
          4.7,
          1.8,
          0.6,
          0.1,
          0.0,
          0.0
        ],
        [
          4.4,
          6.7,
          5.1,
          2.6,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          1.6,
          2.5,
          1.9,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.7,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.1
        },
        {
          "score": "0-1",
          "prob": 10.9
        },
        {
          "score": "1-2",
          "prob": 9.3
        },
        {
          "score": "0-2",
          "prob": 8.4
        },
        {
          "score": "1-0",
          "prob": 7.9
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.1
        },
        {
          "score": "1-3",
          "prob": 4.7
        },
        {
          "score": "0-3",
          "prob": 4.3
        },
        {
          "score": "2-3",
          "prob": 2.6
        },
        {
          "score": "3-1",
          "prob": 2.5
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.6,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-1",
          "prob": 0.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "1-5",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.0,
        "margin_3_plus": 12.6,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Portugal Elo 1979 vs Spain 2083，差距 104 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Portugal 1.11 : 1.53 Spain，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.1%, 0-1 10.9%, 1-2 9.3%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Spain，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Switzerland__Argentina": {
      "id": 95,
      "round": "16强",
      "date": "",
      "home": "Switzerland",
      "away": "Argentina",
      "home_win": 18.9,
      "draw": 22.8,
      "away_win": 58.3,
      "winner": "Argentina",
      "winner_prob": 58.3,
      "lambda_home": 0.92,
      "lambda_away": 1.81,
      "matrix": [
        [
          6.5,
          11.8,
          10.7,
          6.4,
          2.9,
          1.1,
          0.3,
          0.1,
          0.0
        ],
        [
          6.0,
          10.9,
          9.8,
          5.9,
          2.7,
          1.0,
          0.3,
          0.1,
          0.0
        ],
        [
          2.8,
          5.0,
          4.5,
          2.7,
          1.2,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          0.8,
          1.5,
          1.4,
          0.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.4,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "0-1",
          "prob": 11.8
        },
        {
          "score": "1-1",
          "prob": 10.9
        },
        {
          "score": "0-2",
          "prob": 10.7
        },
        {
          "score": "1-2",
          "prob": 9.8
        },
        {
          "score": "0-0",
          "prob": 6.5
        }
      ],
      "big_score_candidates": [
        {
          "score": "0-3",
          "prob": 6.4
        },
        {
          "score": "1-3",
          "prob": 5.9
        },
        {
          "score": "2-2",
          "prob": 4.5
        },
        {
          "score": "0-4",
          "prob": 2.9
        },
        {
          "score": "1-4",
          "prob": 2.7
        }
      ],
      "bold_score_candidates": [
        {
          "score": "0-4",
          "prob": 2.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "1-4",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-3",
          "prob": 2.7,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 1.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-5",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 5
        },
        {
          "score": "1-5",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.9,
        "margin_3_plus": 17.0,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Switzerland Elo 1882 vs Argentina 2110，差距 227 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Switzerland 0.92 : 1.81 Argentina，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：0-1 11.8%, 1-1 10.9%, 0-2 10.7%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Argentina，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Colombia__Iran": {
      "id": 96,
      "round": "16强",
      "date": "",
      "home": "Colombia",
      "away": "Iran",
      "home_win": 40.1,
      "draw": 27.5,
      "away_win": 32.4,
      "winner": "Colombia",
      "winner_prob": 40.1,
      "lambda_home": 1.29,
      "lambda_away": 1.13,
      "matrix": [
        [
          9.0,
          10.1,
          5.7,
          2.1,
          0.6,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          11.5,
          13.0,
          7.3,
          2.7,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          7.4,
          8.3,
          4.7,
          1.8,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          3.2,
          3.6,
          2.0,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.0,
          1.2,
          0.6,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 13.0
        },
        {
          "score": "1-0",
          "prob": 11.5
        },
        {
          "score": "0-1",
          "prob": 10.1
        },
        {
          "score": "0-0",
          "prob": 9.0
        },
        {
          "score": "2-1",
          "prob": 8.3
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 4.7
        },
        {
          "score": "3-1",
          "prob": 3.6
        },
        {
          "score": "3-0",
          "prob": 3.2
        },
        {
          "score": "1-3",
          "prob": 2.7
        },
        {
          "score": "0-3",
          "prob": 2.1
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.0,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.0,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-4",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-4",
          "prob": 0.6,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 22.3,
        "margin_3_plus": 10.3,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Colombia Elo 1993 vs Iran 1849，差距 144 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Colombia 1.29 : 1.13 Iran，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 13.0%, 1-0 11.5%, 0-1 10.1%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Colombia，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Germany__Brazil": {
      "id": 97,
      "round": "8强",
      "date": "",
      "home": "Germany",
      "away": "Brazil",
      "home_win": 33.7,
      "draw": 25.4,
      "away_win": 40.9,
      "winner": "Brazil",
      "winner_prob": 40.9,
      "lambda_home": 1.3,
      "lambda_away": 1.45,
      "matrix": [
        [
          6.4,
          9.3,
          6.7,
          3.3,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          8.3,
          12.0,
          8.8,
          4.2,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          5.4,
          7.8,
          5.7,
          2.8,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          2.3,
          3.4,
          2.5,
          1.2,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.8,
          1.1,
          0.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.0
        },
        {
          "score": "0-1",
          "prob": 9.3
        },
        {
          "score": "1-2",
          "prob": 8.8
        },
        {
          "score": "1-0",
          "prob": 8.3
        },
        {
          "score": "2-1",
          "prob": 7.8
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.7
        },
        {
          "score": "1-3",
          "prob": 4.2
        },
        {
          "score": "3-1",
          "prob": 3.4
        },
        {
          "score": "0-3",
          "prob": 3.3
        },
        {
          "score": "2-3",
          "prob": 2.8
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-4",
          "prob": 1.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-1",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "2-4",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "4-2",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 29.4,
        "margin_3_plus": 12.3,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Germany Elo 1957 vs Brazil 2001，差距 45 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Germany 1.3 : 1.45 Brazil，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.0%, 0-1 9.3%, 1-2 8.8%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Brazil，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "France__England": {
      "id": 98,
      "round": "8强",
      "date": "",
      "home": "France",
      "away": "England",
      "home_win": 36.9,
      "draw": 25.8,
      "away_win": 37.3,
      "winner": "England",
      "winner_prob": 37.3,
      "lambda_home": 1.34,
      "lambda_away": 1.35,
      "matrix": [
        [
          6.7,
          9.1,
          6.2,
          2.8,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          9.0,
          12.2,
          8.3,
          3.7,
          1.3,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.1,
          8.2,
          5.6,
          2.5,
          0.9,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          2.7,
          3.7,
          2.5,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.9,
          1.2,
          0.8,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.2
        },
        {
          "score": "0-1",
          "prob": 9.1
        },
        {
          "score": "1-0",
          "prob": 9.0
        },
        {
          "score": "1-2",
          "prob": 8.3
        },
        {
          "score": "2-1",
          "prob": 8.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.6
        },
        {
          "score": "1-3",
          "prob": 3.7
        },
        {
          "score": "3-1",
          "prob": 3.7
        },
        {
          "score": "0-3",
          "prob": 2.8
        },
        {
          "score": "3-0",
          "prob": 2.7
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-1",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "2-4",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-4",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-0",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.3,
        "margin_3_plus": 11.9,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "France Elo 2039 vs England 1990，差距 50 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 France 1.34 : 1.35 England，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.2%, 0-1 9.1%, 1-0 9.0%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 England，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Belgium__Spain": {
      "id": 99,
      "round": "8强",
      "date": "",
      "home": "Belgium",
      "away": "Spain",
      "home_win": 23.4,
      "draw": 24.0,
      "away_win": 52.6,
      "winner": "Spain",
      "winner_prob": 52.6,
      "lambda_home": 1.05,
      "lambda_away": 1.71,
      "matrix": [
        [
          6.3,
          10.8,
          9.2,
          5.2,
          2.2,
          0.8,
          0.2,
          0.1,
          0.0
        ],
        [
          6.7,
          11.4,
          9.7,
          5.5,
          2.4,
          0.8,
          0.2,
          0.1,
          0.0
        ],
        [
          3.5,
          6.0,
          5.1,
          2.9,
          1.2,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          1.2,
          2.1,
          1.8,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.6,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 11.4
        },
        {
          "score": "0-1",
          "prob": 10.8
        },
        {
          "score": "1-2",
          "prob": 9.7
        },
        {
          "score": "0-2",
          "prob": 9.2
        },
        {
          "score": "1-0",
          "prob": 6.7
        }
      ],
      "big_score_candidates": [
        {
          "score": "1-3",
          "prob": 5.5
        },
        {
          "score": "0-3",
          "prob": 5.2
        },
        {
          "score": "2-2",
          "prob": 5.1
        },
        {
          "score": "2-3",
          "prob": 2.9
        },
        {
          "score": "1-4",
          "prob": 2.4
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.9,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 2.2,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-2",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-4",
          "prob": 1.2,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "1-5",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "0-5",
          "prob": 0.8,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 29.6,
        "margin_3_plus": 14.9,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Belgium Elo 1924 vs Spain 2083，差距 159 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Belgium 1.05 : 1.71 Spain，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 11.4%, 0-1 10.8%, 1-2 9.7%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Spain，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Argentina__Colombia": {
      "id": 100,
      "round": "8强",
      "date": "",
      "home": "Argentina",
      "away": "Colombia",
      "home_win": 49.2,
      "draw": 25.9,
      "away_win": 24.9,
      "winner": "Argentina",
      "winner_prob": 49.2,
      "lambda_home": 1.51,
      "lambda_away": 0.99,
      "matrix": [
        [
          8.2,
          8.1,
          4.0,
          1.3,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          12.4,
          12.3,
          6.1,
          2.0,
          0.5,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          9.3,
          9.3,
          4.6,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          4.7,
          4.7,
          2.3,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          1.8,
          1.8,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.5,
          0.5,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-0",
          "prob": 12.4
        },
        {
          "score": "1-1",
          "prob": 12.3
        },
        {
          "score": "2-0",
          "prob": 9.3
        },
        {
          "score": "2-1",
          "prob": 9.3
        },
        {
          "score": "0-0",
          "prob": 8.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "3-0",
          "prob": 4.7
        },
        {
          "score": "3-1",
          "prob": 4.7
        },
        {
          "score": "2-2",
          "prob": 4.6
        },
        {
          "score": "3-2",
          "prob": 2.3
        },
        {
          "score": "1-3",
          "prob": 2.0
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.8,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-0",
          "prob": 1.8,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-3",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-2",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "3-3",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "5-1",
          "prob": 0.5,
          "total_goals": 6,
          "margin": 4
        },
        {
          "score": "5-0",
          "prob": 0.5,
          "total_goals": 5,
          "margin": 5
        }
      ],
      "big_score_signal": {
        "over_3_5": 24.2,
        "margin_3_plus": 12.3,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Argentina Elo 2110 vs Colombia 1993，差距 117 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Argentina 1.51 : 0.99 Colombia，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-0 12.4%, 1-1 12.3%, 2-0 9.3%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Argentina，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Brazil__England": {
      "id": 101,
      "round": "半决赛",
      "date": "",
      "home": "Brazil",
      "away": "England",
      "home_win": 37.6,
      "draw": 25.8,
      "away_win": 36.6,
      "winner": "Brazil",
      "winner_prob": 37.6,
      "lambda_home": 1.37,
      "lambda_away": 1.34,
      "matrix": [
        [
          6.7,
          8.9,
          6.0,
          2.7,
          0.9,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          9.1,
          12.2,
          8.2,
          3.7,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.2,
          8.3,
          5.6,
          2.5,
          0.8,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          2.8,
          3.8,
          2.6,
          1.1,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          1.0,
          1.3,
          0.9,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.3,
          0.4,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.1,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.2
        },
        {
          "score": "1-0",
          "prob": 9.1
        },
        {
          "score": "0-1",
          "prob": 8.9
        },
        {
          "score": "2-1",
          "prob": 8.3
        },
        {
          "score": "1-2",
          "prob": 8.2
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.6
        },
        {
          "score": "3-1",
          "prob": 3.8
        },
        {
          "score": "1-3",
          "prob": 3.7
        },
        {
          "score": "3-0",
          "prob": 2.8
        },
        {
          "score": "0-3",
          "prob": 2.7
        }
      ],
      "bold_score_candidates": [
        {
          "score": "3-2",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "2-3",
          "prob": 2.5,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "4-1",
          "prob": 1.3,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "1-4",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 1.1,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "4-0",
          "prob": 1.0,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-2",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "0-4",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        }
      ],
      "big_score_signal": {
        "over_3_5": 28.7,
        "margin_3_plus": 12.1,
        "level": "high"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Brazil Elo 2001 vs England 1990，差距 12 分，前者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Brazil 1.37 : 1.34 England，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.2%, 1-0 9.1%, 0-1 8.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Brazil，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Spain__Argentina": {
      "id": 102,
      "round": "半决赛",
      "date": "",
      "home": "Spain",
      "away": "Argentina",
      "home_win": 36.4,
      "draw": 26.3,
      "away_win": 37.3,
      "winner": "Argentina",
      "winner_prob": 37.3,
      "lambda_home": 1.3,
      "lambda_away": 1.32,
      "matrix": [
        [
          7.3,
          9.6,
          6.3,
          2.8,
          0.9,
          0.2,
          0.1,
          0.0,
          0.0
        ],
        [
          9.5,
          12.5,
          8.2,
          3.6,
          1.2,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          6.2,
          8.1,
          5.4,
          2.4,
          0.8,
          0.2,
          0.0,
          0.0,
          0.0
        ],
        [
          2.7,
          3.5,
          2.3,
          1.0,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.9,
          1.1,
          0.8,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.2,
          0.3,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.5
        },
        {
          "score": "0-1",
          "prob": 9.6
        },
        {
          "score": "1-0",
          "prob": 9.5
        },
        {
          "score": "1-2",
          "prob": 8.2
        },
        {
          "score": "2-1",
          "prob": 8.1
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.4
        },
        {
          "score": "1-3",
          "prob": 3.6
        },
        {
          "score": "3-1",
          "prob": 3.5
        },
        {
          "score": "0-3",
          "prob": 2.8
        },
        {
          "score": "3-0",
          "prob": 2.7
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.4,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.3,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.2,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-1",
          "prob": 1.1,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "0-4",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "4-0",
          "prob": 0.9,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "2-4",
          "prob": 0.8,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 26.5,
        "margin_3_plus": 11.3,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Spain Elo 2083 vs Argentina 2110，差距 27 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Spain 1.3 : 1.32 Argentina，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.5%, 0-1 9.6%, 1-0 9.5%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Argentina，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    },
    "Brazil__Argentina": {
      "id": 103,
      "round": "决赛",
      "date": "",
      "home": "Brazil",
      "away": "Argentina",
      "home_win": 31.4,
      "draw": 25.9,
      "away_win": 42.7,
      "winner": "Argentina",
      "winner_prob": 42.7,
      "lambda_home": 1.2,
      "lambda_away": 1.45,
      "matrix": [
        [
          7.1,
          10.2,
          7.4,
          3.6,
          1.3,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          8.5,
          12.3,
          8.9,
          4.3,
          1.5,
          0.4,
          0.1,
          0.0,
          0.0
        ],
        [
          5.1,
          7.4,
          5.3,
          2.6,
          0.9,
          0.3,
          0.1,
          0.0,
          0.0
        ],
        [
          2.1,
          3.0,
          2.1,
          1.0,
          0.4,
          0.1,
          0.0,
          0.0,
          0.0
        ],
        [
          0.6,
          0.9,
          0.6,
          0.3,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.1,
          0.2,
          0.2,
          0.1,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ]
      ],
      "score_max": 8,
      "top_scores": [
        {
          "score": "1-1",
          "prob": 12.3
        },
        {
          "score": "0-1",
          "prob": 10.2
        },
        {
          "score": "1-2",
          "prob": 8.9
        },
        {
          "score": "1-0",
          "prob": 8.5
        },
        {
          "score": "0-2",
          "prob": 7.4
        }
      ],
      "big_score_candidates": [
        {
          "score": "2-2",
          "prob": 5.3
        },
        {
          "score": "1-3",
          "prob": 4.3
        },
        {
          "score": "0-3",
          "prob": 3.6
        },
        {
          "score": "3-1",
          "prob": 3.0
        },
        {
          "score": "2-3",
          "prob": 2.6
        }
      ],
      "bold_score_candidates": [
        {
          "score": "2-3",
          "prob": 2.6,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "3-2",
          "prob": 2.1,
          "total_goals": 5,
          "margin": 1
        },
        {
          "score": "1-4",
          "prob": 1.5,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "0-4",
          "prob": 1.3,
          "total_goals": 4,
          "margin": 4
        },
        {
          "score": "3-3",
          "prob": 1.0,
          "total_goals": 6,
          "margin": 0
        },
        {
          "score": "2-4",
          "prob": 0.9,
          "total_goals": 6,
          "margin": 2
        },
        {
          "score": "4-1",
          "prob": 0.9,
          "total_goals": 5,
          "margin": 3
        },
        {
          "score": "4-2",
          "prob": 0.6,
          "total_goals": 6,
          "margin": 2
        }
      ],
      "big_score_signal": {
        "over_3_5": 27.0,
        "margin_3_plus": 11.9,
        "level": "watch"
      },
      "market_observation": null,
      "ai": [
        {
          "title": "实力对比",
          "text": "Brazil Elo 2001 vs Argentina 2110，差距 108 分，后者占优。"
        },
        {
          "title": "近期状态",
          "text": "模型按真实国际赛果滚动更新 Elo；越新的比赛越靠后进入计算，会自然影响当前强弱。"
        },
        {
          "title": "攻防与期望进球",
          "text": "期望进球 Brazil 1.2 : 1.45 Argentina，数值越高代表越容易进球。"
        },
        {
          "title": "比分概率",
          "text": "最可能比分：1-1 12.3%, 0-1 10.2%, 1-2 8.9%。"
        },
        {
          "title": "综合结论",
          "text": "模型倾向 Argentina，但足球不是数学题；这代表更值得支持，不代表一定发生。"
        }
      ]
    }
  }
};
