import styled from '@emotion/styled';
import { Container, Segment } from 'semantic-ui-react';

export const CreateTodo = styled(Segment)`
	&.segment {
		margin: 4rem auto 1rem;
		max-width: 375px;
		width: 750px;
	}
`;

export const AppContainer = styled(Container)`
	&.container {
		margin: 5rem;
	}
`;

export const ContentContainer = styled(Container)`
	margin: 2rem;
	padding: 2rem;
`;

export const TodosContainer = styled(Container)`
  &.container {
  	// display: flex;
  	// flex-direction: column;
  }
`;