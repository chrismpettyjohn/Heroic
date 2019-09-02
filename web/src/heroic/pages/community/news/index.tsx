import List from './list'
import Item from './item'
import React, {PureComponent} from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import Article from 'heroic/app/interface/data/news/article'
import NewsActions from 'heroic/app/redux/actions/pages/community/news'
import Container, {ContainerContent} from 'heroic/components/layout/container'

interface Props extends Omit<Redux, 'match'> {
	match: {
		params: {
			article?: string
		}
	}
}

class News extends PureComponent<Props> {

	componentDidMount () {
		NewsActions.init()
	}

	render () {
		const {article = '0'} = this.props.match.params
		const {data, loaded} = this.props.pages.community.news
		const active: Article | undefined = data.find(x => x.id === parseInt(article))
		return (
			<Container>
				<ContainerContent>
					{
						!loaded
							? <p>Loading</p>
							: !!active
								? <Item article={active!}/>
								: <List articles={data}/>
					}
				</ContainerContent>
			</Container>
		)
	}

}

export default Stateful(News)
