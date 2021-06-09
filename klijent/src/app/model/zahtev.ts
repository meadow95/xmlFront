export class Zahtev {
    constructor(
      public id: string,
      public sender: string,
      public receiver: string,
      public identificationNum: string,
      public approved: number     
    ) { }
  }