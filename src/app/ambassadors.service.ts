import { SHORTLIST } from './ambassadors-data';
import { Ambassador } from './ambassador';

export class AmbassadorsService {
  ambassadors = SHORTLIST;

  getShortlist(): Ambassador[] {
    return this.ambassadors;
  }

  getAmbassador(id: number): Ambassador {
    const ambassador = this.ambassadors.find(
      (amb) => amb.id === id
    );

    return ambassador;
  }

  updateAmbassadorName(id: number, name: string): void {
    const ambassador = this.ambassadors.find(
      (amb) => amb.id === id
    );
    if (ambassador) {
      ambassador.name = name;
    }
  }
}
