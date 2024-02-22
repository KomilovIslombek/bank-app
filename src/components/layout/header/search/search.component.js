import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './search.module.scss'
import template from './search.template.html'
import { $I } from '@/core/iquery/iquery.lib'

export class Search extends ChildComponent {
	async #fetchToJson() {
		console.log('preparing...')

		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/userss')
			if (res.ok) {
				const data = await res.json()
				console.log('data', data)
			} else {
				const errorData = await res.json()
				console.log('errorData', errorData)
			}
		} catch (err) {
			console.log('err', err)
		} finally {
			console.log('fifaly')
		}
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$I(this.element).find('input').input({
			type: 'search',
			name: 'search',
			placeholder: 'Search contacts...'
		})

		return this.element
	}
}
