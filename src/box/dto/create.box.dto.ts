import { IsOptional, IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateBoxDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsBoolean()
  @IsOptional()
  complated?: boolean;
}
