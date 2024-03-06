declare module 'swiper/core' {
  export interface SwiperModule {
    use(...modules: SwiperModule[]): void;
  }
}
