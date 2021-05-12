export class Komentar {
  constructor(
    public sadrzaj: string,
    public odobren: boolean,
    public ime: string,
    public id?: string
  ) {}
}
