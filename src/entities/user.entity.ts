import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column({ unique: true })
  public name: string;

  @Column({ unique: true })
  public password: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;
}

export default User;
