import { IsOptional, IsBoolean, IsString } from 'class-validator';

export class UpdateBoxDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  desc: string;

  @IsBoolean()
  @IsOptional()
  complated?: boolean;
}
