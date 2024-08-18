import { useEffect, useState, useRef } from 'react'

const RoundedImage = ({ src }) => {
	const [isInView, setIsInView] = useState(false)
	const imgRef = useRef(null)
	const timeoutRef = useRef(null)

	useEffect(() => {
		const node = imgRef.current
		if (!node) return

		const handleIntersection = ([entry]) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
			timeoutRef.current = setTimeout(() => {
				requestAnimationFrame(() => {
					setIsInView(entry.isIntersecting)
				})
			}, 100) // Opóźnienie 100 ms
		}

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.5, // Możesz dostosować wartość threshold
		})

		observer.observe(node)

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
			observer.unobserve(node)
		}
	}, [])

	return (
		<img
			src={src}
			ref={imgRef}
			loading='lazy'
			className={`rounded-image ${isInView ? 'in-view' : ''}`}
			style={{ transition: 'transform 0.3s ease-in-out' }} // Styl animacji
		/>
	)
}

export default RoundedImage
