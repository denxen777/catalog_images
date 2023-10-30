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

interface IImagesData {
  original: {};
  downsized: IImage;
  downsized_large: IImage;
  downsized_medium: IImage;
  downsized_small: IImage2;
  downsized_still: IImage;
  fixed_height: IImage3;
  fixed_height_downsampled: IImage4;
  fixed_height_small: IImage3;
  fixed_height_small_still: IImage;
  fixed_height_still: IImage;
  fixed_width: IImage3;
  fixed_width_downsampled: IImage4;
  fixed_width_small: IImage3;
  fixed_width_small_still: IImage;
  fixed_width_still: IImage;
  looping: IImage5;
  original_still: IImage;
  original_mp4: IImage;
  preview: IImage2;
  preview_gif: IImage;
  preview_webp: IImage;
  hd: IImage2;
  '480w_still': IImage;
}

interface IImage {
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
