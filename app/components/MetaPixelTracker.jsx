
export const trackLeadEvent = async () => {
  const { default: ReactPixel } = await import("react-facebook-pixel");
  ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '');
  ReactPixel.track("Lead");
};