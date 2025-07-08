import React from 'react';
import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Author, Startup } from '@/sanity/types';

export type StartupTypeCard = Omit<Startup, 'author'> & { author: Author };
const StartupCard = ({
    _id,
    _createdAt,
    views,
    author: { _id: authorId, name: authorName, image: authorImage },
    title,
    description,
    category,
    image,
}: StartupTypeCard) => {
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_card_date">{formatDate(_createdAt)}</p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="text-16-medium line-clamp-1">{authorName}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${authorName}`}>
                    <Image
                        src={authorImage ?? 'https://via.placeholder.com/48x48?text=Image'}
                        alt={authorName}
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc">{description}</p>

                <Image
                    src={image ?? 'https://via.placeholder.com/50x40?text=Image'}
                    alt="placeholder"
                    height={40}
                    width={50}
                    className="startup-card_img"
                />
            </Link>

            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className="text-16-medium">{category}</p>
                </Link>
                <Button className="startup-card_btn" asChild>
                    <Link href={`/startup/${_id}`}>Details</Link>
                </Button>
            </div>
        </li>
    );
};
export default StartupCard;
