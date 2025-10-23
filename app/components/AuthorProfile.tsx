import Image from 'next/image'

interface Author {
  name: string
  bio: string
  avatarUrl: string
}

interface AuthorProfileProps {
  author: Author
}

export function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div className="mt-16 border-t border-neutral-200 dark:border-neutral-700 pt-8">
      <div className="flex items-center gap-4">
        <Image
          src={author.avatarUrl}
          alt={`${author.name}'s avatar`}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100">
            {author.name}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  )
}
