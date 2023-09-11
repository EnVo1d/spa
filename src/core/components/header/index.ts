import { PageIds } from '../../../pages/app'
import Component from '../../component'

const Buttons = [
	{
		id: PageIds.MainPage,
		text: 'Main Page',
	},
	{
		id: PageIds.SettingsPage,
		text: 'Settings Page',
	},
	{
		id: PageIds.StatisticsPage,
		text: 'Statistics Page',
	},
]

class Header extends Component {
	constructor(tagName: string, className: string) {
		super(tagName, className)
	}

	renderPageButtons() {
		const pageButtons = document.createElement('div')
		Buttons.forEach(btn => {
			const btnHTML = document.createElement('a')
			btnHTML.href = `#${btn.id}`
			btnHTML.innerText = btn.text
			pageButtons.append(btnHTML)
		})
		this.container.append(pageButtons)
	}

	render() {
		this.renderPageButtons()
		return this.container
	}
}

export default Header
