// Dados da seção "Em movimento" (página /em-movimento e bloco da home).
// Para adicionar um item, copie o exemplo comentado da lista e preencha os campos.
// Lista vazia = bloco escondido. Datas no formato ISO: "2026-03-14".
// Depois de editar, publique o site de novo (o build atualiza as páginas).

export type Palestra = { titulo: string; data: string /* ISO yyyy-mm-dd */; local: string; online?: boolean; link?: string };
export type Turma = { titulo: string; solucao: "pos" | "olimpiada"; inicio?: string; link?: string };
export type Novidade = { titulo: string; rede: string; data: string; texto: string };

// Ex.: { titulo: "Roda de conversa sobre gestão", data: "2026-03-14", local: "Santos (SP)", online: false, link: "https://..." }
export const palestras: Palestra[] = [];

// Ex.: { titulo: "Pós-graduação, turma 2026", solucao: "pos", inicio: "2026-03-01", link: "https://..." }
export const turmas: Turma[] = [];

// Somente com autorização da rede parceira.
// Ex.: { titulo: "...", rede: "Rede Municipal de ...", data: "2026-03-14", texto: "..." }
export const novidades: Novidade[] = [];
