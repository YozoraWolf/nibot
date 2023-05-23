export class Post {
    id: number = 0;
    created_at: string = '';
    uploader_id: number = 0;
    score: number = 0;
    source: string = '';
    md5: string = '';
    last_comment_bumped_at: string = '';
    rating: string = '';
    image_width: number = 0;
    image_height: number = 0;
    tag_string: string = '';
    fav_count: number = 0;
    file_ext: string = '';
    last_noted_at: string = '';
    parent_id: number = 0;
    has_children: boolean = false;
    approver_id: number = 0;
    tag_count_general: number = 0;
    tag_count_artist: number = 0;
    tag_count_character: number = 0;
    tag_count_copyright: number = 0;
    file_size: number = 0;
    up_score: number = 0;
    down_score: number = 0;
    is_pending: boolean = false;
    is_flagged: boolean = false;
    is_deleted: boolean = false;
    tag_count: number = 0;
    updated_at: string = '';
    is_banned: boolean = false;
    pixiv_id: number = 0;
    last_commented_at: string = '';
    has_active_children: boolean = false;
    bit_flags: number = 0;
    tag_count_meta: number = 0;
    has_large: boolean = false;
    has_visible_children: boolean = false;
    media_asset: {
      id: number;
      created_at: string;
      updated_at: string;
      md5: string;
      file_ext: string;
      file_size: number;
      image_width: number;
      image_height: number;
      duration: any;
      status: string;
      file_key: string;
      is_public: boolean;
      pixel_hash: string;
      variants: {
        type: string;
        url: string;
        width: number;
        height: number;
        file_ext: string;
      }[];
    } = {
      id: 0,
      created_at: '',
      updated_at: '',
      md5: '',
      file_ext: '',
      file_size: 0,
      image_width: 0,
      image_height: 0,
      duration: null,
      status: '',
      file_key: '',
      is_public: false,
      pixel_hash: '',
      variants: [],
    };
    tag_string_general: string = '';
    tag_string_character: string = '';
    tag_string_copyright: string = '';
    tag_string_artist: string = '';
    tag_string_meta: string = '';
    file_url: string = '';
    large_file_url: string = '';
    preview_file_url: string = '';
  
    constructor(obj?: any) {
      Object.assign(this, obj);
    }
  }
  