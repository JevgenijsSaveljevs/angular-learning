import { IPlaylistsData } from "./IPlaylistData";

export interface IFeaturedPlaylistsResponse {
    message: string;
    playlists: IPlaylistsData;
}