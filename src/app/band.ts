export class Band{
    id?: number;
    name: string;
    url?: string;
    image_url?: string;
    facebook_page_url?: string;
    mbid?: string; //?
    tracker_count?: number; //?
    upcoming_event_count?: number;
}
//made all but name optional