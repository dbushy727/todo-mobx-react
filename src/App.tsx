import React, { useEffect, useState } from 'react';
import  { observer } from 'mobx-react';
import { Grid, Container, Header, Input, Form, Button } from 'semantic-ui-react';

import Todo from './components/todo';
import { useStores } from './hooks/use-stores'
import { AppContainer, ContentContainer, TodosContainer, CreateTodo } from './style';

function App() {
	const { todoStore } = useStores();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [author, setAuthor] = useState('');

	useEffect(() => {
		todoStore.fetch();
	}, []);

	const addTodo = () => {
		todoStore.create(title, description, author);
	};

	const { latest } = todoStore;

  	return (
	    <div className="App">
	    	<AppContainer>
		    	<Header as='h1' textAlign='center'>Todo List</Header>
		    	<ContentContainer>
			    	<Grid columns={2}>
			    		<Grid.Column>
			    	    	<CreateTodo>
			    	    		<Header as='h2' textAlign='center'>Create a Todo Item</Header>
			    				<Form onSubmit={addTodo}>
			    				    <Form.Field>
			    				      <label>Title</label>
			    				      <input
			    				      	placeholder='Get Groceries'
			    				      	onChange={(event) => setTitle(event.target.value) }
			    				      	value={title} />
			    				    </Form.Field>
			    				    <Form.Field>
			    				      <label>Description</label>
			    				      <textarea
			    				      	placeholder="Go to Ralph's and grab chicken, broccoli, garlic, onions, and olive oil"
			    				      	onChange={(event) => setDescription(event.target.value) }
			    				      	value={description} />
			    				    </Form.Field>
			    				    <Form.Field>
			    				      <label>Author</label>
			    				      <input
			    				      	placeholder='Edgar Allen Poe'
			    				      	onChange={(event) => setAuthor(event.target.value) }
			    				      	value={author} />
			    				    </Form.Field>
			    				    <Button type='submit'>Submit</Button>
			    				</Form>
			    	    	</CreateTodo>
			    		</Grid.Column>
			    		<Grid.Column>
							<TodosContainer>
					    		{latest.map((todo: any) => <Todo key={todo.id} todo={todo} />)}
							</TodosContainer>
			    		</Grid.Column>
			    	</Grid>
		    	</ContentContainer>
	    	</AppContainer>
	    </div>
  	);
}

export default observer(App);
