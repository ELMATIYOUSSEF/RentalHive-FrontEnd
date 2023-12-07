export interface Equipment {
  id?: number;
  name?: string;
  quantite?: number;
  cout_Location?: number;
  equipmentItems?: any;
}

export class CEquipment implements Equipment {
  constructor(
      id?: number,
      name?: string,
      quantite?: number,
      cout_Location?: number,
  ){}
}

export class upDateEquipment implements Equipment {
  constructor(
      id?: number,
      name?: string,
      cout_Location?: number,
  ){}
}

export class updateEqItems implements Equipment {
  constructor(
      id?: number,
      matricul?: string,
      statusEquipementType?: number,
  ){}
}