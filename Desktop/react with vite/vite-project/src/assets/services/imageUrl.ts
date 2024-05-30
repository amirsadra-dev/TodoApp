import noimage from "../../../public/assets/Placeholder-_-Glossary.svg";
export const getImageCroped = (url: string) => {
  if (!url) return noimage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
