import { IExternalUrls } from "./IExternalUrls";
import { ITracksInfo } from "./ITracksInfo";
import { IImage } from "./IImage";
import { IOwner } from "./IOwner";

export interface IPlaylist {
    collaborative: boolean;
    external_urls: IExternalUrls;
    href: string;
    id: string;
    images: IImage[];
    name: string;
    owner: IOwner;
    public?: any;
    snapshot_id: string;
    tracks: ITracksInfo;
    type: string;
    uri: string;
}