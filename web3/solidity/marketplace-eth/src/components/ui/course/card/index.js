import Image from "next/image";
import Link from "next/link";

export default function Card({ course, Footer }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl flex ">
      <div className="relative w-36 h-auto flex-shrink-0">
        <Image
          src={course.coverImage}
          alt={course.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="p-6 pb-2 flex flex-col justify-center">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {course.type}
        </div>
        <Link
          href={`/courses/${course.slug}`}
          className="h-12 block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {course.title}
        </Link>
        <p className="mt-2 text-gray-500">
          {course.description.substring(0, 70)}...
        </p>
        {Footer && <Footer />}
      </div>
    </div>
  );
}
