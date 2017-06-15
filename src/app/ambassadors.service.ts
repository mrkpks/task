import { SHORTLIST } from './ambassadors-data';

export class AmbassadorsService {
  ambassadors = SHORTLIST;

  getShortlist() {
    return this.ambassadors;
  }

  getAmbassador(id: number) {
    const ambassador = this.ambassadors.find(
      (amb) => {
        return amb.id === id;
      }
    );

    return ambassador;
  }

  updateAmbassadorName(id: number, name: string) {
    const ambassador = this.ambassadors.find(
      (amb) => {
        return amb.id === id;
      }
    );
    if (ambassador) {
      ambassador.name = name;
    }
  }
}
