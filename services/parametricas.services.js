import { http } from './api.services';

export async function findAllByGrupo(grupo) {
	return await http().get(`parametricas/findByGrupo/${grupo}`);
}
export async function findParametricasImpuestosAllByEntidad(
	grupo,
	identificacionTributaria
) {
	return await http().get(
		`parametricas/findParametricasImpuestosAllByEntidad/${grupo}/${identificacionTributaria}`
	);
}
