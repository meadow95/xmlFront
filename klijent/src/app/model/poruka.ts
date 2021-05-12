export class Poruka {
  constructor(
    public sadrzaj: string,
    public posaljilac: string,
    public primalac: string,
    public id?: string
  ) {}
}
