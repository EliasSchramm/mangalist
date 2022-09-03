/**
 * backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Snapshot } from './snapshot';
import { CreateSnapshot200ResponseAllOf } from './createSnapshot200ResponseAllOf';
import { User } from './user';
import { GetUserBooksByStatus200ResponseInner } from './getUserBooksByStatus200ResponseInner';


export interface CreateSnapshot200Response { 
    userId: number;
    createdAt: string;
    invalidated: boolean;
    ttl: number | null;
    id: string;
    books: Array<GetUserBooksByStatus200ResponseInner>;
    user: User;
}
