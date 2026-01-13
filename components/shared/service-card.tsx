import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  title,
  description,
  image,
  index,
  slug,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
  slug: string;
}) {
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-lg">
        <Image
          fill
          src={image as string}
          alt={title}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay Number */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white w-10 h-10 flex items-center justify-center rounded-full font-bold border border-white/20">
          {index < 9 ? "0" : ""}
          {index + 1}
        </div>
        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="title font-black text-black uppercase italic transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p
          className={`text-gray-600 font-poppins line-clamp-3 leading-relaxed`}
        >
          {description}
        </p>
      </div>
      <Link
        href={`/services/${slug}`}
        className="inline-block bg-primary hover:bg-primary/90 text-black text-sm font-semibold py-2 px-6 rounded-md shadow-lg shadow-primary/20 transition-all transform hover:scale-105 hover:shadow-xl mt-4"
      >
        Read More
      </Link>
    </div>
  );
}
