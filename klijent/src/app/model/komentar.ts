export class Komentar {
  constructor(
    public content: string,
    public postId: string,
    public userUsername: string,
    public id?: string
  ) {}
}
