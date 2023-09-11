import Header from '../../core/components/header'
import Page from '../../core/page'
import ErrorPage, { ErrorTypes } from '../error'
import MainPage from '../main'
import SettingsPage from '../settings'
import StatisticsPage from '../statistics'

export const enum PageIds {
	MainPage = 'main-page',
	SettingsPage = 'settings-page',
	StatisticsPage = 'statistics-page',
}

class App {
	private static container: HTMLElement = document.body
	private static defaultPageId: string = 'current-page'
	private header: Header

	constructor() {
		this.header = new Header('header', 'header-container')
	}

	run() {
		App.container.append(this.header.render())
		App.renderNewPage('main-page')
		this.enableRouteChange()
	}

	static renderNewPage(idPage: string) {
		const currentPageHTML = document.querySelector(`#${this.defaultPageId}`)
		if (currentPageHTML) {
			currentPageHTML.remove()
		}
		let page: Page | null = null
		if (idPage === PageIds.MainPage) page = new MainPage(idPage)
		else if (idPage === PageIds.SettingsPage) page = new SettingsPage(idPage)
		else if (idPage === PageIds.StatisticsPage)
			page = new StatisticsPage(idPage)
		else page = new ErrorPage(idPage, ErrorTypes.Error_404)

		if (page) {
			const pageHTML = page.render()
			pageHTML.id = App.defaultPageId
			App.container.append(pageHTML)
		}
	}

	private enableRouteChange() {
		window.addEventListener('hashchange', () => {
			const hash = window.location.hash.slice(1)
			App.renderNewPage(hash)
		})
	}
}

export default App
