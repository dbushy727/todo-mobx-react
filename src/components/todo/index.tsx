import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import { TodoModelType } from '../../models/Todo';
import { TodoContainer } from './style';

const Todo = ({ todo }: { todo: TodoModelType}) => {
	const { title, description, author, createdAt, preview } = todo;

	return (
		<TodoContainer>
		    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
		    <Card.Content>
		      <Card.Header>{title}</Card.Header>
		      <Card.Meta>
		        <span className='date'>{createdAt.format('MM/DD/YYYY')}</span>
		      </Card.Meta>
		      <Card.Description>
		        {description}
		      </Card.Description>
		    </Card.Content>
		    <Card.Content extra>
		      <a>
		        <Icon name='user' />
		        {author}
		      </a>
		    </Card.Content>
		</TodoContainer>
	);
};

export default Todo;