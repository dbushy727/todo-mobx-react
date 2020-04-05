import { observable, action, computed } from 'mobx'
import moment from 'moment';

import TodoModel, { TodoModelType } from '../models/Todo';

class TodoStore {
	@observable
	todos: TodoModelType[] = [];

	@action
	create(title: string, description: string, author: string): void {
		const data = new TodoModel({
			id: this.todos[this.todos.length - 1].id + 1,
			title: title,
			description: description,
			author: author,
			createdAt: moment(),
		});

		this.todos = this.todos.concat(data);
	};

	@action
	fetch(): Promise<void> {
		const promise = new Promise((resolve, reject) => {
			const data = [
				{
					id: 1,
					title: "lorem ipsum",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam amet tenetur illo fugit dolorem ullam aspernatur, autem quasi, eveniet repudiandae nemo consectetur aliquam natus sit tempore, veniam quia earum!",
					author: "Danny Bushkanets",
					createdAt: moment(),
				},
				{

					id: 2,
					title: "hipster ipsum",
					description: "I'm baby subway tile blue bottle tacos lyft cold-pressed, normcore iPhone pok pok pabst. Ennui yr readymade dreamcatcher adaptogen art party freegan. Umami gluten-free street art copper mug occupy selvage flannel 8-bit cliche glossier raclette tumblr iceland activated charcoal photo booth. Thundercats fashion axe artisan polaroid hexagon kitsch poke twee vape. Brooklyn thundercats subway tile chartreuse, helvetica cred readymade live-edge vice.",
					author: "Danny Bushkanets",
					createdAt: moment(),
				},
				{

					id: 3,
					title: "Samuel L. Ipsum",
					description: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
					author: "Danny Bushkanets",
					createdAt: moment(),
				},
			];

			resolve(data);
		});

		// @ts-ignore
		return promise.then((data: TodoType[]) => {
			this.todos = data.map(todo => new TodoModel(todo));
		});
	};

	get latest() {
		return this.todos.slice().sort((a, b) => b.id - a.id);
	}
};

export default TodoStore;

export type TodoType = {
	id: number;
	title: string;
	description: string;
	createdAt: moment.Moment;
	author: string;
};