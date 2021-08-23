import 'reflect-metadata';
import { RouteHandlerDescriptor } from '../../interfaces';
import { MetadataKeys, Methods } from './enums';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.GET);
export const post = routeBinder(Methods.POST);
