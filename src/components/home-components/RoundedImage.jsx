import { useEffect, useState, useRef } from 'react'

const RoundedImage = ({ src }) => {
	const [isInView, setIsInView] = useState(false)
	const imgRef = useRef(null)

	useEffect(() => {
		const node = imgRef.current
		if (!node) return

		const handleIntersection = ([entry]) => {
			requestAnimationFrame(() => {
				setIsInView(entry.isIntersecting)
			})
		}

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.5, // Zwiększ threshold, aby poprawić dokładność wykrywania
		})

		observer.observe(node)

		return () => {
			observer.unobserve(node)
		}
	}, [])

	return (
		<img
			src={src}
			ref={imgRef}
			className={`rounded-image ${isInView ? 'in-view' : ''}`}
			style={{ transition: 'transform 0.3s ease-in-out' }} // Dodanie stylów CSS do płynniejszej animacji
		/>
	)
}

export default RoundedImage
