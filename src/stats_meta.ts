export type StatMeta = {
  name: string;
  type: FieldType;
  comment?: string;
  value?: number;
};

export type StatDict = {
  [key: string]: StatMeta;
};

export enum FieldType {
  String,
  Int,
  Float,
  Year,
  Constant,
}

export const Fields: StatDict = {
  player_name: { name: "player_name", type: FieldType.String },
  team_abbreviation: { name: "team abbreviation", type: FieldType.String },
  age: { name: "age", type: FieldType.Float },
  gp: { name: "games played", type: FieldType.Int },
  w: { name: "wins", type: FieldType.Int },
  l: { name: "losses", type: FieldType.Int },
  w_pct: { name: "win percentage", type: FieldType.Float },
  min: { name: "minutes played", type: FieldType.Float },
  fgm: { name: "field goals made", type: FieldType.Int },
  fga: { name: "field goals attempted", type: FieldType.Int },
  fg_pct: { name: "field goal percentage", type: FieldType.Float },
  fg2_pct: { name: "2 point fg percentage", type: FieldType.Float },
  fg2a_frequency: {
    name: "% of shots that were 2 point fga",
    type: FieldType.Float,
  },
  fg2a: { name: "2 point fg attempts", type: FieldType.Int },
  fg2m: { name: "2 point fg made", type: FieldType.Int },
  fg3a: { name: "3 point fg attempts", type: FieldType.Int },
  fg3a_frequency: {
    name: "% of shots that were 3 point fga",
    type: FieldType.Float,
  },
  fg3m: { name: "3 point fg made", type: FieldType.Int },
  fg3_pct: { name: "3 point fg percentage", type: FieldType.Float },
  ftm: { name: "free throws made", type: FieldType.Int },
  fta: { name: "free throws attempted", type: FieldType.Int },
  ft_pct: { name: "free throw percentage", type: FieldType.Float },
  oreb: { name: "offensive rebounds", type: FieldType.Int },
  dreb: { name: "defensive rebounds", type: FieldType.Int },
  reb: { name: "rebounds", type: FieldType.Int },
  ast: { name: "assists", type: FieldType.Int },
  tov: { name: "turnovers", type: FieldType.Int },
  stl: { name: "steals", type: FieldType.Int },
  blk: { name: "blocks", type: FieldType.Int },
  blka: { name: "blocks against", type: FieldType.Int },
  pf: { name: "personal fouls", type: FieldType.Int },
  pfd: { name: "personal fouls drawn", type: FieldType.Int },
  pts: { name: "points", type: FieldType.Int },
  plus_minus: { name: "plus/minus", type: FieldType.Int },
  nba_fantasy_pts: { name: "NBA fantasy points", type: FieldType.Float },
  dd2: { name: "double doubles", type: FieldType.Int },
  td3: { name: "triple doubles", type: FieldType.Int },
  // XXX: Do we need these for any reason?
  // gp_rank: { name: "gp_rank", type: FieldType.Int },
  // w_rank: { name: "w_rank", type: FieldType.Int },
  // l_rank: { name: "l_rank", type: FieldType.Int },
  // w_pct_rank: { name: "w_pct_rank", type: FieldType.Int },
  // min_rank: { name: "min_rank", type: FieldType.Int },
  // fgm_rank: { name: "fgm_rank", type: FieldType.Int },
  // fga_rank: { name: "fga_rank", type: FieldType.Int },
  // fg_pct_rank: { name: "fg_pct_rank", type: FieldType.Int },
  // fg3m_rank: { name: "fg3m_rank", type: FieldType.Int },
  // fg3a_rank: { name: "fg3a_rank", type: FieldType.Int },
  // fg3_pct_rank: { name: "fg3_pct_rank", type: FieldType.Int },
  // ftm_rank: { name: "ftm_rank", type: FieldType.Int },
  // fta_rank: { name: "fta_rank", type: FieldType.Int },
  // ft_pct_rank: { name: "ft_pct_rank", type: FieldType.Int },
  // oreb_rank: { name: "oreb_rank", type: FieldType.Int },
  // dreb_rank: { name: "dreb_rank", type: FieldType.Int },
  // reb_rank: { name: "reb_rank", type: FieldType.Int },
  // ast_rank: { name: "ast_rank", type: FieldType.Int },
  // tov_rank: { name: "tov_rank", type: FieldType.Int },
  // stl_rank: { name: "stl_rank", type: FieldType.Int },
  // blk_rank: { name: "blk_rank", type: FieldType.Int },
  // blka_rank: { name: "blka_rank", type: FieldType.Int },
  // pf_rank: { name: "pf_rank", type: FieldType.Int },
  // pfd_rank: { name: "pfd_rank", type: FieldType.Int },
  // pts_rank: { name: "pts_rank", type: FieldType.Int },
  // plus_minus_rank: { name: "plus_minus_rank", type: FieldType.Int },
  // nba_fantasy_pts_rank: { name: "nba_fantasy_pts_rank", type: FieldType.Int },
  // dd2_rank: { name: "dd2_rank", type: FieldType.Int },
  // td3_rank: { name: "td3_rank", type: FieldType.Int },
  year: { name: "year", type: FieldType.Year },
  min_pergame: { name: "min_pergame", type: FieldType.Float },
  fgm_pergame: { name: "fgm_pergame", type: FieldType.Float },
  fga_pergame: { name: "fga_pergame", type: FieldType.Float },
  fg3m_pergame: { name: "fg3m_pergame", type: FieldType.Float },
  fg3a_pergame: { name: "fg3a_pergame", type: FieldType.Float },
  ftm_pergame: { name: "ftm_pergame", type: FieldType.Float },
  fta_pergame: { name: "fta_pergame", type: FieldType.Float },
  oreb_pergame: { name: "oreb_pergame", type: FieldType.Float },
  dreb_pergame: { name: "dreb_pergame", type: FieldType.Float },
  reb_pergame: { name: "reb_pergame", type: FieldType.Float },
  ast_pergame: { name: "ast_pergame", type: FieldType.Float },
  tov_pergame: { name: "tov_pergame", type: FieldType.Float },
  stl_pergame: { name: "stl_pergame", type: FieldType.Float },
  blk_pergame: { name: "blk_pergame", type: FieldType.Float },
  blka_pergame: { name: "blka_pergame", type: FieldType.Float },
  pf_pergame: { name: "pf_pergame", type: FieldType.Float },
  pfd_pergame: { name: "pfd_pergame", type: FieldType.Float },
  pts_pergame: { name: "pts_pergame", type: FieldType.Float },
  plus_minus_pergame: { name: "plus_minus_pergame", type: FieldType.Float },
  nba_fantasy_pts_pergame: {
    name: "nba_fantasy_pts_pergame",
    type: FieldType.Float,
  },
  min_per36: { name: "min_per36", type: FieldType.Float },
  fgm_per36: { name: "fgm_per36", type: FieldType.Float },
  fga_per36: { name: "fga_per36", type: FieldType.Float },
  fg3m_per36: { name: "fg3m_per36", type: FieldType.Float },
  fg3a_per36: { name: "fg3a_per36", type: FieldType.Float },
  ftm_per36: { name: "ftm_per36", type: FieldType.Float },
  fta_per36: { name: "fta_per36", type: FieldType.Float },
  oreb_per36: { name: "oreb_per36", type: FieldType.Float },
  dreb_per36: { name: "dreb_per36", type: FieldType.Float },
  reb_per36: { name: "reb_per36", type: FieldType.Float },
  ast_per36: { name: "ast_per36", type: FieldType.Float },
  tov_per36: { name: "tov_per36", type: FieldType.Float },
  stl_per36: { name: "stl_per36", type: FieldType.Float },
  blk_per36: { name: "blk_per36", type: FieldType.Float },
  blka_per36: { name: "blka_per36", type: FieldType.Float },
  pf_per36: { name: "pf_per36", type: FieldType.Float },
  pfd_per36: { name: "pfd_per36", type: FieldType.Float },
  pts_per36: { name: "pts_per36", type: FieldType.Float },
  plus_minus_per36: { name: "plus_minus_per36", type: FieldType.Float },
  nba_fantasy_pts_per36: {
    name: "nba_fantasy_pts_per36",
    type: FieldType.Float,
  },
  min_per100possessions: {
    name: "min_per100possessions",
    type: FieldType.Float,
  },
  fgm_per100possessions: {
    name: "fgm_per100possessions",
    type: FieldType.Float,
  },
  fga_per100possessions: {
    name: "fga_per100possessions",
    type: FieldType.Float,
  },
  fg3m_per100possessions: {
    name: "fg3m_per100possessions",
    type: FieldType.Float,
  },
  fg3a_per100possessions: {
    name: "fg3a_per100possessions",
    type: FieldType.Float,
  },
  ftm_per100possessions: {
    name: "ftm_per100possessions",
    type: FieldType.Float,
  },
  fta_per100possessions: {
    name: "fta_per100possessions",
    type: FieldType.Float,
  },
  oreb_per100possessions: {
    name: "oreb_per100possessions",
    type: FieldType.Float,
  },
  dreb_per100possessions: {
    name: "dreb_per100possessions",
    type: FieldType.Float,
  },
  reb_per100possessions: {
    name: "reb_per100possessions",
    type: FieldType.Float,
  },
  ast_per100possessions: {
    name: "ast_per100possessions",
    type: FieldType.Float,
  },
  tov_per100possessions: {
    name: "tov_per100possessions",
    type: FieldType.Float,
  },
  stl_per100possessions: {
    name: "stl_per100possessions",
    type: FieldType.Float,
  },
  blk_per100possessions: {
    name: "blk_per100possessions",
    type: FieldType.Float,
  },
  blka_per100possessions: {
    name: "blka_per100possessions",
    type: FieldType.Float,
  },
  pf_per100possessions: { name: "pf_per100possessions", type: FieldType.Float },
  pfd_per100possessions: {
    name: "pfd_per100possessions",
    type: FieldType.Float,
  },
  pts_per100possessions: {
    name: "pts_per100possessions",
    type: FieldType.Float,
  },
  plus_minus_per100possessions: {
    name: "plus_minus_per100possessions",
    type: FieldType.Float,
  },
  nba_fantasy_pts_per100possessions: {
    name: "nba_fantasy_pts_per100possessions",
    type: FieldType.Float,
  },
  off_rating: { name: "offensive rating", type: FieldType.Float },
  def_rating: { name: "defensive rating", type: FieldType.Float },
  net_rating: { name: "net rating", type: FieldType.Float },
  ast_pct: { name: "assist percentage", type: FieldType.Float },
  ast_to: { name: "assists to turnovers", type: FieldType.Float },
  ast_ratio: { name: "assist ration", type: FieldType.Float },
  oreb_pct: { name: "offensive rebound percentage", type: FieldType.Float },
  dreb_pct: { name: "defensive rebound percentage", type: FieldType.Float },
  reb_pct: { name: "rebound percentage", type: FieldType.Float },
  tm_tov_pct: { name: "team turnover percentage", type: FieldType.Float },
  efg_pct: { name: "effective field goal percentage", type: FieldType.Float },
  ts_pct: { name: "true shooting percentage", type: FieldType.Float },
  usg_pct: { name: "usage percentage", type: FieldType.Float },
  pace: { name: "pace", type: FieldType.Float },
  pie: { name: "pie", type: FieldType.Float },
  poss: { name: "poss", type: FieldType.Int },
  fgm_pg: { name: "fgm_pg", type: FieldType.Float },
  fga_pg: { name: "fga_pg", type: FieldType.Float },
  // XXX: do we need these
  // off_rating_rank: { name: "off_rating_rank", type: FieldType.Int },
  // def_rating_rank: { name: "def_rating_rank", type: FieldType.Int },
  // net_rating_rank: { name: "net_rating_rank", type: FieldType.Int },
  // ast_pct_rank: { name: "ast_pct_rank", type: FieldType.Int },
  // ast_to_rank: { name: "ast_to_rank", type: FieldType.Int },
  // ast_ratio_rank: { name: "ast_ratio_rank", type: FieldType.Int },
  // oreb_pct_rank: { name: "oreb_pct_rank", type: FieldType.Int },
  // dreb_pct_rank: { name: "dreb_pct_rank", type: FieldType.Int },
  // reb_pct_rank: { name: "reb_pct_rank", type: FieldType.Int },
  // tm_tov_pct_rank: { name: "tm_tov_pct_rank", type: FieldType.Int },
  // e_tov_pct_rank: { name: "e_tov_pct_rank", type: FieldType.Int },
  // efg_pct_rank: { name: "efg_pct_rank", type: FieldType.Int },
  // ts_pct_rank: { name: "ts_pct_rank", type: FieldType.Int },
  // usg_pct_rank: { name: "usg_pct_rank", type: FieldType.Int },
  // e_usg_pct_rank: { name: "e_usg_pct_rank", type: FieldType.Int },
  // e_pace_rank: { name: "e_pace_rank", type: FieldType.Int },
  // pace_rank: { name: "pace_rank", type: FieldType.Int },
  // pie_rank: { name: "pie_rank", type: FieldType.Int },
  // fgm_pg_rank: { name: "fgm_pg_rank", type: FieldType.Int },
  // fga_pg_rank: { name: "fga_pg_rank", type: FieldType.Int },
  def_ws: { name: "Defensive Win Shares", type: FieldType.Float },
  def_ws_pergame: {
    name: "Defensive Win Shares per game",
    type: FieldType.Float,
  },
  def_ws_per36: { name: "Defensive Win Shares per 36", type: FieldType.Float },
  def_ws_per100possessions: {
    name: "Defensive Win Shares per 100 posessions",
    type: FieldType.Float,
  },
  zzconst8: { name: "Constant: 8", type: FieldType.Constant, value: 8 },
  zzconst4: { name: "Constant: 4", type: FieldType.Constant, value: 4 },
};

// generated from:
// parquet schema ../nba_data/data/playerstats.parquet | jq '.fields | map({name, type: .type[1]})' > types.json
// Then a little python to massage the types into an interface:
//
// In [5]: for type in types:
//    ...:     print(f"{type['name']}: {type['type']};")
//
// Then replace long/int/double with `number`. This probably isn't correct, as
// these might be coming in as bigints?
export interface PlayerData {
  /* we hang a tooltip off a playerdata instance for convenience inside the
   * plot function */
  tooltip?: string;
  player_name: string;
  nickname: string;
  team_id: number;
  team_abbreviation: string;
  age: number;
  gp: number;
  w: number;
  l: number;
  w_pct: number;
  min: number;
  fgm: number;
  fga: number;
  fg_pct: number;
  fg3m: number;
  fg3a: number;
  fg3_pct: number;
  ftm: number;
  fta: number;
  ft_pct: number;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  tov: number;
  stl: number;
  blk: number;
  blka: number;
  pf: number;
  pfd: number;
  pts: number;
  plus_minus: number;
  nba_fantasy_pts: number;
  dd2: number;
  td3: number;
  wnba_fantasy_pts: number;
  gp_rank: number;
  w_rank: number;
  l_rank: number;
  w_pct_rank: number;
  min_rank: number;
  fgm_rank: number;
  fga_rank: number;
  fg_pct_rank: number;
  fg3m_rank: number;
  fg3a_rank: number;
  fg3_pct_rank: number;
  ftm_rank: number;
  fta_rank: number;
  ft_pct_rank: number;
  oreb_rank: number;
  dreb_rank: number;
  reb_rank: number;
  ast_rank: number;
  tov_rank: number;
  stl_rank: number;
  blk_rank: number;
  blka_rank: number;
  pf_rank: number;
  pfd_rank: number;
  pts_rank: number;
  plus_minus_rank: number;
  nba_fantasy_pts_rank: number;
  dd2_rank: number;
  td3_rank: number;
  wnba_fantasy_pts_rank: number;
  cfid: number;
  cfparams: string;
  year: number;
  def_rating: number;
  dreb_pct: number;
  pct_dreb: number;
  pct_stl: number;
  pct_blk: number;
  opp_pts_off_tov: number;
  opp_pts_2nd_chance: number;
  opp_pts_fb: number;
  opp_pts_paint: number;
  def_ws: number;
  def_rating_rank: number;
  dreb_pct_rank: number;
  pct_dreb_rank: number;
  pct_stl_rank: number;
  pct_blk_rank: number;
  opp_pts_off_tov_rank: number;
  opp_pts_2nd_chance_rank: number;
  opp_pts_fb_rank: number;
  opp_pts_paint_rank: number;
  def_ws_rank: number;
  min_pergame: number;
  fgm_pergame: number;
  fga_pergame: number;
  fg3m_pergame: number;
  fg3a_pergame: number;
  ftm_pergame: number;
  fta_pergame: number;
  oreb_pergame: number;
  dreb_pergame: number;
  reb_pergame: number;
  ast_pergame: number;
  tov_pergame: number;
  stl_pergame: number;
  blk_pergame: number;
  blka_pergame: number;
  pf_pergame: number;
  pfd_pergame: number;
  pts_pergame: number;
  plus_minus_pergame: number;
  nba_fantasy_pts_pergame: number;
  opp_pts_off_tov_pergame: number;
  opp_pts_2nd_chance_pergame: number;
  opp_pts_fb_pergame: number;
  opp_pts_paint_pergame: number;
  def_ws_pergame: number;
  min_per36: number;
  fgm_per36: number;
  fga_per36: number;
  fg3m_per36: number;
  fg3a_per36: number;
  ftm_per36: number;
  fta_per36: number;
  oreb_per36: number;
  dreb_per36: number;
  reb_per36: number;
  ast_per36: number;
  tov_per36: number;
  stl_per36: number;
  blk_per36: number;
  blka_per36: number;
  pf_per36: number;
  pfd_per36: number;
  pts_per36: number;
  plus_minus_per36: number;
  nba_fantasy_pts_per36: number;
  opp_pts_off_tov_per36: number;
  opp_pts_2nd_chance_per36: number;
  opp_pts_fb_per36: number;
  opp_pts_paint_per36: number;
  def_ws_per36: number;
  min_per100possessions: number;
  fgm_per100possessions: number;
  fga_per100possessions: number;
  fg3m_per100possessions: number;
  fg3a_per100possessions: number;
  ftm_per100possessions: number;
  fta_per100possessions: number;
  oreb_per100possessions: number;
  dreb_per100possessions: number;
  reb_per100possessions: number;
  ast_per100possessions: number;
  tov_per100possessions: number;
  stl_per100possessions: number;
  blk_per100possessions: number;
  blka_per100possessions: number;
  pf_per100possessions: number;
  pfd_per100possessions: number;
  pts_per100possessions: number;
  plus_minus_per100possessions: number;
  nba_fantasy_pts_per100possessions: number;
  opp_pts_off_tov_per100possessions: number;
  opp_pts_2nd_chance_per100possessions: number;
  opp_pts_fb_per100possessions: number;
  opp_pts_paint_per100possessions: number;
  def_ws_per100possessions: number;
  e_off_rating: number;
  off_rating: number;
  sp_work_off_rating: number;
  e_def_rating: number;
  sp_work_def_rating: number;
  e_net_rating: number;
  net_rating: number;
  sp_work_net_rating: number;
  ast_pct: number;
  ast_to: number;
  ast_ratio: number;
  oreb_pct: number;
  reb_pct: number;
  tm_tov_pct: number;
  e_tov_pct: number;
  efg_pct: number;
  ts_pct: number;
  usg_pct: number;
  e_usg_pct: number;
  e_pace: number;
  pace: number;
  pace_per40: number;
  sp_work_pace: number;
  pie: number;
  poss: number;
  fgm_pg: number;
  fga_pg: number;
  e_off_rating_rank: number;
  off_rating_rank: number;
  sp_work_off_rating_rank: number;
  e_def_rating_rank: number;
  sp_work_def_rating_rank: number;
  e_net_rating_rank: number;
  net_rating_rank: number;
  sp_work_net_rating_rank: number;
  ast_pct_rank: number;
  ast_to_rank: number;
  ast_ratio_rank: number;
  oreb_pct_rank: number;
  reb_pct_rank: number;
  tm_tov_pct_rank: number;
  e_tov_pct_rank: number;
  efg_pct_rank: number;
  ts_pct_rank: number;
  usg_pct_rank: number;
  e_usg_pct_rank: number;
  e_pace_rank: number;
  pace_rank: number;
  sp_work_pace_rank: number;
  pie_rank: number;
  fgm_pg_rank: number;
  fga_pg_rank: number;
  player_last_team_id: number;
  player_last_team_abbreviation: string;
  g: number;
  fga_frequency: number;
  fg2a_frequency: number;
  fg2m: number;
  fg2a: number;
  fg2_pct: number;
  fg3a_frequency: number;
  player_id: number;
  player_height: string;
  player_height_inches: number;
  player_weight: string;
  college: string;
  country: string;
  draft_year: string;
  draft_round: string;
  draft_number: string;
}
