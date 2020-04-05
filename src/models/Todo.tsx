import { computed } from 'mobx';
import moment from 'moment';

import { TodoType } from '../stores/TodoStore';

class TodoModel {
	id: number;
	title: string;
	description: string;
	author: string;
	createdAt: moment.Moment;

	constructor(todo: TodoType) {
		this.id = todo.id;
		this.title = todo.title;
		this.description = todo.description;
		this.author = todo.author;
		this.createdAt = todo.createdAt;
	}

	@computed
	get preview() {
		return this.description.substring(0, 20);
	};
}

export default TodoModel;

export interface TodoModelType extends TodoType {
	preview: string;
}