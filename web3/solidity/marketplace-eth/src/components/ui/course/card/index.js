import Image from "next/image";
import Link from "next/link";

export default function Card({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl flex flex-col sm:flex-row">
      <div className="w-full sm:w-[200px] h-[230px] relative shrink-0">
        <Image
          src={course.coverImage}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6 flex flex-col justify-center">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {course.type}
        </div>
        <Link
          href={`/courses/${course.slug}`}
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {course.title}
        </Link>
        <p className="mt-2 text-gray-500">{course.description}</p>
      </div>
    </div>
  );
}
