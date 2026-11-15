import type { FioKey } from "../content";

const keys: readonly string[] = ["rede", "escola", "pessoas", "trama"] satisfies FioKey[];

/** Reads `?fio=`; anything unknown means "all solutions". */
export const parseFio = (v: string | null): FioKey | null => (keys.includes(v) ? (v as FioKey) : null);

export const filterByFio = <T extends { fio: FioKey }>(list: readonly T[], key: FioKey | null) =>
  key ? list.filter((s) => s.fio === key) : [...list];
