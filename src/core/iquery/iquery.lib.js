export class IQuery {
	/**
	 * Create a new IQuery instance.
	 * @param {string|HTMLElement} selector - A CSS selector string or an HTMLElement
	 */
	constructor(selector) {
		if (typeof selector === 'string') {
			this.element = document.querySelector(selector)

			if (!this.element) {
				throw new Error(`Element ${this.element} not found!`)
			}
		} else if (selector instanceof HTMLElement) {
			this.element = selector
		} else {
			throw new Error('Invalid selector type')
		}
	}

	/**
	 * Find the first element that matches the specified selector within the selected element.
	 * @param {string|HTMLElement} selector - A CSS selector string to search for within the selected element.
	 * @returns {IQuery} A new IQuery instance for the found element.
	 */
	find(selector) {
		const element = new IQuery(this.element.querySelector(selector))

		if (element) {
			return element
		} else {
			throw new Error(`Element ${element} not found!`)
		}
	}

	/**
	 * Get or set the inner HTML of the selected element.
	 * @param {string} [htmlContent] - Optional HTML content to set. If
	not provided, the current inner HTML will be returned
	 * @returns {IQuery|string} The current IQuery instance for
	chaining when setting HTML content, or the current inner HTML when getting.
	 */
	html(htmlContent) {
		if (typeof htmlContent === 'undefined') {
			return this.element.innerHTML
		} else {
			this.element.innerHTML = htmlContent
			return this
		}
	}

	/**
	 * Set the CSS style of the selected element.
	 * @param {string} property - The CSS property to set.
	 * @param {string} value - The value to set for the CSS property.
	 * @returns {IQuery} The current IQuery instance for chaining
	 */
	css(property, value) {
		if (typeof property !== 'string' && typeof value !== 'string') {
			throw new Error('property and value must be strings.')
		}

		this.element.style[property] = value
		return this
	}

	/**
	 * Append a new element as a child of the selected element.
	 * @param {HTMLElement} childElement - The new child element to append.
	 * @returns {IQuery} The current IQuery instance for chaining
	 */
	append(childElement) {
		if (!(childElement instanceof HTMLElement)) {
			throw new Error('Element must be an HTMLElement .')
		}

		this.element.appendChild(childElement)
		return this
	}

	/**
	 * Insert a new element before the selected element.
	 * @param {HTMLElement} newElement - The new element to insert before the selected element.
	 * @returns {IQuery} The current IQuery instance for chaining
	 */
	before(newElement) {
		if (!(newElement instanceof HTMLElement)) {
			throw new Error('Element must be an HTMLElement .')
		}

		const parentElement = this.element.parentElement

		if (parentElement) {
			parentElement.insertBefore(newElement, this.element)
			return this
		} else {
			throw new Error('Element does not have a parent element')
		}
	}

	/**
	 * Set the HTMLElement text of the selected element.
	 * @param {string} text - The HTMLElement text to set.
	 * @returns {IQuery} The current IQuery instance for chaining
	 */
	text(text) {
		if (typeof text !== 'string') {
			throw new Error('text must be string.')
		}

		this.element.textContent = text
		return this
	}
}

/**
 * Create a new IQuery instance for the given selector.
 * @param {string|HTMLElement} selector - A CSS selector string or an HTMLElement.
 * @returns {IQuery} A new IQuery instance for the given selector.
 */
export function $I(selector) {
	return new IQuery(selector)
}
