'use client'

import { useEffect, useState } from 'react'
import Card from '@/components/card'
import { useCenterStore } from '@/hooks/use-center'
import { useConfigStore } from './stores/config-store'
import { CARD_SPACING } from '@/consts'
import Link from 'next/link'
import { HomeDraggableLayer } from './home-draggable-layer'
import { useBlogIndex } from '@/hooks/use-blog-index'

export default function ShareCard() {
	const center = useCenterStore()
	const { cardStyles, siteContent } = useConfigStore()
	const { items: articles } = useBlogIndex()
	const [randomArticle, setRandomArticle] = useState<any>(null)
	const styles = cardStyles.shareCard
	const hiCardStyles = cardStyles.hiCard
	const socialButtonsStyles = cardStyles.socialButtons

	useEffect(() => {
		if (articles.length > 0) {
			const randomIndex = Math.floor(Math.random() * articles.length)
			setRandomArticle(articles[randomIndex])
		}
	}, [articles])

	if (!randomArticle) {
		return null
	}

	const x = styles.offsetX !== null ? center.x + styles.offsetX : center.x + hiCardStyles.width / 2 - socialButtonsStyles.width
	const y = styles.offsetY !== null ? center.y + styles.offsetY : center.y + hiCardStyles.height / 2 + CARD_SPACING + socialButtonsStyles.height + CARD_SPACING

	return (
		<HomeDraggableLayer cardKey='shareCard' x={x} y={y} width={styles.width} height={styles.height}>
			<Card order={styles.order} width={styles.width} height={styles.height} x={x} y={y}>
				{siteContent.enableChristmas && (
					<>
						<img
							src='/images/christmas/snow-12.webp'
							alt='Christmas decoration'
							className='pointer-events-none absolute'
							style={{ width: 120, left: -12, top: -12, opacity: 0.8 }}
						/>
					</>
				)}

				<h2 className='text-secondary text-sm'>随机推荐</h2>

				<Link href={`/blog/${randomArticle.id}`} className='mt-2 block space-y-2'>
					<div className='flex items-center'>
						<div className='relative mr-3 h-12 w-12 shrink-0 overflow-hidden rounded-xl'>
							<img src={randomArticle.cover} alt={randomArticle.title} className='h-full w-full object-cover' />
						</div>
						<h3 className='text-sm font-medium'>{randomArticle.title}</h3>
					</div>

					<p className='text-secondary line-clamp-3 text-xs'>{randomArticle.summary}</p>
				</Link>
			</Card>
		</HomeDraggableLayer>
	)
}
