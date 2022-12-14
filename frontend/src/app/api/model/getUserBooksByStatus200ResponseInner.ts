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
import { GetBook200ResponseAllOfPublisher } from './getBook200ResponseAllOfPublisher';
import { Book } from './book';
import { GetUserBooksByStatus200ResponseInnerAllOf } from './getUserBooksByStatus200ResponseInnerAllOf';
import { Author } from './author';


export interface GetUserBooksByStatus200ResponseInner { 
    publisherId: string | null;
    updatedAt: string;
    createdAt: string;
    language: string | null;
    printedPageCount: number | null;
    pageCount: number | null;
    description: string | null;
    publishedDate: string | null;
    subtitle: string | null;
    title: string | null;
    isbn: string;
    publisher: GetBook200ResponseAllOfPublisher | null;
    authors: Array<Author>;
}

