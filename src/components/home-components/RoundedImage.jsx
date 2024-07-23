import { useEffect, useState, useRef } from 'react'

const RoundedImage = ({ src }) => {
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

	return <img src={src} ref={imgRef} className={`rounded-image ${isInView ? 'in-view' : ''}`}></img>
}

export default RoundedImage
