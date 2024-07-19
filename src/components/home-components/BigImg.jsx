import React, { useEffect, useState, useRef } from 'react'

const BigImg = () => {
	const [isInView, setIsInView] = useState(false)
	const imgRef = useRef(null)

	useEffect(() => {
		const node = imgRef.current
		if (!node) return

		const observer = new IntersectionObserver(
			([entry]) => {
				requestAnimationFrame(() => {
					setIsInView(entry.isIntersecting)
				})
			},
			{ threshold: 0.1 }
		)

		observer.observe(node)

		return () => {
			observer.unobserve(node)
		}
	}, [])

	return (
		<div ref={imgRef} className={`big-img ${isInView ? 'in-view' : ''}`}>
			<div className='big-img_image'></div>
		</div>
	)
}

export default BigImg
