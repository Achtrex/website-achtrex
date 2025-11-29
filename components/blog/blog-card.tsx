import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    slug: string;
    category: string;
    title: string;
    author: {
        name: string;
        image: string;
        date: string;
    };
    image: string;
}

export function BlogCard({ slug, category, title, author, image }: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="group block p-4 border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 bg-white">
            <div className="relative h-60 mb-6 overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col gap-4">
                <span className="bg-blue-50 text-[#005AB0] px-3 py-1 rounded-md text-sm font-medium w-fit">
                    {category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 line-clamp-3 group-hover:text-[#005AB0] transition-colors">
                    {title}
                </h3>
                <div className="flex items-center gap-3 mt-auto">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden">
                        <Image
                            src={author.image}
                            alt={author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">{author.name}</span>
                        <span>{author.date}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
