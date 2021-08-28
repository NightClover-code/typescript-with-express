//importing types
import 'reflect-metadata';
import { MetadataKeys } from './enums';

export function validateBody(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.VALIDATOR, keys, target, key);
  };
}
