import { useCallback } from "react";
import { useWatch, type Control, type UseFormSetValue, type FieldValues } from "react-hook-form";

type UsePrimitiveFieldArrayProps<
  TFieldValues extends FieldValues,
  _TPrimitive extends string | number | boolean
> = {
  control: Control<TFieldValues>;
  name: keyof TFieldValues;
  setValue: UseFormSetValue<TFieldValues>;
};

export function usePrimitiveFieldArray<
  TFieldValues extends FieldValues,
  TPrimitive extends string | number | boolean
>({
  control,
  name,
  setValue,
}: UsePrimitiveFieldArrayProps<TFieldValues, TPrimitive>) {
  const values: TPrimitive[] = useWatch({ control, name: name as any }) || [];

  const fields = values.map((value, index) => ({
    id: `${String(name)}-${index}`,
    value,
  }));

  const append = useCallback(
    (value: TPrimitive) => {
      return setValue(name as any, [...values, value] as any, { shouldDirty: true });
    },
    [values, name, setValue]
  );

  const remove = useCallback(
    (index: number) => {
      const updated = [...values];
      updated.splice(index, 1);
      setValue(name as any, updated as any, { shouldDirty: true });
    },
    [values, name, setValue]
  );

  const update = useCallback(
    (index: number, newValue: TPrimitive) => {
      const updated = [...values];
      updated[index] = newValue;
      setValue(name as any, updated as any, { shouldDirty: true });
    },
    [values, name, setValue]
  );

  const replace = useCallback(
    (newValues: TPrimitive[]) => {
      setValue(name as any, newValues as any, { shouldDirty: true });
    },
    [name, setValue]
  );

  return {
    fields,
    append,
    remove,
    update,
    replace,
  };
}
