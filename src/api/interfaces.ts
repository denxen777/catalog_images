export interface IResponseData {
  data: IData;
  meta: IMeta;
}

export interface IData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: IImagesData;
  user: IUser;
  analytics_response_payload: string;
  analytics: IAnalytics;
}

interface IMeta {
  status: number;
  msg: string;
  response_id: string;
}

export interface IImagesData {
  original: IImage0;
  downsized: IImage1;
  downsized_large: IImage1;
  downsized_medium: IImage1;
  downsized_small: IImage2;
  downsized_still: IImage1;
  fixed_height: IImage3;
  fixed_height_downsampled: IImage4;
  fixed_height_small: IImage3;
  fixed_height_small_still: IImage1;
  fixed_height_still: IImage1;
  fixed_width: IImage3;
  fixed_width_downsampled: IImage4;
  fixed_width_small: IImage3;
  fixed_width_small_still: IImage1;
  fixed_width_still: IImage1;
  looping: IImage5;
  original_still: IImage1;
  original_mp4: IImage1;
  preview: IImage2;
  preview_gif: IImage1;
  preview_webp: IImage1;
  hd: IImage2;
  '480w_still': IImage1;
}

interface IImage0 {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

interface IImage1 {
  height: string;
  width: string;
  size: string;
  url: string;
}

interface IImage2 {
  height: '192';
  width: '191';
  mp4_size: '120282';
  mp4: 'h';
}

interface IImage3 {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

interface IImage4 {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

interface IImage5 {
  mp4_size: string;
  mp4: string;
}

interface IUser {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

interface IAnalytics {
  onload: IUrlAnalytics;
  onclick: IUrlAnalytics;
  onsent: IUrlAnalytics;
}

interface IUrlAnalytics {
  url: string;
}
