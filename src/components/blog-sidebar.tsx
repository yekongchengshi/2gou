'use client'

import { motion } from 'motion/react'
import { ANIMATION_DELAY, INIT_DELAY } from '@/consts'
import LikeButton from '@/components/like-button'
import { BlogToc } from '@/components/blog-toc'
import { ScrollTopButton } from '@/components/scroll-top-button'
import { useConfigStore } from '@/app/(home)/stores/config-store'
import { getDownloadIcon } from '@/lib/download-icon'
import type { DownloadLink } from '@/app/write/types'

type TocItem = {
	id: string
	text: string
	level: number
}

type BlogSidebarProps = {
	cover?: string
	summary?: string
	toc: TocItem[]
	slug?: string
	downloadLinks?: DownloadLink[]
}

export function BlogSidebar({ cover, summary, toc, slug, downloadLinks }: BlogSidebarProps) {
	const { siteContent } = useConfigStore()
	const summaryInContent = siteContent.summaryInContent ?? false

	return (
		<div className='sticky flex w-[200px] shrink-0 flex-col items-start gap-4 self-start max-sm:hidden' style={{ top: 24 }}>
			{downloadLinks && downloadLinks.length > 0 && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: INIT_DELAY + ANIMATION_DELAY * 0 }}
					className='bg-card w-full rounded-xl border p-3'>
					<h2 className='text-secondary mb-2 font-medium text-sm'>云盘下载</h2>
					<div className='space-y-2'>
						{downloadLinks.map((link, index) => {
							const IconComponent = getDownloadIcon(link.name, link.url)
							return (
								<a
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-2 block w-full rounded-lg bg-white/70 px-3 py-2 text-sm hover:bg-white/90 transition-all duration-200 hover:scale-105'
							>
								{IconComponent && <IconComponent className='w-4 h-4' />}
								<span className='flex-1 text-center'>{link.name}</span>
							</a>
							)
						})}
					</div>
				</motion.div>
			)}
			
			{cover && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: INIT_DELAY + ANIMATION_DELAY * 1 }}
					className='bg-card w-full rounded-xl border p-3'>
					<img src={cover} alt='cover' className='h-auto w-full rounded-xl border object-cover' />
				</motion.div>
			)}

			{summary && !summaryInContent && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: INIT_DELAY + ANIMATION_DELAY * 2 }}
					className='bg-card w-full rounded-xl border p-3 text-sm'>
					<h2 className='text-secondary mb-2 font-medium'>摘要</h2>
					<div className='text-secondary scrollbar-none max-h-[240px] cursor-text overflow-auto'>{summary}</div>
				</motion.div>
			)}

			<BlogToc toc={toc} delay={INIT_DELAY + ANIMATION_DELAY * 3} />

			<LikeButton slug={slug} delay={(INIT_DELAY + ANIMATION_DELAY * 4) * 1000} />

			<ScrollTopButton delay={INIT_DELAY + ANIMATION_DELAY * 5} />
		</div>
	)
}
