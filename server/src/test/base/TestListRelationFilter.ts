/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TestWhereInput } from "./TestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TestWhereInput,
  })
  @ValidateNested()
  @Type(() => TestWhereInput)
  @IsOptional()
  @Field(() => TestWhereInput, {
    nullable: true,
  })
  every?: TestWhereInput;

  @ApiProperty({
    required: false,
    type: () => TestWhereInput,
  })
  @ValidateNested()
  @Type(() => TestWhereInput)
  @IsOptional()
  @Field(() => TestWhereInput, {
    nullable: true,
  })
  some?: TestWhereInput;

  @ApiProperty({
    required: false,
    type: () => TestWhereInput,
  })
  @ValidateNested()
  @Type(() => TestWhereInput)
  @IsOptional()
  @Field(() => TestWhereInput, {
    nullable: true,
  })
  none?: TestWhereInput;
}
export { TestListRelationFilter as TestListRelationFilter };
