interface ProfileImageProps {
  src: string
  alt: string
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg"
    />
  )
}
