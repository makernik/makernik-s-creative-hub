export type BuildAspect = "tall" | "square" | "wide";

export interface PhysicalBuild {
  id: string;
  /** Caption under the photograph. */
  caption: string;
  /**
   * Public path, for example "/images/builds/bench-lamp.jpg".
   * Leave null to keep the empty mount.
   */
  image: string | null;
  /** Required when image is set. */
  alt: string;
  aspect: BuildAspect;
}

/**
 * Physical builds. There are no photographs in the repo yet.
 * Replace a mount by setting `image` to a file in `public/images/builds/`
 * and writing a real `caption` and `alt`. Add or delete rows as needed.
 * Do not leave stock or sample photos in place of Nik's work.
 */
export const physicalBuilds: PhysicalBuild[] = [
  {
    id: "mount-1",
    caption: "Caption pending",
    image: null,
    alt: "",
    aspect: "tall",
  },
  {
    id: "mount-2",
    caption: "Caption pending",
    image: null,
    alt: "",
    aspect: "square",
  },
  {
    id: "mount-3",
    caption: "Caption pending",
    image: null,
    alt: "",
    aspect: "wide",
  },
];
