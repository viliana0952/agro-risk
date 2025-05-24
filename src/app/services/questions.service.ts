import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionType } from '../models/question-type.enum';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  constructor(private readonly http: HttpClient) {}

  getResult(questions: any[]) {
const formatted = questions.reduce((acc, curr) => {
    const key = Object.keys(curr)[0];
    const value = curr[key];
    acc[key] = value;
    return acc;
  }, {} as Record<string, number>);

// const testPayload = {
//   gradushka_diapazoni: 1,
//   gradushka_gradobitnost: 1,
//   izmrazvane_klimat: 3,
//   izmrazvane_kultura: 1,
//   izmrazvane_period: 2,
//   izmrazvane_pochva: 1,
//   izmrazvane_promeni: 4,
//   izmrazvane_snqg: 1,
//   izmrazvane_temp: 3,
//   izmrazvane_visochina: 3,
//   izmrazvane_vlajnost: 4,
//   izmrazvane_vqtar: 4,
//   izteglqne_chestota: 1,
//   izteglqne_kade: 4,
//   izteglqne_kultura: 3,
//   izteglqne_nosht: 4,
//   izteglqne_pochva: 3,
//   izteglqne_polivane: 4,
//   izteglqne_svetlina: 4,
//   izteglqne_temp: 3,
//   izteglqne_tip_svetlina: 1,
//   izteglqne_tor: 3,
//   kisha_otvejdane: 4,
//   kisha_snqg: 3,
//   kisha_temp: 4,
//   kisha_teren: 3,
//   kisha_valeji: 4,
//   kisha_vlajnost: 1,
//   kisha_voda: 2,
//   kisha_vqtar: 1,
//   kisha_zatoplqniq: 4,
//   ogan_chovek: 2,
//   ogan_gora: 1,
//   ogan_pat: 1,
//   ogan_susha: 1,
//   ogan_temperatura: 4,
//   ogan_voda: 1,
//   oslanqvane_bezvetrie: 3,
//   oslanqvane_grupi: 2,
//   oslanqvane_klimat: 2,
//   oslanqvane_nebe: 1,
//   oslanqvane_plosht: 3,
//   oslanqvane_pochva: 1,
//   oslanqvane_temp: 1,
//   oslanqvane_visochina: 2,
//   oslanqvane_vlajnost: 2,
//   proliven_dajd_navodnenie_darveta: 1,
//   proliven_dajd_navodnenie_horizontalno: 1,
//   proliven_dajd_navodnenie_kategorii: 1,
//   proliven_dajd_navodnenie_kultura: 1,
//   proliven_dajd_navodnenie_oblaci: 1,
//   proliven_dajd_navodnenie_planina: 2,
//   proliven_dajd_navodnenie_pososka: 1,
//   proliven_dajd_navodnenie_promenlivost: 2,
//   proliven_dajd_navodnenie_tehniki: 1,
//   proliven_dajd_navodnenie_vlajnost: 4,
//   silni_vetrove_gora_planina: 1,
//   silni_vetrove_koga: 2,
//   silni_vetrove_teritoriq: 1,
//   silni_vetrove_voda: 1
// };

    return this.http.post('http://localhost:8080/risks/result', formatted);
  }
}
