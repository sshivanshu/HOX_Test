// src/entities/Link.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Link {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;
}
