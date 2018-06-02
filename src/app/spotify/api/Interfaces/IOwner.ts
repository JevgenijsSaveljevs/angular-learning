import { IExternalUrls } from "./IExternalUrls";

export interface IOwner {
    display_name: string;
    external_urls: IExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
}