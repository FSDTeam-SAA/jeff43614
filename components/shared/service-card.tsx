import Image from "next/image";

export default function ServiceCard({
  title,
  description,
  image,
  index,
  isFullDesc,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
  isFullDesc?: boolean;
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
          0{index + 1}
        </div>
        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="title font-black text-black uppercase italic transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p
          className={`text-gray-600 font-poppins ${
            isFullDesc ? "" : " line-clamp-4"
          } leading-relaxed`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
