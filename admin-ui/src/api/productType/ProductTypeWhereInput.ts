import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductTypeWhereInput = {
  desciption?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  normalizedName?: StringFilter;
  notes?: StringNullableFilter;
};
